
import { Link } from 'react-router'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa'

import Logo from '../assets/Logo.jpg'

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const services = [
    'Medical Consultation',
    'Healthcare Products',
    'Medical Equipment',
    'Health Support',
    'Wellness Services',
  ]

  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Information */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={Logo}
                alt="Ochu Medicals Logo"
                className="w-14 h-14 object-contain bg-white rounded-lg p-1"
              />

              <div>
                <h2 className="text-xl font-bold text-white">
                  OchuMedicals Nigeria Limited
                </h2>
                <p className="text-xs text-blue-300">
                  Your Health, Our Priority
                </p>
              </div>
            </Link>

            <p className="text-sm leading-7 text-gray-400 mb-6">
              At Ochu Medicals, we are committed to supporting
              better health through quality healthcare products,
              reliable medical solutions, and excellent customer
              service.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1Gtu2rpe9C/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mr_ochumed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-pink-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@ochumedicalsnigerialtd3316"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-red-600 hover:text-white transition"
              >
                <FaYoutube />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@ochumed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-black hover:text-white transition"
              >
                <FaTiktok />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-blue-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm hover:text-blue-400 transition cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Contact Us
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 shrink-0" />
                <span className="text-sm leading-6">
                  351 Ikotun Road, Opposite Idimu Primary School,
                  Isheri Idimu, Alimosho, Lagos State, Nigeria.
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400 shrink-0" />
                <a
                  href="tel:+2348052847003"
                  className="text-sm hover:text-blue-400 transition"
                >
                  +234 805 284 7003
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 shrink-0" />
                <a
                  href="mailto:infoochumedicals@gmail.com"
                  className="text-sm hover:text-blue-400 transition"
                >
                  infoochumedicals@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaClock className="text-blue-400 mt-1 shrink-0" />
                <span className="text-sm leading-6">
                  Monday - Friday
                  <br />
                  8:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6">
          <div>

            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} OchuMedicals Nigeria Limited.
              All Rights Reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
