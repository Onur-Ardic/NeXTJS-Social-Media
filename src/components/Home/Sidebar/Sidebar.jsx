'use client'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import ContrastIcon from '@mui/icons-material/Contrast'
import Link from 'next/link'
import TransitionsModal from '@/components/ui/ThemeModal'
import { useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const openThemeModal = () => setOpen(true)

  return (
    <div className="sidebar ">
      <div className="fixed w-[250px] mt-10 h-max bg-[#fafafa] rounded-lg text-black ">
        <div className="sidebar-items flex flex-col leading-5 gap-10">
          <div className="buttons-side p-3 flex item-center gap-5 hover:bg-[#402e7a] hover:rounded-t-lg transition hover:text-[#fff] ">
            <p>
              <AccountBoxIcon className="text-2xl" />
            </p>
            <Link className="mt-0.5" href={'/profile'}>
              Profile
            </Link>
          </div>
          <div className="buttons-side p-3 flex item-center gap-5 hover:bg-[#402e7a] transition hover:text-[#fff] ">
            <p>
              <SettingsIcon />
            </p>
            <Link className="mt-0.5" href={'/settings'}>
              Settings
            </Link>
          </div>
          <div className="buttons-side p-3 flex item-center gap-5 hover:bg-[#402e7a] transition hover:text-[#fff] ">
            <p>
              <LogoutIcon />
            </p>{' '}
            <button className="mt-0.5">Logout</button>
          </div>
          <div className="buttons-side p-3 flex item-center gap-5 hover:bg-[#402e7a] transition hover:text-[#fff] ">
            <p>
              <LoginIcon />
            </p>{' '}
            <Link className="mt-0.5" href={'/auth/login'}>
              Login
            </Link>
          </div>
          <div className="buttons-side p-3 flex item-center gap-5 hover:bg-[#402e7a]  transition hover:text-[#fff] ">
            <p>
              <PersonAddIcon />
            </p>
            <Link className="mt-0.5" href={'/auth/signup'}>
              Signup
            </Link>
          </div>
          <div className="buttons-side p-3 flex item-center gap-5 hover:bg-[#402e7a]  transition hover:text-[#fff] ">
            <LogoutIcon />
            <Link className="mt-0.5" href={'/settings'}>
              Logout
            </Link>
          </div>

          <div className="buttons-side p-3 flex item-center gap-5 hover:bg-[#402e7a] hover:rounded-b-lg transition hover:text-[#fff] ">
            <ContrastIcon />
            <button onClick={openThemeModal}>Theme</button>
            <TransitionsModal open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
