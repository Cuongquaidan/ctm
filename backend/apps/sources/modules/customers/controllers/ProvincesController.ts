import CustomerController from "@src/controllers/CustomerController.js";

export default class ProvincesController extends CustomerController {

    async getProvinces(request: Request) {
        try {
            const countryId = this.request.get('countryId');
            const provinceModel = this.models.provinces;

            const whereParts: string[] = [];
            if (countryId) {
                whereParts.push(`country_id = '${countryId}'`);
            }

            const whereClause = whereParts.length > 0 ? whereParts.join(" AND ") : "1";
            const MAX_LIMIT = 1000;

            const provinces = await provinceModel.find(
                whereClause,
                { name: 'ASC' },
                MAX_LIMIT
            );

            const formattedData = provinces.map(p => ({
                id: p.code,
                text: p.name
            }));

            this.resJsonData(formattedData);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }

}