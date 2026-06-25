
import { Link, NavLink } from 'react-router-dom'

function Header() {
   const navStyle = ({ isActive }) =>
    `transition hover:text-blue-600 ${
      isActive ? "font-bold text-blue-600" : "text-gray-900"
    }`;
  return (
    <header className='w-screen min-h-16  flex justify-between items-center px-5 py-4 shadow-sm md:px-10'>
        <Link to="/" className='text-2xl tracking-tight text-gray-900 font-bold  md:text-3xl'> MyWebsite</Link>
        <nav className='flex gap-5  text-base font-medium md:gap-8  md:text-lg '>
            <NavLink to="/" className={navStyle}>Home </NavLink>
            
            <NavLink to="/about" className={navStyle}>About </NavLink>
            <NavLink to="/contact" className={navStyle}>Contact </NavLink>
        </nav>
    </header>
  )
}

export default Header;