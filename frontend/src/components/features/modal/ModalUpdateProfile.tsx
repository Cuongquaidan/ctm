"use client"
import React, { useState } from 'react'
import Modal from '@/components/features/modal/Modal'
import { updateProfile } from '@/lib/api/profile';
import { toast } from 'react-toastify';
import { useAuthContext } from '../provider/AuthProvider';

interface ModalUpdateProfileProps {
  onClose: () => void;
}
const formatBirthdayForInput = (isoDate: string | null | undefined) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return date.toISOString().split('T')[0]; // "2004-01-07"
};

function ModalUpdateProfile({ onClose }: ModalUpdateProfileProps) {
  const { user, handleGetProfile } = useAuthContext();
  const [fullname, setFullname] = useState<string>(user?.fullname || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const [birthday, setBirthday] = useState<string>(formatBirthdayForInput(user?.birthday));
  const [gender, setGender] = useState<number>(user?.gender || 0);
  const handleSubmit = async () => {
    const res = await updateProfile({ fullname, email, birthday, gender, phone: user?.phone });
    if (res) {
      toast.success('Cập nhật thông tin thành công!');
      await handleGetProfile();
    } else {
    }
    onClose();
  }
  return (
    <Modal onClose={onClose} title="Cập nhật thông tin cá nhân" classNameMainModal="modal-lg" id="editProfileModal">
      <div className="modal-body">
        <div className="row g-4">
          <div className="form-group col-xxl-12">
            <div className="form-floating theme-form-floating">
              <input type="text" className="form-control" id="fullname" name="fullname" required data-required-error="Vui lòng nhập dữ liệu" maxLength={150} data-error="Vui lòng nhập đúng định dạng"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <label htmlFor="fullname">Họ và tên</label>
            </div>
          </div>
          <div className="form-group col-xxl-12">
            <div className="form-floating theme-form-floating">
              <input type="text" className="form-control" id="email1" name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email1">Email</label>
            </div>
          </div>

          <div className="form-group col-lg-6">
            <div className="form-floating theme-form-floating">
              <input type="date" className="form-control maskDate" id="birthday1" name="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
              <label htmlFor="birthday1">Sinh nhật</label>
            </div>
          </div>

          <div className="form-group col-lg-6">
            <div className="form-floating theme-form-floating">
              <select className="form-select" id="floatingSelect1" name="gender" aria-label="Floating label select example"
                value={gender}
                onChange={(e) => setGender(Number(e.target.value))}
              >
                <option value="">select</option>
                <option value="0">Nữ</option>
                <option value="1">Nam</option>
              </select>
              <label htmlFor="floatingSelect1">Giới tính</label>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-animation btn-md fw-bold" onClick={onClose}>Hủy</button>
        <button type="button" className="btn theme-bg-color btn-md fw-bold text-light submitAjax" onClick={handleSubmit}>Lưu lại</button>
      </div>
    </Modal>
  )
}

export default ModalUpdateProfile