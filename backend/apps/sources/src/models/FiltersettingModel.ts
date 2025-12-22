// import SingleModel from '../SingleModel.js';

// export interface FilterSettingModelData {
//     id?: number;
//     userid: number;
//     fKey?: string;
//     filters?: string;
//     tables?: string;
//     created_by?: number;
//     created_at?: Date;
//     updated_by?: number;
//     updated_at?: Date;
//     is_deleted?: number;
// }


// export default class FilterSettingModel extends SingleModel {
//     // model = FilterSettingModel.model;
//     vdObject = {
//         userid: 'required',
//         fKey: 'required|maxLen(50)',
//         filters: 'maxLen(500)',
//         tables: 'maxLen(500)',
//     };
//     validateImport = {
//         userid: 'required',
//         fKey: 'required|maxLen(50)',
//         filters: 'maxLen(500)',
//         tables: 'maxLen(500)',
//     };
//     fieldName(key: string) {
//         let data: any = {
//             id: "Số thứ tự",
//             userid: "Người dùng",
//             fKey: "Khóa filter",
//             filters: "Điều kiện lọc",
//             tables: "Bảng áp dụng",
//             created_by: "Người tạo",
//             created_at: "Ngày tạo",
//             updated_by: "Người cập nhật",
//             updated_at: "Ngày cập nhật",
//             is_deleted: "Đã xóa"
//         };
//         return data[key] || key;
//     }
// }