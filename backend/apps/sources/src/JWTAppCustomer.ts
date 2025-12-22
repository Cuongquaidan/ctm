import jwt from "jsonwebtoken";
import { FastifyRequest } from 'fastify';

export class JWTAppCustomer {
    static decode(token: any) {
        const JWT_KEY = process.env.JWT_CUSTOMER_KEY || process.env.JWT_KEY || "";
        return jwt.verify(token, JWT_KEY);
    }
    static createToken(customer: any, req: any) {
        const JWT_KEY = process.env.JWT_CUSTOMER_KEY || process.env.JWT_KEY || "";
        const JWT_TIMEOUT_SECONDS = Number(process.env.JWT_CUSTOMER_TIMEOUT || 3600);

        const JWT_AUD = process.env.JWT_AUD;
        const JWT_ISS = process.env.JWT_ISS;
        const ip = req.ip;
        const userAgent = req.headers['user-agent'];

        const payload = {
            'iss': JWT_ISS,
            'aud': JWT_AUD,
            'sub': customer.id,
            'name': customer.fullname,
            'ip': ip,
            'us': userAgent,
            'type': 'customer',
        };

        return jwt.sign(payload, JWT_KEY, {
            algorithm: 'HS256',
            expiresIn: JWT_TIMEOUT_SECONDS
        });
    }
    static verifyToken(req: FastifyRequest) {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new Error("invalid_authorization_header");
        }

        const accessToken = authHeader.split(' ')[1];

        if (!accessToken) throw new Error("invalid_empty_accessToken");

        const payload: any = this.decode(accessToken);

        // if (payload.type !== 'customer') throw new Error("invalid_token_type");

        if (!payload?.sub) throw new Error("invalid_customerid_accessToken");

        const userAgent = req.headers['user-agent'] || 'unknown';
        if (payload.us !== userAgent) throw new Error("invalid_us_accessToken");

        payload.accessToken = accessToken;

        return payload;
    }
}