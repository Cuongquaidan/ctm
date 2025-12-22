import CoreController from "@src/controllers/CoreController.js";

export default class PageController extends CoreController {
    md = this.models.pages;
    parseJsonFields(item: any): any {
        if (!item || !item.params || typeof item.params !== 'string') return item;

        try {
            item.params = JSON.parse(item.params);
        } catch (e) {
            console.error("Lỗi parse JSON cho trường 'params':", e);
            item.params = null;
        }

        return item;
    }
    async getDetail(alias: string) {
        try {
            alias = this.request.getParam('alias');
            if (!alias) throw new Error("invalid_alias");
            const conditions: any = { alias: alias, status: 1 };
            let item = await this.md.findOne(conditions);
            if (!item) throw new Error("invalid_404");
            item = this.parseJsonFields(item);
            return this.resJsonData(item);
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
    async listPages() {
        try {
            const whereClause = '1';
            const pages = await this.md.find(
                whereClause,
                { sort_order: 'ASC' },
                false,
                undefined,
                '*'
            );

            return this.resJsonData(pages);
        } catch (error: any) {
            return this.resJsonErr(error.message);
        }
    }
}
