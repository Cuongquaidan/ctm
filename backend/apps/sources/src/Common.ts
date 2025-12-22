import argon2 from "argon2";
import bcrypt from "bcrypt";
// import CustomerModel from "./models/CustomerModel.js";
export default class Common {
    static async makePassword(value: any) {
        return await argon2.hash(value);
    }
    // static async checkPassword(value: any, hashedValue: any) {
    //     return await argon2.verify(hashedValue, value);
    // }
    static async checkPassword(value: string, hashedValue: string) {
        if (hashedValue.startsWith("$2") || hashedValue.startsWith("$10$")) {
            const hashed = hashedValue.replace(/^\$2y\$/i, '$2b$');
            return await bcrypt.compare(value, hashed);
        } else if (hashedValue.startsWith("$argon2")) {
            return await argon2.verify(hashedValue, value);
        }
        return false;
    }
    static stripTag(str: string) {
        return str
            .toLowerCase()
            .replace(/[!@#%&*(){}~/,;<>.?^=+|£$[]\\]/g, "")
            .replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a')
            .replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e')
            .replace(/(ì|í|ị|ỉ|ĩ)/g, 'i')
            .replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o')
            .replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u')
            .replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y')
            .replace(/(đ)/g, 'd')
            .replace(/[^ a-z0-9]+/g, '-')
            .replace(/[^a-z0-9]+/g, '-')
            .trim();
    }
    static randomText(length: number, az = false) {
        let result = '';
        let characters = '0123456789';
        characters = az ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + characters : characters;
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    static removeVietnameseTones(str: string): string {
        if (!str) return "";
        return String(str)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .toLowerCase();
    }
    static slugify(text: string): string {
        return text.toString().toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim().replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }
    static rmStaticPath(content: string, tFile = 'png|jpg|jpeg|gif|svg') {
        const paternlink = `/static/([^/]*?\\.(${tFile}))/`;
        const data = content.match(paternlink);
        return data && data[1] ? data[1] : null;
    }

    static async createAlias(item: any, model: any): Promise<string> {
        const alias = this.slugify(item.name);
        const filter: any = { alias: alias }
        if (item._id) filter._id = { $ne: item._id }
        const exists = await model.exists(filter);
        return exists ? `${alias}-${Date.now()}` : alias;
    };
    static generateKeywords(text: string = ''): string {
        if (!text) return '';
        return text
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .split(/\s+/)
            .filter((word, index, arr) => word.length > 2 && arr.indexOf(word) === index)
            .join(', ');
    }
    static dateNow(){
        const now: Date = new Date();
        return now.toLocaleString('sv-SE', {
            timeZone: 'Asia/Ho_Chi_Minh', 
            hour12: false 
        }).replace('T', ' '); // "2025-12-05 17:30:45"
    }
    static formatDate(date: Date, format: string = "YYYY-MM-DD HH:mm:ss"): string {
        const pad = (n: number) => (n < 10 ? "0" + n : n);

        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());

        switch (format) {
            case "YYYY-MM-DD":
                return `${year}-${month}-${day}`;
            case "DD/MM/YYYY":
                return `${day}/${month}/${year}`;
            case "YYYY-MM-DD HH:mm:ss":
                return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            default:
                return date.toISOString();
        }
    }
    static getValue = (item: any, key: any, df: any = '') => {
        return (item?.[key] !== undefined) ? item[key] : df;
    }
    static sumArrCol<T extends Record<string, number>>(items: T[], col: keyof T): number {
        return items.reduce((sum, item) => sum + (item[col] ?? 0), 0);
    }
}