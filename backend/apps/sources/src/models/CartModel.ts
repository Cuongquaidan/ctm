import SingleModel from '@src/SingleModel.js';
import { Request } from '@src/Request.js';
import CartItemModel, { CartItemData } from './CartItemModel.js';
import ProductModel, { ProductPricesData } from './ProductsModel.js';
import VoucherModel from './VouchersModel.js';
import VoucherStoreModel from './VoucherStoreModel.js';
// export interface CartsData extends CartData {
//     totalQuantity: number;
// }
interface CartCalculationResult {
    itemTotal: number;
    itemStoreTotal: string;
    totalQuantity: number;
}
function transformToPriceData(item: any): ProductPricesData {
    return {
        product_id: item.product_id,
        price: Number(item.price || 0),
        expense: Number(item.expense || item.price || 0),
        package_id: item.package_id,
        product_price_id: item.product_price_id,
    };
}
export interface CartData {
    id?: number;
    customer_id?: number;
    voucher_id?: number | null;
    voucher_store_id?: string;
    payment_method_id?: number;
    item_total?: number;
    item_store_total?: string;
    ahamove_service_id?: string;
    total_quantity?: number
}

export default class CartModel extends SingleModel<CartData> {
    table = 'cart';
    vdObject = {
        customer_id: 'integer|min(0)',
        voucher_id: 'integer|min(1)',
        voucher_store_id: 'maxLen(500)',
        payment_method_id: 'numeric|min(1)',
        item_total: 'numeric|min(0)',
        item_store_total: 'maxLen(1000)',
        ahamove_service_id: 'maxLen(255)',
    };
    fieldName(key: any) {
        const data: any = {
            id: 'ID Giỏ hàng',
            customer_id: 'ID Khách hàng',
            voucher_id: 'ID Voucher chung',
            voucher_store_id: 'ID Voucher Cửa hàng',
            payment_method_id: 'Phương thức thanh toán',
            item_total: 'Tổng giá trị hàng hóa',
            item_store_total: 'Tổng giá trị theo cửa hàng',
            ahamove_service_id: 'Mã dịch vụ AhaMove',
        };
        return data[key] ?? key;
    }
    async getCustomerCart(authCustomerId: number): Promise<CartData | null> {
        if (authCustomerId <= 0) {
            return null;
        }
        const customerId = Number(authCustomerId);

        const cart = await this.findOne({ customer_id: customerId });

        return cart;
    }
    async getCartSummary(authCustomerId: number): Promise<any | null> {
        if (authCustomerId <= 0) {
            throw new Error("invalid_customers");

        }
        const customerId = Number(authCustomerId);

        const currentCart = await this.getCustomerCart(customerId);
        const cartItemModel = new CartItemModel(this.pool)
        const totalQuantity = await cartItemModel.getTotalProductCount(customerId);

        if (!currentCart || !currentCart.id) {
            return null;
        }
        return {
            cart_id: currentCart.id,
            // item_total: currentCart.item_total || 0,
            total_quantity: totalQuantity ?? 0,
            // voucher_id: currentCart.voucher_id || null,
            // payment_method_id: currentCart.payment_method_id || null,
        };
    }

    async getRawCartItems(customerId: number): Promise<CartItemData[]> {
        if (!customerId || customerId <= 0) {
            return [];
        }

        const sql = `
        SELECT 
            ci.*,                                      
            pp.price,                                  
            pp.package_id,
            p.image,                                    
            p.store_id                                  
        FROM 
            cart_item AS ci
        JOIN 
            product_price AS pp ON ci.product_price_id = pp.id
        JOIN
            product AS p ON ci.product_id = p.id      
        WHERE 
            ci.customer_id = ?; 
    `;

        const [rows] = await this.query(sql, [customerId]);
        return rows as CartItemData[];
    }
    async recalculateCartTotals(cartId: number, authCustomerId: number): Promise<CartCalculationResult> {
        if (!cartId || !authCustomerId) {
            return { itemTotal: 0, itemStoreTotal: "{}", totalQuantity: 0 };
        }
        const customerId = Number(authCustomerId);

        const rawItems = await this.getRawCartItems(customerId);

        const customerInfo = { id: customerId };
        const calculatedItems = await this.calculateFinalCartItems(rawItems, customerInfo);

        let totalItemCost = 0;
        const itemStoreTotalMap: { [key: number]: number } = {};
        let totalQuantity = 0;

        if (calculatedItems && calculatedItems.length > 0) {
            calculatedItems.forEach((item: any) => {

                if (item.is_order !== 1) {
                    if (item.is_order === 0 || item.is_order === null || item.is_order === undefined) {
                        return; // Bỏ qua item chưa được chọn hoặc item không có trạng thái
                    }
                    // console.log('DEBUG: Full Item Object:', item);
                    return;
                }

                const unitPrice = Number(item.final_unit_price || 0);
                const expense = unitPrice;
                const quantity = Number(item.quantity || 0);
                const sellerId = Number(item.seller_id || 0);

                const itemCost = expense * quantity;

                if (itemCost > 0) {
                    totalItemCost += itemCost;
                    itemStoreTotalMap[sellerId] = (itemStoreTotalMap[sellerId] || 0) + itemCost;
                }
                // console.log('--- DEBUG CALCULATING ITEM ---');
                // console.log(`ID: ${item.id} | Name: ${item.product_name || 'N/A'}`);
                // console.log(`Unit Price (Expense): ${expense.toLocaleString('vi-VN')} đ`);
                // console.log(`Quantity: ${quantity}`);
                // console.log(`Line Cost: ${itemCost.toLocaleString('vi-VN')} đ`);
                // console.log('------------------------------');

                totalQuantity += quantity;
            });
        }

        const updateData: Partial<CartData> = {
            item_total: totalItemCost,
            item_store_total: JSON.stringify(itemStoreTotalMap),
        };

        await this.update(updateData, { id: cartId });

        return {
            itemTotal: totalItemCost,
            itemStoreTotal: JSON.stringify(itemStoreTotalMap),
            totalQuantity: totalQuantity,
        };
    }

    async calculateFinalCartItems(rawItems: CartItemData[], customer: any) {
        const productModel = new ProductModel(this.pool);

        const calculatedItems = await Promise.all(
            rawItems.map(async (item) => {
                const priceData = transformToPriceData(item);

                const finalPriceObject: ProductPricesData | null = await productModel.getCalculatedSinglePrice(priceData, customer);

                return {
                    ...item,
                    final_unit_price: finalPriceObject?.expense,
                    store_id: finalPriceObject?.store_id
                };
            })
        );
        return calculatedItems;
    }

    async findById(id: number): Promise<CartData | null> {
        if (!id) return null;
        return this.findOne({ id: id });
    }
    async getDatas(
        request: Request,
    ): Promise<{
        page: number;
        pageLen: number;
        pageTotal: number;
        recordTotal: number;
        data: CartData[];
    }> {
        const customerIdSh = request.get("customerIdSh");
        const voucherIdSh = request.get("voucherIdSh");

        const whereParts: string[] = [];

        if (customerIdSh) {
            whereParts.push(`cart.customer_id = ${Number(customerIdSh)}`);
        }

        if (voucherIdSh) {
            whereParts.push(`cart.voucher_id = ${Number(voucherIdSh)}`);
        }

        const minTotalSh = request.get("minTotalSh");
        if (minTotalSh) {
            whereParts.push(`cart.item_total >= ${Number(minTotalSh)}`);
        }

        const whereClause = whereParts.length ? whereParts.join(" AND ") : "1";

        const page = parseInt(request.get("page", "1"));
        const pageLen = parseInt(request.get("pageLen", "10"));
        const finalPageLen = Math.max(1, pageLen);

        const data = await this.findWithPagination(
            whereClause,
            { "cart.id": "DESC" },
            page,
            finalPageLen
        );

        return {
            page: data.page,
            pageLen: finalPageLen,
            pageTotal: data.pageTotal,
            recordTotal: data.recordTotal,
            data: data.items,
        };
    }
    async getStoreTotal(customerId: number, storeId: number): Promise<number> {
        const sql = `
        SELECT SUM(ci.quantity * pp.price) AS total
        FROM cart_item ci
        JOIN product_price pp ON ci.product_price_id = pp.id
        WHERE ci.customer_id = ? AND ci.seller_id = ? AND ci.is_order = 1
    `;

        const data: any = await this.query(sql, [customerId, storeId]);

        if (data && data[0] && data[0][0]) {
            const totalValue = data[0][0].total;
            return Number(totalValue || 0);
        }

        if (data && data.length > 0) {
            return Number(data[0].total || 0);
        }

        return 0;
    }
    async calculateSummary(customerId: number) {
        const updatedCart = await this.getCustomerCart(customerId);
        if (!updatedCart) return { itemTotal: 0, totalDiscount: 0, finalTotal: 0 };

        const itemTotal = Number(updatedCart.item_total || 0);
        let totalDiscount = 0;
        let globalDiscount = 0;
        let storeDiscount = 0;

        if (updatedCart.voucher_id) {
            const voucher = await new VoucherModel(this.pool).findOne({ id: updatedCart.voucher_id });
            if (voucher) {
                globalDiscount = new VoucherModel(this.pool).calculateMaxDiscount(voucher, itemTotal);
            }
        }

        if (updatedCart.voucher_store_id) {
            const storeVoucherMap = JSON.parse(updatedCart.voucher_store_id);
            const storeTotals = updatedCart.item_store_total ? JSON.parse(updatedCart.item_store_total) : {};

            for (const storeId in storeVoucherMap) {
                const vId = storeVoucherMap[storeId];
                if (vId > 0) {
                    const vDetails = await new VoucherStoreModel(this.pool).findOne({ id: vId });
                    if (vDetails) {
                        storeDiscount += new VoucherModel(this.pool).calculateMaxDiscount(vDetails, storeTotals[storeId] || 0);
                    }
                }
            }
        }

        totalDiscount = globalDiscount + storeDiscount;
        return {
            itemTotal,
            shippingFee: 0,
            totalDiscount,
            finalTotal: Math.max(0, itemTotal - totalDiscount)
        };
    }
}