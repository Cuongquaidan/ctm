import SingleModel from '../SingleModel.js';
// import { Request } from '../../Request.js';
import { Request } from '../Request.js';

export interface DeptsData {
    id: number;
    dcode?: string;
    // qhns?: string; // nếu cần thì mở lại
    locationid?: number;
    name?: string;
    nameSearch?: string;
    description?: string;
    address?: string;
    lat?: string;
    lng?: string;
    status: number;
    created_by?: number;   // ID user tạo
    created_at?: string;     // hoặc string nếu trả về dạng text
    updated_by?: number;   // ID user cập nhật
    updated_at?: string;     // hoặc string
    is_deleted?: number;
}

export default class DeptsModel extends SingleModel<DeptsData> {
    // model = DeptsModel.model;
    vdObject = {
        dcode: 'maxLen(30)',
        // qhns: 'maxLen(13)',
        name: 'required|maxLen(150)',
        description: 'maxLen(255)',
        lat: 'maxLen(30)',
        lng: 'maxLen(30)',
    };
    validateImport = {
        dcode: 'maxLen(30)',
        // qhns: 'maxLen(13)',
        name: 'required|maxLen(150)',
        description: 'maxLen(255)',
        lat: 'maxLen(30)',
        lng: 'maxLen(30)',
    };
    fieldName(key: string): string {
        const data: Record<string, string> = {
            dcode: 'Mã đơn vị',
            qhns: 'Mã quan hệ ngân sách',
            locationid: 'Vị trí',
            name: 'Tên đơn vị',
            nameSearch: 'Tên (tìm kiếm)',
            description: 'Mô tả',
            address: 'Địa chỉ',
            lat: 'Vĩ độ',
            lng: 'Kinh độ',
            status: 'Trạng thái',
        };
        return data[key] ?? key;
    }
    // static async getDataExport(request: Request, user: any, is_deleted: any) {
    //     let params: any = {};
    //     let nameSh = request.get('nameSh');
    //     if (nameSh) {
    //         let keyword = Common.removeVietnameseTones(nameSh);
    //         params.nameSearch = { $regex: keyword };
    //     }
    //     let dcodeSh = request.get('dcodeSh');
    //     if (dcodeSh) {
    //         params.dcode = { $regex: '^' + dcodeSh, $options: 'i' };
    //     }
    //     if (is_deleted === true || is_deleted === 0 || is_deleted === 'true') {
    //         params.is_deleted = 0;
    //     }
    //     let data = await this.findItems(params, false, false, false, 10000);
    //     return data;
    // }
    async getDatas(request: Request, _user: any, _is_deleted: any): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: DeptsData[];
    }> {
        const whereParts: string[] = [];
        const params: any[] = [];

        const nameSh = request.get('nameSh');
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`(fullname LIKE '${keyword}' OR username LIKE '${keyword}')`);
        }
        const dcodeSh = request.get('dcodeSh');
        if (dcodeSh) {
            whereParts.push("status = ?");
            params.push(dcodeSh);
        }
        const whereClause = whereParts.length > 0 ? whereParts.join(" AND ") : "1";
        const page = parseInt(request.get('page', '1'));
        const pageLen = parseInt(request.get('pageLen', '10'));

        const data = await this.findWithPagination(
            whereClause,
            { created_at: "DESC" },
            page,
            pageLen
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