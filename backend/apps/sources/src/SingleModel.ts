import BaseModel from './BaseModel.js';
import { Request } from './Request.js';
interface PaginatedResult<T> {
    page: number;
    pageLen: number;
    pageTotal: number;
    recordTotal: number;
    data: T[];
}
export default class SingleModel<T extends Record<string, any> & { id?: number }> extends BaseModel<T> {
    validateImport: any;
    public readonly td!: T;
    async getDatas(_request: Request, _user: any, _is_deleted: any): Promise<PaginatedResult<T>> {
        const params: any = {};
        const data = await this.findWithPagination(params);
        return {
            page: data.page,
            pageLen: data.length,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
}