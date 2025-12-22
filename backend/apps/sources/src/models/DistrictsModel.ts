import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface DistrictsData {
    code: string;
    name: string;
    name_en?: string;
    full_name?: string;
    full_name_en?: string;
    code_name?: string;
    province_code?: string;
    administrative_unit_id?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
    is_deleted?: number;
}

export default class DistrictsModel extends SingleModel<DistrictsData> {
    table = 'districts';
    vdObject = {
        code: 'required|maxLen(20)',
        name: 'required|maxLen(255)',
        name_en: 'maxLen(255)',
        full_name: 'maxLen(255)',
        code_name: 'maxLen(255)',
        province_code: 'required|maxLen(20)',
        administrative_unit_id: 'numeric',
    };

    validateImport = {
        code: 'required|maxLen(20)',
        name: 'required|maxLen(255)',
        province_code: 'required|maxLen(20)',
    };

    fieldName(key: string): string {
        const data: Record<string, string> = {
            code: 'Mã Quận/Huyện',
            name: 'Tên Quận/Huyện',
            full_name: 'Tên đầy đủ',
            province_code: 'Mã Tỉnh/Thành phố',
            administrative_unit_id: 'ID Đơn vị HC',
            status: 'Trạng thái',
        };
        return data[key] ?? key;
    }

    async getDatas(request: Request, _user: any, _is_deleted: any): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: DistrictsData[];
    }> {
        const whereParts: string[] = [];
        const params: any[] = [];

        const nameSh = request.get('nameSh');
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`name LIKE '${keyword}'`);
        }

        const provinceCodeSh = request.get('provinceCodeSh');
        if (provinceCodeSh) {
            whereParts.push("province_code = ?");
            params.push(provinceCodeSh);
        }

        const statusSh = request.get('statusSh');
        if (statusSh !== null && statusSh !== undefined) {
            whereParts.push("status = ?");
            params.push(statusSh);
        }

        const whereClause = whereParts.length > 0 ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get('page', '1'));
        const pageLen = parseInt(request.get('pageLen', '10'));

        const data = await this.findWithPagination(
            whereClause,
            { code: "ASC" },
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