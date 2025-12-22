import { FastifyReply } from 'fastify';
import ExcelJS from 'exceljs';
import path from 'path';
export class ExportExcel {
    private filePath: any;
    private fileName: any;
    private options: any = {
        dirPath: '',
        fileName: '',
        password: ''
    };
    workbook: ExcelJS.Workbook | undefined;
    worksheet: ExcelJS.Worksheet | undefined;
    constructor(options: any = {}) {
        this.options = { ...this.options, ...options };
        this.fileName = this.options.fileName;
        this.filePath = this.options.dirPath
    }
    async getWorkbook() {
        try {
            this.workbook = new ExcelJS.Workbook();
            await this.workbook.xlsx.readFile(path.join(this.filePath, this.fileName));
            this.worksheet = this.workbook.getWorksheet(1);
        } catch (error: any) {
            throw new Error(error);
        }
    }
    async worksheetIndex(index: number) {
        try {
            this.worksheet = this.workbook?.getWorksheet(index);
        } catch (error: any) {
            throw new Error(error);
        }
    }
    copyRowStyle = async (sourceRow: any, targetRow: any) => {
        sourceRow.eachCell({ includeEmpty: true }, (cell: any, colNumber: any) => {
            targetRow.getCell(colNumber).style = { ...cell.style };
        });
    }

    copyRowsOnce = async (worksheet: any, sourceStart: any, sourceEnd: any, targetStart: any) => {
        const blockSize = sourceEnd - sourceStart + 1;

        for (let offset = 0; offset < blockSize; offset++) {
            const sourceRow = worksheet.getRow(sourceStart + offset);
            const targetRow = worksheet.getRow(targetStart + offset);

            // Copy chiều cao dòng
            targetRow.height = sourceRow.height;

            sourceRow.eachCell({ includeEmpty: true }, (cell: any, colNumber: any) => {
                const newCell = targetRow.getCell(colNumber);

                // Copy giá trị hoặc công thức
                if (cell.value) {
                    if (cell.formula) {
                        newCell.value = { formula: cell.formula, result: cell.result };
                    } else {
                        newCell.value = cell.value;
                    }
                }

                // Copy style
                targetRow.getCell(colNumber).style = { ...cell.style };
                
            });

            targetRow.commit();
        }

        return worksheet;
    }

    async download(res: FastifyReply) {
        try {
            const fileNamePrint = this.fileName.split('/').pop();
            res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                .header('Content-Disposition', 'attachment; filename=' + fileNamePrint);
            await this.workbook?.xlsx.write(res.raw);
            // res.send();
            res.raw.end();
        } catch (error: any) {
            throw new Error(error);
        }
    }
}