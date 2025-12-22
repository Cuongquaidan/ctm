"use client";
import { getProfile, logIn } from '@/lib/api/auth';
import React, { useEffect, useState } from 'react'
import CustomInput from '@/components/features/auth/CustomInput';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { resetSessionExpiredFlag } from '@/lib/api/api';

function LoginBox() {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [captcha, setCaptcha] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loginTemp, setLoginTemp] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [captchaUrl, setCaptchaUrl] = useState<string>("");
  const [captchaKey, setCaptchaKey] = useState<number>(Date.now());
  const router = useRouter();

  // Fetch captcha image với credentials
  const fetchCaptcha = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_CUSTOMERS}/captcha`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'image/*',
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setCaptchaUrl(url);
      }
    } catch (error) {
      console.error('Error fetching captcha:', error);
    }
  };

  const refreshCaptcha = () => {
    // Revoke old blob URL to prevent memory leak
    if (captchaUrl) {
      URL.revokeObjectURL(captchaUrl);
    }
    setCaptchaKey(Date.now());
    fetchCaptcha();
  };

  useEffect(() => {
    const login_temp = sessionStorage.getItem("login_temp");

    const saved = localStorage.getItem("login_saved");
    if (login_temp) {
      const login = JSON.parse(login_temp);
      setLoginTemp(login);
      setPhone(login.phone);
      setPassword(login.password);
      setRememberMe(true);
    } else if (saved) {
      if (saved) {
        const obj = JSON.parse(saved);
        setPhone(obj.phone);
        setPassword(obj.password);
        setRememberMe(true);
      }
    }
    setIsReady(true);

    // Fetch captcha lần đầu
    fetchCaptcha();

    const handleUnload = () => {
      sessionStorage.removeItem("login_temp");
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      sessionStorage.removeItem("login_temp");
      // Cleanup blob URL
      if (captchaUrl) {
        URL.revokeObjectURL(captchaUrl);
      }
    };
  }, [])

  const handleLogin = async () => {
    const data = await logIn({ phone, password, captcha });
    if (!data || !data.accessToken) {
      setLoginTemp(data)
      return
    }
    toast.success('Đăng nhập thành công')
    if (rememberMe) {
      localStorage.setItem('login_saved', JSON.stringify({ phone, password }))
    }
    sessionStorage.removeItem('login_temp')
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    resetSessionExpiredFlag(); // Reset flag khi login thành công
    const user = await getProfile()
    localStorage.setItem('user', JSON.stringify(user))
    router.push('/');
  }

  return (
    <div className="log-in-box">
      <div className="log-in-title">
        <h3>Chào mừng Anh Chị đến với Sản thương mại điện thử - Công ty Cổ phần HONEYNET</h3>
        <h4>Đăng nhập bằng tài khoản của bạn</h4>
      </div>
      {loginTemp?.error && <div className="alert alert-danger">{loginTemp?.error}</div>}
      <div className="input-box">
        <form className="row g-4" >
          {isReady && (
            <CustomInput
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              label="Số điện thoại"
              value={phone}
              setValue={setPhone}
              maxLength={150}
              errorRequired="Vui lòng nhập dữ liệu"
              errorMessage="Vui lòng nhập đúng định dạng"
            />
          )}
          {isReady && (
            <CustomInput
              type="password"
              name="password"
              placeholder="Mật khẩu"
              autoComplete=''
              label="Mật khẩu"
              value={password}
              setValue={setPassword}
              minLength={8}
              maxLength={32}
              errorRequired="Vui lòng nhập dữ liệu"
              errorMessage="Vui lòng nhập mật khẩu dài 8-32 ký tự, có ký tự chữ số, chữ hoa và chữ thường, ký tự @#$!%^&*"
            />
          )}
          {/* <div className="col-12">
            <div className="position-relative">
              {captchaUrl ? (
                <ImageError
                  unoptimized={true}
                  className="border rounded captchaImg w-50"
                  src={captchaUrl}
                  alt="captcha"
                  width={412}
                  height={54}
                  key={captchaKey}
                />
              ) : (
                <div className="border rounded captchaImg w-50 d-flex align-items-center justify-content-center" style={{ height: '54px' }}>
                  <span className="spinner-border spinner-border-sm"></span>
                </div>
              )}
              <button
                type="button"
                className="btn btn-sm btn-link position-absolute"
                style={{ top: '0', right: '50%' }}
                onClick={refreshCaptcha}
                title="Tải lại mã xác thực"
              >
                <i className="fa-solid fa-rotate-right"></i>
              </button>
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
            <div className="forgot-box">
              <div className="form-check ps-0 m-0 remember-box">
                <input name="remember" className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault"
                  checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">Ghi nhớ tài khoản</label>
              </div>
              <a href="/customers/forgotPassword" className="forgot-password">Quên mật khẩu?</a>
            </div>
          </div>

          <div className="col-12">
            <button className="btn btn-animation w-100 justify-content-center" type="button"

              onClick={handleLogin}

            >Đăng nhập</button>
          </div>
          {/* <input type="hidden" name="redirect" value="" />
                    <input className="tokenCSRF" type="hidden" name="csrf_token" /> */}
        </form>
      </div>
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
      <div className="other-log-in pt-4"></div>
      <div className="sign-up-box">
        <h4>Bạn chưa có tài khoản?</h4>
        <a href="/customers/register">Đăng ký</a>
      </div>
    </div>
  )
}

export default LoginBox