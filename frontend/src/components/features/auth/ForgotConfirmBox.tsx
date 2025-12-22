'use client'
import ImageError from '@/components/ui/ImageError'
import React, { useState, useRef, useEffect } from 'react'
import CustomInput from '@/components/features/auth/CustomInput'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { confirmForgotPassword, confirmRegistration } from '@/lib/api/auth'

function RegisterConfirmBox() {
  const params = useParams()

  const router = useRouter()
  const phone = params.phone as string

  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', ''])
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [captcha, setCaptcha] = useState<string>('')
  const [captchaUrl, setCaptchaUrl] = useState<string>('')

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])


  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0]
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const otpCode = otp.join('')

    if (otpCode.length !== 6) {
      toast.error('Vui lòng nhập đầy đủ mã OTP')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Mật khẩu không khớp')
      return
    }
    const result = await confirmForgotPassword({
      phone,
      reference_code: otpCode,
      password
    })
    if (result?.phone) {
      toast.success(result?.message || 'Xác minh thành công. Vui lòng đăng nhập lại.')
      router.push('/customers/login')
    }

  }

  const handleResendOtp = () => {
    // TODO: Call API to resend OTP
    console.log('Resend OTP to:', phone)
  }

  return (
    <div className="log-in-box">
      <div className="log-in-title">
        <h3 className="text-title">Vui lòng xác minh tài khoản của bạn</h3>
        <h5 className="text-content">
          Mã OTP được gửi đến số điện thoại <span>{phone ? phone.replace(/(\d{3})\d{5}(\d{2})/, '$1*****$2') : ''}</span>
        </h5>
      </div>
      <form data-toggle="validator" method="POST" onSubmit={handleConfirm}>
        <div id="otp" className="inputs d-flex flex-row justify-content-center mb-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el }}
              className="text-center form-control rounded"
              required
              type="text"
              maxLength={1}
              placeholder=""
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
            />
          ))}
        </div>
        <div className="send-box mb-4">
          <h5>
            Chưa nhận được mã xác thực?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); handleResendOtp() }} className="theme-color fw-bold">
              Gửi lại
            </a>
          </h5>
        </div>
        <div className='h-4'></div>

        <CustomInput
          type="password"
          name="password"
          placeholder="Mật khẩu"
          label="Mật khẩu"
          value={password}
          setValue={setPassword}
          data-pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!%^&*])[0-9a-zA-Z@#$!%^&*.]{8,32}$"
          errorRequired="Vui lòng nhập dữ liệu"
          errorMessage="Vui lòng nhập mật khẩu dài 8-32 ký tự, có ký tự chữ số, chữ hoa và chữ thường, ký tự @#$!%^&*"
        />
        <div className='h-4'></div>
        <CustomInput
          type="password"
          name="cpassword"
          placeholder="Xác nhận mật khẩu"
          label="Xác nhận mật khẩu (*)"
          value={confirmPassword}
          setValue={setConfirmPassword}
          maxLength={32}
          errorRequired="Vui lòng nhập dữ liệu"
          errorMessage="Nhập lại mật khẩu không chính xác"
        />
        <div className='h-4'></div>

        {/* <div className="w-100 mb-4">
          {captchaUrl && (
            <div className="position-relative">
              <ImageError
                unoptimized
                width={300}
                height={100}
                className="border rounded captchaImg w-100"
                src={captchaUrl}
                alt="captcha"
                style={{ height: 'auto' }}
              />
              <button
                type="button"
                className="btn btn-sm btn-secondary position-absolute top-0 end-0 m-2"
                onClick={refreshCaptcha}
              >
                ↻
              </button>
            </div>
          )}
        </div>
        <CustomInput
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
        <button className="btn btn-animation w-100" type="submit">
          Xác nhận
        </button>
      </form>
    </div>
  )
}

export default RegisterConfirmBox
