'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import ImageError from '@/components/ui/ImageError'
import { useAuthContext } from '@/components/features/provider/AuthProvider'
import { validateOtp, resendOtp } from '@/lib/api/auth'

function OtpPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user } = useAuthContext()

  const phoneFromParams = searchParams.get('phone')
  const purpose = (searchParams.get('purpose') || 'verification') as 'verification' | 'forgot-password' | 'register'
  const phone = phoneFromParams || user?.phone || ''

  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [canResend, setCanResend] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [maskedPhone, setMaskedPhone] = useState('')

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (phone) {
      const masked = phone.replace(/(\d{3})\d+(\d{4})/, '$1*****$2')
      setMaskedPhone(masked)
    }
  }, [phone])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    setError('')

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const newOtp = [...otp]

    pastedData.split('').forEach((char, index) => {
      if (index < 6) {
        newOtp[index] = char
      }
    })

    setOtp(newOtp)
    const lastIndex = Math.min(pastedData.length, 5)
    inputRefs.current[lastIndex]?.focus()
  }

  const handleValidate = async () => {
    const otpCode = otp.join('')

    if (otpCode.length !== 6) {
      setError('Vui lòng nhập đủ 6 chữ số')
      return
    }

    if (!phone) {
      setError('Không tìm thấy số điện thoại')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await validateOtp({
        phone,
        otp: otpCode,
        purpose
      })

      if (response.success) {
        if (response.token) {
          localStorage.setItem('otpVerificationToken', response.token)
        }

        switch (purpose) {
          case 'register':
            router.push('/customers/login')
            break
          case 'forgot-password':
            router.push(`/customers/reset-password?token=${response.token}`)
            break
          case 'verification':
          default:
            router.push('/')
            break
        }
      } else {
        setError(response.message || 'Mã OTP không đúng')
      }
    } catch (err) {
      setError('Đã có lỗi xảy ra. Vui lòng thử lại')
      console.error('OTP validation error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    if (!canResend || !phone) return

    setIsLoading(true)
    setError('')

    try {
      const response = await resendOtp(phone, purpose)

      if (response.success) {
        setCountdown(60)
        setCanResend(false)
        setOtp(['', '', '', '', '', ''])
        inputRefs.current[0]?.focus()
      } else {
        setError('Không thể gửi lại mã. Vui lòng thử lại sau')
      }
    } catch (err) {
      setError('Đã có lỗi xảy ra khi gửi lại mã')
      console.error('Resend OTP error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <BreadcrumbBackToHome current='OTP' title='OTP'></BreadcrumbBackToHome>

      <section className="log-in-section otp-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <ImageError width={1000} height={400} src="/assets/eme2023/images/inner-page/otp.png" className="img-fluid w-[550px]" alt="otp" />
              </div>
            </div>

            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3 className="text-title">Vui lòng nhập mã OTP để xác thực tài khoản</h3>
                    <h5 className="text-content">
                      Mã xác thực đã được gửi đến <span className="fw-bold">{maskedPhone || '*******'}</span>
                    </h5>
                  </div>

                  <div id="otp" className="inputs d-flex flex-row justify-content-center" onPaste={handlePaste}>
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={el => { inputRefs.current[index] = el }}
                        className="text-center form-control rounded"
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        placeholder="0"
                        disabled={isLoading}
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>

                  {error && (
                    <div className="mt-3 text-center">
                      <p className="text-danger mb-0">{error}</p>
                    </div>
                  )}

                  <div className="send-box pt-4">
                    <h5>
                      Không nhận được mã?{' '}
                      {canResend ? (
                        <button
                          onClick={handleResend}
                          className="theme-color fw-bold border-0 bg-transparent p-0"
                          disabled={isLoading}
                          style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        >
                          Gửi lại
                        </button>
                      ) : (
                        <span className="text-muted">Gửi lại sau {countdown}s</span>
                      )}
                    </h5>
                  </div>

                  <button
                    onClick={handleValidate}
                    className="btn btn-animation w-100 mt-3"
                    type="button"
                    disabled={isLoading || otp.join('').length !== 6}
                  >
                    {isLoading ? 'Đang xác thực...' : 'Xác thực'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OtpPage
