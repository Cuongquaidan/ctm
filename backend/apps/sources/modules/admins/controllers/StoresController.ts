import Common from '@src/Common.js';
import SingleController from '@src/controllers/SingleController.js';

export default class StoresController extends SingleController {
    md = this.models.stores;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = true;

    async updateBefore(item: this['md']['td']) {
        const currentUserId = this.request.getUserId();

        item.name = this.request.getPost('name');
        item.des = this.request.getPost('des');
        item.activity = this.request.getPost('activity');
        item.phone = this.request.getPost('phone');
        item.telephone = this.request.getPost('telephone');
        item.image = this.request.getPost('image');
        item.email = this.request.getPost('email');
        item.status = this.request.getPost('status', 1);
        item.ctm_discount = this.request.getPost('ctm_discount', 0);

        item.country_id = this.request.getPost('country_id');
        item.province_id = this.request.getPost('province_id');
        item.district_id = this.request.getPost('district_id');
        item.ward_id = this.request.getPost('ward_id');
        item.address = this.request.getPost('address');
        item.lat = this.request.getPost('lat');
        item.lng = this.request.getPost('lng');

        if (!item.id || this.request.getPost('register_id')) {
            item.register_id = this.request.getPost('register_id');
        }

        const postAlias = this.request.getPost('alias');
        if (postAlias) {
            item.alias = postAlias;
        } else if (!item.id && item.name) {
            item.alias = await Common.createAlias(item.name, this.md);
        }

        // const provinceName = await Common.getProvinceNameById(item.province_id);
        // const districtName = await Common.getDistrictNameById(item.district_id);
        // const wardName = await Common.getWardNameById(item.ward_id);

        const addressParts = [
            item.address,
            // wardName,
            // districtName,
            // provinceName
        ].filter(part => part);

        item.fulladdress = addressParts.join(', ');


        if (!item.id) {
            // item.created_at = Common.getCurrentTime(); 
            item.created_by = currentUserId;
            item.is_deleted = 0;

            item.review_total = 0;
            item.review_point = 0;
        }

        // item.updated_at = Common.getCurrentTime();
        item.updated_by = currentUserId;

        return item;
    }
}