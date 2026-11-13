import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa'
import Logo from '../assets/Logo.jpg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src={Logo}
              alt="Ochu Medicals Logo"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-blue-800">
                OchuMedicals
              </h1>
              <p className="text-xs text-gray-500">
                Your Health, Our Priority
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-gray-600 hover:text-blue-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+2348052847003"
              className="flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-600 transition"
            >
              <FaPhoneAlt />
              Call Us
            </a>

            <Link
              to="/appointment"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-lg font-semibold transition"
            >
              <FaCalendarCheck />
              Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-blue-800"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IoMdClose /> : <IoIosMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-5">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive
                        ? 'text-blue-700'
                        : 'text-gray-700 hover:text-blue-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href="tel:+2348052847003"
                className="flex items-center gap-2 text-blue-800 font-semibold"
              >
                <FaPhoneAlt />
                Call Us
              </a>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-center bg-blue-700 text-white py-3 rounded-lg font-semibold"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header