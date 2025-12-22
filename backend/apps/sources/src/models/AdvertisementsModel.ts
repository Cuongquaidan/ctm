import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface AdvertisementData {
    id?: number;
    name?: string;
    description?: string;
    image?: string;
    button_link?: string;
    button_name?: string;
    sale_name?: string;
    sale_value?: string;
    scode?: string;
    view_count?: number;
    click_count?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}
export default class AdvertisementsModel extends SingleModel<AdvertisementData> {
    table = 'advertisements';

    vdObject = {
        name: 'required|minLen(5)|maxLen(150)',
        image: 'required|maxLen(250)',
        status: 'required|numeric',
        button_link: 'maxLen(250)',
    };

    fieldName(key: any) {
        const data: any = {
            name: 'Tên quảng cáo',
            description: 'Mô tả',
            image: 'Hình ảnh',
            button_link: 'Liên kết nút',
            button_name: 'Tên nút',
            sale_name: 'Tên ưu đãi',
            status: 'Trạng thái',
            created_at: 'Thời gian tạo',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        _user: any,
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: AdvertisementData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`(advertisements.name LIKE '${keyword}' OR advertisements.description LIKE '${keyword}')`);
        }

        if (statusSh) {
            whereParts.push(`advertisements.status = ${Number(statusSh)}`);
        }
        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const limitSh = request.get("limit");
        const defaultPageLen = parseInt(request.get("pageLen", "10"));

        const pageLen = limitSh ? parseInt(limitSh) : defaultPageLen;

        const finalPageLen = Math.max(1, pageLen);

        const data = await this.findWithPagination(
            whereClause,
            { "advertisements.created_at": "DESC" },
            page,
            finalPageLen,
        );

        return {
            page: data.page,
            pageLen: finalPageLen,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
}