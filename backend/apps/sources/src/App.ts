import Fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";
import routeAdmins from "../modules/admins/routes.js";
import routeCustomers from "../modules/customers/routes.js";
import routesSites from "../modules/sites/routes.js";
import multipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";
import formbody from "@fastify/formbody";
import cookie from "@fastify/cookie";
import session from "@fastify/session";
import path from "path";
import cors from "@fastify/cors";
import Route from "./Route.js";
import { Request } from "./Request.js";
import mysqlPlugin from "./plugins/mysql.plugin.js";
import modelsPlugin from "./plugins/models.plugin.js";
class App {
    static async run() {
        const fastifyServer = Fastify({
            logger: true,
        });
        await fastifyServer.register(cors, {
            origin: process.env.APP_URL?.split(",") || [],
            credentials: true,
        });
        await fastifyServer.register(cookie, {
            secret: "u4V$eP7#r1!q@Zx2M%tB^y9L&g0D*hN8sF+Wc3J=Rj?oK5pT|i>H<lA_Cvb6m",
            parseOptions: {},
        });
        await fastifyServer.register(session, {
            secret: "N5$zM!3wLkY#x9h&Q8fT^2u@oG7rV*jC4D=pJ?e%S1aB|iZ6H>R<yU_E+0nWvt",
            cookie: {
                httpOnly: true,
                sameSite: "lax",
                secure: false,
                path: "/",
            },
            saveUninitialized: false,
            rolling: true,
        });
        await fastifyServer.register(mysqlPlugin);
        await fastifyServer.register(modelsPlugin);
        // console.log(fastifyServer.models);
        await fastifyServer.register(multipart, {
            limits: { fileSize: 20 * 1024 * 1024 },
            attachFieldsToBody: false,
        });
        await fastifyServer.register(fastifyStatic, {
            root: path.join(path.resolve(), "public"),
            prefix: "/",
        });
        await fastifyServer.register(formbody);

        for await (const router of [
            ...routeAdmins,
            ...routeCustomers,
            ...routesSites,
        ]) {
            const method: string = Route.getMethod(router);
            fastifyServer.route({
                url: router.link,
                method,
                handler: async (req: FastifyRequest, reply: FastifyReply) => {
                    try {
                        const mysqlPool = (fastifyServer as any).mysql;
                        const classController = new router.controller(
                            req,
                            reply,
                            fastifyServer,
                            mysqlPool
                        );
                        if (classController[router.action] === undefined) {
                            throw new Error(`Cannot method ${router.action}`);
                        }
                        const code: number = (req.params as { code: number })
                            .code;
                        // const mysqlPool = (fastifyServer as any).mysql;

                        classController.request = new Request(
                            req,
                            reply,
                            mysqlPool
                        );
                        // classController.db = new Transaction(fastifyServer); // <-- truyền MySQL pool
                        // BaseModel.setupFastify(fastifyServer);
                        // BaseModel.setFastify(app);
                        // classController.fastify = fastifyServer;
                        classController.module = router.modules;
                        classController.controller = router.controller;
                        classController.action = router.action;
                        await classController.request.start();
                        // await classController.db.init();
                        await classController.autoload();
                        await classController.beforeRouter();
                        if (req.params && code) {
                            await classController[router.action](code);
                        } else {
                            await classController[router.action]();
                        }
                        await classController.request.end();
                        return;
                    } catch (error: any) {
                        return reply
                            .code(400)
                            .send({ msg: error.message, status: 400 });
                    }
                },
            });
        }
        fastifyServer.setNotFoundHandler(async (request, reply) => {
            return reply.code(404).send({
                msg: `Cannot find ${request.method} ${request.url}`,
                status: 404,
            });
        });
        const start = async () => {
            try {
                await fastifyServer.listen({
                    port: Number(process.env.PORT),
                    host: "0.0.0.0",
                });
                console.log(`Start server success at port ${process.env.PORT}`);
            } catch (err) {
                fastifyServer.log.error(err);
                process.exit(1);
            }
        };
        start();
    }
}
export default App;
