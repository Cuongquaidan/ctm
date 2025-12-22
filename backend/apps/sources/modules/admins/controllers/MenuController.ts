import SingleController from "@src/controllers/SingleController.js";

export default class MenuController extends SingleController {
    md = this.models.menu;
    actionActive = ['create', 'edit', 'detail', 'deleteone'];
    isDeleted = true;
    isImage = true;
    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        item.name = this.request.getPost('name');
        item.icon = this.request.getPost('icon');
        item.menu_type = this.request.getPost('menu_type');
        if (item.menu_type) {
            const menu_type = await this.md.getById(item.menu_type);
            if (!menu_type) { throw new Error("invaild_menutype"); }
            item.menu_type = menu_type?.id;
        }
        item.status = this.request.getPost('status');
        item.icon = this.request.getPost('icon');
        item.is_mega = this.request.getPost('is_mega');
        const newType = this.request.getPost('type');
        item.type = newType;
        // item.options = {};
        // if (item.type === 'newsCategories') {
        //     const newsCategoryIdPost = this.request.getPost('menu_type', [], 'ids');
        //     if (!newsCategoryIdPost) throw new Error("invalid_newsCategoryId");
        //     const newsCategoryIds = Array.isArray(newsCategoryIdPost)
        //         ? newsCategoryIdPost
        //         : [newsCategoryIdPost];
        //     item.options.newsCategoryId = newsCategoryIds;
        //     const categories = await this.models.newscategory.findItems({
        //         numberId: { $in: newsCategoryIds.map((id: string | number) => parseInt(id.toString(), 10)) }
        //     }).select("_id");

        //     item.options.newsCategory = categories.map(c => c._id);

        // } else if (item.type === 'news') {
        //     const newsIdPost = this.request.getPost('newsId', [], 'ids');
        //     if (!newsIdPost.length) throw new Error("invalid_newsId");

        //     const newsIds = Array.isArray(newsIdPost) ? newsIdPost : [newsIdPost];
        //     item.options.newsId = newsIds;

        //     const news = await this.models.news.findItems({
        //         numberId: { $in: newsIds.map((id: string | number) => parseInt(id.toString(), 10)) }
        //     }).select("_id");

        //     item.options.news = news.map(n => n._id);

        // } else if (item.type === 'pages') {
        //     const pageIdPost = this.request.getPost('pageId', [], 'ids');
        //     if (!pageIdPost) throw new Error("invalid_pageId");

        //     const pageIds = Array.isArray(pageIdPost) ? pageIdPost : [pageIdPost];
        //     item.options.pageId = pageIds;

        //     const pages = await this.models.pages.findItems({
        //         numberId: { $in: pageIds.map((id: string | number) => parseInt(id.toString(), 10)) }
        //     }).select("_id");

        //     item.options.pages = pages.map(p => p._id);

        // } else if (item.type === 'alias') {
        //     const alias = this.request.getPost('alias');
        //     if (!alias || typeof alias !== "string") {
        //         throw new Error("invalid_alias");
        //     }
        //     item.options.alias = alias.trim();
        // }
        item.parent_id = this.request.getPost('parent_id', 0, 'int');
        if (item.parent_id) {
            if (item.parent_id === item?.id) throw new Error("invalid_parent");
            const parentItem: any = await this.md.getById(item.parent_id, { isdeleted: 0 });
            if (!parentItem) throw new Error("invalid_parent");
            // item.level = parentItem.level + 1;
            if (parentItem.level >= 3) {
                throw new Error("max_level_exceeded");
            }
            if (typeof item.id !== 'number' || item.id <= 0) {
                throw new Error("invalid_item_id");
            }
            const childIds = await this.md.getSubIds(item.id);
            if (childIds.includes(item.parent_id)) {
                throw new Error("invalid_parent");
            }
        }
        return item;
    }

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
}

