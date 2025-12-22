import Common from '@src/Common.js';
import SingleController from '@src/controllers/SingleController.js';

export default class PromotionsController extends SingleController {
    md = this.models.promotions;
    actionActive = ['index', 'create', 'detail', 'edit', 'delete', 'deleteone'];
    is_deleted = true;

    async updateBefore(item: this['md']['td'], _itemOld: Partial<this['md']['td']>) {
        const currentUserId = this.request.getUserId();
        item.name = this.request.getPost('name');
        item.description = this.request.getPost('description');
        item.image = this.request.getPost('image');
        item.status = this.request.getPost('status', 1);
        item.store_id = this.request.getPost('store_id', 0);
        item.date_type = this.request.getPost('date_type');
        item.start_date = this.request.getPost('start_date');
        item.end_date = this.request.getPost('end_date');
        item.start_time = this.request.getPost('start_time');
        item.end_time = this.request.getPost('end_time');
        item.day_of_week = this.request.getPost('day_of_week');
        item.nofi_type = this.request.getPost('nofi_type');
        item.flash_type = this.request.getPost('flash_type');
        const postAlias = this.request.getPost('alias');
        if (postAlias) {
            item.alias = postAlias;
        } else {
            if (!item?.id) {
                item.alias = await Common.createAlias(item.name, this.md);
            }
        }

        if (!item.id) {
            // item.created_at = Common.getCurrentTime(); 
            item.created_by = currentUserId;
            item.is_deleted = 0; // Mặc định chưa xóa
        }
        // item.updated_at = Common.getCurrentTime();
        item.updated_by = currentUserId;

        if (item.start_date && item.end_date && item.start_date > item.end_date) {
            throw new Error('Ngày bắt đầu không được lớn hơn ngày kết thúc.');
        }

        return item;
    }
}