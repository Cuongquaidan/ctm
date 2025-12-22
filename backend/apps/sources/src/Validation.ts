import BaseModel from "./BaseModel.js";
export class Validation {
    private errors: string[] = [];
    private md: InstanceType<typeof BaseModel>;
    constructor(md: InstanceType<typeof BaseModel>) {
        this.md = md;
    }
    /**
     * Start the validation using values and rules passed in data
     * @param  array  data
     * @param  bool   skip To skip validations as soon as one of the rules fails+
     * @throws Error if rule method doesn't exist
     * @return bool
     */
    async validate(validation: any, skip = false) {
        let passed = true;
        for await (const dtVal of validation) {
            const filed = dtVal.filed;
            const id = dtVal.id;
            const fName = dtVal.fieldName;
            const value = dtVal.value;
            let rules = dtVal.rules;
            rules = rules.split('|');
            for await (const rule of rules) {
                let method = rule;
                let args: any = [];
                if (this.isruleHasArgs(rule)) {
                    // get arguments for rules like in max(), min(), ..etc.
                    method = this.getRuleName(rule);
                    args = this.getRuleArgs(rule);
                } else {
                    args = filed;
                }
                if (!(method in Validation.prototype)) {
                    throw new Error("Method doesnt exists: " + method);
                }
                const vd = await (this as any)[method](value, args, id);
                if (!vd) {
                    this.addError(method, fName, value, args);
                    passed = false
                    if (skip) { return false; }
                }
            }
        }
        return passed;
    }
    // --- Trong file Validation.ts ---

    // async validate(validation: any, skip = false) {
    //     let passed = true;

    //     if (!Array.isArray(validation)) {
    //         throw new Error("Validation input must be an array.");
    //     }

    //     for await (const dtVal of validation) {
    //         const filed = dtVal.filed;
    //         const id = dtVal.id;
    //         const fName = dtVal.fieldName;
    //         const value = dtVal.value;

    //         let rulesArray = dtVal.rules;

    //         if (!Array.isArray(rulesArray)) {
    //             rulesArray = [];
    //         }

    //         for await (const rule of rulesArray) {
    //             if (typeof rule !== 'string') {
    //                 continue;
    //             }

    //             let method = rule;
    //             let args: any = [];

    //             if (this.isruleHasArgs(rule)) {
    //                 method = this.getRuleName(rule);
    //                 args = this.getRuleArgs(rule);
    //             } else {
    //                 args = filed;
    //             }

    //             if (!(method in Validation.prototype)) {
    //                 throw new Error("Method doesnt exists: " + method);
    //             }

    //             // @ts-expect-error: dynamic method call
    //             const vd = await this[method](value, args, id);

    //             if (!vd) {
    //                 this.addError(method, fName, value, args);
    //                 passed = false
    //                 if (skip) { return false; }
    //             }
    //         }
    //     }
    //     return passed;
    // }
    /**
     * Determine if a given rule has arguments, Ex: max(4)
     *
     * @param  string  rule
     * @return bool
     */
    private isruleHasArgs(rule: any) {
        return (typeof rule.split('(')[1] != 'undefined');
    }
    /**
     * get rule name for rules that have args
     *
     * @param  string  rule
     * @return string
     */
    private getRuleName(rule: any) {
        return rule.split('(')[0];
    }
    /**
     * get arguments for rules that have args
     *
     * @param  string  rule
     * @return array
     */
    private getRuleArgs(rule: string) {
        rule = rule.trim();
        let args = rule.split('(')[1];
        args = args.endsWith(')') ? args.slice(0, -1) : args;
        // args = preg_replace('/\s+/', '', args);
        // as result of an empty array coming from user input
        // args will be empty string,
        // So, using explode(',', empty string) will return array with size = 1
        // return empty(args)? []: explode(',', args);
        return args.split(',');
    }
    /**
     * Add an error
     *
     * @param  string  rule
     * @param  string  placeholder for filed
     * @param  mixed   value
     * @param  array   args
     *
     */
    private addError(rule: string, placeholder: string, value: any, args: any = []) {
        if (rule) {
            // get the default message for the current rule
            let message = this.defaultMessages(rule);
            if (message) {
                // if message is set to empty string,
                // this means the error will be added inside the validation method itself
                // check attempts()
                if (message.trim() !== "") {
                    // replace placeholder, value, arguments with their values
                    value = typeof value === 'string' ? value : "";
                    message = message.replace('{placeholder}', placeholder);
                    message = message.replace('{value}', value)
                    // arguments will take the shape of: {0} {1} {2} ...
                    args = typeof args === 'string' ? [args] : args;
                    args.forEach((vl: any, i: any) => {
                        message = message.replace(`{${i}}`, vl);
                    });
                    this.errors.push(message);
                }
            } else {
                // if no message defined, then use this one.
                this.errors.push("The value you entered for " + placeholder + " is invalid");
            }
        }
    }
    /**
     * Checks if validation has passed.
     *
     * @return bool
     */
    passes() {
        return this.errors.length === 0;
    }
    /**
     * get all errors
     * @return array
     */
    getErrors() {
        return this.errors;
    }
    /**
     * clear all existing errors
     * @return bool
     */
    clearErrors() {
        this.errors = [];
    }
    /** *********************************************** **/
    /** **************    Validations    ************** **/
    /** *********************************************** **/

    /**
     * Is value not empty?
     * @param  mixed  value
     * @return bool
     */
    private required(value: any) {
        if (value === null || value === undefined) {
            return false;
        } else if (typeof value === 'string' && value.trim() === '') {
            return false;
        }
        return true;
    }
    /**
     * Is value not empty?
     * @param  mixed  value
     * @return bool
     */
    private requiredId(value: any) {
        if (value === null || value === undefined) {
            return false;
        } else if (typeof value === 'string') {
            if (value.trim() === '') return false;
        } else if (typeof value === 'number' && value === 0) {
            return false;
        }
        return true;
    }
    /**
     * min string length
     * @param  string  str
     * @param  array  args(min)
     * @return bool
     */
    private minLen(str: string, args: any) {
        return str.length >= parseInt(args[0]);
    }
    private equalLen(str: string, args: any) {
        return str.length === parseInt(args[0]);
    }
    // private exitData(data: any, args: any){
    //     const table = args[0];
    //     const filed = args[1];
    //     const db =  Database.openConnection();
    //     db.prepare('SELECT id FROM ' + table + ' WHERE ' + filed + ' = :data ');
    //     db.bindValue(':data',data);
    //     db.execute();
    //     const rs = db.fetchAssociative();
    //     if(rs == null){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    // private static async findOne(data: any, args: any) {
    //     const table = args[0];
    //     const filed = args[1];
    //     const db = mongoose.models[table] || mongoose.model(table, new mongoose.Schema({}, { strict: false }));
    //     const rs = await db.findOne({ [filed]: data });
    //     return rs ? true : false;
    // }
    /**
     * max string length
     *
     * @param  string  str
     * @param  array  args(max)
     *
     * @return bool
     */
    private maxLen(str: string, args: any) {
        return str.length <= parseInt(args[0]);
    }
    /**
     * check if number between given range of numbers
     *
     * @param  int     num
     * @param  array   args(min,max)
     * @return bool
     */
    private rangeNum(num: number, args: any) {
        return num >= parseInt(args[0]) && num <= parseInt(args[1]);
    }
    /**
     * check if value is a valid number
     *
     * @param  string|integer  value
     * @return bool
     */
    private integer(value: any) {
        return !Number.isNaN(parseInt(value));
    }
    /**
     * check if value(s) is in a given array
     *
     * @param  string|array  value
     * @param  array         arr
     * @return bool
     */
    private inArray(value: any, arr: any) {
        if (typeof value === 'object') {
            for (const val in value) {
                if (!(val in arr)) {
                    return false;
                }
            }
            return true;
        }
        return value in arr;
    }
    /**
     * check if value is contains alphabetic characters and numbers
     *
     * @param  mixed   value
     * @return bool
     */
    private alphaNum(value: any) {
        const reg = /^[a-zA-Z0-9]+$/i;
        return value ? reg.test(value) : true;
    }
    /**
     * check if value is contains alphabetic characters and numbers
     *
     * @param  mixed   value
     * @return bool
     */
    private number(value: any) {
        return typeof value === 'number';
    }
    /**
     * check if value is contains alphabetic characters, numbers and spaces
     *
     * @param  mixed   value
     * @return bool
     */
    private alphaNumWithSpaces(value: any) {
        const reg = /^[a-zA-Z0-9]+$/i;
        return value ? reg.test(value) : true;
    }
    /**
     * check if password has at least
     * - one lowercase letter
     * - one uppercase letter
     * - one number
     * - one special(non-word) character
     */
    private password(value: any) {
        const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!%^&*])[0-9a-zA-Z@#$!%^&*]{8,32}$/;
        return value ? reg.test(value) : true;
    }
    /**
     * - Phone VN
     */
    private phoneVn(value: any) {
        const reg = /^[03|05|07|08|09]{2}[0-9]{8}/;
        return value ? reg.test(value) : true;
    }
    /**
     * check if value is equals to another value(strings)
     *
     * @param  string  value
     * @param  array   args(value)
     * @return bool
     */
    private equals(value: any, args: any) {
        return value === args[0];
    }
    /**
     * check if value is not equal to another value(strings)
     *
     * @param  string  value
     * @param  array   args(value)
     * @return bool
     */
    private notEqual(value: string, args: any) {
        return value !== args[0];
    }
    /**
     * check if value is a valid email
     *
     * @param  string  email
     * @return bool
     */
    private email(value: string) {
        const reg = /^([A-Za-z0-9_\-.+]+)@([A-Za-z0-9_\-.]+)\.([A-Za-z]{2,4})$/i;
        return value ? reg.test(value) : true;
    }
    /** *********************************************** **/
    /** ************  Database Validations  *********** **/
    /** *********************************************** **/
    /**
     * check if a value of a column is unique.
     *
     * @param  string  value
     * @param  array   args(table, column, id)
     * @return bool
     */
    private async unique(value: string, args: any, id: number) {
        try {
            const table = args[0].trim();
            const field = args[1].trim();
            let sql = `SELECT id FROM \`${table}\` WHERE \`${field}\` = ?`;
            const params: any[] = [value];
            if (await this.md.isField('is_deleted', table)) {
                sql += ' AND is_deleted = 0';
            }
            if (id) {
                sql += ' AND id != ?';
                params.push(id);
            }
            const [rows]: any = await this.md.query(sql, params);
            return rows.length === 0;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    // --- Trong file Validation.ts ---
    // ...

    // private async unique(value: string, args: any, id: any) {
    //     try {
    //         const actualTableName = args[0].trim();
    //         const fieldName = args[1].trim();

    //         const databaseName = process.env.MYSQL_DATABASE;
    //         if (!databaseName) {
    //             throw new Error("Biến môi trường MYSQL_DATABASE không được thiết lập.");
    //         }

    //         const checkColumnSql = `
    //         SELECT 1
    //         FROM information_schema.columns 
    //         WHERE table_schema = ? 
    //         AND table_name = ? 
    //         AND column_name = 'is_deleted'
    //     `;

    //         const [columnRows]: any = await this.pool.query(checkColumnSql, [databaseName, actualTableName]);
    //         const hasIsDeleted = columnRows.length > 0;

    //         let sql = `SELECT id FROM \`${actualTableName}\` WHERE \`${fieldName}\` = ?`;
    //         const params: any[] = [value];

    //         if (hasIsDeleted) {
    //             sql += ' AND is_deleted = 0';
    //         }

    //         if (id) {
    //             sql += ' AND id != ?';
    //             params.push(id);
    //         }

    //         const [rows]: any = await this.pool.query(sql, params);

    //         return rows.length === 0;

    //     } catch (error) {
    //         console.error("Lỗi khi kiểm tra tính duy nhất (unique):", error);
    //         return false;
    //     }
    // }
    /** *********************************************** **/
    /** ************   Default Messages     *********** **/
    /** *********************************************** **/
    private defaultMessages(rule: any) {
        const messages: { [key: string]: string } = {
            "required": "{placeholder} không thể trống",
            "requiredId": "{placeholder} không hợp lệ",
            "minLen": "{placeholder} không thể nhỏ hơn {0} ký tự",
            "equalLen": "{placeholder} phải có {0} ký tự",
            "phoneVn": "{placeholder} không phải thuê bao Việt Nam",
            "findOne": "{placeholder} không tồn tại",
            // "exitData"   : "{placeholder} không tồn tại",
            "maxLen": "{placeholder} không thể lớn hơn {0} ký tự",
            "rangeNum": "{placeholder} phải nằm trong khoản từ {0} đến {1}",
            "integer": "{placeholder} phải là số",
            "number": "{placeholder} không hợp lệ",
            "inArray": "{placeholder} không hợp lệ",
            "alphaNum": "Chỉ cho phép chữ cái và số cho {placeholder}",
            "alphaNumWithSpaces": "Chỉ cho phép chữ cái, số và khoảng trắng cho {placeholder}",
            "password": "Vui lòng nhập mật khẩu dài 8-32 ký tự, có ký tự chữ số, chữ hoa và chữ thường, ký tự @#$!%^&*",
            "equals": "{placeholder} không đúng",
            "notEqual": "{placeholder} không thể bằng {0}",
            "email": "Email không đúng định dạng",
            "unique": "{placeholder} đã được sử dụng"
        };
        return messages[rule] ?? null;
    }
}
