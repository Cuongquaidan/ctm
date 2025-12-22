import SingleModel from '@src/SingleModel.js';

export interface ConfigData {
    id?: number;
    type?: number;
    key?: string;
    value?: string;
}

export default class ConfigModel extends SingleModel<ConfigData> {
    table = 'configs';
    vdObject = {
        key: 'required|minLen(2)|maxLen(255)|unique(configs,key)',
        type: 'integer',
    };

    fieldName(key: any) {
        const data: any = {
            id: 'ID Cấu hình',
            type: 'Loại cấu hình',
            key: 'Khóa (Key)',
            value: 'Giá trị (Value)',
        };
        return data[key] ?? key;
    }
    async getValueByKey(key: string): Promise<string | null> {
        // Thay vì truyền chuỗi SQL, truyền đối tượng { key_cột: giá_trị }
        const config = await this.findOne({ key: key });

        // Giả định findOne trả về ConfigData | null
        return config ? config.value : null;
    }
    async updateValueByKey(key: string, value: string): Promise<boolean> {
        const config = await this.findOne({ key: key });
        if (config) {
            const result = await this.update(config.id!, { value: value });
            return result > 0;
        } else {
            // Tạo mới nếu key chưa tồn tại
            await this.insert({
                key: key,
                value: value,
                type: 0
            });
            return true;
        }
    }
}
