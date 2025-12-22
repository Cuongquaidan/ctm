// import Common from '@src/Common.js';
// import SingleController from '@src/controllers/SingleController.js';
// import { ImportExcel } from '@src/ImportExcel.js';
// import DeptsModel from '@src/models/DeptsModel.js';
// import EmployeeModel from '@src/models/EmployeeModel.js';
// import { Workbook } from 'exceljs';
// export default class EmployeeController extends SingleController {
//     md = EmployeeModel;
//     actionActive = ['detail', 'create', 'edit', 'delete', 'deleteone', 'import', 'export', 'copy'];
//     is_deleted = true;
//     exportFile = 'employee.xlsx';
//     async updateBefore(item: any, itemOld: {}) {
//         item.ecode = this.request.getPost('ecode');
//         item.name = this.request.getPost('name');
//         item.nameSearch = Common.removeVietnameseTones(item.name ?? '');
//         item.deptid = this.request.getPost('deptid');
//         item.dutyid = this.request.getPost('dutyid');
//         item.note = this.request.getPost('note');
//         item.status = Number(this.request.getPost('status'));
//         return item;
//     }
//     async importBefore(importExcel: ImportExcel, row: number, item: any) {
//         item.name = importExcel.getFilterData('B' + row);
//         item.nameSearch = Common.removeVietnameseTones(item.name ?? '');
//         item.ecode = importExcel.getFilterData('c' + row);
//         const deptName = importExcel.getFilterData('D' + row);
//         if (!deptName) throw new Error(`Phòng ban "${deptName}" không được để trống`);
//         const dept = await this.models.dept.findOne({ name: deptName, is_deleted: 0 });
//         if (!dept) throw new Error(`Phòng ban "${deptName}" không tồn tại`);
//         item.deptid = dept.id;

//         const dutyName = importExcel.getFilterData('E' + row);
//         if (!dutyName) throw new Error(`Chức vụ "${dutyName}" không được để trống`);
//         const duty = await this.models.dept.findOne({ name: dutyName, is_deleted: 0 });
//         if (!duty) throw new Error(`Chức vụ "${dutyName}" không tồn tại`);
//         item.dutyid = duty.id;

//         item.note = importExcel.getFilterData('F' + row);
//         item.status = importExcel.getFilterData('G' + row);
//         const now = new Date();
//         item.created_at = now;
//         item.updated_at = now;
//         item.created_by = this.userObjectId;
//         item.updated_by = this.userObjectId;
//         return item;
//     }
//     async getEmployees() {
//         try {
//             const data = await this.md.find(
//                 { is_deleted: 0 },
//                 { id: 1, name: 1 }
//             ).sort({ name: "asc" });
//             return this.resJsonData(data);
//         } catch (err: any) {
//             return this.resJsonErr(err.message);
//         }
//     }

//     async exportBefore(workbook?: Workbook) {
//         const ws = workbook?.getWorksheet(1);
//         if (!ws) return workbook;

//         const data = await this.md.getDataExport(this.request, this.user, this.is_deleted);
//         const startRow = this.importRow || 6;

//         data.forEach((item: any, i: number) => {
//             const row = startRow + i;

//             ws.getCell(`A${row}`).value = item.id;
//             ws.getCell(`B${row}`).value = item.name;
//             ws.getCell(`C${row}`).value = item.ecode;
//             ws.getCell(`D${row}`).value = item.deptid;
//             ws.getCell(`E${row}`).value = item.dutyid;
//             ws.getCell(`F${row}`).value = item.note;
//             ws.getCell(`G${row}`).value = item.status;
//             ws.getCell(`H${row}`).value = item.created_by?.fullname ?? '';
//         });

//         return workbook;
//     }
// }