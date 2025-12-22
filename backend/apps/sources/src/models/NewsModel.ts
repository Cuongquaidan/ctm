import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface NewsData {
    id?: number;
    store_id?: number;
    category_ids?: number;
    alias?: string;
    name?: string;
    description?: string;
    content?: string;
    image?: string;
    file?: string;
    meta_title?: string;
    meta_keywords?: string;
    meta_description?: string;
    status?: number;
    view?: number;
    hot?: number;
    is_deleted?: number;

    updated_at?: string;
    created_at?: string;
    created_by?: number;
    updated_by?: number;

    publish_at?: string;
    publish_by?: number;
}

export default class NewsModel extends SingleModel<NewsData> {
    table = 'news';

    vdObject = {
        name: 'required|minLen(2)|maxLen(250)',
        alias: 'maxLen(250)|unique(news,alias)',
        category_ids: 'maxLen(255)',
        description: 'maxLen(250)',
        meta_title: 'maxLen(250)',
        meta_keywords: 'maxLen(250)',
        meta_description: 'maxLen(250)',
        image: 'maxLen(250)',
        file: 'maxLen(250)',
        store_id: 'integer',
        status: 'numeric|min(0)|max(1)',
        view: 'integer|min(0)',
        hot: 'numeric|min(0)|max(1)',
        is_deleted: 'numeric|min(0)|max(1)',
        publish_at: 'date',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Tin tức',
            store_id: 'ID Cửa hàng',
            category_ids: 'Danh mục',
            alias: 'Đường dẫn (Alias)',
            name: 'Tiêu đề',
            description: 'Mô tả ngắn',
            content: 'Nội dung chi tiết',
            image: 'Hình ảnh đại diện',
            file: 'File đính kèm',
            meta_title: 'Meta Title',
            meta_keywords: 'Meta Keywords',
            meta_description: 'Meta Description',
            status: 'Trạng thái',
            view: 'Lượt xem',
            hot: 'Tin nổi bật',
            is_deleted: 'Đã xóa',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
            publish_at: 'Ngày xuất bản',
            publish_by: 'Người xuất bản',
        };
        return data[key] ?? key;
    }
    async getDatas(
        request: Request,
        user: any,
        is_deleted: any
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: NewsData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");
        const hotSh = request.get("hotSh");
        const category_idsSh = request.get("category_idsSh");
        const store_idSh = request.get("store_idSh");

        const whereParts: string[] = [];

        if (is_deleted === 0 || is_deleted === "0") {
            whereParts.push(`news.is_deleted = 0`);
        } else if (is_deleted === 1 || is_deleted === "1") {
            whereParts.push(`news.is_deleted = 1`);
        }

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`news.name LIKE '${keyword}'`);
        }
        if (store_idSh) {
            whereParts.push(`news.store_id = ${Number(store_idSh)} `);
        }
        if (statusSh !== null && statusSh !== undefined && statusSh !== "") {
            whereParts.push(`news.status = ${Number(statusSh)}`);
        }
        if (hotSh !== null && hotSh !== undefined && hotSh !== "") {
            whereParts.push(`news.hot = ${Number(hotSh)}`);
        }


        const category_idNum = Number(category_idsSh);
        if (!isNaN(category_idNum) && category_idNum > 0) {
            whereParts.push("news.category_ids IS NOT NULL");
            whereParts.push("news.category_ids != ''");
            whereParts.push("JSON_VALID(news.category_ids) = 1");
            const jsonCondition = `JSON_OVERLAPS(CAST(news.category_ids AS JSON), JSON_ARRAY('${category_idNum}'))`;
            whereParts.push(jsonCondition);
        }
        const storeId = user && user.store_id ? user.store_id : 1;
        whereParts.push(`news.store_id = ${storeId}`);
        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";
        const page = parseInt(request.get("page", "1"));
        const limitSh = request.get("limit");
        const defaultPageLen = parseInt(request.get("pageLen", "10"));
        const pageLen = limitSh ? parseInt(limitSh) : defaultPageLen;
        const finalPageLen = Math.max(1, pageLen);
        const data = await this.findWithPagination(
            whereClause,
            { "news.created_at": "ASC", "news.id": "ASC" },
            page,
            finalPageLen
        );

        return {
            page: data.page,
            pageLen: finalPageLen,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }

    async getAliasById(id: number): Promise<string | null> {
        const newsItem = await this.findOne({ id: id });
        return newsItem ? newsItem.alias : null;
    }
}
