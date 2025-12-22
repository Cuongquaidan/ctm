// import base64 from 'base-64';
// import path from 'path';
// import mime from 'mime-types';
// import _ from 'underscore';
// import fs from 'fs-extra';
// import archiver from 'archiver';
// import Zip from 'adm-zip';
// import { promisify } from 'util';

// export default class FsUtils {
// 	static config: any = {};
// 	static root: any = {};
// 	static compress = function (files: string[], dest: fs.PathLike) {
// 		return new Promise(function (resolve, reject) {
// 			const output = fs.createWriteStream(dest);
// 			const archive = archiver('zip', {
// 				store: true, // Sets the compression method to STORE.
// 			});
// 			// listen for all archive data to be written
// 			output.on('close', function () {
// 				resolve(true);
// 			});
// 			archive.on('error', function (err) {
// 				console.log(err);
// 				reject(err);
// 			});
// 			archive.pipe(output);
// 			_.each(files, function (file) {
// 				const target = FsUtils.decode(file);
// 				//check if target is file or dir
// 				if (fs.lstatSync(target.absolutePath).isDirectory()) {
// 					const name = path.basename(target.absolutePath);
// 					archive.directory(path.normalize(target.absolutePath + path.sep), name);
// 				} else {
// 					archive.file(target.absolutePath, {
// 						name: target.name,
// 					});
// 				}
// 			});
// 			archive.finalize();
// 		});
// 	}
// 	static copy = async function (opts: any) {
// 		const fileExists = await fs.exists(opts.dst);
// 		if (fileExists) throw new Error('Destination exists');
// 		await fs.copy(opts.src, opts.dst);
// 		const info = await FsUtils.info(opts.dst);
// 		return {
// 			added: [info],
// 			changed: [FsUtils.encode(path.dirname(opts.dst))]
// 		};
// 	}
// 	static decode = function (dir: string) {
// 		let root, name, volume;
// 		if (!dir || dir.length < 4) throw Error('Invalid Path');
// 		if (dir[0] != 'v' || dir[2] != '_') throw Error('Invalid Path');
// 		volume = parseInt(dir[1]);
// 		let relative = dir
// 			.slice(3)
// 			.replace(/-/g, '+')
// 			.replace(/_/g, '/')
// 			.replace(/\./g, '=');
// 		relative = base64.decode(relative);
// 		name = path.basename(relative);
// 		root = FsUtils.config.volumes[volume];
// 		return {
// 			volume: volume,
// 			dir: root,
// 			path: relative,
// 			name: name,
// 			absolutePath: path.join(root, relative),
// 		};
// 	}
// 	static encode = function (dir: string) {
// 		const info = FsUtils.parse(dir);
// 		const relative = base64
// 			.encode(info.path)
// 			.replace(/=+$/g, '')
// 			.replace(/\+/g, '-')
// 			.replace(/\//g, '_')
// 			.replace(/=/g, '.');
// 		return 'v' + info.volume + '_' + relative;
// 	}
// 	static extract = async function (source: any, dest: any) {
// 		const zip = new Zip(source);
// 		const files = zip.getEntries().map((file) => file.entryName); // an array of ZipEntry records
// 		const extract = promisify(zip.extractAllToAsync);
// 		await extract(dest, true, true);
// 		return files;
// 	}
// 	static filepath = function (volume: any, filename: string) {
// 		if (volume < 0 || volume > 2) return null;
// 		return path.join(FsUtils.config.volumes[volume], path.normalize(filename));
// 	}
// 	static info = function (p: any) {
// 		return new Promise(function (resolve, reject) {
// 			const info = FsUtils.parse(p);
// 			if (info.volume < 0) return reject('Volume not found');
// 			fs.stat(p, function (err: any, stat: any) {
// 				if (err) return reject(err);
// 				const r: any = {
// 					name: path.basename(p),
// 					size: stat.size,
// 					hash: FsUtils.encode(p),
// 					mime: stat.isDirectory() ? 'directory' : mime.lookup(p),
// 					ts: Math.floor(stat.mtime.getTime() / 1000),
// 					volumeid: 'v' + info.volume + '_',
// 				}
// 				if (r.mime === false) {
// 					r.mime = 'application/binary';
// 				}
// 				if (r.mime.indexOf('image/') == 0) {
// 					const filename = FsUtils.encode(p);
// 					const tmbPath = path.join(FsUtils.config.tmbroot, filename + '.png');
// 					if (fs.existsSync(tmbPath)) {
// 						r.tmb = filename + '.png';
// 					} else {
// 						r.tmb = '1';
// 					}
// 				}
// 				if (!info.isRoot) {
// 					const parent = path.dirname(p);
// 					// if (parent == root) parent = parent + path.sep;
// 					r.phash = FsUtils.encode(parent);
// 				} else {
// 					r.options = {
// 						disabled: FsUtils.config.disabled,
// 						archivers: {
// 							create: ['application/zip'],
// 							extract: ['application/zip'],
// 							createext: {
// 								'application/zip': 'zip',
// 							},
// 						},
// 						url: FsUtils.config.roots[info.volume].URL,
// 					}
// 					if (FsUtils.config.volumeicons[info.volume]) {
// 						r.options.csscls = FsUtils.config.volumeicons[info.volume];
// 					}
// 				}
// 				const acl = FsUtils.config.acl(p);
// 				r.read = acl.read;
// 				r.write = acl.write;
// 				r.locked = acl.locked;
// 				//check if this folder has child.
// 				r.isdir = r.mime == 'directory';
// 				if (r.isdir) {
// 					const items = fs.readdirSync(p);
// 					for (let i = 0; i < items.length; i++) {
// 						if (fs.lstatSync(path.join(p, items[i])).isDirectory()) {
// 							r.dirs = 1;
// 							break;
// 						}
// 					}
// 				}
// 				resolve(r);
// 			});
// 		});
// 	}
// 	static init = async function () {
// 		const tasks: any = [];
// 		_.each(FsUtils.config.volumes, function (volume) {
// 			tasks.push(FsUtils.info(volume));
// 		});

// 		const results = await Promise.all(tasks);
// 		_.each(results, function (result) {
// 			result.phash = '';
// 		});
// 		return await Promise.resolve(results);
// 	}
// 	static async check(file: any) {
// 		if(!FsUtils.root.uploadAllow.includes(-1)) {
// 			if(!FsUtils.root.uploadAllow.includes(file.mimetype)){
// 				throw new Error("imvalid_mimetype_file");
// 			}
// 		}
// 		if(file.size / 1024 / 1024 > FsUtils.root.uploadMaxSize) throw new Error("imvalid_size_file");
// 	}
// 	static async move(uploadPath: string, file: any, upload = true){
// 		FsUtils.check(file);
// 		if (fs.existsSync(uploadPath)) throw new Error('invalid_exists_file');
// 		await file.mv(uploadPath);
// 		const info = await FsUtils.info(uploadPath);
// 		return {
// 			added: [info],
// 			removed: upload ? [] : [FsUtils.encode(file.tempFilePath)],
// 		};
// 	}
// 	static parse = function (p: any) {
// 		const v = FsUtils.volume(p);
// 		const root = FsUtils.config.volumes[v] || '';
// 		let relative = p.substr(root.length, p.length - root.length);
// 		if (relative.indexOf(path.sep) !== 0) relative = path.sep + relative;
// 		return {
// 			volume: v,
// 			dir: root,
// 			path: relative,
// 			isRoot: relative == path.sep,
// 		};
// 	}
// 	static readdir = function (dir: string) {
// 		return new Promise(function (resolve, reject) {
// 			fs.readdir(dir, function (err, items) {
// 				if (err) return reject(err);
// 				const files: any[] = [];
// 				_.each(items, function (item) {
// 					const info = fs.lstatSync(path.join(dir, item));
// 					files.push({
// 						name: item,
// 						isdir: info.isDirectory(),
// 					});
// 				});
// 				resolve(files);
// 			});
// 		});
// 	}
// 	static walkDir = async (dir: string, q: string) => {
// 		return new Promise(async (resolve, reject) => {
// 			try {
// 				let data: any[] = [];
// 				const files: any = fs.readdirSync(dir);
// 				for await (const file of files) {
// 					const filepath = path.join(dir, file);
// 					const stats = fs.statSync(filepath);
// 					if (stats.isDirectory()) {
// 						data = data.concat(await this.walkDir(filepath, q));
// 					} else {
// 						if(file.includes(q)) data.push(await FsUtils.info(filepath));
// 					}
// 				}
// 				resolve(data);
// 			} catch (error) {
// 				reject(error);
// 			}
// 		});
// 	}
// 	static suffix = function (name: string, suff: string) {
// 		const ext = path.extname(name);
// 		const fil = path.basename(name, ext);
// 		return fil + suff + ext;
// 	}
// 	static tmbfile = function (filename: string) {
// 		return path.join(FsUtils.config.tmbroot, filename);
// 	}
// 	static volume = function (p: any) {
// 		for (let i = 0; i < FsUtils.config.volumes.length; i++) {
// 			if (i > 9) return -1;
// 			if (p.indexOf(FsUtils.config.volumes[i]) == 0) {
// 				return i;
// 			}
// 		}
// 		return -1;
// 	}
// }