'use client'

import { Register, updateProfile } from '@/app/firebase'
import SubmitButton from '@/components/ui/SubmitButton'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

const SignForm = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPasswrord, setConfirmPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPasswrord) {
      toast.error('Passwords do not match')
      return
    }

    try {
      const userCredential = await Register(email, password)
      const user = userCredential.user

      if (user) {
        setTimeout(() => {
          toast.success('Registration has been successfully redirected')
          router.push('/auth/login')
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
          <div className="input-wrap w-[300px] flex flex-col mb-3">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="backdrop-blur-sm bg-white/10 border border-blue-600 p-1 rounded-md outline-none"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

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

          <div className="input-wrap flex flex-col mb-3">
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="backdrop-blur-sm bg-white/10 border border-blue-600 p-1 rounded-md outline-none"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <SubmitButton
            className="block mx-auto"
            type={'submit'}
            text={'Sign Up'}
            variant={'contained'}
          />
        </form>
        <p className="mt-5 text-sm">
          Do you have account ?{' '}
          <Link className="underline" href={'/auth/login'}>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignForm
