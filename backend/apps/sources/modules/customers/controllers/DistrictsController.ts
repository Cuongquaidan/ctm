import CustomerController from "@src/controllers/CustomerController.js";

export default class DistrictsController extends CustomerController {

    async getCityByStateId(request: Request) {
        try {
            const provinceCode = this.request.get('stateId');

            if (!provinceCode) {
                throw new Error("Vui lòng cung cấp mã Tỉnh/Thành phố (stateId).");
            }

            const districtsModel = this.models.districts;

            const whereClause = `province_code = '${provinceCode}'`;
            const MAX_LIMIT = 1000;

            const districts = await districtsModel.find(
                whereClause,
                {
                    name: 'ASC'
                },
                MAX_LIMIT
            );

            const formattedData = districts.map(p => ({
                id: p.code,
                text: p.full_name
            }));

            this.resJsonData(formattedData);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}