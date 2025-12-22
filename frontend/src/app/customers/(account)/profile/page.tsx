"use client"
import ModalChangePassword from '@/components/features/modal/ModalChangePassword';
import ModalUpdateProfile from '@/components/features/modal/ModalUpdateProfile';
import { useAuthContext } from '@/components/features/provider/AuthProvider'
import SectionHeader from '@/components/ui/SectionHeader';
import { formatVietnameseDateTime } from '@/lib/helper';
import ImageError from '@/components/ui/ImageError'
import React, { useState } from 'react'

function page() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isChangingPassword, setIsChangingPassword] = useState<boolean>(false);
  const { user }
    = useAuthContext();

  // Format date to Vietnamese format
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return 'Chưa cập nhật';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };



  return (
    <>
      {isEditing && (
        <ModalUpdateProfile onClose={() => {
          setIsEditing(false)
        }}></ModalUpdateProfile>
      )}
      {isChangingPassword && (
        <ModalChangePassword onClose={() => {
          setIsChangingPassword(false)
        }}></ModalChangePassword>
      )}
      <div className="dashboard-profile">
        <SectionHeader title='Thông tin tài khoản'></SectionHeader>

        <div className="profile-detail dashboard-bg-box">
          <div className="profile-name-detail">
            <div className="d-sm-flex align-items-center d-block">
              <h4 className="fw-bold">{user?.fullname}</h4>
            </div>
            <a className="cursor-pointer" onClick={() => setIsEditing(true)}>Sửa</a>
          </div>

          <div className="location-profile">
            <ul>
              <li>
                <div className="location-box">
                  <i className="far fa-calendar"></i>
                  <h6>Thời gian tạo {formatVietnameseDateTime(user?.created_at)}</h6>
                </div>
              </li>
            </ul>
          </div>

          <div className="profile-description">
            <div className="profile-about dashboard-bg-box p-0">
              <div className="row">
                <div className="col-xxl-7">
                  <div className="dashboard-title mb-3">
                    <h3>Thông tin</h3>
                  </div>

                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Giới tính :</td>
                          <td>{user?.gender == 1 ? 'Nam' : user?.gender == 0 ? 'Nữ' : 'Chưa cập nhật'}</td>
                        </tr>
                        <tr>
                          <td>Sinh nhật :</td>
                          <td>{formatDate(user?.birthday as string)}</td>
                        </tr>
                        <tr>
                          <td>Email :</td>
                          <td>{user?.email || 'Chưa cập nhật'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="dashboard-title mb-3">
                    <h3>Đăng nhập</h3>
                  </div>

                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Số điện thoại :</td>
                          <td>
                            <a className="text-color font-weight-bold">{user?.phone ? `${user.phone.substring(0, 3)}*****${user.phone.substring(user.phone.length - 2)}` : 'Chưa cập nhật'}</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Mật khẩu : </td>
                          <td>
                            <a className="cursor-pointer">●●●●●●●●<span className="ms-auto" onClick={() => setIsChangingPassword(true)}>Sửa</span></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Google :</td>
                          <td>
                            <a className="cursor-pointer">*******<span className="ms-auto" data-bs-toggle="modal" data-bs-target="#editGoogle">Liên kết</span></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Facebook :</td>
                          <td>
                            <a className="cursor-pointer">*******<span className="ms-auto" data-bs-toggle="modal" data-bs-target="#editFacebook">Liên kết</span></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-xxl-5">
                  <div className="profile-image">
                    <ImageError width={1000} height={1000} src="/assets/eme2023/images/inner-page/dashboard-profile.png" className="img-fluid lazyload" alt="honeynet  " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page