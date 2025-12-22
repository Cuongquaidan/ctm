import { Request } from "@src/Request.js";
import { FastifyRequest, FastifyReply } from 'fastify';
import { FastifyInstance } from 'fastify';
import { Pool } from "mysql2/promise";
import { AppModels } from "@src/plugins/models.plugin.js";

export default class CoreController {
    module = 'admins';
    controller: any;
    action: any;
    langCode = 'vi';
    langId = '1';
    params: any = {};
    user: any;
    userId: number = 0;
    userObjectId: any;
    customer: any;
    customerId: number = 0;
    customerObjectId: any;
    groupId: number = 0;
    protected pool: Pool;
    req: FastifyRequest;
    res: FastifyReply;
    // db!: Transaction;
    request!: Request;
    protected mysql!: Pool;
    protected models: AppModels;
    constructor(req: FastifyRequest, res: FastifyReply, fastifyServer: FastifyInstance, pool: Pool) {
        this.req = req;
        this.res = res;
        this.params = req.params;
        this.models = fastifyServer.models;
        // this.mysql = (fastifyServer as any).mysql as Pool;
        this.pool = pool;
        // this.request = new Request(req, res, this.mysql!);
    }
    async beforeRouter() { }
    async autoload() { }
    resJson(data: any) {
        this.res.send(data);
    }
    resJsonData(data: any, status = 200) {
        this.res.send({ data, status });
    }
    resJsonErr(msg: string, status = 400) {
        this.res.send({ msg, status });
    }
}