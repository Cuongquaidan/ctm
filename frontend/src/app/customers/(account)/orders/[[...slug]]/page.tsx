"use client"
import Pagination from '@/components/ui/Pagination';
import SectionHeader from '@/components/ui/SectionHeader';
import { fetchOrders } from '@/lib/api/order';
import { OrderStatusColor, OrderStatusLabel } from '@/lib/helper/ui';
import { Order } from '@/types/common.types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
  const params = useParams();
  const [data, setData] = useState<Order[]>([]);
  const { slug } = params;
  const handleFetchOrders = async () => {
    const resData = await fetchOrders(slug as string);
    setData(resData);
  }
  useEffect(() => {
    handleFetchOrders();
  }, [])
  return (
    <div className="dashboard-orders">
      <SectionHeader
        title="Đơn hàng của tôi"
      ></SectionHeader>
      <div className="order-tab dashboard-bg-box">
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr className="text-center">
                <th className="text-start">ID</th>
                <th className="text-start">Tên sản phẩm</th>
                <th className="w-90">Tổng tiền</th>
                <th className="w-90">Trạng thái</th>
                <th className="w-120">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((order) => (
                <tr key={order.id}>
                  <td className="product-image">{order.id}</td>
                  <td>
                    <h6>{order.name}</h6>
                  </td>
                  <td className="text-center text-theme fw-600">{order.total}</td>
                  <td className="text-center"><span className={OrderStatusColor[order.status]}>{OrderStatusLabel[order.status]}</span></td>
                  <td className="d-flex justify-content-center">
                    <a className="btn p-0 text-warning" target="_blank" href="https://ca-ctm.systems.com.vn/customers/orderInvoice/106" title="Hóa đơn"><i className="far fa-print"></i></a>
                    <a className="btn p-0 text-info mx-2" href="https://ca-ctm.systems.com.vn/customers/orderInfo/106" title="Chi tiết"><i className="far fa-info-circle"></i></a>
                    <a className="btn p-0 text-warning" href="https://ca-ctm.systems.com.vn/customers/orderTracking/106" title="Tình trạng đơn hàng"><i className="far fa-truck"></i></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalPages={3}></Pagination>
        </div>
      </div>
    </div>

  )
}

export default page