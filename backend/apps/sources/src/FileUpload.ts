import path from 'path';
import fs from 'fs';
// import { MultipartFile } from "@fastify/multipart";
type FileCheckFn = (filename: string, mimetype: string, size?: number, limit?: number) => void;
interface FileType { filename: string, basename: string, ext: string, mimetype: string, path: string };
export class FileUpload {
    private files: { [key: string]: FileType[] };
    private uploadType = 'static';
    constructor(files: { [key: string]: FileType[] }, uploadType = 'static') {
        this.files = files;
        this.uploadType = uploadType;
    }
    // async saveExcel(rows: any[], filePath: string) {
    //     const ws = XLSX.utils.json_to_sheet(rows);   // tạo sheet từ mảng object
    //     const wb = XLSX.utils.book_new();            // tạo workbook mới
    //     XLSX.utils.book_append_sheet(wb, ws, 'Logs'); // thêm sheet
    //     XLSX.writeFile(wb, filePath);               // ghi ra file
    // }
    async copyFiles(files: any[]) {
        if (files.length) {
            const baseDir = FileUpload.getUploadDir(this.uploadType);
            for await (const file of files) {
                const srcPath = path.join(baseDir, file.src);
                if (fs.existsSync(srcPath)) {
                    const distPath = path.join(baseDir, file.dist);
                    await fs.promises.copyFile(srcPath, distPath);
                }
            }
        }
    }
    async uploadFile(fieldName = 'fieldName', folders: string = "") {
        try {
            const fileArr = this.files[fieldName];
            if (!fileArr || !fileArr[0]) return false;
            return await this.upload(fileArr[0], folders);
        } catch (error: any) {
            throw new Error(error);
        }
    }
    async uploadFiles(fieldName = 'fieldName', folders: string = "") {
        try {
            const data: string[] = [];
            const fileArr = this.files[fieldName];
            if (!fileArr) return data;
            for await (const file of fileArr) {
                const upath = await this.upload(file, folders);
                if (upath) data.push(upath);
            }
            return data;
        } catch (error: any) {
            throw new Error(error);
        }
    }
    async upload(file: FileType, folders: string = "") {
        try {
            let finalName = file.filename;
            const uploadDir = FileUpload.getUploadDir(this.uploadType);
            const folderDir = folders ? path.join(uploadDir, folders) : uploadDir;
            if (!fs.existsSync(folderDir)) fs.mkdirSync(folderDir);
            let uploadPath = path.join(folderDir, finalName);
            if (fs.existsSync(uploadPath)) {
                finalName = `${file.basename}${Date.now()}${file.ext}`;
                uploadPath = path.join(folderDir, finalName);
            }
            if (fs.existsSync(file.path)) {
                await fs.promises.rename(file.path, uploadPath);
                return folders ? path.posix.join(folders, finalName) : finalName;
            }
            return false;
        } catch (error: any) {
            throw new Error(error);
        }
    }
    async checkFile(fieldName = 'file', type = 'OfficeFile') {
        try {
            const fileArr = this.files[fieldName];
            if (!fileArr) return;
            for await (const file of fileArr) {
                const method = ('check' + type) as keyof FileCheckFn;
                if (!(method in FileUpload)) {
                    throw new Error('Method does not exist: ' + method);
                }
                (FileUpload[method] as FileCheckFn)(file.filename, file.mimetype);
                return;
            }
            return;
        } catch (error: any) {
            throw new Error(error);
        }
    }
    static removeFiles = (pathFiles: string[] | boolean) => {
        if (pathFiles === false || !Array.isArray(pathFiles)) return false;
        for (const pathFile of pathFiles) {
            this.removeFile(pathFile);
        }
        return true;
    };
    static removeFile = (fileName: string | false, uploadType = 'static') => {
        if (!fileName) return false;
        const filePath = path.join(FileUpload.getUploadDir(uploadType), fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        return true;
    };
    static renameFile = (fileName: string) => {
        const ext = path.extname(fileName);
        const baseName = path.basename(fileName, ext);
        return `${baseName}_${Date.now()}${ext}`;
    }
    // static async checkMagicNumber(filePart: MultipartFile) {
    //     const stream = filePart.file;
    //     const chunks: Buffer[] = [];
    //     for await (const chunk of stream) {
    //         chunks.push(chunk as Buffer);
    //         break;
    //     }
    //     const buffer = Buffer.concat(chunks).subarray(0, 4);
    //     const hex = buffer.toString("hex");
    //     if (hex.startsWith("ffd8ff")) return true;       // JPEG
    //     if (hex === "89504e47") return true;             // PNG
    //     if (hex.startsWith("25504446")) return true;     // PDF
    //     if (hex === "504b0304") return true;             // ZIP, DOCX, XLSX, PPTX
    //     return false;
    // }
    static getUploadDir(uploadType = 'static') {
        if (uploadType == 'static') return path.join(path.resolve(), 'public', 'static');
        if (uploadType == 'public') return path.join(path.resolve(), 'public');
        if (uploadType == 'uploads') return path.join(path.resolve(), 'uploads');
        return '';
    }
    static checkDefFile(fileName: string, ftype: string, isTry = true) {
        if (!/(.*)\.(png|jpeg|jpg|pdf|xls|xlsx|doc|docx|ppt|pptx)$/i.test(fileName)) {
            if (isTry) throw new Error(`Định dạng tập tin ${fileName} không được phép`);
            return false;
        }
        const allowedFileType = [
            'image/jpeg',
            'image/png',
            'image/jpg',
            'application/pdf',
            'application/msword',
            'application/vnd.ms-excel',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];
        if (!allowedFileType.includes(ftype)) {
            if (isTry) throw new Error(`Định dạng tập tin ${fileName} không được phép`);
            return false;
        }
        return true;
    }
    static checkOfficeFile(fileName: string, ftype: string) {
        try {
            if (!/(.*)\.(pdf|xls|xlsx|doc|docx|ppt|pptx)$/i.test(fileName)) {
                throw new Error(`Tập tin ${fileName} không đúng định dạng (.pdf,.xls,.xlsx,.doc,.docx,.docx,.ppt,.pptx)`);
            }
            const allowedFileType = [
                'application/pdf',
                'application/msword',
                'application/vnd.ms-excel',
                'application/vnd.ms-powerpoint',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ];
            if (!allowedFileType.includes(ftype)) {
                throw new Error(`Tập tin ${fileName} không đúng định dạng (.pdf,.xls,.xlsx,.doc,.docx,.docx,.ppt,.pptx)`);
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }
    static checkImgFile(fileName: string, ftype: string) {
        try {
            if (!/(.*)\.(png|jpeg|jpg)$/i.test(fileName)) {
                throw new Error(`Ảnh ${fileName} không đúng định dạng (.png,.jpeg,.jpg,.jfif)`);
            }
            const allowedFileType = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!allowedFileType.includes(ftype)) {
                throw new Error(`Ảnh ${fileName} không đúng định dạng (.png,.jpeg,.jpg,.jfif)`);
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }
    static checkVideoFile(fileName: string, ftype: string) {
        try {
            if (!/(.*)\.(mp4|mkv|webm|mov|avi)$/i.test(fileName)) {
                throw new Error(`Video ${fileName} không đúng định dạng (.mp4,.mkv,.webm,.mov,.avi)`);
            }
            const allowedFileType = ['video/mp4', 'video/mkv', 'video/webm', 'video/mov', 'video/avi'];
            if (!allowedFileType.includes(ftype)) {
                throw new Error(`Video ${fileName} không đúng định dạng (.mp4,.mkv,.webm,.mov,.avi)`);
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }
}
