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
      <div className="fixed w-[250px] mt-10 p-5 h-max bg-[#fafafa] rounded-lg text-black ">
        <div className="sidebar-items flex flex-col leading-5 gap-10">
          <div className="buttons-side flex item-center text-lg gap-5 hover:text-[#402E7A] ">
            <p>
              <AccountBoxIcon className="text-2xl" />
            </p>
            <Link href={'/profile'}>Profile</Link>
          </div>
          <div className="buttons-side  flex  item-center text-lg gap-5">
            <p>
              <SettingsIcon />
            </p>
            <Link href={'/settings'}>Settings</Link>
          </div>
          <div className="buttons-side flex item-center text-lg  gap-5">
            <p>
              <LogoutIcon />
            </p>{' '}
            <button>Logout</button>
          </div>
          <div className="buttons-side flex  item-center text-lg gap-5">
            <p>
              <LoginIcon />
            </p>{' '}
            <Link href={'/auth/login'}>Login</Link>
          </div>
          <div className="buttons-side flex item-center text-lg gap-5 ">
            <p>
              <PersonAddIcon />
            </p>
            <Link href={'/auth/signup'}>Signup</Link>
          </div>
          <div className="buttons-side flex item-center text-lg gap-5">
            <LogoutIcon />
            <Link href={'/settings'}>Logout</Link>
          </div>

          <div className="buttons-side flex item-center text-lg gap-5">
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
