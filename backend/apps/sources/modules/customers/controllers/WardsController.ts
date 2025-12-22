import CustomerController from "@src/controllers/CustomerController.js";

export default class WardsController extends CustomerController {

    async getWardByCityId(request: Request) {
        try {
            const districtCode = this.request.get('cityId');
            const countryId = this.request.get('countryId');

            if (!districtCode) {
                throw new Error("Vui lòng cung cấp mã Quận/Huyện (cityId).");
            }

            const wardsModel = this.models.wards;
            const whereConditions: Record<string, any> = {
                district_code: districtCode,
                // status: 1
            };
            // if (countryId) {
            //     whereConditions.country_id = countryId;
            // }
            const whereParts: string[] = [];
            for (const key in whereConditions) {
                const value = whereConditions[key];
                if (typeof value === 'string') {
                    whereParts.push(`${key} = '${value}'`);
                } else {
                    whereParts.push(`${key} = ${value}`);
                }
            }
            const whereClause = whereParts.join(' AND ');

            const MAX_LIMIT = 10000;

            const wards = await wardsModel.find(
                whereClause,
                {
                    full_name: 'ASC'
                },
                MAX_LIMIT
            );

            const formattedData = wards.map(w => ({
                id: w.code,
                text: w.full_name
            }));

            this.resJsonData(formattedData);

        } catch (error: any) {
            this.resJsonErr(error.message);
        }
    }
}