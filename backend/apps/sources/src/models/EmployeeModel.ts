// import SingleModel from '../SingleModel.js';
// import { Request } from '../Request.js';
// import Common from '@src/Common.js';

// // const modelSchema = new Schema({
// //     id: { type: Number, required: true, unique: true },
// //     ecode: String,
// //     name: String,
// //     nameSearch: {
// //         type: String,
// //         index: true,
// //     },
// //     deptid: {
// //         type: Number,
// //         required: true,
// //     },
// //     dutyid: {
// //         type: Number,
// //         required: true,
// //     },
// //     note: String,
// //     status: {
// //         type: Number,
// //         required: true,
// //     },
// //     created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
// //     created_at: { type: Date },
// //     updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
// //     updated_at: { type: Date, default: Date.now },
// //     is_deleted: {
// //         type: Number,
// //         default: 0
// //     },
// // });

// export default class EmployeeModel extends SingleModel {
//     // model = EmployeeModel.model;
//     vdObject = {
//         ecode: 'required|maxLen(30)',
//         name: 'required|maxLen(150)',
//         deptid: 'required',
//         dutyid: 'required',
//         note: 'maxLen(255)'
//     };
//     validateImport = {
//         ecode: 'required|maxLen(30)',
//         name: 'required|maxLen(150)',
//         deptid: 'required',
//         dutyid: 'required',
//         note: 'maxLen(255)'
//     };
//     fieldName(key: string): string {
//         let data: any = {
//             ecode: 'Mã nhân viên',
//             name: 'Tên nhân viên',
//             deptid: 'ID Phòng ban',
//             dutyid: 'ID Chức vụ',
//             note: 'Ghi chú',
//             status: 'Trạng thái',
//         };
//         return data[key] ?? key;
//     }
//     static async getDatas(request: Request, user: any, is_deleted: any) {
//         let params: any = {};
//         let nameSh = request.get('nameSh');
//         if (nameSh) {
//             let keyword = Common.removeVietnameseTones(nameSh);
//             params.nameSearch = { $regex: keyword };
//         }
//         let statusSh = parseInt(request.get('statusSh'));
//         if (!isNaN(statusSh) && statusSh !== -1) {
//             params.status = statusSh;
//         }
//         let deptidSh = request.get('deptidSh', -1, 'int');
//         if (deptidSh !== -1) {
//             params.deptid = deptidSh;
//         }
//         let ecodeSh = request.get('ecodeSh');
//         if (ecodeSh) {
//             params.ecode = { $regex: '^' + ecodeSh, $options: 'i' };
//         }
//         let dutyidSh = request.get('dutyidSh', -1, 'int');
//         if (dutyidSh !== -1) {
//             params.dutyid = dutyidSh;
//         }
//         if (is_deleted === true || is_deleted === 0 || is_deleted === 'true') {
//             params.is_deleted = 0;
//         }
//         const page = parseInt(request.get('page', '1'));
//         const pageLen = parseInt(request.get('pageLen', '12'));
//         let data = await this.findWithPagination(params, false, false, page, pageLen);
//         return data;
//     }
//     static async getDataExport(request: Request, user: any, is_deleted: any) {
//         let params: any = {};
//         let nameSh = request.get('nameSh');
//         if (nameSh) {
//             let keyword = Common.removeVietnameseTones(nameSh);
//             params.nameSearch = { $regex: keyword };
//         }
//         let statusSh = parseInt(request.get('statusSh'));
//         if (!isNaN(statusSh) && statusSh !== -1) {
//             params.status = statusSh;
//         }
//         let deptidSh = request.get('deptidSh', -1, 'int');
//         if (deptidSh !== -1) {
//             params.deptid = deptidSh;
//         }
//         let ecodeSh = request.get('ecodeSh');
//         if (ecodeSh) {
//             params.dcode = { $regex: '^' + ecodeSh, $options: 'i' };
//         }
//         let dutyidSh = request.get('dutyidSh', -1, 'int');
//         if (dutyidSh !== -1) {
//             params.dutyid = dutyidSh;
//         }
//         if (is_deleted === true || is_deleted === 0 || is_deleted === 'true') {
//             params.is_deleted = 0;
//         }
//         let data = await this.findItems(params, false, false, false, 10000);
//         return data;
//     }
// }