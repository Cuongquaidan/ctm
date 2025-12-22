
import Common from "@src/Common.js";
import SingleController from "@src/controllers/SingleController.js";
import { ImportExcel } from "@src/ImportExcel.js";
import DeptsModel from "@src/models/DeptsModel.js";
// import { Workbook } from "exceljs";
export default class DeptsController extends SingleController {
    md = DeptsModel;
    actionActive = ['create', 'edit', 'detail', 'delete', 'deleteone', 'import', 'export', 'copy'];
    is_deleted = true;
    exportFile = 'depts.xlsx';
    async updateBefore(item: any, _itemOld: object) {
        item.name = this.request.getPost('name');
        item.nameSearch = Common.removeVietnameseTones(item.name ?? '');
        item.dcode = this.request.getPost('dcode');
        // item.qhns = this.request.getPost('qhns');
        item.locationid = this.request.getPost('locationid');
        item.description = this.request.getPost('description');
        item.address = this.request.getPost('address');
        item.lat = this.request.getPost('lat');
        item.lng = this.request.getPost('lng');
        item.status = this.request.getPost('status', 0, 'int');
        return item;
    }
    async getDepts() {
        // try {
        //     const data = await this.md.findItems(
        //         { is_deleted: 0 },
        //         { id: 1, name: 1 }
        //     ).sort({ name: "asc" });
        //     return this.resJsonData(data);
        // } catch (err: any) {
        //     return this.resJsonErr(err.message);
        // }
    }
    async importBefore(importExcel: ImportExcel, row: number, item: any) {
        item.name = importExcel.getFilterData('B' + row);
        item.nameSearch = Common.removeVietnameseTones(item.name ?? '');
        item.dcode = importExcel.getFilterData('C' + row);
        item.address = importExcel.getFilterData('D' + row);
        item.description = importExcel.getFilterData('E' + row);
        item.status = importExcel.getFilterData('F' + row);
        // item.lng = importExcel.getFilterData('G' + row);
        // item.lat = importExcel.getFilterData('H' + row);
        // item.status = importExcel.getFilterData('I' + row);
        if (item?._id) {
            item.updated_at = new Date();
            item.updated_by = this.userObjectId;
        } else {
            const now = new Date();
            item.created_at = now;
            item.updated_at = now;
            item.created_by = this.userObjectId;
            item.updated_by = this.userObjectId;
        }
        return item;
    }
    // async exportBefore(workbook: Workbook | undefined) {
    //     const worksheet = workbook?.getWorksheet(1);
    //     const data = await this.md.getDataExport(this.request, this.user, this.is_deleted);
    //     data.forEach((item: any, ind: any) => {
    //         worksheet?.spliceRows(this.importRow + ind, 0, [item.id, item.name, item.dcode, item.address, item.description, item.status, item.created_by?.fullname ?? '']);
    //     });
    //     return workbook;
    // }
    // async exportBefore(workbook: Workbook | undefined) {
    //     // const ws = workbook?.getWorksheet(1);
    //     // if (!ws) return workbook;
    //     // const data = await this.md.getDataExport(this.request, this.user, this.is_deleted);

    //     // const startRow = this.importRow || 6;
    //     // data.forEach((item: any, i: number) => {
    //     //     const row = startRow + i;
    //     //     ws.getCell(`A${row}`).value = item.id;
    //     //     ws.getCell(`B${row}`).value = item.name;
    //     //     ws.getCell(`C${row}`).value = item.dcode;
    //     //     ws.getCell(`D${row}`).value = item.address;
    //     //     ws.getCell(`E${row}`).value = item.description;
    //     //     ws.getCell(`F${row}`).value = item.status;
    //     //     ws.getCell(`G${row}`).value = item.created_by?.fullname ?? '';
    //     // });
    //     // return workbook;
    // }
}