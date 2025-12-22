import jwt from "jsonwebtoken";
import { FastifyRequest } from 'fastify';

export class JWTApp {
    static decode(token: any) {
        const { JWT_KEY } = process.env;
        return jwt.verify(token, JWT_KEY || "");
    }
    static createToken(user: any, req: any) {
        const { JWT_KEY, JWT_AUD, JWT_ISS } = process.env;
        const JWT_TIMEOUT = Number(process.env.JWT_TIMEOUT || 3600)
        const ip = req.ip;
        const userAgent = req.headers['user-agent'];
        const payload = {
            'iss': JWT_ISS,
            'aud': JWT_AUD,
            'sub': user.id,
            'name': user.fullname,
            'ip': ip,
            'us': userAgent,
            'expired': Date.now() + JWT_TIMEOUT * 500,
        };
        return jwt.sign(payload, JWT_KEY || "", { algorithm: 'HS256' });
    }
    static verifyToken(req: FastifyRequest) {
        // if (!accessToken) throw new Error("invalid_empty_accessToken");
        const accessTokenCookie = req.cookies.accessToken;
        // if(!accessTokenCookie || accessToken !== accessTokenCookie) throw new Error("invalid_cookie_accessToken");
        if (!accessTokenCookie) throw new Error("invalid_cookie_accessToken");
        const payload: any = this.decode(accessTokenCookie);
        if (!payload?.sub) throw new Error("invalid_userid_accessToken");
        const userAgent = req.headers['user-agent'] || 'unkowwn';
        if (payload.us !== userAgent) throw new Error("invalid_us_accessToken");
        payload.accessToken = accessTokenCookie;
        return payload;
    }
    static checkSecretKey(key: string) {
        if (key != process.env.JWT_SECRET_KEY) {
            throw new Error("invalid_secret_key");
        }
    }
}