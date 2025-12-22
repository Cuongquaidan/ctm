import SingleController from "@src/controllers/SingleController.js";
import Common from '@src/Common.js';
import { FileUpload } from "@src/FileUpload.js";

export default class PagesController extends SingleController {
    md = this.models.pages;
    actionActive = ['create', 'import', 'export', 'copy', 'detail', 'edit', 'delete', 'deleteone'];
    isDeleted = true;
    isImage = true;

    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        item.name = this.request.getPost('name');
        item.description = this.request.getPost('description');
        item.status = this.request.getPost('status');
        item.is_home = this.request.getPost('is_home');
        item.is_login = this.request.getPost('is_login');
        item.temp_id = this.request.getPost('temp_id');
        item.store_id = this.request.getPost('store_id');
        item.params = this.request.getPost('params');
        item.meta_title = item?.id ? this.request.getPost('meta_title') : item.name;
        item.meta_description = item?.id ? this.request.getPost('meta_description') : item.description;
        item.meta_keywords = item?.id ? this.request.getPost('meta_keywords') : item.name;
        item.alias = item?.id ? this.request.getPost('alias') : await Common.createAlias(item, this.md);
        return item;
    }
    async addNewSection(id = 0) {
        try {
            // this.db.start();
            const params: any = {};
            params.id = id;
            if (!id) throw new Error('invalid_id');
            if (this.is_deleted) {
                params.is_deleted = 0;
            }
            const item = await this.md.findOne(params);
            if (!item) throw new Error('invalid_404');
            const quanRow: string = this.request.get('quanRow');
            const section: any = {
                quanRow: quanRow,
                idName: '',
                className: "",
                image: "",
                container: "",
                data: []
            };
            const quanRows = quanRow.split('-');
            quanRows.forEach(col => {
                section.data.push({
                    col,
                    data: []
                })
            });
            item.content.push(section);
            // let mdClass = new this.md(this.db);
            await this.md.vdSave(item);
            // await this.db.commit();
            return this.resJsonData(item);
        } catch (error: any) {
            this.resJsonErr(error.message);
        } finally {
            // await this.db.end();
        }
    }
    async editSection(id: number = 0) {
        let rmImage: string | false = false;
        const upImage: string | string[] | false = false;
        try {
            // this.db.start();
            const params: any = {};
            params.numberId = id;
            if (!id) throw new Error('invalid_id');
            if (this.isDeleted) {
                params.isDeleted = 0;
            }
            const sId = this.request.get('sId', '-1', 'int');
            const item = await this.md.findOne(params);
            if (!id) throw new Error('invalid_id');
            if (!item) throw new Error('invalid_404');
            if (!Array.isArray(item.content) || !item.content[sId]) {
                throw new Error('invalid_section');
            }
            const section = item.content[sId];
            const quanRow: string = this.request.getPost('quanRow');
            if (quanRow) {
                section.quanRow = quanRow;
                section.data = quanRow.split('-').map(col => ({ col, data: [] }));
            }
            section.idName = this.request.getPost('idName') || section.idName;
            section.className = this.request.getPost('className') || section.className;
            section.image = this.request.getPost('image') || section.image;
            // const upload = new FileUpload(this.req, 'static');
            // await upload.checkFile("image", "ImgFile", 10);
            // const upImage = await upload.uploadFile("image", "images");
            const imageOld = this.request.getPost("imageOld");
            if ((upImage && section.image) || (imageOld !== section.image)) {
                rmImage = section.image;
            }
            section.image = upImage ? upImage : (imageOld == section.image ? imageOld : "");
            if (rmImage) {
                FileUpload.removeFile(rmImage);
            }
            section.container = this.request.getPost('container') || section.container;
            // let mdClass = new this.md(this.db);
            await this.md.vdSave(item, this.md.vdObject);
            // await this.db.commit();
            return this.resJsonData(item);
        } catch (error: any) {
            // await this.db.abort();
            if (upImage) {
                FileUpload.removeFile(upImage);
            }
            return this.resJsonErr(error.message);
        } finally {
            // await this.db.end();
        }
    }
    async deleteSection(id: number = 0) {
        try {
            // this.db.start();
            const params: any = {};
            params.numberId = id;
            if (!id) throw new Error('invalid_id');
            if (this.is_deleted) {
                params.is_deleted = 0;
            }
            const sId = this.request.get('sId', '-1', 'int');
            const item = await this.md.findOne(params);
            if (!item) throw new Error('invalid_404');
            if (!Array.isArray(item.content) || !item.content[sId]) {
                throw new Error('invalid_section');
            }
            item.content.splice(sId, 1);
            await this.md.vdSave(item, this.md.vdObject);
            // await this.db.commit();
            return this.resJsonData(item);
        } catch (error: any) {
            // await this.db.abort();
            return this.resJsonErr(error.message);
        } finally {
            // await this.db.end();
        }
    }
    async addNewCol(id = 0) {
        try {
            // this.db.start();
            const params: any = {};
            params.numberId = id;
            if (!id) throw new Error('invalid_id');
            if (this.is_deleted) {
                params.is_deleted = 0;
            }
            const item = await this.md.findOne(params);
            if (!item) throw new Error('invalid_404');
            const sId = this.request.get('sId', "-1", 'int');
            const rId = this.request.get('rId', "-1", 'int');
            const quanCol = this.request.get('quanCol');
            if (!Array.isArray(item.content) || !item.content[sId]) {
                throw new Error('invalid_section');
            }
            const section = item.content[sId];
            if (!Array.isArray(section.data) || !section.data[rId]) {
                throw new Error("invalid_row");
            }
            const row = section.data[rId];
            if (!row.data) row.data = [];
            const quanRows = quanCol.split('-');
            const newCols = quanRows.map((col: string) => ({
                col,
                name: '',
                link: "",
                des: "",
                type: 'custom',
                options: {
                    content: '',
                },
                intervale: "",
                idName: "",
                className: "",
            }));
            row.data.push(...newCols);
            await this.md.vdSave(item, this.md.vdObject);
            // await this.db.commit();
            return this.resJsonData(item);
        } catch (error: any) {
            // await this.db.abort();
            return this.resJsonErr(error.message);
        } finally {
            // await this.db.end();
        }
    }
    async editCol(id = 0) {
        try {
            // this.db.start();
            if (!id) throw new Error('invalid_id');
            const params: any = { numberId: id };
            if (this.is_deleted) params.is_deleted = 0;
            const item = await this.md.findOne(params);
            if (!item) throw new Error('invalid_404');
            const sId = this.request.get('sId', "-1", 'int');
            const rId = this.request.get('rId', "-1", 'int');
            const cId = this.request.get('cId', "-1", 'int');
            if (!Array.isArray(item.content) || !item.content[sId]) {
                throw new Error('invalid_section');
            }
            const section = item.content[sId];
            if (!Array.isArray(section.data) || !section.data[rId]) {
                throw new Error("invalid_row");
            }
            const row = section.data[rId];
            if (!Array.isArray(row.data) || !row.data[cId]) {
                throw new Error('invalid_col');
            }
            const col = row.data[cId];
            const newType = this.request.getPost('type');
            if (newType && newType !== col.type) {
                col.type = newType;
                switch (newType) {
                    case 'newshot':
                        col.options = {
                            newsCategoryId: [],
                            news: [],
                            limit: 10,
                            order: 'desc',
                            layout: ''
                        };
                        break;
                    case 'custom':
                        col.options = {
                            content: ''
                        };
                        break;
                    default:
                        break;
                }
            } else {
                col.options = col.options || {};
            }
            if (col.type === 'newshot') {
                const newsCategoryIdPost: string[] = this.request.getPost('newsCategoryId', [], 'ids');
                const newsPost: string[] = this.request.getPost('news', [], 'ids');
                col.options.newsCategoryId = newsCategoryIdPost;
                col.options.news = newsPost;
                col.options.limit = this.request.getPost('limit') ?? col.options.limit;
                col.options.order = this.request.getPost('order') ?? col.options.order;
                col.options.layout = this.request.getPost('layout') ?? col.options.layout;
            } else if (col.type === 'custom') {
                col.options.content = this.request.getPost('content') ?? col.options.content;
            }
            col.col = this.request.getPost('col') ?? col.col;
            col.name = this.request.getPost('name') ?? col.name;
            col.link = this.request.getPost('link') ?? col.link;
            col.des = this.request.getPost('des') ?? col.des;
            col.intervale = this.request.getPost('intervale') ?? col.intervale;
            col.idName = this.request.getPost('idName') ?? col.idName;
            col.className = this.request.getPost('className') ?? col.className;
            await this.md.vdSave(item, this.md.vdObject);
            // await this.db.commit();
            return this.resJsonData(item);
        } catch (error: any) {
            // await this.db.abort();
            return this.resJsonErr(error.message);
        } finally {
            // await this.db.end();
        }
    }
    async deleteCol(id = 0) {
        try {
            // this.db.start();
            if (!id) throw new Error('invalid_id');
            const params: any = { numberId: id };
            if (this.is_deleted) params.is_deleted = 0;
            const item = await this.md.findOne(params);
            if (!item) throw new Error('invalid_404');
            const sId = this.request.get('sId', "-1", "int");
            const rId = this.request.get('rId', "-1", "int");
            const cId = this.request.get('cId', "-1", "int");
            if (!Array.isArray(item.content) || !item.content[sId]) {
                throw new Error('invalid_section');
            }
            const section = item.content[sId];
            if (!Array.isArray(section.data) || !section.data[rId]) {
                throw new Error("invalid_row");
            }
            const row = section.data[rId];
            if (!Array.isArray(row.data) || !row.data[cId]) {
                throw new Error('invalid_col');
            }
            row.data.splice(cId, 1);
            // let mdClass = new this.md(this.db);
            await this.md.vdSave(item, this.md.vdObject);
            // await this.db.commit();
            return this.resJsonData(item);
        } catch (error: any) {
            // await this.db.abort();
            return this.resJsonErr(error.message);
        } finally {
            // await this.db.end();
        }
    }
    async sortCol(id: number = 0) {
        try {
            // this.db.start();
            if (!id) throw new Error("invalid_id");
            const sId = this.request.get("sId", "-1", "int");
            const rId = this.request.get("rId", "-1", "int");
            const dataSortStr = this.request.get("dataSort") || "[]";
            const dataSort: number[] = JSON.parse(dataSortStr);
            const params: any = { numberId: id };
            if (this.isDeleted) params.isDeleted = 0;
            const item = await this.md.findOne(params);
            if (!item) throw new Error("invalid_404");
            if (!Array.isArray(item.content) || !item.content[sId]) {
                throw new Error('invalid_section');
            }
            const section = item.content[sId];
            if (!Array.isArray(section.data) || !section.data[rId]) {
                throw new Error("invalid_row");
            }
            const row = section.data[rId];
            if (!Array.isArray(row.data)) {
                throw new Error("invalid_columns");
            }
            const newColumns: any[] = [];
            dataSort.forEach(idx => {
                if (typeof idx !== "number" || idx < 0 || idx >= row.data.length) {
                    throw new Error(`invalid_sort_index_${idx}`);
                }
                newColumns.push(row.data[idx]);
            });
            if (newColumns.length !== row.data.length) {
                throw new Error('invalid_sort_data');
            }
            row.data = newColumns;
            await this.md.vdSave(item, this.md.vdObject);
            // await this.db.commit();
            return this.resJsonData(item);
        } catch (error: any) {
            // await this.db.abort();
            return this.resJsonErr(error.message);
        } finally {
            // await this.db.end();
        }
    }
    async sortRow(id: number = 0) {
        try {
            // this.db.start();
            if (!id) throw new Error("invalid_id");
            const sId = this.request.get("sId", "-1", 'int');
            const dataSortStr = this.request.get("dataSort") || "[]";
            let dataSort: number[] = [];
            try {
                dataSort = JSON.parse(dataSortStr);
            } catch (error) {
                void error;
                throw new Error("invalid_dataSort");
            }
            const params: any = { numberId: id };
            if (this.isDeleted) params.isDeleted = 0;
            const item = await this.md.findOne(params);
            if (!item) throw new Error("invalid_404");
            if (!Array.isArray(item.content) || !item.content[sId]) {
                throw new Error('invalid_section');
            }
            const section = item.content[sId];
            if (!Array.isArray(section.data)) {
                throw new Error("invalid_rows");
            }
            const oldRows = section.data;
            const newRows: any[] = [];
            if (dataSort.length !== oldRows.length) {
                throw new Error("invalid_sort_data");
            }
            dataSort.forEach(idx => {
                if (typeof idx !== "number" || idx < 0 || idx >= oldRows.length) {
                    throw new Error(`invalid_sort_index_${idx}`);
                }
                newRows.push(oldRows[idx]);
            });
            if (newRows.length !== oldRows.length) {
                throw new Error("invalid_sort_data");
            }
            section.data = newRows;
            // const mdClass = new this.md(this.db);
            await this.md.vdSave(item, this.md.vdObject);
            // await this.db.commit();
            return this.resJsonData(item);
        } catch (error: any) {
            // await this.db.abort();
            return this.resJsonErr(error.message);
        } finally {
            // await this.db.end();
        }
    }

    async sortSection(id: number = 0) {
        try {
            if (!id) throw new Error("invalid_id");
            const dataSortStr = this.request.get("dataSort");
            if (!dataSortStr) throw new Error("invalid_sort");
            let dataSort: number[];
            try {
                dataSort = JSON.parse(dataSortStr);
            } catch (error) {
                void error;
                throw new Error("invalid_sort_format");
            }
            const item = await this.md.findOne({ numberId: id, isDeleted: 0 });
            if (!item) throw new Error("invalid_404");
            const oldRows = item.content || [];
            if (!Array.isArray(oldRows)) throw new Error("invalid_content");
            if (dataSort.length !== oldRows.length) {
                throw new Error("invalid_sort_data");
            }
            const newRows: any[] = [];
            dataSort.forEach(idx => {
                if (typeof idx !== "number" || idx < 0 || idx >= oldRows.length) {
                    throw new Error(`invalid_sort_index_${idx}`);
                }
                newRows.push(oldRows[idx]);
            });
            if (newRows.length !== oldRows.length) {
                throw new Error("invalid_sort_data");
            }
            item.content = newRows;
            await this.md.vdSave(item, this.md.vdObject);
            return this.resJsonData(item);
        } catch (err: any) {
            return this.resJsonErr(err.message);
        }
    }
}


