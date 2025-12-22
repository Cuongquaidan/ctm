import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';
import ProductModel from './ProductsModel.js';

export interface StoreData {
    id?: number;
    alias?: string;
    register_id?: number;
    ctm_discount?: number;
    name?: string;
    des?: string;
    activity?: string;
    phone?: string;
    telephone?: string;
    country_id?: string;
    province_id?: string;
    district_id?: string;
    ward_id?: string;
    address?: string;
    fulladdress?: string;
    lat?: number;
    lng?: number;
    image?: string;
    email?: string;
    review_total?: number;
    review_point_1?: number;
    review_point_2?: number;
    review_point_3?: number;
    review_point_4?: number;
    review_point_5?: number;
    review_point?: number;
    status?: number;
    is_deleted?: number;
    created_at?: string;
    updated_at?: string;
    created_by?: number;
    updated_by?: number;
}

export default class StoreModel extends SingleModel<StoreData> {
    table = 'stores';

    vdObject = {
        alias: 'required|minLen(2)|maxLen(250)|unique(stores,alias)',
        name: 'required|minLen(2)|maxLen(200)',
        email: 'email|maxLen(150)',
        phone: 'maxLen(50)',
        ctm_discount: 'number|minVal(0)|maxVal(100)',
        lat: 'number',
        lng: 'number',
        status: 'number',
        is_deleted: 'number',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID',
            alias: 'Đường dẫn (Alias)',
            register_id: 'ID Đăng ký',
            ctm_discount: 'Chiết khấu Khách hàng',
            name: 'Tên cửa hàng',
            des: 'Mô tả ngắn',
            activity: 'Lĩnh vực hoạt động',
            phone: 'Số điện thoại',
            telephone: 'Điện thoại bàn',
            country_id: 'Quốc gia',
            province_id: 'Tỉnh/Thành phố',
            district_id: 'Quận/Huyện',
            ward_id: 'Phường/Xã',
            address: 'Địa chỉ chi tiết',
            fulladdress: 'Địa chỉ đầy đủ',
            lat: 'Vĩ độ',
            lng: 'Kinh độ',
            image: 'Hình ảnh',
            email: 'Email',
            review_total: 'Tổng đánh giá',
            review_point_1: 'Điểm 1 sao',
            review_point_2: 'Điểm 2 sao',
            review_point_3: 'Điểm 3 sao',
            review_point_4: 'Điểm 4 sao',
            review_point_5: 'Điểm 5 sao',
            review_point: 'Điểm đánh giá trung bình',
            status: 'Trạng thái',
            is_deleted: 'Đã xóa mềm',
            created_at: 'Thời gian tạo',
            updated_at: 'Thời gian cập nhật',
            created_by: 'Người tạo',
            updated_by: 'Người cập nhật',
        };
        return data[key] ?? key;
    }

    async getDatas(
        request: Request,
        is_deleted: any = 0
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: StoreData[];
    }> {
        const nameSh = request.get("nameSh");
        const statusSh = request.get("statusSh");
        const phoneSh = request.get("phoneSh");
        const aliasSh = request.get("aliasSh") || request.get("alias");

        const whereParts: string[] = [];
        if (aliasSh) {
            whereParts.push(`product.alias = '${aliasSh}'`);
        }
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`stores.name LIKE '${keyword}'`);
        }

        if (phoneSh) {
            whereParts.push(`stores.phone LIKE '%${phoneSh}%'`);
        }

        if (statusSh) {
            whereParts.push(`stores.status = ${Number(statusSh)} `);
        }

        if (is_deleted === 0 || is_deleted === "0") {
            whereParts.push(`stores.is_deleted = 0`);
        } else if (is_deleted === 1 || is_deleted === "1") {
            whereParts.push(`stores.is_deleted = 1`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));

        const data = await this.findWithPagination(
            whereClause,
            { "stores.created_at": "DESC" },
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

    public async getStoreByAlias(alias: string): Promise<StoreData | null> {
        if (!alias) return null;

        const conditions: Record<string, any> = {
            alias: alias,
            status: 1,
            is_deleted: 0
        };

        const result = await this.findOne(conditions);

        return result as StoreData | null;
    }

    public async getStoreIdByAlias(alias: string): Promise<number | null> {
        const store = await this.findOne({ alias: alias, status: 1, is_deleted: 0 });
        return store?.id ? Number(store.id) : null;
    }

    public async getStoreNamesByIds(storeIds: number[]): Promise<Map<number, string>> {
        if (!storeIds.length) return new Map();

        const sql = `SELECT id, name FROM stores WHERE id IN (?)`;
        const [rows]: any = await this.query(sql, [storeIds]);

        const storeMap = new Map<number, string>();
        rows.forEach((row: any) => {
            storeMap.set(row.id, row.name);
        });

        return storeMap;
    }

    async getProductListByStore(
        request: Request,
        customer: any,
        is_deleted: any,
        alias: string
    ): Promise<ReturnType<ProductModel['getData']>> {

        if (!alias || typeof alias !== 'string' || alias.length === 0) {
            throw new Error("invalid_store_alias");
        }

        const storeId = await this.getStoreIdByAlias(alias);

        if (!storeId || storeId <= 0) {
            return { page: 1, pageLen: 10, pageTotal: 0, recordTotal: 0, data: [] };
        }

        const storeIdValue = String(storeId);

        const updatedRequest = {
            ...request,
            get: (key: string, defaultValue?: any): any => {
                if (key === 'store_idSh' || key === 'store_id') {
                    return storeIdValue;
                }

                if (key === 'aliasSh' || key === 'alias') {
                    return null;
                }

                return request.get(key, defaultValue);
            }
        } as Request;
        const products = new ProductModel(this.pool)
        const finalResult = await products.getData(
            updatedRequest,
            customer,
            is_deleted,
            1
        );
        return finalResult;
    }
    async getProductListByStoreId(
        request: Request,
        customer: any,
        is_deleted: any,
        storeId: number
    ): Promise<ReturnType<ProductModel['getData']>> {


        if (storeId <= 0) {
            return { page: 1, pageLen: 10, pageTotal: 0, recordTotal: 0, data: [] };
        }

        const storeIdValue = String(storeId);

        const updatedRequest = {
            ...request,
            get: (key: string, defaultValue?: any): any => {
                if (key === 'store_idSh' || key === 'store_id') {
                    return storeIdValue;
                }

                if (key === 'aliasSh' || key === 'alias') {
                    return null;
                }

                return request.get(key, defaultValue);
            }
        } as Request;
        const products = new ProductModel(this.pool)
        const finalResult = await products.getData(
            updatedRequest,
            customer,
            is_deleted,
            1
        );

        return finalResult;
    }
    async getStoreDetailsByIds(storeIds: number[]): Promise<Map<number, StoreData>> {
        if (!storeIds || storeIds.length === 0) {
            return new Map();
        }

        const placeholders = storeIds.map(() => '?').join(',');

        const sql = `
            SELECT * FROM stores 
            WHERE id IN (${placeholders})
        `;

        const [results]: any = await this.query(sql, storeIds);

        const storeMap = new Map<number, StoreData>();

        if (results && results.length > 0) {
            results.forEach((storeData: StoreData) => {
                if (storeData.id) {
                    storeMap.set(storeData.id, storeData);
                }
            });
        }

        return storeMap;
    }
}