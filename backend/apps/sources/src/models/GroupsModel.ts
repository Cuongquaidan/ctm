import SingleModel from '../SingleModel.js';
import { Request } from '@src/Request.js';
export interface GroupData {
    id: number;
    name?: string;
    excerpt?: string;
    status?: number;
}

export default class GroupsModel extends SingleModel<GroupData> {
    // model = GroupsModel.model;
    table = 'groups';
    vdObject = {
        name: 'required|maxLen(100)',
        status: 'required'
    };
    validateImport = {
        name: 'required|maxLen(100)',
        status: 'required'
    };
    async getName(id: number) {
        const item = await this.findOne({ id })
        return item ? item.name : "";
    }
    fieldName(key: string) {
        const data: any = {
            name: 'Tiêu đề',
            status: 'Trạng thái',
        };
        return data[key] ?? key;
    }
    async getDatas(request: Request, _user: any, _is_deleted: any): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: GroupData[];
    }> {
        const whereParts: string[] = [];
        const params: any[] = [];

        const nameSh = request.get('nameSh');
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`(fullname LIKE '${keyword}' OR username LIKE '${keyword}')`);
        }
        const statusSh = request.get('statusSh');
        if (statusSh) {
            whereParts.push("status = ?");
            params.push(statusSh);
        }
        const whereClause = whereParts.length > 0 ? whereParts.join(" AND ") : "1";
        const page = parseInt(request.get('page', '1'));
        const pageLen = parseInt(request.get('pageLen', '10'));

        const data = await this.findWithPagination(
            whereClause,
            { created_at: "ASC" },
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
    static isAdm(group_id: number) {
        return group_id === 1;
    }
}
