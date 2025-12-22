"use client";
import { register } from '@/lib/api/auth';
import ImageError from '@/components/ui/ImageError'
import React, { useState } from 'react'
import CustomInput from '@/components/features/auth/CustomInput';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

function RegisterBox() {
  const [fullname, setFullname] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [referralCode, setReferralCode] = useState<string>('')
  const [captcha, setCaptcha] = useState<string>('')
  const [isPolicyAccepted, setIsPolicyAccepted] = useState<boolean>(false)
  const router = useRouter();
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()



    const result = await register({
      phone,
      name: fullname,
      referral_code: referralCode,
    })
    if (result && result.id) {
      router.push(`/customers/register/confirm/${result.phone}?otp=${result.reference_code}`);
    }
  }
  return (

    <div className="log-in-box">
      <div className="log-in-title">
        <h3>Chào mừng Anh Chị đến với Sản thương mại điện thử - Công ty Cổ phần HONEYNET</h3>
        <h4>Tạo mới tài khoản</h4>
      </div>
      <div className="input-box">
        <form className="row g-4" id="frmRegister" data-toggle="validator" method="POST" encType="multipart/form-data" onSubmit={handleRegister}>
          <CustomInput
            type="text"
            name="fullname"
            placeholder="Họ và tên"
            label="Họ và tên (*)"
            value={fullname}
            setValue={setFullname}
            maxLength={150}
            errorRequired="Vui lòng nhập dữ liệu"
            errorMessage="Vui lòng nhập đúng định dạng"
          />
          <CustomInput
            type="text"
            name="phone"
            placeholder="Số điện thoại"
            label="Số điện thoại (*)"
            value={phone}
            setValue={setPhone}
            data-pattern="^[03|05|07|08|09]{2}[0-9]{8}$"
            data-pattern-error="Vui lòng nhập đúng định dạng số điện thoại"
          />
          <CustomInput
            type="text"
            name="referral_code"
            placeholder="Mã giới thiệu (nếu có)"
            label="Mã giới thiệu (nếu có)"
            value={referralCode}
            setValue={setReferralCode}
            required={false}
            data-pattern="^[03|05|07|08|09]{2}[0-9]{8}$"
            data-pattern-error="Mã giới thiệu không hợp lệ"
            errorMessage="Vui lòng nhập đúng định dạng"
          />
          {/* <div className="col-12">
            <div className="w-100 ">
              <ImageError width={400} height={200} className="border rounded captchaImg w-100" src="https://ca-ctm.systems.com.vn/customers/getcaptcha" alt="captcha" />
            </div>
          </div> */}
          {/* <CustomInput
            type="text"
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
            <div className="forgot-box form-group">
              <div className="form-check ps-0 m-0 remember-box">
                <input className="checkbox_animated check-box" type="checkbox" id="ispolicy" required data-required-error="Vui lòng nhập dữ liệu" checked={isPolicyAccepted} onChange={(e) => setIsPolicyAccepted(e.target.checked)} />
                <label className="form-check-label" htmlFor="ispolicy">Tôi đồng ý với <span><a href="#">Điều khoản dịch vụ</a></span> & <span><a href="https://ca-ctm.systems.com.vn/static/2/files/1.pdf">Chính sách bảo mật</a></span></label>
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-animation w-100" type="submit">Đăng ký</button>
          </div>
          {/* <input className="tokenCSRF" type="hidden" name="csrf_token"> */}
        </form>
        {/* <!-- <div className="other-log-in mt-4">
                    <h6>Hoặc</h6>
                  </div>
                  <div className="log-in-button">
                    <ul>
                      <li className="d-flex">
                        <button type="button" className="btn border btnLoginGoogle flex-1 me-2 px-0"><img src="/assets/eme2023/images/inner-page/google.png" className="blur-up lazyloaded" alt="Đăng nhập bằng Google">Google</button>
                        <div className="divLoginGoogle d-none"></div>
                        <button type="button" className="btn border btnLoginFacebook flex-1 ms-2 px-0">
                          <img src="/assets/eme2023/images/inner-page/facebook.png" className="blur-up lazyloaded" alt="Đăng nhập bằng Facebook">Facebook
                        </button>
                      </li>
                    </ul>
                  </div> --> */}
      </div>
      <div className="other-log-in pt-4"></div>
      <div className="sign-up-box mt-2">
        <h4>Bạn đã có tài khoản đăng nhập?</h4>
        <a href="/customers/login">Đăng nhập</a>
      </div>
    </div>

  )
}

export default RegisterBox