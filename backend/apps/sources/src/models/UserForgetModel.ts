
import SingleModel from '../SingleModel.js';
export interface UserForgetData {
	username?: string;
	email?: string;
	phone?: string;
	otp?: number;
	expiredAt?: string;
	created_at?: string;
	created_by?: string;
	updated_at?: string;
	updated_by?: string;
	is_deleted?: number;
}
export default class UserForgetModel extends SingleModel<UserForgetData> {
	table = "user_forgets"
} 