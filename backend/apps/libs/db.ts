import fastifyMysql from '@fastify/mysql';
import { FastifyInstance } from 'fastify';

export async function registerMySQL(fastify: FastifyInstance) {
    const connectionString = `mysql://${process.env.MYSQL_USER || 'root'}:${process.env.MYSQL_PASSWORD || ''}@${process.env.MYSQL_HOST || 'localhost'}:${process.env.MYSQL_PORT || 3306}/${process.env.MYSQL_DATABASE || 'CTM'}`;

    await fastify.register(fastifyMysql, {
        promise: true, // cho phép dùng async/await
        connectionString,
    });

    console.log(' MySQL plugin registered successfully');
}
