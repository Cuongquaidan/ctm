import CoreController from "@src/controllers/CoreController.js";
import NewsModel from "@src/models/NewsModel.js";

export default class MenuController extends CoreController {
    md = this.models.menu;
    async getFuncMenu(menu_type: number, parent_id: number = 0) {
        try {
            menu_type = this.request.get('menu_type')
            parent_id = this.request.get('parent_id') || 0
            const mtid = parseInt(menu_type as any, 10);
            if (isNaN(mtid) || mtid <= 0) {
                throw new Error("invalid_menutype");
            }
            const pid = parseInt(parent_id as any, 10);
            if (pid > 0) {
                const parentItem = await this.md.findOne({
                    id: pid,
                    menutype: mtid,
                });
                if (!parentItem) throw new Error("invalid_404");
            }
            const data = await this.md.getMenuTree(pid, mtid)
            this.resJsonData(data);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async getList() {
        try {
            const data = await this.md.getDatas(
                this.request,
                this.user,
            );

            this.resJsonData(data);

        } catch (error) {
            this.resJsonErr((error as Error).message || "Không thể lấy danh sách menu.");
        }
    }
}

