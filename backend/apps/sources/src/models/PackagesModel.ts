import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';

export interface PackageData {
    id?: number;
    alias?: string;
    name: string;
    short_name?: string;
    excerpt?: string;
    image?: string;
    status?: number;
    layout?: string;
    is_deleted?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class PackageModel extends SingleModel<PackageData> {
    table = 'packages';

    vdObject = {
        name: 'required|minLen(2)|maxLen(250)|unique(packages,name)',
        alias: 'maxLen(150)|unique(packages,alias)',
        short_name: 'maxLen(50)',
        excerpt: 'maxLen(255)',
        image: 'maxLen(150)',
        layout: 'maxLen(30)',
        status: 'numeric|min(0)|max(1)',
        is_deleted: 'numeric|min(0)|max(1)',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Gói',
            alias: 'Đường dẫn (Alias)',
            name: 'Tên Gói',
            short_name: 'Tên rút gọn',
            excerpt: 'Mô tả ngắn',
            image: 'Hình ảnh đại diện',
            status: 'Trạng thái',
            layout: 'Bố cục',
            is_deleted: 'Đã xóa',
            created_at: 'Ngày tạo',
            updated_at: 'Ngày cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
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
        data: PackageData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");

        const whereParts: string[] = [];

        // Lọc theo trạng thái xóa
        if (is_deleted === 0 || is_deleted === "0") {
            whereParts.push(`packages.is_deleted = 0`);
        } else if (is_deleted === 1 || is_deleted === "1") {
            whereParts.push(`packages.is_deleted = 1`);
        }

        // Tìm kiếm theo tên
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`packages.name LIKE '${keyword}'`);
        }

        if (statusSh !== null && statusSh !== undefined && statusSh !== "") {
            whereParts.push(`packages.status = ${Number(statusSh)} `);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "packages.created_at": "DESC", "packages.id": "DESC" },
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
    public async getNamesByIds(packageIds: number[]): Promise<Map<number, string>> {

        const packageMap = new Map<number, string>();
        if (!packageIds || packageIds.length === 0) {
            return packageMap;
        }

        const uniqueIds = Array.from(new Set(packageIds));
        const idList = uniqueIds.join(',');

        // 2. TRUY VẤN SQL: Lấy ID và Tên cho tất cả gói hàng trong danh sách
        const sql = `
            SELECT id, name 
            FROM \`${this.table}\` 
            WHERE id IN (${idList}) AND is_deleted = 0
        `;

        const [rows]: any = await this.query(sql);

        if (!rows || rows.length === 0) {
            return packageMap;
        }

        for (const row of rows) {
            const packageId = Number(row.id);
            if (!isNaN(packageId) && row.name) {
                packageMap.set(packageId, String(row.name));
            }
        }

        return packageMap;
    }
    public async getPackageNameById(id: number): Promise<{ name: string } | null> {
        const result = await this.findOne({ id: id });
        return result;
    }
}
