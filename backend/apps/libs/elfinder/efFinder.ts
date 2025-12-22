// import path from 'path';
// import mime from 'mime-types';
// import _ from 'underscore';
// import Sharp from 'sharp';
// import fs from 'fs-extra';
// import FsUtils from './fsUtils.js';

// // ==== Type definitions ====
// interface ElFinderOptions {
// 	target?: string;
// 	name?: string;
// 	dirs?: string[];
// 	makedir?: number;
// 	intersect?: string[];
// 	cut?: number;
// 	suffix?: string;
// 	renames?: string[];
// 	dst?: string;
// 	content?: string;
// 	encoding?: string;
// 	q?: string;
// 	upload_path?: string[];
// 	width?: number;
// 	height?: number;
// 	x?: number;
// 	y?: number;
// 	degree?: number;
// 	bg?: string;
// 	quality?: number;
// 	mode?: 'resize' | 'crop' | 'rotate';
// 	current?: string;
// 	targets?: string[];
// 	init?: boolean;
// }
// interface VolumePermissions {
// 	read: number;
// 	write: number;
// 	locked: number;
// }
// interface Config {
// 	router: string;
// 	disabled: string[];
// 	volumeicons: string[];
// 	roots: any[];
// 	volumes: string[];
// 	tmbroot: string;
// 	init?: () => void;
// 	acl?: (p: string) => VolumePermissions;
// }
// // ==== Base Config ====
// const config: Config = {
// 	router: '/elFinder',
// 	disabled: ['chmod', 'size'],
// 	volumeicons: ['elfinder-navbar-root-local', 'elfinder-navbar-root-local'],
// 	roots: [],
// 	volumes: [],
// 	tmbroot: "",
// 	acl: function (filePath: string): VolumePermissions {
// 		const volume = FsUtils.volume(filePath);
// 		const perms = elFinder.config.roots[volume]?.permissions;
// 		const permissions = typeof perms === 'function' ? perms(filePath) : perms;
// 		return (
// 			permissions || {
// 				read: 1,
// 				write: 1,
// 				locked: 0,
// 			}
// 		);
// 	}
// }
// // ==== Connector object ====
// const elFinder: Record<string, any> = {};
// elFinder.config = config;
// // Archive
// elFinder.archive = async (opts: ElFinderOptions) => {
// 	const target = FsUtils.decode(opts.target!);
// 	const filePath = path.join(target.absolutePath, opts.name!);
// 	await FsUtils.compress(opts.targets!, filePath);
// 	return {
// 		added: [await FsUtils.info(filePath)],
// 	};
// }
// // Image dimensions
// elFinder.dim = async (opts: ElFinderOptions) => {
// 	const target = FsUtils.decode(opts.target!);
// 	const metadata = await Sharp(target.absolutePath).metadata();
// 	return { dim: `${metadata.width}x${metadata.height}` };
// }
// // Duplicate
// elFinder.duplicate = async (opts: ElFinderOptions) => {
// 	const tasks = opts.targets!.map(async (target) => {
// 		const _t = FsUtils.decode(target);
// 		const ext = path.extname(_t.name);
// 		const fil = path.basename(_t.name, ext);
// 		const name = `${fil}(copy)${ext}`;
// 		const base = path.dirname(_t.absolutePath);
// 		return await FsUtils.copy({
// 			src: _t.absolutePath,
// 			dst: path.join(base, name),
// 		});
// 	});
// 	const info = await Promise.all(tasks);
// 	return {added: info.map((i) => i.added[0])};
// }
// // Extract
// elFinder.extract = async (opts: ElFinderOptions) => {
// 	const target = FsUtils.decode(opts.target!);
// 	const mkdir = opts.makedir === 1;
// 	let dest = path.dirname(target.absolutePath);
// 	if (mkdir) {
// 		const newDir = path.basename(target.absolutePath).split('.')[0];
// 		const newDirPath = path.resolve(dest, newDir);
// 		await fs.mkdirp(newDirPath);
// 		dest = newDirPath;
// 	}
// 	const files = await FsUtils.extract(target.absolutePath, dest);
// 	const tasks = files.map((file) => FsUtils.info(path.resolve(dest, file)));
// 	return { added: await Promise.all(tasks) };
// }
// // File serving
// elFinder.file = (opts: ElFinderOptions, res: any) => {
// 	const target = FsUtils.decode(opts.target!);
// 	res.sendFile(target.absolutePath);
// };
// // Get file content
// elFinder.get = async (opts: ElFinderOptions) => {
// 	const target = FsUtils.decode(opts.target!);
// 	const content = await fs.readFile(target.absolutePath, 'utf8');
// 	return { content };
// }
// // List files
// elFinder.ls = async (opts: ElFinderOptions) => {
// 	if (!opts.target) throw new Error('errCmdParams');
// 	const info = FsUtils.decode(opts.target);
// 	const files: any = await FsUtils.readdir(info.absolutePath);
// 	let list = files.map((e: any) => e.name);
// 	if (opts.intersect) list = _.intersection(list, opts.intersect);
// 	return { list };
// }
// // Make directory
// elFinder.mkdir = async (opts: ElFinderOptions) => {
// 	const dir = FsUtils.decode(opts.target!);
// 	const dirs = opts.dirs || [];
// 	if (opts.name) dirs.push(opts.name);
// 	const tasks = dirs.map(async (name) => {
// 		const _dir = path.join(dir.absolutePath, name);
// 		await fs.mkdirp(_dir);
// 		return FsUtils.info(_dir);
// 	});
// 	return { added: await Promise.all(tasks) };
// }
// // Make file
// elFinder.mkfile = async (opts: ElFinderOptions) => {
// 	const dir = FsUtils.decode(opts.target!);
// 	const filePath = path.join(dir.absolutePath, opts.name!);
// 	await fs.writeFile(filePath, '');
// 	return { added: [await FsUtils.info(filePath)] };
// }
// // Open directory
// elFinder.open = async (opts: ElFinderOptions) => {
// 	let target = opts.target;
// 	const init = (opts.init == true || !target);
// 	const encodedRoot = FsUtils.encode(elFinder.config.volumes[0] + path.sep);
// 	const data: any = {
// 		files: [],
// 		options: {
// 			uiCmdMap: [],
// 			tmbUrl: path.join(elFinder.config.roots[0].tmbURL),
// 		},
// 	};
// 	if (init) {
// 		elFinder.config.init?.();
// 		target = target ? target : encodedRoot;
// 	}
// 	if (!target) throw new Error('errCmdParams');
// 	let targetDecoded = FsUtils.decode(target);	
// 	const dirExists = await fs.exists(targetDecoded.absolutePath);
// 	if (!dirExists) targetDecoded = FsUtils.decode(encodedRoot);
// 	const files = (await fs.readdir(targetDecoded?.absolutePath).catch(console.log)) || [];
// 	for await (const file of files) {
// 		const mimeType = mime.lookup(path.join(targetDecoded?.absolutePath, file));
// 		if(FsUtils.root.uploadAllow.includes(mimeType)) {
// 			const info = await FsUtils.info(path.join(targetDecoded.absolutePath, file));
// 			data.files.push(info);
// 		}
// 	}
// 	data.cwd = await FsUtils.info(targetDecoded.absolutePath);
// 	if (init) {
// 		data.api = '2.1';
// 		const volumes = await FsUtils.init();
// 		data.files = volumes.concat(data.files);
// 	}
// 	return data;
// }
// // Parents
// elFinder.parents = (opts: ElFinderOptions) => {
// 	return new Promise((resolve, reject) => {
// 		if (!opts.target) return reject('errCmdParams');
// 		const dir = FsUtils.decode(opts.target);
// 		let tree: any[];
// 		FsUtils.init().then((results: any[]) => {
// 			tree = results;
// 			const read = (t: string) => {
// 				const folder = path.dirname(t);
// 				const isRoot = elFinder.config.volumes.indexOf(t) >= 0;
// 				if (isRoot) {
// 					return resolve({ tree });
// 				} else {
// 					FsUtils.readdir(folder)
// 						.then((files: any) => {
// 							const tasks = files.filter((file: any) => file.isdir).map((file: any) => FsUtils.info(path.join(folder, file.name)));
// 							Promise.all(tasks).then((folders) => {
// 								tree = tree.concat(folders);
// 								read(folder);
// 							});
// 						})
// 						.catch((e) => reject(e));
// 				}
// 			};
// 			read(dir.absolutePath);
// 		});
// 	});
// }
// // Resize image
// elFinder.resize = (opts: ElFinderOptions) => {
// 	return new Promise(async (resolve, reject) => {
// 		try {
// 			const target = FsUtils.decode(opts.target!);
// 			const sha = Sharp(target.absolutePath);
// 			switch (opts.mode) {
// 				case 'resize':
// 					sha.resize(opts.width!, opts.height!);
// 					break;
// 				case 'crop':
// 					sha.extract({left: opts.x!, top: opts.y!, width: opts.width!, height: opts.height!});
// 					break;
// 				case 'rotate':
// 					sha.rotate(opts.degree!);
// 					// if (opts.bg) await sha.background(parseInt(opts.bg.substr(1, 6), 16));
// 					break;
// 			}
// 			// await sha.quality(opts.quality!);
// 			await sha.toFile(target.absolutePath);
// 			const info: any = await FsUtils.info(target.absolutePath);
// 			info.tmb = 1;
// 			resolve({ changed: [info] });
// 		} catch (error) {
// 			console.log(error);
// 			reject(error);
// 		}
// 	});
// }
// // Remove files
// elFinder.rm = async (opts: ElFinderOptions) => {
// 	const removed: string[] = [];
// 	for (const hash of opts.targets || []) {
// 		const target = FsUtils.decode(hash);
// 		await fs.remove(target.absolutePath);
// 		removed.push(hash);
// 	}
// 	return { removed };
// }
// //not impletemented
// elFinder.size = function (opts: any) {
// 	return Promise.resolve({
// 		size: 'unkown',
// 	});
// }
// elFinder.search = function (opts: any) {
// 	return new Promise(async function (resolve, reject) {
// 		try {
// 			if (!opts.q || opts.q.length < 1) throw new Error("errCmdParams");
// 			const target = FsUtils.decode(opts.target);
// 			const files = await FsUtils.walkDir(target.absolutePath, opts.q);
// 			resolve({files: files});
// 		} catch (error) {
// 			reject(error);
// 		}
// 	});
// }
// elFinder.tree = async function (opts: any) {
// 	if (!opts.target) throw new Error('errCmdParams');
// 	const dir = FsUtils.decode(opts.target);
// 	const files: any = await FsUtils.readdir(dir.absolutePath);

// 	const tasks = files.map(async (file: any) => {
// 		if (file.isdir) {
// 			return FsUtils.info(path.join(dir.absolutePath, file.name));
// 		}
// 	});

// 	const tree = Promise.all(tasks);
// 	return { tree };
// }
// elFinder.tmb = function (opts: any) {
// 	return new Promise(async function (resolve, reject) {
// 		try {
// 			const files: string[] = [];
// 			const rtn: any = {};
// 			if (opts.current) {
// 				const dir = FsUtils.decode(opts.current);
// 				if(dir.absolutePath.includes(elFinder.config.tmbroot)) return;
// 				const items = fs.readdirSync(dir.absolutePath);
// 				_.each(items, function (item) {
// 					const _m = mime.lookup(item);
// 					if (_m !== false && _m.indexOf('image/') == 0) {
// 						files.push(path.join(dir.absolutePath, item));
// 					}
// 				});
// 			} else if (opts.targets) {
// 				_.each(opts.targets, function (target) {
// 					const _t = FsUtils.decode(target);
// 					if(!_t.absolutePath.includes(elFinder.config.tmbroot)){
// 						files.push(_t.absolutePath);
// 					}
// 				});
// 			}
// 			for await (const file of files) {
// 				if(!fs.existsSync(elFinder.config.tmbroot)) fs.mkdirSync(elFinder.config.tmbroot, { recursive: true });
// 				const op = FsUtils.encode(file);
// 				const outputPath = path.join(elFinder.config.tmbroot, op + '.png');
// 				if(!fs.existsSync(outputPath)) {
// 					await Sharp(file).resize(48, 48).toFile(outputPath);
// 				}
// 				rtn[op] = op + '.png';
// 			}
// 			resolve({
// 				images: rtn
// 			});
// 		} catch (err) {
// 			console.log(err);
// 			reject(err);
// 		}
// 	});
// }
// elFinder.upload = async function (opts: any, res: any, _files: any[] | any) {
// 	const target = FsUtils.decode(opts.target);
// 	const files = _files instanceof Array ? _files : [_files];
// 	const tasks = files.map(async (file, i) => {		
// 		let filename = file.name;
// 		let dst: string = target.absolutePath;
// 		if (opts.upload_path) {
// 			dst = path.join(dst, path.dirname(opts.upload_path[i]));
// 		}
// 		if (opts.renames?.indexOf(file.name)) {
// 			filename = FsUtils.suffix(file.name, opts.suffix);
// 		}
// 		dst = path.join(dst, filename);
// 		return await FsUtils.move(dst, file);
// 	});
// 	const info = await Promise.all(tasks);
// 	const added = info.map((i) => i.added[0]);
// 	return { added };
// }
// elFinder.zipdl = async function (opts: any) {
// 	if (!opts.targets?.length) throw new Error('errCmdParams');
// 	let first = opts.targets[0];
// 	first = FsUtils.decode(first);
// 	const dir = path.dirname(first.absolutePath);
// 	const name = path.basename(dir);
// 	const file = path.join(dir, name + '.zip');
// 	await FsUtils.compress(opts.targets, file);
// 	return {
// 		zipdl: {
// 			file: FsUtils.encode(file),
// 			name: name + '.zip',
// 			mime: 'application/zip',
// 		},
// 	};
// }
// // 'driver'        => 'LocalFileSystem',   // Driver: LocalFileSystem, FTP, MySQL, etc.
// // 'path'          => '/path/to/files/',   // Thư mục gốc
// // 'URL'           => 'http://localhost/files/', // URL public
// // // Các option bổ sung:
// // 'uploadAllow'   => array('image', 'text/plain', 'application/pdf'), // Loại file cho phép upload
// // 'uploadDeny'    => array('all'),          // Loại file bị cấm upload
// // 'uploadOrder'   => array('deny', 'allow'),// Thứ tự check uploadAllow/deny
// // 'accessControl' => 'access',              // Hàm kiểm tra quyền
// // 'attributes'    => array(),               // Quyền riêng cho file/folder
// // 'alias'         => 'My Files',            // Tên hiển thị
// // 'mimeDetect'    => 'auto',                // Cách detect mime
// // 'tmbPath'       => '.tmb',                // Thư mục chứa thumbnail
// // 'tmbURL'        => '',                    // URL của thumbnail
// // 'quarantine'    => '.quarantine',         // Thư mục cách ly file upload
// // 'acceptedName'  => '/^[^\.].*$/',         // Regex tên file hợp lệ
// // 'uploadMaxSize' => '10M',                 // Giới hạn dung lượng upload
// elFinder.init = (options: Partial<Config>) => {
// 	Object.assign(elFinder.config, options);
// 	Object.assign(FsUtils.config, elFinder.config);
// 	FsUtils.root = elFinder.config.roots[0];
// }
// export default elFinder;