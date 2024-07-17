'use client'

import { Login } from '@/app/firebase'
import SubmitButton from '@/components/ui/SubmitButton'
import { login } from '@/lib/slice/authSlice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const user = await Login(email, password)
      console.log(user)
      if (!user) return toast.error('Giriş Başarısız')

      if (user) {
        dispatch(login({ email: user.email, displayName: user.displayName }))
        toast.success('Giriş başarılı, yönlendiriliyorsunuz...')
        setTimeout(() => {
          router.push('/')
        }, 3000)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="bg-gradient-to-tr from-slate-900 to-indigo-900 min-h-screen flex  justify-center  flex-col items-center">
      <div className="form backdrop-blur-sm bg-white/10 p-5 rounded-lg mx-auto flex flex-col justify-center items-center text-white ">
        <form onSubmit={handleSubmit}>
          <div className="input-wrap flex flex-col mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="backdrop-blur-sm bg-white/10 border border-blue-600 p-1 rounded-md outline-none"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-wrap flex flex-col mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="backdrop-blur-sm bg-white/10 border border-blue-600 p-1 rounded-md outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <SubmitButton
            className="block mx-auto"
            type={'submit'}
            text={'Login'}
            variant={'contained'}
          />
        </form>

        <p className="mt-5 text-sm">
          Don't you have account ?{' '}
          <Link className="underline" href={'/auth/signup'}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
