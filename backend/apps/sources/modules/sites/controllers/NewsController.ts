import CoreController from "@src/controllers/CoreController.js";
import NewsCategoryModel from "@src/models/NewsCategoriesModel.js";
import NewsModel from "@src/models/NewsModel.js";

export default class NewsController extends CoreController {
    md = this.models.news;
    async getList() {
        try {
            const data = await this.md.getDatas(
                this.request,
                this.user,
                0
            );

            this.resJsonData(data);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async detailBefore(item: any): Promise<any> {
        // Đây là nơi bạn thêm các logic tiền xử lý dữ liệu, ví dụ:
        // if (item) {
        //     item.views += 1; // Tăng lượt xem
        //     await this.md.update(item.id, { views: item.views });
        // }
        return item;
    }
    async detailById(id: number = 0) {
        try {
            if (!id) throw new Error("invalid_id");
            const conditions: any = { id: id, status: 1, is_deleted: 0 };
            let item = await this.md.findOne(conditions);
            if (!item) throw new Error('invalid_404');

            item = await this.detailBefore(item);

            this.resJsonData(item);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async detailByAlias(alias: string) {
        try {
            alias = this.request.getParam('alias')
            const conditions: any = { alias: alias, status: 1, is_deleted: 0 };
            let item = await this.md.findOne(conditions);
            if (!item) throw new Error('invalid_404');

            item = await this.detailBefore(item);

            this.resJsonData(item);
        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async getParentSimple() {
        try {
            const data = await this.models.newsCategory.getTree({ is_deleted: 0 });
            this.resJsonData(data);
        } catch (error: any) {
            this.resJsonErr(error.message || "Đã xảy ra lỗi");
        }
    }
    async listNamesNews() {
        try {
            const whereClause = 'isdeleted = 0';
            const orderObject = { sort_order: 'ASC' };
            const fieldsString = 'id, name';
            const news = await this.md.find(
                whereClause,
                { sort_order: 'ASC' },
                false,
                undefined,
                fieldsString
            );

            return this.resJsonData(news);
        } catch (err: any) {
            return this.resJsonErr(err.message);
        }
    }
    async getNewsByCategoryId() {
        try {
            const categoryIdRaw = this.request.getParam('categoryId');
            const categoryId = Number(categoryIdRaw);
            if (isNaN(categoryId) || categoryId <= 0) {
                return this.resJsonErr('ID danh mục bài viết không hợp lệ.');
            }
            const newsModel = new NewsModel(this.pool);

            const searchId = String(categoryId);
            const newsTableName = "news";

            const likeConditions: string[] = [];

            likeConditions.push(`${newsTableName}.category_ids = '["${searchId}"]'`);
            likeConditions.push(`${newsTableName}.category_ids LIKE '["${searchId}",%'`);
            likeConditions.push(`${newsTableName}.category_ids LIKE '%,"${searchId}"]'`);
            likeConditions.push(`${newsTableName}.category_ids LIKE '%,"${searchId}",%'`);

            const categoryWhereClause = `(${likeConditions.join(" OR ")})`;

            const whereParts: string[] = [];
            whereParts.push(`${newsTableName}.is_deleted = 0`);
            whereParts.push(`${newsTableName}.status = 1`);
            whereParts.push(`${newsTableName}.category_ids IS NOT NULL`);
            whereParts.push(categoryWhereClause);

            const whereClause = whereParts.join(" AND ");

            const newsItems = await newsModel.find(
                whereClause,
                { publish_at: 'DESC' },
                10
            );
            this.resJsonData(newsItems);

        } catch (error: any) {
            console.error('Lỗi khi lấy danh sách bài viết theo danh mục:', error);
            return this.resJsonErr('Lỗi hệ thống khi tải danh sách bài viết.');
        }
    }
    async getNewsByCategoryAlias() {
        try {
            const categoryAlias = this.request.getParam('categoryAlias');

            if (!categoryAlias) {
                return this.resJsonErr('Alias danh mục không được để trống.');
            }

            const newsModel = new NewsModel(this.pool);
            const newsCategoryModel = new NewsCategoryModel(this.pool);

            const categoryInfo = await newsCategoryModel.findOne({
                alias: categoryAlias,
                is_deleted: 0,
                status: 1
            });

            if (!categoryInfo || !categoryInfo.id) {
                return this.resJsonErr('Danh mục không tồn tại hoặc không hợp lệ.');
            }

            const categoryId = categoryInfo.id;


            const searchId = String(categoryId);
            const newsTableName = "news";

            const likeConditions: string[] = [];
            likeConditions.push(`${newsTableName}.category_ids = '["${searchId}"]'`);
            likeConditions.push(`${newsTableName}.category_ids LIKE '["${searchId}",%'`);
            likeConditions.push(`${newsTableName}.category_ids LIKE '%,"${searchId}"]'`);
            likeConditions.push(`${newsTableName}.category_ids LIKE '%,"${searchId}",%'`);

            const categoryWhereClause = `(${likeConditions.join(" OR ")})`;

            const whereParts: string[] = [];
            whereParts.push(`${newsTableName}.is_deleted = 0`);
            whereParts.push(`${newsTableName}.status = 1`);
            whereParts.push(`${newsTableName}.category_ids IS NOT NULL`);
            whereParts.push(categoryWhereClause);

            const whereClause = whereParts.join(" AND ");

            const newsItems = await newsModel.find(
                whereClause,
                { publish_at: 'DESC' },
                10
            );

            this.resJsonData(newsItems);

        } catch (error: any) {
            console.error('Lỗi khi lấy danh sách bài viết theo alias danh mục:', error);
            return this.resJsonErr('Lỗi hệ thống khi tải danh sách bài viết.');
        }
    }
}