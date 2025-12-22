import { Order, OrderStatus } from "@/types/common.types";

export const orders: Order[] = [
    {
        id: 106,
        name: "Sản phẩm siêu test",
        total: 20000,
        status: OrderStatus.COMPLETED,
    },
    {
        id: 105,
        name: "Sản phẩm siêu test",
        total: 70000,
        status: OrderStatus.COMPLETED,
    },
    {
        id: 104,
        name: "Sản phẩm siêu test",
        total: 70000,
        status: OrderStatus.COMPLETED,
    },
    {
        id: 103,
        name: "Sản phẩm dùng để test, sản phẩm siêu test",
        total: 113000,
        status: OrderStatus.COMPLETED,
    },
    {
        id: 102,
        name: "Sản phẩm siêu test, sản phẩm siêu test",
        total: 115000,
        status: OrderStatus.CANCELLED,
    },
    {
        id: 101,
        name: "Sản phẩm siêu test, sản phẩm siêu test",
        total: 115000,
        status: OrderStatus.CANCELLED,
    },
    {
        id: 99,
        name: "Sản phẩm dùng để test, sản phẩm siêu test",
        total: 115000,
        status: OrderStatus.CANCELLED,
    },
    {
        id: 98,
        name: "Sản phẩm dùng để test, sản phẩm siêu test",
        total: 190000,
        status: OrderStatus.COMPLETED,
    },
    {
        id: 97,
        name: "Sản phẩm siêu test",
        total: 108000,
        status: OrderStatus.COMPLETED,
    },
    {
        id: 96,
        name: "Sản phẩm siêu test",
        total: 110000,
        status: OrderStatus.NEW,
    },
];
