import SingleModel from '../SingleModel.js';
import GroupsModel from './GroupsModel.js';
export interface PermissionData {
	id: number;
	group_id?: number;
	admin_function_id?: number;
	module?: string;
	controller?: string;
	action?: string;
	code?: number;
	vf?: number;
	is_deleted?: number;
}

export default class PermissionModel extends SingleModel<PermissionData> {
	public table = 'permissions';


	async getPermissionByFunction(fId: number, gId: number) {
		const params = {
			'adminFunctionId': fId,
			'group_id': Number(gId)
		};
		return this.findOne(params);
	}
	async checkPermission(moduleName: string, controller: string, action: string, pars: any, group_id: number) {
		if (GroupsModel.isAdm(group_id)) return true;
		const code = pars.code ? 1 : 0;
		const params: any = {
			'module': moduleName,
			'controller': controller,
			'action': action,
			'code': code
		};
		if (await this.skipPermission(params)) {
			return true;
		}
		params.status = { $in: [0, 2] };
		if (!await this.findOne(params)) {
			return true;
		}
		params.group_id = group_id;
		delete params.status;
		const item = await this.findOne(params)
		if (item) return item;
		return false;
	}
	// async deleteBygroup_id($id) {
	// 	$database = self:: openConnection();
	// 	$query = "DELETE FROM permissions WHERE group_id = :id ";
	// 	$database -> prepare($query);
	// 	$database -> bindValue(':id', $id);
	// 	$database -> execute();
	// }
	// async uncheckBygroup_id(group_id: number, adminFunctionIds: number[]) {
	// 	if (adminFunctionIds.length) {
	// 		const res = await PermissionModel.model.deleteMany({ group_id, adminFunctionId: { $in: adminFunctionIds } });
	// 	} else {
	// 		const res = await PermissionModel.model.deleteMany({ group_id });
	// 	}
	// }
	async getFuncRole(adminFunctionId: number, group_id: any) {
		if (GroupsModel.isAdm(group_id)) return true;
		const found = await this.findOne({ adminFunctionId, group_id });
		return found;
	}
	async skipPermission(per: any) {
		const data = [
			{
				'module': 'admin',
				'controller': 'users',
				'action': 'profile',
				'code': 0
			},
			{
				'module': 'admin',
				'controller': 'users',
				'action': 'editProfile',
				'code': 0
			},
			{
				'module': 'admin',
				'controller': 'users',
				'action': 'changePassword',
				'code': 0
			}
		];
		if (data.includes(per)) {
			return true;
		}
		return false;
	}
} 