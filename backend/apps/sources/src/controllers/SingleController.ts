import { FileUpload } from '@src/FileUpload.js';
import AdminController from './AdminController.js';
import { ImportExcel } from '@src/ImportExcel.js';
import { Workbook } from 'exceljs';
import Common from '@src/Common.js';
export default class SingleController extends AdminController {
    // md: any;
    md!: any;
    importRow = 2;
    importFile: any;
    exportFile: any;
    actionActive = ['index', 'detail', 'create', 'edit', 'delete', 'deleteone'];
    is_deleted = false;
    isImage = false;
    imageField = "image";
    isGallery = false;
    galleryField = "gallery";
    async index() {
        try {
            let data = await this.md.getDatas(this.request, this.user, this.is_deleted);
            data = await this.indexBefore(data);
            this.resJsonData(data);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async detail(id = 0) {
        try {
            if (!this.actionActive.includes('detail')) {
                throw new Error('invalid_403');
            }
            const params: any = { id };
            if (this.is_deleted) params.is_deleted = 0;
            let item = await this.md.findOne(params);
            if (!item) throw new Error('invalid_404');
            item = await this.detailBefore(item);
            this.resJsonData(item);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async update(id = 0) {
        await this.md.getConnection();
        try {
            await this.md.conn.beginTransaction()
            if (!this.request.isPost()) throw new Error('invalid_method_403');
            let item: any = {};
            let itemOld: any = {};
            if (id) {
                if (!this.actionActive.includes('edit')) {
                    throw new Error('invalid_403');
                }
                const params: any = { id };
                params.id = id;
                if (this.is_deleted) params.is_deleted = 0;
                item = await this.md.findOne(params);
                if (!item) throw new Error('invalid_404');
                itemOld = { ...item };
                item.updated_at = Common.dateNow();
                item.updated_by = this.userObjectId;
            } else {
                if (!this.actionActive.includes('create')) {
                    throw new Error('invalid_403');
                }
                if (this.is_deleted) item.is_deleted = 0;
                const now = Common.dateNow();
                item.created_at = now;
                item.updated_at = now;
                item.created_by = this.user.id;
                item.updated_by = this.user.id;
            }
            // const upload = new FileUpload(this.req, 'static');
            // if (this.isImage && this.imageField) {
            //     await upload.checkFile(this.imageField, 'ImgFile', 10);
            //     const upImage = await upload.uploadFile(this.imageField, "images");
            //     const imageOld = this.request.getPost(this.imageField + 'Old');
            //     if (item?.[this.imageField] != imageOld || upImage) {
            //         rmImage = item?.[this.imageField];
            //     }
            //     item[this.imageField] = upImage ? upImage : (imageOld == item[this.imageField] ? imageOld : "");
            // }
            // await upload.checkFile(this.galleryField, 'ImgFile', 10);
            // if (this.isGallery && this.galleryField) {
            //     const galleryOld = this.request.getPost(this.galleryField + 'Old', [], 'raw');
            //     const oldGallery: string[] = Array.isArray(itemOld[this.galleryField]) ? itemOld[this.galleryField] : [];
            //     rmGallery = oldGallery.filter((item: any) => !galleryOld.includes(item));
            //     upGallery = await upload.uploadFiles(this.galleryField, "images");
            //     const keepGallery = oldGallery.filter(item => galleryOld.includes(item));
            //     item[this.galleryField] = Array.from(new Set([...keepGallery, ...upGallery]));
            // }
            item = await this.updateBefore(item, itemOld);
            // foreach (ModelSingle.getFilter() as $field => $type){
            //     if(isset($post[$field])){
            //         $post[$field] = Request.filterSafeData($post[$field],$type);
            //     }
            // }
            item = await this.updateBeforeSave(item);
            item = await this.md.vdSave(item, (this.md as any).vdObject);
            // await this.models.usertoken.getConnection(this.md.conn);
            // await this.models.usertoken.deleteOne({ id: 1 });
            // item['id'] = itemId;
            await this.updateAfter(item, itemOld);
            // const logClass = this.models.logs;
            // await logClass.saveLogs(this.userObjectId, id ? 2 : 1, this, this.md.getTableName(), item, itemOld);
            // if(id){ this.md.deleteDir(id);}
            // $db.commitTransaction();
            // if (rmGallery && rmGallery.length) {
            //     FileUpload.removeFiles(rmGallery);
            // }
            await this.md.conn.commit()
            this.resJsonData(item);
            // })
        } catch (error: any) {
            await this.md.conn.rollback();
            // if (upGallery && upGallery.length) {
            //     FileUpload.removeFiles(upGallery);
            // }
            this.resJsonErr(error.message);
        }
    }
    // async copy() {
    //     try {
    //         // this.db.start();
    //         const isCre = await PermissionModel.checkPermission(this.module, this.controller, 'update', { code: 0 }, this.group_id)
    //         if (!this.actionActive.includes('copy') || !isCre || !this.request.isPost()) {
    //             throw new Error('invalid_403');
    //         }
    //         let listId: number[] = await this.request.getPost('selected', [], 'ids');
    //         if (!listId.length) throw new Error('invalid_500');
    //         const mdClass = new this.md();
    //         const imageCopy = [];
    //         // const ids = [];
    //         const lastItem: any = await this.md.findOne().sort({ id: -1 }).limit(1);
    //         let lastid = lastItem ? lastItem.id : 0;
    //         for await (const id of listId) {
    //             const item = await this.md.findOne({ id: id });
    //             if (!item) throw new Error('invalid_404');
    //             let itemCopy: any = item.toObject();
    //             itemCopy = await this.copyBefore(itemCopy);
    //             itemCopy.created_by = this.userObjectId;
    //             itemCopy.updated_by = this.userObjectId;
    //             if (this.is_deleted) itemCopy.is_deleted = 0;
    //             delete itemCopy._id;
    //             delete itemCopy.id;
    //             if (this.isImage && this.imageField && item?.[this.imageField]) {
    //                 itemCopy[this.imageField] = FileUpload.renameFile(item[this.imageField]);
    //                 imageCopy.push({
    //                     src: item[this.imageField],
    //                     dist: itemCopy[this.imageField]
    //                 });
    //             }
    //             if (this.isGallery && this.galleryField && item?.[this.galleryField]) {
    //                 itemCopy[this.galleryField] = item[this.galleryField].map((file: string) => {
    //                     const newFile = FileUpload.renameFile(file);
    //                     imageCopy.push({
    //                         src: file,
    //                         dist: newFile
    //                     });
    //                     return newFile;
    //                 });
    //             }
    //             const newItemId = await mdClass.vdSave(itemCopy, mdClass.vdObject);
    //             if (!newItemId) throw new Error('invalid_500');
    //             // ids.push(newItemId);
    //             await this.copyAfter(id, itemCopy.id);
    //         }
    //         const upload = new FileUpload(this.request.files, 'static');
    //         await upload.copyFiles(imageCopy);
    //         await this.db.commit();
    //         this.resJsonData({});
    //     } catch (error: any) {
    //         await this.db.abort();
    //         this.resJsonErr(error.message);
    //     } finally {
    //         await this.db.end();
    //     }
    // }
    async import() {
        // try {
        //     const isCre = await PermissionModel.checkPermission(this.module, this.controller, 'update', { code: 0 }, this.group_id);
        //     const isEdit = await PermissionModel.checkPermission(this.module, this.controller, 'update', { code: 1 }, this.group_id)
        //     if (!this.actionActive.includes('import') || (!isCre && !isEdit) || !this.request.isPost()) {
        //         throw new Error('invalid_403');
        //     }
        //     let errors: string[] = [];
        //     let countImport = 0;
        //     let mdClass = new this.md();
        //     if (!this.request.files['importfile'] || !this.request.files['importfile'][0]) {
        //         throw new Error('invalid_importfile');
        //     }
        //     let importExcel = new ImportExcel(this.request.files['importfile'][0]);
        //     await importExcel.validation();
        //     await importExcel.getWorkbook();
        //     let row = this.importRow;
        //     await this.importBeforeFor(importExcel, row);
        //     try {
        //         // this.db.start();
        //         while (importExcel.getFilterData('B' + row)) {
        //             let id = importExcel.getFilterData('A' + row);
        //             let itemOld: any = {};
        //             let item: any = {};
        //             if (id) {
        //                 let params: any = {};
        //                 params.id = id;
        //                 item = await this.md.findOne(params);
        //                 if (!item) {
        //                     throw new Error('ID không tồn tại');
        //                 }
        //                 itemOld = item?.toJSON();
        //             }
        //             item = await this.importBefore(importExcel, row, item);
        //             if (item) {
        //                 item = await mdClass.vdSave(item, mdClass.validateImport);
        //                 await this.importAfter(item, itemOld, importExcel, row);
        //                 // Logs.saveLogs(1,mdClass.$table,item,itemOld);
        //                 countImport++;
        //             }
        //             row++;
        //         }
        //         await this.db.commit();
        //     } catch (error: any) {
        //         errors.push(`Hàng ${row}: ` + error.message);
        //         await this.db.abort();
        //     } finally {
        //         await this.db.end();
        //     }
        //     await this.importAfterFor(importExcel);
        //     this.resJsonData({ success: countImport, error: errors });
        // } catch (error: any) {
        //     this.resJsonErr(error.message);
        // }
    }
    async export() {
        // if (!this.actionActive.includes('import')) {
        //     throw new Error('invalid_403');
        // }
        // try {
        //     if (!this.exportFile) throw new Error("exportFile");
        //     let dirPath = path.join(path.resolve(), 'public', 'importfile');
        //     let exportExcel = new ExportExcel({
        //         dirPath: dirPath,
        //         fileName: this.exportFile,
        //         password: false
        //     });
        //     await exportExcel.getWorkbook();
        //     exportExcel.workbook = await this.exportBefore(exportExcel.workbook);
        //     await exportExcel.download(this.res);
        // } catch (error: any) {
        //     this.resJsonErr(error.message);
        // }
    }
    async removeFiles(item: any) {
        const rmFiles: string[] = [];
        if (this.isImage && this.imageField && item?.[this.imageField]) {
            rmFiles.push(item[this.imageField]);
        }
        if (this.isGallery && this.galleryField && Array.isArray(item?.[this.galleryField])) {
            rmFiles.push(...item[this.galleryField]);
        }
        return rmFiles;
    }
    async delete() {
        const rmFiles: string[] = [];
        try {
            // this.db.start();
            if (!this.actionActive.includes('delete') || !this.request.isPost()) {
                throw new Error('invalid_403');
            }
            const listId: number[] = await this.request.getPost('selected', [], 'ids');
            if (!listId.length) {
                throw new Error('invalid_500');
            }
            for (const id of listId) {
                const params: any = { id: id, is_deleted: 0 };
                let item = await this.md.findOne(params);
                if (!item) throw new Error('invalid_404');
                if (!this.verifyDel(item)) throw new Error('invalid_403');
                rmFiles.push(...await this.removeFiles(item));
                // let itemOld = item?.toJSON();
                const _itemOld = { ...item };
                // const logClass = new LogsModel();
                if (this.is_deleted) {
                    await this.deleteBefore(item);
                    item.is_deleted = 1;
                    item = await this.md.vdSave(item);
                    await this.deleteAfter(item);
                } else {
                    await this.deleteBefore(item);
                    await this.md.findByIdAndDelete(item.id);
                    await this.deleteAfter(item);
                }
                // logClass.saveLogs(this.userObjectId, 3, this, mdClass.getTableName(), item, itemOld);
            };
            // await this.db.commit();
            FileUpload.removeFiles(rmFiles);
            this.resJsonData([]);
        } catch (error: any) {
            // await this.db.abort();
            this.resJsonErr(error.message);
        } finally {
            // await this.db.end();
        }
    }
    async deleteone(id = 0) {
        const rmFiles: string[] = [];
        try {
            // this.db.start();
            if (!this.actionActive.includes('deleteone')) {
                throw new Error('invalid_403');
            }
            const params: any = {};
            params.id = id;
            let item = await this.md.findOne({ ...params, is_deleted: 0 });
            if (!item) throw new Error('invalid_404');
            if (!this.verifyDel(item)) throw new Error('invalid_403');
            rmFiles.push(...await this.removeFiles(item));
            const _itemOld = { ...item };
            if (this.is_deleted) {
                await this.deleteBefore(item);
                item.is_deleted = 1;
                item = await this.md.vdSave(item);
                await this.deleteAfter(item);
            } else {
                await this.deleteBefore(item);
                await this.md.deleteOne({ id: item.id });
                await this.deleteAfter(item);
            }
            // const logClass = new LogsModel();
            // await logClass.saveLogs(this.userObjectId, 3, this, mdClass.getTableName(), item, itemOld);
            // await this.db.commit();
            FileUpload.removeFiles(rmFiles);
            this.resJsonData([]);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async indexBefore(data: any) {
        return data;
    }
    async detailBefore(item: any) {
        return item;
    }
    async importBeforeFor(_importExcel: ImportExcel, _row: any) { }
    async importBefore(_importExcel: ImportExcel, _row: any, item: any) {
        return item;
    }
    async importAfter(_item: any, _itemOld: any, _importExcel: ImportExcel, _row: any) { }
    async importAfterFor(_importExcel: ImportExcel) { }
    async updateBefore(item: any, _itemOld: any) {
        return item;
    }
    async updateBeforeSave(item: any) {
        return item;
    }
    async updateAfter(_item: any, _itemOld: any) { }
    async copyBefore(item: any) {
        return item;
    }
    async copyAfter(_id: any, _itemId: any) { }
    async exportBefore(workbook: Workbook | undefined) {
        return workbook;
    }
    async deleteBefore(_item: any) { }
    async deleteAfter(_item: any) { }
    async verifyDel(_item: any) {
        return true;
    }
}
