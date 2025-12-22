// import Common from "@src/Common.js";
import CustomerController from "@src/controllers/CustomerController.js";
import CustomerAddressModel, { CustomerAddressData } from "@src/models/CustomerAddressModel.js";
import CustomerModel from "@src/models/CustomerModel.js";

export default class CustomerAddressController extends CustomerController {
    async getAddresses() {
        const customerId = this.customerId;
        const customerAddress = new CustomerAddressModel(this.pool)

        const whereClause = `customer_id = ${customerId} AND is_deleted = 0 AND status = 1`;
        const MAX_LIMIT = 10000;

        const addresses = await customerAddress.find(
            whereClause,
            {
                // is_default: 'DESC',
                created_at: 'DESC'
            },
            MAX_LIMIT

        );

        this.resJsonData(addresses);
    }
    async updateAddress() {
        try {
            if (!this.request.isPost()) {
                throw new Error("invalid_post_403");
            }
            const customerId = this.customer.id;
            const addressId = this.request.getParam('id');
            const inputData: CustomerAddressData = {
                id: addressId ? Number(addressId) : undefined,
                customer_id: customerId,
                name: this.request.getPost('name'),
                phone: this.request.getPost('phone'),
                address: this.request.getPost('address'),
                country_id: this.request.getPost('country_id'),
                province_id: this.request.getPost('province_id'),
                district_id: this.request.getPost('district_id'),
                ward_id: this.request.getPost('ward_id'),
                fulladdress: this.request.getPost('fulladdress'),
                // is_default: this.request.getPost('is_default', 0), 
                is_deleted: 0,
                status: 1
            };
            const customerAddress = new CustomerAddressModel(this.pool);
            if (inputData.status === 1) {
                await customerAddress.update(
                    { customer_id: customerId },
                    { status: 0 }
                );
            }
            const item = await customerAddress.vdSave(inputData);
            if (!item) {
                throw new Error('Lỗi khi lưu hoặc cập nhật địa chỉ.');
            }
            this.resJsonData(item);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async getAddressDetail() {
        try {

            const addressId = this.request.getParam('addressId');

            const customerId = this.customerId;

            if (!addressId) {
                throw new Error("address_id_required");
            }

            const customerAddressModel = new CustomerAddressModel(this.pool);

            const addressDetail = await customerAddressModel.findOne({
                id: addressId,
                customer_id: customerId,
                is_deleted: 0
            });

            if (!addressDetail) {
                this.resJsonErr('Địa chỉ không tồn tại hoặc không thuộc về bạn.');
                return;
            }

            this.resJsonData(addressDetail);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async removeAddress() {
        try {
            const rawAddressId = this.request.getParam('addressId');
            const addressId = Number(rawAddressId);
            const customerId = this.customer.id;

            if (!addressId || addressId === 0) {
                throw new Error("address_id_required");
            }

            const customerAddressModel = new CustomerAddressModel(this.pool);
            const customerModel = new CustomerModel(this.pool);

            const existingAddress = await customerAddressModel.findOne({
                id: addressId,
                customer_id: customerId,
                is_deleted: 0
            });

            if (!existingAddress) {
                throw new Error('invalid_404');
            }

            existingAddress.is_deleted = 1;

            await customerAddressModel.vdSave(existingAddress);

            const customerInfo = await customerModel.findOne({ id: customerId });

            if (customerInfo && customerInfo.address_id === addressId) {

                const newDefaultAddress = await customerAddressModel.findOne({
                    customer_id: customerId,
                    is_deleted: 0
                });
                console.log(newDefaultAddress);

                const newDefaultId = newDefaultAddress ? newDefaultAddress.id : 0;

                customerInfo.address_id = newDefaultId;
                await customerModel.vdSave(customerInfo);

            }

            this.resJsonData({ message: 'Địa chỉ có ID ' + addressId + ' đã được xóa thành công.' });

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async setAsDefault() {
        try {
            if (!this.request.isPost()) {
                throw new Error("invalid_post_403");
            }

            const customerId = this.customer.id;
            const rawAddressId = this.request.getPost('addressId');
            const addressId = Number(rawAddressId);

            if (!addressId || addressId === 0) {
                throw new Error('address_id_required');
            }

            const customerAddressModel = new CustomerAddressModel(this.pool);
            const customerModel = new CustomerModel(this.pool);

            const existingAddress = await customerAddressModel.findOne({
                id: addressId,
                customer_id: customerId,
                is_deleted: 0
            });

            if (!existingAddress) {
                throw new Error('invalid_404');
            }

            // await customerAddressModel.update(
            //     { customer_id: customerId },
            //     { status: 1 }
            // );
            // await customerAddressModel.update(
            //     { id: addressId },
            //     { status: 1 }
            // );

            const customerInfo = await customerModel.findOne({ id: customerId });

            if (!customerInfo) {
                throw new Error('Customer not found.');
            }

            customerInfo.address_id = addressId;

            await customerModel.vdSave(customerInfo);

            this.resJsonData({
                message: 'Địa chỉ đã được đặt làm mặc định thành công.',
                address_id: addressId
            });

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
    async getDefaultAddress() {
        try {
            const customerId = this.customer.id;

            const customerModel = new CustomerModel(this.pool);
            const customerAddressModel = new CustomerAddressModel(this.pool);

            const customerInfo = await customerModel.findOne({ id: customerId });

            if (!customerInfo) {
                throw new Error('Customer not found.');
            }

            const defaultAddressId = customerInfo.address_id;

            if (!defaultAddressId) {
                return this.resJsonData({
                    message: 'Không tìm thấy địa chỉ mặc định.',
                    address: null
                });
            }

            const defaultAddress = await customerAddressModel.findOne({
                id: defaultAddressId,
                customer_id: customerId,
                is_deleted: 0
            });

            if (defaultAddress) {
                this.resJsonData(defaultAddress);
            } else {
                this.resJsonData({
                    message: 'Không tìm thấy địa chỉ mặc định hoặc địa chỉ đã bị xóa.',
                    address: null
                });
            }

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}
