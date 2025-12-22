import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface CustomerTierLangData {
    id?: number;
    lang_id: number;
    tier_id: number;
    name: string;
    excerpt?: string;
    content?: string;
}

export default class CustomerTierLangModel extends SingleModel<CustomerTierLangData> {
    table = 'customer_tier_lang';

    vdObject = {
        lang_id: 'required|integer',
        tier_id: 'required|integer',
        name: 'required|minLen(2)|maxLen(250)',
        excerpt: '',
        content: '',
    };

    fieldName(key: any) {
        const data: any = {
            lang_id: 'Ngôn ngữ',
            tier_id: 'Hạng thành viên',
            name: 'Tên hạng',
            excerpt: 'Mô tả ngắn',
            content: 'Nội dung chi tiết',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        _customer: any,
        _is_deleted: any
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: CustomerTierLangData[];
    }> {
        const nameSh = request.get("nameSh");
        const langSh = request.get("langSh");
        const tierSh = request.get("tierSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`customer_tier_lang.name LIKE '${keyword}'`);
        }

        if (langSh) {
            whereParts.push(`customer_tier_lang.lang_id = ${Number(langSh)} `);
        }

        if (tierSh) {
            whereParts.push(`customer_tier_lang.tier_id = ${Number(tierSh)} `);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "customer_tier_lang.id": "DESC" },
            page,
            pageLen,
            `LEFT JOIN customer_tiers ON customer_tier_lang.tier_id = customer_tiers.id`,
            `customer_tier_lang.*, customer_tiers.name AS tierDefaultName`
        );

        return {
            page: data.page,
            pageLen: data.length,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
}
