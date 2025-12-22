"use client";
import { forgotPassword } from '@/lib/api/auth';

import ImageError from '@/components/ui/ImageError'
import React, { useState } from 'react'
import CustomInput from '@/components/features/auth/CustomInput';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function ForgotPasswordBox() {
  const [phone, setPhone] = useState<string>('')
  const [captcha, setCaptcha] = useState<string>('')
  const router = useRouter();

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await forgotPassword({ phone, captcha })
    if (result && result.otp) {
      router.push(`/customers/confirm/${phone}?otp=${result.otp}`);
    }
  }
  return (

    <div className="d-flex align-items-center justify-content-center h-100">
      <div className="log-in-box">
        <div className="log-in-title">
          <h3>Chào mừng Anh Chị đến với Sản thương mại điện thử - Công ty Cổ phần HONEYNET</h3>
          <h4>Quên mật khẩu</h4>
        </div>
        <div className="input-box">
          <form className="row g-4" method="POST" onSubmit={handleForgotPassword}>
            <CustomInput
              name="phone"
              placeholder="Số điện thoại"
              label="Số điện thoại (*)"
              value={phone}
              setValue={setPhone}
              maxLength={100}
              errorRequired="Vui lòng nhập dữ liệu"
              errorMessage="Vui lòng nhập đúng định dạng"
            />
            {/* <div className="col-12">
              <div className="w-100">
                <ImageError width={400} height={200} className="border rounded captchaImg w-100" src="https://ca-ctm.systems.com.vn/customers/getcaptcha" alt="captcha" />
              </div>
            </div>
            <CustomInput
              name="captcha"
              placeholder="Mã xác thực"
              label="Mã xác thực"
              value={captcha}
              setValue={setCaptcha}
              maxLength={6}
              errorRequired="Vui lòng nhập dữ liệu"
              errorMessage="Vui lòng nhập đúng định dạng"
            /> */}
            <div className="col-12">
              <button className="btn btn-animation w-100" type="submit">Gửi thông tin</button>
              <div className="other-log-in pt-4"></div>
              <div className="sign-up-box mt-0">
                <Link href="/customers/login">Đăng nhập</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default ForgotPasswordBox