// import { Fastify } from 'fastify';
import { Validation } from './Validation.js';
import type { Pool, PoolConnection } from "mysql2/promise";
export default class BaseModel<T extends Record<string, any> & { id?: number }> {
    public table!: string;
    protected pool: Pool;
    protected conn?: PoolConnection;
    protected errors: string[] = [];
    constructor(pool: Pool) {
        this.pool = pool;
    }
    fieldName(key: string) {
        return key;
    }
    getErrors() {
        return this.errors;
    }
    async getConnection(conn: PoolConnection | null = null) {
        this.conn = conn ? conn : (this.conn || await this.pool.getConnection());
        return this.conn;
    }
    // async validate(item: Partial<T>, vdObject: Record<string, any> = {}) {
    //     if (Object.entries(vdObject).length === 0) {
    //         const validation: any[] = [];
    //         for (const field in vdObject) {
    //             const rules = vdObject[field];
    //             const id = item?.id || 0;
    //             const value = item?.[field] || '';
    //             const fieldName = this.fieldName(field);
    //             Object.assign(validation, { [field]: { value, rules, fieldName, id } });
    //             validation.push({ field, value, rules, fieldName, id });
    //         }
    //         if (validation.length) {
    //             const validate = new Validation(this);
    //             await validate.validate(validation);
    //             if (validate.getErrors().length) {
    //                 this.errors = validate.getErrors();
    //                 return false;
    //             } else {
    //                 return true;
    //             }
    //         }
    //     }
    //     return true;
    // }
    async validate(item: Partial<T>, vdObject: Record<string, any> = {}) {

        if (Object.entries(vdObject).length === 0) {
            return true;
        }

        const validation: any[] = [];

        for (const field in vdObject) {
            if (!Object.prototype.hasOwnProperty.call(vdObject, field)) continue;
            const rules = vdObject[field];
            const id = item?.id || 0;
            const value = item?.[field] || '';
            const fieldName = this.fieldName(field);

            validation.push({ field, value, rules, fieldName, id });
        }

        if (validation.length) {
            const validate = new Validation(this);
            await validate.validate(validation);

            if (validate.getErrors().length) {
                this.errors = validate.getErrors();
                return false; // Validation thất bại
            } else {
                return true; // Validation thành công
            }
        }

        return true;
    }

    async query(sql: string, params?: any[]) {
        return this.conn ? this.conn.query(sql, params) : this.pool.query(sql, params);
    }
    async isField(field: string, table: string = this.table) {
        const rowsDeleted = await this.query(`SHOW COLUMNS FROM ${table} LIKE '${field}'`);
        return (rowsDeleted as any[]).length > 0 ? true : false;
    }
    async findOne(where: Record<string, any>, order: Record<string, "ASC" | "DESC"> | boolean = false) {
        const keys = Object.keys(where);
        const values = Object.values(where);
        let sql = `SELECT * FROM \`${this.table}\``;
        // if (keys.length) sql += ` WHERE ${keys.map(k => `\`${k}\`=?`).join(' AND ')}`;
        if (keys.length) {
            const whereClauses = keys.map(k => {
                const value = where[k];
                if (Array.isArray(value)) {
                    values.push(...value);
                    return `\`${k}\` IN (${value.map(() => '?').join(',')})`;
                } else {
                    values.push(value);
                    return `\`${k}\`=?`;
                }
            });
            sql += ` WHERE ${whereClauses.join(' AND ')}`;
        }
        if (order) sql += ` ORDER BY ${order}`;
        sql += ' LIMIT 1';
        const [rows]: any = await this.query(sql, values);
        return rows[0] || null;
    }
    async getById<T = any>(id: number, where: Record<string, any> = {}): Promise<T | null> {
        if (!id || id <= 0) return null;
        where.id = id;
        return await this.findOne(where);
    }
    // async save(item: Partial<T>,) {
    //     try {
    //         if (item.id) {
    //             const fields = Object.keys(item).filter(k => k !== 'id');
    //             const values = fields.map(k => item[k]);
    //             const sql = `UPDATE \`${this.table}\` SET ${fields.map(f => `\`${f}\`=?`).join(', ')} WHERE id=?`;
    //             await this.query(sql, [...values, item.id]);
    //             return item;
    //         } else {
    //             const keys = Object.keys(item);
    //             const values = Object.values(item);
    //             const placeholders = keys.map(() => '?').join(',');
    //             // const sql = "INSERT INTO " + "`" + this.table + "`" + `(${keys.join(',')}) VALUES (${placeholders})`;
    //             const sql = `INSERT INTO \`${this.table}\` (\`${keys.join('`,`')}\`) VALUES (${placeholders})`;
    //             const [result]: any = await this.query(sql, values);
    //             item.id = result.insertId;
    //             return item;
    //         }
    //     } catch (error: any) {
    //         console.log(error.message);
    //         this.errors.push(error.message);
    //         return false;
    //     }
    // }
    async save(item: Partial<T>): Promise<T | false> {
        try {
            if (item.id) {
                const updateData: Record<string, any> = { ...item };
                delete updateData.id;

                if (Object.keys(updateData).length === 0) {
                    return item as T;
                }

                const filter = { id: item.id };
                await this.update(updateData, filter);

                return item as T;
            } else {
                const insertData: Record<string, any> = item;
                const insertId = await this.insert(insertData);
                item.id = insertId;
                return item as T;
            }
        } catch (error: any) {
            console.log(error.message);
            this.errors.push(error.message);
            return false;
        }
    }

    async deleteOne(filter: Record<string, any>) {
        const keys = Object.keys(filter);
        const values = Object.values(filter);
        const where = keys.map(k => `\`${k}\` = ?`).join(' AND ');
        const sql = `DELETE FROM \`${this.table}\` WHERE ${where}`;
        await this.query(sql, values);
        return true;
    }
    async deleteMany(filter: Record<string, any>) {
        try {
            if (!filter || Object.keys(filter).length === 0) {
                throw new Error("empty_filter");
            }
            await this.deleteOne(filter);
            return true;
        } catch (error: any) {
            throw new Error(error.message || "deleteMany_failed");
        }
    }
    async vdSave(item: Partial<T>, vdObject: any | false = false) {
        if (vdObject) {
            if (!(await this.validate(item, vdObject))) {
                throw new Error(this.errors.join(', '));
            }
        }
        return await this.save(item);
    }

    async findWithPagination(
        where: string = "1",
        order: Record<string, "ASC" | "DESC"> | boolean = false,
        page = 1,
        limit = 10,
        join?: string | string[],
        fields: string = "*",
    ): Promise<{
        page: number;
        length: number;
        pageTotal: number;
        recordTotal: number;
        items: T[];
    }> {
        let joinClause = "";
        if (join) joinClause = Array.isArray(join) ? join.join(" ") : join;

        const countSql = `
        SELECT COUNT(DISTINCT \`${this.table}\`.id) AS total
        FROM \`${this.table}\`
        ${joinClause}
        WHERE ${where}
    `;
        const [[{ total }]]: any = await this.query(countSql);
        const pageTotal = Math.ceil(total / limit);
        const offset = (page - 1) * limit;

        let orderBy = "";
        if (order && typeof order === "object") {
            const fieldsOrder = Object.entries(order)
                .map(([k, v]) => `${k} ${v}`)
                .join(", ");
            orderBy = "ORDER BY " + fieldsOrder;
        }
        const sql = `
        SELECT ${fields}
        FROM \`${this.table}\`
        ${joinClause}
        WHERE ${where}
        ${orderBy}
        LIMIT ? OFFSET ?
    `;
        const [rows]: any = await this.query(sql, [limit, offset]);
        return {
            page,
            length: rows.length,
            pageTotal,
            recordTotal: total,
            items: rows as T[],
        };
    }
    async findWithPaginations(
        where: string = "1",
        order: Record<string, "ASC" | "DESC"> | boolean = false,
        page = 1,
        limit = 10,
        join?: string | string[],
        fields: string = "*",
        groupBy?: string
    ): Promise<{
        page: number;
        length: number;
        pageTotal: number;
        recordTotal: number;
        items: T[];
    }> {
        let joinClause = "";
        if (join) joinClause = Array.isArray(join) ? join.join(" ") : join;

        let groupByClause = "";
        if (groupBy) groupByClause = "GROUP BY " + groupBy;

        const countSql = `
    SELECT COUNT(*) AS total FROM (
        SELECT ${this.table}.id 
        FROM \`${this.table}\`
        ${joinClause}
        WHERE ${where}
        ${groupByClause}
    ) AS count_query
`;
        const [[{ total }]]: any = await this.query(countSql);
        const pageTotal = Math.ceil(total / limit);
        const offset = (page - 1) * limit;

        let orderBy = "";
        if (order && typeof order === "object") {
            const fieldsOrder = Object.entries(order)
                .map(([k, v]) => `${k} ${v}`)
                .join(", ");
            orderBy = "ORDER BY " + fieldsOrder;
        }
        const sql = `
    SELECT ${fields}
    FROM \`${this.table}\`
    ${joinClause}
    WHERE ${where}
    ${groupByClause} 
    ${orderBy}
    LIMIT ? OFFSET ?
`;
        const [rows]: any = await this.query(sql, [limit, offset]);

        return {
            page,
            length: rows.length,
            pageTotal,
            recordTotal: total,
            items: rows as T[],
        };
    }
    async find(
        where: string = "1",
        order: Record<string, "ASC" | "DESC"> | boolean = false,
        limit: number | boolean = 10,
        join?: string | string[],
        fields: string = "*"
    ): Promise<T[]> {
        let joinClause = "";
        if (join) joinClause = Array.isArray(join) ? join.join(" ") : join;

        let orderBy = "";
        if (order && typeof order === "object") {
            const fieldsOrder = Object.entries(order)
                .map(([k, v]) => `${k} ${v}`)
                .join(", ");
            orderBy = "ORDER BY " + fieldsOrder;
        }

        let sql = `
        SELECT ${fields}
        FROM \`${this.table}\`
        ${joinClause}
        WHERE ${where}
        ${orderBy}
    `;

        const queryParams: any[] = [];
        let limitClause = "";

        if (typeof limit === 'number' && limit > 0) {
            limitClause = `LIMIT ?`;
            queryParams.push(limit);
        }

        sql += limitClause;

        const [rows]: any = await this.query(sql, queryParams);

        return rows as T[];
    }
    async insert(data: Record<string, any>): Promise<number> {
        const keys = Object.keys(data);
        const values = Object.values(data);

        const placeholders = Array(keys.length).fill('?').join(', ');

        const sql = `INSERT INTO \`${this.table}\` (\`${keys.join('`, `')}\`) VALUES (${placeholders})`;

        const [result]: any = await this.query(sql, values);

        return result.insertId;
    }
    async update(data: Record<string, any>, filter: Record<string, any>): Promise<number> {// update nhiều bản ghi
        const dataKeys = Object.keys(data);
        const filterKeys = Object.keys(filter);

        if (dataKeys.length === 0) {
            return 0;
        }
        if (filterKeys.length === 0) {
            throw new Error("Điều kiện lọc (filter) không được rỗng.");
        }

        const setValues = Object.values(data);
        const setClause = dataKeys.map(k => `\`${k}\`=?`).join(', ');

        const filterValues = Object.values(filter);
        const whereClause = filterKeys.map(k => `\`${k}\`=?`).join(' AND ');

        const allValues = [...setValues, ...filterValues];

        const sql = `
        UPDATE \`${this.table}\` 
        SET ${setClause} 
        WHERE ${whereClause}
    `;

        const [result]: any = await this.query(sql, allValues);

        return result.affectedRows;
    }
    // protected async update(data: Record<string, any>, filter: Record<string, any>): Promise<number> {
    //     if (Object.keys(data).length === 0) {
    //         return 0;
    //     }
    //     if (Object.keys(filter).length === 0) {
    //         throw new Error("Điều kiện lọc (filter) không được rỗng.");
    //     }
    //     const query = knex(this.table) 
    //         .where(filter) 
    //         .update(data);
    //     const sql = query.toString();
    //     const [result]: any = await this.query(sql, query.bindings); 
    //     return result.affectedRows; 
    // }

}
