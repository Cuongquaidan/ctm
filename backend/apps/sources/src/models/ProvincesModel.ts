import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface ProvincesData {
    code: string;
    name: string;
    name_en?: string;
    full_name: string;
    full_name_en?: string;
    code_name?: string;
    country_id: number;
    administrative_unit_id?: number;
    administrative_region_id?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
    is_deleted?: number;
}

export default class ProvincesModel extends SingleModel<ProvincesData> {
    table = 'provinces';

    vdObject = {
        code: 'required|maxLen(20)',
        name: 'required|maxLen(255)',
        name_en: 'maxLen(255)',
        full_name: 'required|maxLen(255)',
        code_name: 'maxLen(255)',
        country_id: 'required|numeric',
        administrative_unit_id: 'numeric',
        administrative_region_id: 'numeric',
    };

    validateImport = {
        code: 'required|maxLen(20)',
        name: 'required|maxLen(255)',
        country_id: 'required|numeric',
    };

    fieldName(key: string): string {
        const data: Record<string, string> = {
            code: 'Mã Tỉnh/Thành phố',
            name: 'Tên Tỉnh/Thành phố',
            full_name: 'Tên đầy đủ',
            country_id: 'Mã Quốc gia',
            status: 'Trạng thái',
        };
        return data[key] ?? key;
    }

    async getDatas(request: Request, _user: any, _is_deleted: any): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: ProvincesData[];
    }> {
        const whereParts: string[] = [];
        const params: any[] = [];

        const nameSh = request.get('nameSh');
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`name LIKE '${keyword}'`);
        }

        const countryIdSh = request.get('countryIdSh');
        if (countryIdSh) {
            whereParts.push("country_id = ?");
            params.push(countryIdSh);
        }

        const statusSh = request.get('statusSh');
        if (statusSh !== null && statusSh !== undefined) {
            whereParts.push("status = ?");
            params.push(statusSh);
        }

        if (whereParts.length === 0) {
            whereParts.push("1");
        }

        const whereClause = whereParts.join(" AND ");

        const page = parseInt(request.get('page', '1'));
        const pageLen = parseInt(request.get('pageLen', '10'));

        const data = await this.findWithPagination(
            whereClause,
            { name: "ASC" },
            page,
            pageLen,
            params
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