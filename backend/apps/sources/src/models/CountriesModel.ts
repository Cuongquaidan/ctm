import SingleModel from '../SingleModel.js';
import { Request } from '../Request.js';

export interface CountriesData {
    id: number;
    name: string;
    iso3?: string;
    numeric_code?: string;
    iso2?: string;
    phonecode?: string;
    capital?: string;
    currency?: string;
    currency_name?: string;
    currency_symbol?: string;
    tld?: string;
    native?: string;
    region?: string;
    subregion?: string;
    timezones?: string;
    translations?: string;
    latitude?: number;
    longitude?: number;
    emoji?: string;
    emojiU?: string;
    created_at?: string;
    updated_at?: string;
    flag?: number;
    wikiDataId?: string;
    order_sort?: number;
    status?: number;
}

export default class CountriesModel extends SingleModel<CountriesData> {
    table = 'countries';
    vdObject = {
        name: 'required|maxLen(100)',
        iso3: 'maxLen(3)',
        numeric_code: 'maxLen(3)',
        iso2: 'maxLen(2)',
        phonecode: 'maxLen(255)',
        capital: 'maxLen(255)',
        currency: 'maxLen(255)',
        currency_name: 'maxLen(255)',
        currency_symbol: 'maxLen(255)',
        tld: 'maxLen(255)',
        native: 'maxLen(255)',
        region: 'maxLen(255)',
        subregion: 'maxLen(255)',
        wikiDataId: 'maxLen(255)',
        order_sort: 'numeric',
        status: 'numeric',
        flag: 'numeric',
    };

    validateImport = {
        name: 'required|maxLen(100)',
        iso2: 'maxLen(2)',
        iso3: 'maxLen(3)',
        numeric_code: 'maxLen(3)',
    };

    fieldName(key: string): string {
        const data: Record<string, string> = {
            id: 'ID',
            name: 'Tên Quốc gia',
            iso2: 'Mã ISO2',
            iso3: 'Mã ISO3',
            numeric_code: 'Mã số',
            phonecode: 'Mã điện thoại',
            capital: 'Thủ đô',
            currency: 'Mã tiền tệ',
            currency_name: 'Tên tiền tệ',
            region: 'Vùng',
            subregion: 'Tiểu vùng',
            status: 'Trạng thái',
            order_sort: 'Thứ tự sắp xếp',
        };
        return data[key] ?? key;
    }

    async getDatas(request: Request, _user: any, _is_deleted: any): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: CountriesData[];
    }> {
        const whereParts: string[] = [];
        const params: any[] = [];

        const nameSh = request.get('nameSh');
        if (nameSh) {
            const keyword = `%${nameSh}%`;
            whereParts.push(`name LIKE '${keyword}'`);
        }

        const iso2Sh = request.get('iso2Sh');
        if (iso2Sh) {
            whereParts.push("iso2 = ?");
            params.push(iso2Sh);
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