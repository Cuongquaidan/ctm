import SingleModel from '../SingleModel.js';
import Common from '@src/Common.js';
import { UAParser } from "ua-parser-js";

export interface LogsData {
    id: number;
    userid: number;
    typeid: number;
    name: string;
    nameSearch?: string;
    controller: string;
    action: string;
    itemid?: number;
    tableName?: string;
    params?: string;
    difference?: Record<string, any> | any;
    item?: Record<string, any> | any;
    ip?: string;
    device?: string;
    browser?: string;
    os?: string;
    created_at?: Date;
}


export default class LogsModel extends SingleModel<LogsData> {
    // model = LogsModel.model;
    table = 'logs'
    vdObject = {
        userid: 'required',
        typeid: 'required',
        name: 'required|maxLen(100)',
        controller: 'required|maxLen(150)',
        action: 'required|maxLen(150)',
        ip: 'maxLen(36)',
        device: 'maxLen(150)',
        browser: 'maxLen(50)',
        os: 'maxLen(50)',
    };
    fieldName(key: string): string {
        const data: Record<string, string> = {
            userid: 'Người dùng ID',
            deptid: 'Phòng ban ID',
            type: 'Loại thao tác',
            name: 'Tên thao tác',
            controller: 'Controller',
            action: 'Action',
            paramid: 'ID tham số',
            params: 'Tham số',
            difference: 'Nội dung khác',
            item: 'Nội dung mới',
            ip: 'Địa chỉ IP',
            device: 'Thiết bị',
            browser: 'Trình duyệt',
            os: 'Hệ điều hành',
            created_at: 'Thời gian tạo',
        };
        return data[key] ?? key;
    }
    static getTypeName(typeid: number, table: string, itemId: number | string) {
        switch (typeid) {
            case 1: return "Thêm mới " + table + " ID: " + itemId;
            case 2: return "Chỉnh sửa " + table + " ID: " + itemId;
            case 3: return "Xóa " + table + " ID: " + itemId;
            case 4: return "Đăng nhập";
            // default: return "other";
            default:
                return "";
        }
    }
    // static async getDatas(request: Request, user: any, is_deleted: any) {
    //     let params: any = {};
    //     let nameSh = request.get('nameSh');
    //     if (nameSh) {
    //         let keyword = Common.removeVietnameseTones(nameSh);
    //         params.fullnameSearch = { $regex: keyword, $options: "i" };
    //     }
    //     let typeidSh = request.get('typeidSh');
    //     if (typeidSh) {
    //         params.typeid = { $regex: typeidSh, $options: 'i' };
    //     }
    //     if (is_deleted === true || is_deleted === 0 || is_deleted === 'true') {
    //         params.is_deleted = 0;
    //     }
    //     const page = parseInt(request.get('page', '1'));
    //     const pageLen = parseInt(request.get('pageLen', '10'));
    //     let data = await this.findWithPagination(params, false, false, page, pageLen);
    //     return data;
    // }
    async saveLogs(userId: any, typeid: number, _this: any, table: any, item: any = {}, itemOld: any = {}) {
        const req = _this.req;
        let ip = "";
        let device = "";
        let browser = "";
        let os = "";
        if (req) {
            ip =
                req.headers["x-forwarded-for"] ||
                req.ip ||
                req.socket.remoteAddress ||
                "";
            const userAgent = req.headers["user-agent"] || "";
            const parser = new UAParser(userAgent);
            const deviceInfo = parser.getDevice();
            const browserInfo = parser.getBrowser();
            const osInfo = parser.getOS();

            device = deviceInfo.model || deviceInfo.type || "";
            browser = browserInfo.name || "";
            os = osInfo.name || "";
        }
        item = { ...item };
        itemOld = { ...itemOld };
        const ignoreFields = ["updated_at", "created_at", "__v"];
        const difference: any = {};
        Object.keys(item).forEach(key => {
            if (ignoreFields.includes(key)) return;
            const oldVal = itemOld?.[key];
            const newVal = item?.[key];
            if (oldVal !== newVal) {
                difference[key] = {
                    old: oldVal
                };
            }
        });

        const logName = LogsModel.getTypeName(typeid, table, item.id);
        const logItem = {
            userid: userId,
            typeid,
            name: logName,
            nameSearch: Common.removeVietnameseTones(logName),
            controller: _this.controller?.constructor?.name || '',
            action: _this.action || '',
            itemid: item.id || 0,
            tableName: table,
            difference: JSON.stringify(difference || {}),
            params: JSON.stringify(_this.params || {}),
            item: JSON.stringify(item || {}),
            ip,
            device,
            browser,
            os,
            created_at: new Date(),
            updated_at: new Date()
        };

        const mdClass = new LogsModel(this.pool);
        return await mdClass.vdSave(logItem, mdClass.vdObject);
        // const dir = path.join(path.resolve(), "uploads", "logs");
        // if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        // const filePath = path.join(dir, `${Common.formatDate(new Date(), "YYYY-MM-DD")}.log`);
        // const line =
        //     `[${new Date().toISOString()}] ${controller}:${logItem.action} | user:${userId}\n` +
        //     `Old: ${logItem.contentold}\n` +
        //     `New: ${logItem.contentnew}\n\n`;
        // fs.appendFileSync(filePath, line, "utf8");
    }
}