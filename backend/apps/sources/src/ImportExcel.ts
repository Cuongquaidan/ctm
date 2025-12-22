import ExcelJS from 'exceljs';
import { Request } from './Request.js';
interface FileType { filename: string, ext: string, mimetype: string, path: string };
export class ImportExcel {
    private fileUpload: FileType;
    private fileExtension: string;
    private fileMime: string;
    private options = {
        allowMime: ['application/vnd.ms-excel', 'text/xls', 'text/xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
        allowExtension: ['.xls', '.xlsx'],
        sizeMax: 20,
    };
    workbook: ExcelJS.Workbook | undefined;
    worksheet: ExcelJS.Worksheet | undefined;
    constructor(file: FileType, options: any = {}) {
        this.fileUpload = file;
        this.fileExtension = file.ext;
        this.fileMime = file.mimetype;
        this.options = { ...this.options, ...options };
    }
    async getWorkbook() {
        try {
            this.validation();
            this.workbook = new ExcelJS.Workbook();
            await this.workbook.xlsx.readFile(this.fileUpload.path)
            this.worksheet = this.workbook.getWorksheet(1);
        } catch (error: any) {
            throw new Error(error);
        }
    }
    async validation() {
        // if (this.fileUpload.size > this.options.sizeMax * 1024 * 1024) {
        //     throw new Error(`Tập tin phải nhỏ hơn ${this.options.sizeMax} MB`);
        // }
        if (!this.options.allowExtension.includes(this.fileExtension)) {
            throw new Error('Chấp nhận các phần mở rộng: ' + this.options.allowExtension.toString());
        }
        if (!this.options.allowMime.includes(this.fileMime)) {
            throw new Error('Chấp nhận các phần mở rộng: ' + this.options.allowMime.toString());
        }
    }
    async worksheetIndex(index: number) {
        try {
            this.worksheet = this.workbook?.getWorksheet(index);
        } catch (error: any) {
            throw new Error(error);
        }
    }
    getFilterData(rowCol: string, defaultValue: any = '', type = 'stripTags') {
        const val = this.worksheet?.getCell(rowCol).value;
        return (val !== undefined) ? Request.filterSafeData(val, type) : defaultValue;
    }
}
