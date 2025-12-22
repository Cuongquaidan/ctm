import React, { useState } from 'react'
import Modal from '@/components/features/modal/Modal'
import { changePassword } from '@/lib/api/profile';
import { toast } from 'react-toastify';

function ModalChangePassword({ onClose }: { onClose: () => void }) {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const valuePattern = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!%^&*])[0-9a-zA-Z@#$!%^&*.]{8,32}$";

  const valueError = "Vui lòng nhập mật khẩu dài 8-32 ký tự, có ký tự chữ số, chữ hoa và chữ thường, ký tự @#$!%^&*";

  const validate = (password: string) => {
    const regex = new RegExp(valuePattern);
    setIsError(!regex.test(password));
    return regex.test(password);

  }

  const handleSubmit = async () => {
    if (!validate(newPassword)) {
      // toast.error(valueError);
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('Mật khẩu xác nhận không khớp!');
      return;
    }
    const res = await changePassword({ newPassword, confirmNewPassword: confirmPassword });
    if (res) {
      toast.success('Đổi mật khẩu thành công!');
      onClose();
    } else {
      toast.error('Đổi mật khẩu thất bại. Vui lòng thử lại.');
    }
  }
  return (
    <Modal onClose={onClose} title="Đổi mật khẩu" classNameMainModal="modal-lg" id="changePasswordModal">

      <div className="modal-body">
        <div className="row g-4">
          <div className={`form-group col-xxl-12 `}>
            <div className="form-floating theme-form-floating">
              <input type="password" className={`form-control `}
                style={{
                  borderColor: isError ? "red" : "",
                  color: isError ? "red" : ""
                }}
                id="password" name="password" required maxLength={32} minLength={8}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />
              <label htmlFor="password"
                style={{
                  color: isError ? "red" : ""
                }}
              >Mật khẩu mới</label>
            </div>
            <div style={{ color: '#dc3545', fontSize: '0.875rem' }}>{isError && valueError}</div>
          </div>



          <div className="form-group col-xxl-12">
            <div className="form-floating theme-form-floating">
              <input className="form-control" type="password" id="cpassword" name="cpassword" data-match="#password" data-match-error="vuilongkiemtralai"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="cpassword">Xác nhận mật khẩu</label>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-animation btn-md fw-bold"
          onClick={onClose}
        >Hủy</button>
        <button type="button" className="btn theme-bg-color btn-md fw-bold text-light "
          onClick={handleSubmit}
        >Lưu lại</button>
      </div>

    </Modal>
  )
}

export default ModalChangePassword