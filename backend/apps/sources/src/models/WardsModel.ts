import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface WardsData {
    code: string;
    name: string;
    name_en?: string;
    full_name?: string;
    full_name_en?: string;
    code_name?: string;
    district_code?: string;
    administrative_unit_id?: number;
    status?: number;
    created_at?: string;
    updated_at?: string;
    is_deleted?: number;
}

export default class WardsModel extends SingleModel<WardsData> {

    table = 'wards';

    vdObject = {
        code: 'required|maxLen(20)',
        name: 'required|maxLen(255)',
        name_en: 'maxLen(255)',
        full_name: 'maxLen(255)',
        code_name: 'maxLen(255)',
        district_code: 'maxLen(20)',
        administrative_unit_id: 'numeric',
    };

    validateImport = {
        code: 'required|maxLen(20)',
        name: 'required|maxLen(255)',
        district_code: 'required|maxLen(20)',
    };

    fieldName(key: string): string {
        const data: Record<string, string> = {
            code: 'Mã Phường/Xã',
            name: 'Tên Phường/Xã',
            full_name: 'Tên đầy đủ',
            district_code: 'Mã Quận/Huyện',
            status: 'Trạng thái',
        };
        return data[key] ?? key;
    }

    async getDatas(request: Request, _user: any, _is_deleted: any): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: WardsData[];
    }> {
        const whereParts: string[] = [];
        const params: any[] = [];

        const nameSh = request.get('nameSh');
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`name LIKE '${keyword}'`);
        }

        const districtCodeSh = request.get('districtCodeSh');
        if (districtCodeSh) {
            whereParts.push("district_code = ?");
            params.push(districtCodeSh);
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