import path from "path";
import fs from "fs";
import AdminController from "@src/controllers/AdminController.js";

export default class FileController extends AdminController {
    async serve() {
        try {
            const { folder, id, filename } = this.req.params as { folder: string; id: number; filename: string };
            // const filePath = path.join(path.resolve(), "uploads", folder, String(id), filename);
            // if (!fs.existsSync(filePath)) {
            //     throw new Error("invalid_file");
            // }
            // const furnish = await FurnishModel.findOne({ id: id, is_deleted: 0, status: 1 });
            // if (!furnish) throw new Error("invalid_furnish");
            // const isDetail = await PermissionModel.checkPermission('admins','furnish','detail',{code:1}, this.group_id);
            // if(isDetail !== false) throw new Error("invalid_permission");
            // if(isDetail !== true && isDetail?.vf === 2 && furnish.created_by !== this.userObjectId) throw new Error("invalid_permission");
            // const isCre = await PermissionModel.checkPermission('admins','furnish','update',{code:0}, this.group_id);
            // const aF = PermissionModel.findOne('admins','furnish','vf');
            // if(aF?.vf === 2 && furnish.created_by !== furnish.updated_by) {
            //     throw new Error("invalid_permission");
            // }
            // const userId = this.userObjectId;
            // if (!userId || (furnish.created_by?.toString() !== userId.toString() && furnish.updated_by?.toString() !== userId.toString())) {
            //     throw new Error("invalid_permission");
            // }
            const filePath = path.join(path.resolve(), "uploads", folder, String(id), filename);
            if (!fs.existsSync(filePath)) {
                throw new Error("invalid_file");
            }
            const ext = path.extname(filename).toLowerCase();
            const stat = fs.statSync(filePath);
            const inlineMap: Record<string, string> = {
                ".png": "image/png",
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".gif": "image/gif",
                ".svg": "image/svg+xml",
                ".pdf": "application/pdf",
            };
            if (inlineMap[ext]) {
                this.res
                    .type(inlineMap[ext])
                    .header("Content-Length", stat.size);
                return this.res.send(fs.createReadStream(filePath));
            } else {
                this.res
                    .header("Content-Disposition", `attachment; filename="${filename}"`)
                    .header("Content-Length", stat.size)
                    .type("application/octet-stream");
                return this.res.send(fs.createReadStream(filePath));
            }

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}
