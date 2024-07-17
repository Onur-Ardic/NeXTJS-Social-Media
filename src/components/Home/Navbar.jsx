import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="navbar Roboto font-medium  border-b-2">
      <div className="navbar-container container mx-auto p-3 flex justify-between items-center ">
        <div className="logo flex items-center">
          <DeveloperModeIcon />
          <span className="text-2xl">devEx</span>
        </div>

        <div className="navbar-links">
          <ul className="flex items-center space-x-6">
            <li className="navbar-items">
              <Link href={'/'}>Home</Link>
            </li>

            <li className="navbar-items">
              <Link href={'/'}>Blog</Link>
            </li>

            <li className="navbar-items">
              <Link href={'/'}>About</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-buttons">
          <Link href={'/auth/login'}>
            <AccountCircleIcon />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
