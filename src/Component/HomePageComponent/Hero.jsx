
import { Link } from 'react-router'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import heroImage from '../../assets/Promo.jpg'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Welcome Content */}
          <div className="space-y-6">

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <FaCheckCircle />
              Trusted Medical Equipment Supplier
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight">
              Welcome to
              <span className="block text-blue-700">
                OchuMedicals Nigeria Limited
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              Your Health, Our Priority
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              We provide high-quality, reliable, and affordable
              hospital equipment to support healthcare professionals
              and improve patient care.
            </p>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              From essential medical supplies to advanced healthcare
              equipment, OchuMedicals is your trusted partner
              in delivering better healthcare.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-3">

              <Link
                to="/products"
                className="inline-flex items-center gap-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-7 py-4 rounded-xl font-semibold transition duration-300"
              >
                Explore Our Products
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-7 py-4 rounded-xl font-semibold transition duration-300"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Medical Equipment Image */}
          <div className="relative mt-6 lg:mt-0">

           

            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">

              <img
                src={heroImage}
                alt="Medical equipment supplied by Ochu Medicals Nigeria Limited"
                className="w-full h-[px] md:h-[px] object-cover object-center"
              />

            </div>


          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
