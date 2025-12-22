import jwt from "jsonwebtoken";
import { FastifyRequest } from 'fastify';

export class CustomerJWTApp {

    private static getSecret(): string {
        return process.env.JWT_SECRET_KEY || "";
    }

    static decode(token: string) {
        const secret = this.getSecret();
        if (!secret) throw new Error("CUSTOMER_JWT_KEY is missing");
        return jwt.verify(token, secret);
    }

    static createToken(customer: any, req: any, expiresInSeconds?: number) {
        const secret = this.getSecret();
        if (!secret) throw new Error("CUSTOMER_JWT_KEY is missing");

        const { JWT_AUD, JWT_ISS } = process.env;
        const timeout = expiresInSeconds || Number(process.env.JWT_TIMEOUT || 3600);

        const payload = {
            'iss': JWT_ISS,
            'aud': JWT_AUD,
            'sub': customer.id,
            'name': customer.fullname,
            'us': req.headers['user-agent'],
            'type': 'customer'
        };

        return jwt.sign(payload, secret, {
            algorithm: 'HS256',
            expiresIn: timeout
        });
    }

    static verifyToken(req: FastifyRequest) {
        const customHeaderToken = req.headers['auth-token'];
        let accessToken: string | undefined;
        if (customHeaderToken) {
            accessToken = Array.isArray(customHeaderToken) ? customHeaderToken[0] : customHeaderToken;
        }
        if (!accessToken) {
            throw new Error("invalid_empty_Auth-Token");
        }
        const payload: any = this.decode(accessToken);
        if (!payload?.sub) throw new Error("invalid_userid_accessToken");
        const userAgent = req.headers['user-agent'] || 'unkowwn';
        if (payload.us !== userAgent) throw new Error("invalid_us_accessToken");
        payload.accessToken = accessToken;
        return payload;
    }
}