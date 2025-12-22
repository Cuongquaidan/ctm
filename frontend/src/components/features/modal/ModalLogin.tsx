"use client";
import ImageError from "@/components/ui/ImageError";
import React, { useEffect, useState } from "react";
import { getProfile, logIn } from "@/lib/api/auth";
import { useAuthContext } from "@/components/features/provider/AuthProvider";
import Modal from "@/components/features/modal/Modal";
import { useRouter } from "next/navigation";
import { resetSessionExpiredFlag } from "@/lib/api/api";
import { toast } from "react-toastify";

interface ModalLoginProps {
  onClose: () => void;
}

function ModalLogin({ onClose }: ModalLoginProps) {
  // const { setIsOpen } = useModalLoginContext();
  const router = useRouter();
  const { setHasAuth } = useAuthContext();
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const handleLogin = async () => {
    const data = await logIn({ phone, password });
    if (!data) {
      sessionStorage.setItem("login_temp", JSON.stringify({ phone, password, rememberMe, error: data.error }));
      router.push("/customers/login");
    }
    else {
      toast.success("Đăng nhập thành công");
      if (rememberMe) {
        localStorage.setItem("login_saved", JSON.stringify({ phone, password }));
      }
      sessionStorage.removeItem("login_temp");
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      resetSessionExpiredFlag(); // Reset flag khi login thành công
      const user = await getProfile();
      localStorage.setItem("user", JSON.stringify(user));
      setHasAuth(true);
      onClose();

    }
  }
  useEffect(() => {
    const saved = localStorage.getItem("login_saved");
    if (saved) {
      const obj = JSON.parse(saved);
      setPhone(obj.phone);
      setPassword(obj.password);
      setRememberMe(true);
    }
  }, [])
  return (
    <Modal onClose={onClose} title="Đăng nhập" classNameMainModal="modal-lg" id="modalLogin">
      <div className="modal-body pt-3 pt-md-0">
        <div className="log-in-section">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-7 col-lg-6 col-sm-8 mx-auto">
              <div className="log-in-box">
                <div className="input-box">
                  <form
                    className="row g-4"
                  // method="POST"
                  // id="frmLogin"
                  // action="https://ca-ctm.systems.com.vn/customers/login"
                  >
                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="text"
                          className="form-control"
                          id="phone1"
                          name="phone"
                          placeholder="Số điện thoại"
                          required
                          maxLength={150}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <label htmlFor="phone1">Số điện thoại</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Mật khẩu"
                          required
                          minLength={8}
                          maxLength={32}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Mật khẩu</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <ImageError
                        width={1000}
                        height={1000}
                        className="border rounded captchaImg w-full"
                        src="https://ca-ctm.systems.com.vn/customers/getcaptcha"
                        alt="captcha"
                      />
                    </div>

                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="text"
                          className="form-control"
                          id="captcha"
                          name="captcha"
                          placeholder="Mã xác thực"
                          required
                          maxLength={6}

                        />
                        <label htmlFor="captcha">Mã xác thực</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="forgot-box d-flex justify-content-between align-items-center">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input
                            name="remember"
                            className="checkbox_animated check-box"
                            type="checkbox"
                            id="flexCheckDefault"
                            value="1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Ghi nhớ tài khoản
                          </label>
                        </div>
                        <a
                          href="/customers/forgotPassword"
                          className="forgot-password"
                        >
                          Quên mật khẩu?
                        </a>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-animation w-100 justify-content-center"
                        type="button"
                        onClick={handleLogin}
                      >
                        Đăng nhập
                      </button>
                    </div>

                    {/* <input type="hidden" name="redirect" value="/" />
                          <input
                            type="hidden"
                            name="csrf_token"
                            value="MTc2MDA1NzA1OEVPcGJXS0VVTm94YmE2UHBYM2NGSDNXQmFPS3l4S295"
                          /> */}
                  </form>
                </div>

                <div className="other-log-in pt-4"></div>
                <div className="sign-up-box text-center">
                  <h4>Bạn đã có tài khoản?</h4>
                  <a href="/customers/register" className="fw-bold">
                    Đăng ký
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain text-center">
                <ImageError
                  width={1000}
                  height={1000}
                  src="/assets/eme2023/images/inner-page/log-in.png"
                  className="img-fluid w-full"
                  alt="login"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalLogin;
