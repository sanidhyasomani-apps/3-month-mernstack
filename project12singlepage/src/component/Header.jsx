
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const {theme,toggleTheme}=useContext(ThemeContext)
   const navStyle = ({ isActive }) =>
    `transition hover:text-blue-600 ${
      isActive ? "font-bold text-blue-600" : theme==="dark"?" text-gray-50":"text-gray-900"
    }`;
  return (
    <header className={`w-screen min-h-16   flex justify-between items-center px-5 py-4 shadow-2xl md:px-10 ${theme==="dark"?"bg-gray-800":"bg-white"}`}>
        <Link to="/" className={`text-2xl tracking-tight  font-bold  md:text-3xl ${theme==="dark"?" text-gray-50":"text-gray-900"}`}> MyWebsite</Link>
        <nav className='flex gap-5  text-base font-medium md:gap-8  md:text-lg '>
            <NavLink to="/" className={navStyle}>Home </NavLink>
            
            <NavLink to="/about" className={navStyle}>About </NavLink>
            <NavLink to="/contact" className={navStyle}>Contact </NavLink>
            <button
  onClick={toggleTheme}
  className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">{theme === "dark" ? "☀️ Light" : "🌙 Dark"}</button>
        </nav>
    </header>
  )
}

export default Header;