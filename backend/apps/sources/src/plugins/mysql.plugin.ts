import fp from 'fastify-plugin';
import fastifyMysql from '@fastify/mysql';

export default fp(async (fastify) => {
    await fastify.register(fastifyMysql, {
        promise: true,
        connectionString: `mysql://${process.env.MYSQL_USER || 'root'}:${process.env.MYSQL_PASSWORD || ''
            }@${process.env.MYSQL_HOST || 'localhost'}:${process.env.MYSQL_PORT || 3306
            }/${process.env.MYSQL_DATABASE || 'CTM'}`,
    });
});
