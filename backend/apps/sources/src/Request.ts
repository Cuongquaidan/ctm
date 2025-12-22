import fs from 'fs';
import path from 'path';
import { pipeline } from "stream/promises";
import { FastifyRequest } from 'fastify';
import { FastifyReply } from 'fastify';
import { Pool } from "mysql2/promise";
import { FileUpload } from './FileUpload.js';
import Common from './Common.js';
interface FileType { filename: string, basename: string, ext: string, mimetype: string, path: string };
export class Request {
    [x: string]: any;
    private req: FastifyRequest;
    private body: { [key: string]: any } = {};
    public files: { [key: string]: FileType[] } = {};
    // constructor(req: FastifyRequest) {
    //     this.req = req;
    // }
    constructor(req: FastifyRequest, res: FastifyReply, mysqlPool: Pool) {
        this.req = req;
        this.res = res;
        this.mysqlPool = mysqlPool;
    }
    start = async () => {
        if (this.req.body) {
            this.body = this.req.body;
        } else if (this.req.isMultipart()) {
            const tmbPath = path.join(path.resolve(), 'uploads', 'tmb');
            if (!fs.existsSync(tmbPath)) {
                fs.mkdirSync(tmbPath, { recursive: true });
            }
            for await (const part of this.req.parts()) {
                if (part.type === 'field') {
                    if (this.body[part.fieldname] === undefined) {
                        this.body[part.fieldname] = part.value;
                    } else if (Array.isArray(this.body[part.fieldname])) {
                        this.body[part.fieldname].push(part.value);
                    } else {
                        this.body[part.fieldname] = [this.body[part.fieldname], part.value];
                    }
                } else {
                    if (FileUpload.checkDefFile(part.filename, part.mimetype, false)) {
                        const ext = path.extname(part.filename);
                        const basename = Common.slugify(path.basename(part.filename, ext));
                        const filename = basename + ext;
                        const uploadPath = path.join(tmbPath, filename);
                        try {
                            await pipeline(part.file, fs.createWriteStream(uploadPath));
                        } catch (err: any) {
                            if (err.code === 'ABORT_ERR') {
                                console.error('Người dùng đã hủy upload (client cancel).');
                            } else if (err.code === 'ERR_STREAM_PREMATURE_CLOSE') {
                                console.error('Stream đóng sớm bất thường, có thể do mất kết nối.');
                            } else {
                                console.error('Lỗi phía server khi upload:', err.message);
                            }
                        }
                        if (this.files[part.fieldname] === undefined) this.files[part.fieldname] = [];
                        this.files[part.fieldname].push({ filename, basename, path: uploadPath, mimetype: part.mimetype, ext });
                    }
                }
            }
        }
    }
    end = async () => {
        const fileArrs = Object.values(this.files);
        for await (const fileArr of fileArrs) {
            for await (const file of fileArr) {
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }
            }
        }
    }
    isPost() {
        return this.req.method === 'POST';
    }
    isGet() {
        return this.req.method === 'GET';
    }
    isAjax() {
        return this.req.headers['x-requested-with'] === 'XMLHttpRequest';
    }
    getPost(name = '', defaultValue: string | boolean | number | any[] = '', type = 'stripTags') {
        if (name === '') return this.body;
        if (!this.hasPost(name)) return defaultValue;
        const rawValue = (this.body[name] && typeof this.body[name] === "object" && "value" in this.body[name])
            ? this.body[name].value
            : this.body[name];
        // if (type === 'raw' || typeof rawValue === 'object') {
        //     return rawValue;
        // }
        return Request.filterSafeData(rawValue, type);
        // return Request.filterSafeData(this.body[name].value, type);
    }
    get(name = '', defaultValue: any = '', type = 'stripTags') {
        const query = this.req.query as any;
        if (name === '') return query;
        if (!this.has(name)) return defaultValue;
        return Request.filterSafeData(query[name], type);
    }
    getParam(name: string, defaultValue: any = null, type = 'stripTags') {
        const params = this.req.params as any;

        if (!params || !params[name]) return defaultValue;

        return Request.filterSafeData(params[name], type);
    }
    has(names: string | string[]) {
        const query: any = this.req.query;
        if (Array.isArray(names)) {
            return names.every((name) => query[name] !== undefined);
        }
        return query[names] !== undefined;
    }
    hasPost(names: string | string[]) {
        if (Array.isArray(names)) {
            return names.every((name) => this.body[name] !== undefined);
        }
        return this.body[names] !== undefined;
    }
    getHeader(key: string) {
        const headers = this.req.headers;
        return headers[key.toLowerCase()]?.toString() || '';
    }
    static filterSafeData(input: any, type = 'stripTags') {
        if (typeof input === 'number') return input;
        if (type === 'ids') {
            if (Array.isArray(input)) return Request.filterIds(input);
            return Request.filterIds([input]);
        }
        if (type === 'stringIds') {
            if (Array.isArray(input)) return Request.filterStringIds(input);
            return Request.filterStringIds([input]);
        }
        if (type === 'strings') {
            if (Array.isArray(input)) return Request.filterStrings(input);
            return Request.filterStrings([input]);
        }
        if (typeof input === 'string') {
            if (type === 'stripTags') return input.replace(/<[^>]*>?/gm, '').trim();
            if (type === 'html') return Request.filterHtml(input);
            if (type === 'int') {
                const parsed = parseInt(input);
                return Number.isInteger(parsed) ? parsed : -1;
            }
            if (type === 'number') return isNaN(Number(input)) ? 0 : Number(input);
            if (type === 'date') {
                if (!input) return "";
                // const dateOnly = input.split("T")[0];
                const date = new Date(input);
                if (isNaN(date.getTime())) return "";
                return date;
            }
            if (type === 'datetime') {
                if (!input) return "";
                const date = new Date(input);
                if (isNaN(date.getTime())) return "";
                return date;
            }
        }
        if (type === 'raw') return input;
        return typeof input === (type ?? '');
    }
    private static filterHtml(input: string) {
        if (typeof input !== 'string') return '';
        return (
            input
                .replace('/</*w+:w[^>]*+>/i', '')
                .replace('/<script(.*?)>(.*?)</script>/is', '')
                .replace('/(<[^>]+?[\x00-\x20"\'])(?:on|xmlns)[^>]*+[>\b]?/iu', '$1>')
                .replace('/([a-z]*)[\x00-\x20]*=[\x00-\x20]*([`\'"]*)[\x00-\x20]*j[\x00-\x20]*a[\x00-\x20]*v[\x00-\x20]*a[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:/iu', '$1=$2nojavascript...')
                .replace('/([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*v[\x00-\x20]*b[\x00-\x20]*s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:/iu', '$1=$2novbscript...')
                .replace('/([a-z]*)[\x00-\x20]*=([\'"]*)[\x00-\x20]*-moz-binding[\x00-\x20]*:/u', '$1=$2nomozbinding...')
                .replace('/(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?expression[\x00-\x20]*([^>]*+>/i', '$1>')
                .replace('/(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?behaviour[\x00-\x20]*([^>]*+>/i', '$1>')
                .replace('/(<[^>]+?)style[\x00-\x20]*=[\x00-\x20]*[`\'"]*.*?s[\x00-\x20]*c[\x00-\x20]*r[\x00-\x20]*i[\x00-\x20]*p[\x00-\x20]*t[\x00-\x20]*:*[^>]*+>/iu', '$1>')
                .replace('/alert((.*?))/is', '')
        );
    }
    private static filterIds(input: any[]): number[] {
        let filtered = input.map((val) => {
            return Number(val);
        });
        filtered = filtered.filter((val) => !Number.isNaN(val));
        return [...new Set(filtered)];
    }
    private static filterStringIds(input: any[]): string[] {
        const filtered = this.filterIds(input);
        return filtered.map((val) => val.toString());
    }
    private static filterStrings(input: any[]): string[] {
        const filtered = input.map((val) => {
            return this.filterSafeData(val, 'stripTags');
        });
        return [...new Set(filtered)];
    }
}
