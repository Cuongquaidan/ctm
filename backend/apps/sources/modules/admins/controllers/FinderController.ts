// import AdminController from "@src/controllers/AdminController.js";
// import elFinder from '@libs/elfinder/efFinder.js';
// import config from '@app/config/config.js';
// import path from 'path';
// import FsUtils from "@libs/elfinder/fsUtils.js";
// const publicPath = path.join(path.resolve(), 'public');
// const PUBLIC_URL = config.PUBLIC_URL
// const roots = [
//     {
//         driver: 'LocalFileSystem',
//         URL: PUBLIC_URL + '/static/images/',
//         path: path.join(publicPath, 'static', 'images'),
//         tmbPath: path.join(publicPath, 'static', '.tmb'),
//         tmbURL: PUBLIC_URL + '/static/.tmb/',
//         uploadAllow : ['image/png','image/jpg','image/jpeg'],
//         uploadMaxSize: 10
//     }
// ];
// const volumes: any = roots.map((r) => r.path);
// const tmbroot = path.resolve(roots[0]['tmbPath']);
// elFinder.init({
//     roots,
//     volumes,
//     tmbroot
// })
// export default class FinderController extends AdminController {
//     connector = async () => {
//         if(this.request.isGet()) {
//             const cmd: any = this.req.query.cmd;
//             try {
//                 if (!elFinder[cmd]) throw new Error(`'${cmd}' is not implemented by volume driver`);
//                 const result = await elFinder[cmd](this.req.query, this.res);
//                 if (result) this.res.json(result);
//             } catch (e: any) {
//                 console.log(e);
//                 this.res.status(500).json({ error: e.message });
//             }
//         }else if(this.request.isPost()){
//             const cmd = this.req.body.cmd;
//             try {
//                 if (!elFinder[cmd]) throw new Error(`'${cmd}' is not implemented by volume driver`);
//                 const result = await elFinder[cmd](
//                     this.req.body,
//                     this.res,
//                     this.req.files?.['upload[]']
//                 );
//                 if (result) {
//                     this.res.json(result);
//                 }
//             } catch (e: any) {
//                 console.log(e);
//                 this.res.status(500).json({ error: e.message });
//             }
//         }
//     }
//     tmb = async (filename) => {
//         this.res.sendFile(elFinder.tmbfile(this.req.params.filename));
//     }
//     file = async (volume) => {        
//         const file = FsUtils.filepath(this.req.params.volume, this.req.params['0']);
//         if (file) {
//             this.res.sendFile(file);
//         } else {
//             this.res.status(404);
//             this.res.send();
//         }
//     }
// }
