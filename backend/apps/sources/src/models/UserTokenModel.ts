import SingleModel from '@src/SingleModel.js';
import { JWTApp } from '@src/JWTApp.js';
import { FastifyRequest } from 'fastify';
import { v4 as uuidv4 } from 'uuid';
// import UserModel from './UserModel.js';
export interface UserTokenData {
	userId: number;
	user: string;
	accessToken: string;
	refreshToken: string;
	expiredAt: number;
	expiredRefreshAt: number;
	ip?: string;
	us?: string;
}

export default class UserTokenModel extends SingleModel<UserTokenData[]> {
	table = "usertoken";
	validateApiCreate = {
		'userId': 'required'
	};
	async createByUser(user: any, req: FastifyRequest, refreshToken: string | false = false) {
		let userToken: any = false;
		if (refreshToken) {
			const params: any = { userId: user.id, refreshToken };
			userToken = await this.findOne(params);
			if (!userToken) throw new Error("invalid_refresh_token");
			if (userToken.us !== req.headers['user-agent']) throw new Error("invalid_refresh_token");
			if (userToken.expiredRefreshAt < Date.now()) throw new Error("invalid_expired_refresh_token");
		} else {
			userToken = {};
			userToken.userId = user.id;
			// userToken.userId = user.id;
		}
		const JWT_TIMEOUT = Number(process.env.JWT_TIMEOUT || 3600);
		userToken.expiredAt = Date.now() + JWT_TIMEOUT * 500;
		userToken.expiredRefreshAt = Date.now() + JWT_TIMEOUT * 1000 * 24 * 7;
		userToken.accessToken = JWTApp.createToken(user, req);
		userToken.refreshToken = uuidv4();
		userToken.ip = req.ip;
		userToken.us = req.headers['user-agent'] || 'unknown';
		const tokenId = await this.vdSave(userToken, this.validateApiCreate);
		if (!tokenId) throw new Error("invalid_save_user_token");
		return userToken;
	}
	async refreshToken(_this: any) {
		// const accessToken = String(this.req.headers['auth-token']);
		// const accessToken = String(this.req.cookies?.accessToken);
		const tokenObj = JWTApp.verifyToken(_this.req);
		const userId = tokenObj.sub;
		// const userModel = new UserModel(_this.fastify.mysql);
		const mdClass = _this.models.user;
		const user = await mdClass.findOne({ id: userId, is_deleted: 0, status: 1 });
		if (!user) throw new Error("invalid_user_accessToken");
		const refreshToken = _this.req.cookies?.refreshToken;
		if (!refreshToken) throw new Error("invalid_refresh_token");
		const userToken = await this.createByUser(user, _this.req, refreshToken);
		_this.res.setCookie('refreshToken', userToken.refreshToken, {
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			path: '/',
			maxAge: 60 * 60 * 24 * 7
		});
		_this.res.setCookie('accessToken', userToken.accessToken, {
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			path: '/',
			maxAge: 60 * 60 * 24 * 7
		});
		return userToken;
	}
}