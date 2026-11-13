
import { Link } from 'react-router'
import {
  FaHeartbeat,
  FaHospital,
  FaStethoscope,
  FaProcedures,
  FaUserMd,
  FaTools,
  FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt,
} from 'react-icons/fa'
import CArmXRayMachine from '../assets/C-Arm X-Ray.jpg'
import ManualHospitalBed from '../assets/Manual Hospital Bed.jpg'
import StainlessSteelSurgicalScrubSink from "../assets/Stainless Steel Surgical Scrub Sink.jpg";
import wheelchair from "../assets/wheelchair.jpg";
import ElectricAdjustable from "../assets/Electric Adjustable Hospital Bed.jpg";
import OlympusMedical from "../assets/Olympus Medical Endoscopy System.jpg";
import service from "../assets/service.jpg"


import Footer from './Footer'


const services = [
  {
    id: 1,
    title: 'Medical Equipment Supply',
    description:
      'We supply quality medical equipment designed to support hospitals, clinics and healthcare professionals.',
    icon: <FaHospital />,
    image: ManualHospitalBed,
  },
  {
    id: 2,
    title: 'Healthcare Products',
    description:
      'We provide reliable healthcare products and medical supplies for hospitals, clinics and home care.',
    icon: <FaHeartbeat />,
    image: CArmXRayMachine,
  },
  {
    id: 3,
    title: 'Medical Consultation',
    description:
      'We help customers identify suitable medical equipment and healthcare products based on their needs.',
    icon: <FaStethoscope />,
    image: ElectricAdjustable,
  },
  {
    id: 4,
    title: 'Hospital Equipment',
    description:
      'We provide hospital beds, patient monitors, diagnostic machines and essential hospital equipment.',
    icon: <FaProcedures />,
    image: StainlessSteelSurgicalScrubSink,
  },
  {
    id: 5,
    title: 'Healthcare Support',
    description:
      'Our team provides product guidance and assistance to help customers make informed purchasing decisions.',
    icon: <FaUserMd />,
    image: wheelchair,
  },
  {
    id: 6,
    title: 'Equipment Maintenance Support',
    description:
      'We assist customers with equipment guidance and maintenance support for their medical devices.',
    icon: <FaTools />,
    image: OlympusMedical,
  },
]

function Services() {
  return (
    <    >
      <main className="bg-white">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-950 to-blue-700 text-white py-24 px-5">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-blue-300 uppercase tracking-widest font-semibold mb-4">
              What We Offer
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Medical Services
            </h1>

            <p className="max-w-2xl mx-auto text-gray-200 leading-8 text-lg">
              Providing quality medical equipment, healthcare
              products and reliable healthcare solutions to
              support better patient care.
            </p>

            <div className="flex justify-center gap-3 mt-8">
              <Link
                to="/products"
                className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
                About Our Services
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Supporting Healthcare Through Quality Solutions
              </h2>

              <p className="text-gray-600 leading-8 mb-5">
                At Ochu Medicals, we are dedicated to providing
                dependable medical equipment and healthcare
                products that meet the needs of healthcare
                facilities and individuals.
              </p>

              <p className="text-gray-600 leading-8 mb-7">
                We focus on quality, customer satisfaction and
                reliable service to make healthcare products
                more accessible.
              </p>

              <ul className="space-y-4">
                {[
                  'Quality medical equipment',
                  'Reliable healthcare products',
                  'Customer-focused support',
                  'Professional product guidance',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <FaCheckCircle className="text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={service}
                alt="Medical healthcare services"
                className="w-full h-[420px] object-cover"
              />
            </div>

          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-slate-50 py-20 px-5">
          <div className="max-w-7xl mx-auto">

            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
                Our Services
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                Healthcare Solutions We Provide
              </h2>

              <p className="text-gray-600 leading-7">
                Discover our range of medical products and
                services designed to support healthcare
                professionals, hospitals and individuals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-7">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-5">
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-7 mb-6">
                      {service.description}
                    </p>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                      Enquire Now
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-5">
          <div className="max-w-7xl mx-auto text-center">

            <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              Your Trusted Medical Supply Partner
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                {
                  title: 'Quality Products',
                  description: 'We prioritize quality and dependable healthcare products.',
                },
                {
                  title: 'Customer Satisfaction',
                  description: 'We are committed to providing excellent customer service.',
                },
                {
                  title: 'Reliable Support',
                  description: 'We help customers find suitable healthcare solutions.',
                },
                {
                  title: 'Affordable Solutions',
                  description: 'We aim to provide accessible medical products.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-7 rounded-xl border border-gray-100 hover:shadow-lg transition"
                >
                  <FaCheckCircle className="text-3xl text-blue-600 mx-auto mb-5" />

                  <h3 className="font-bold text-lg text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-7">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-blue-950 py-16 px-5">
          <div className="max-w-5xl mx-auto text-center text-white">

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Need Medical Equipment or Healthcare Products?
            </h2>

            <p className="text-blue-100 leading-7 mb-8 max-w-2xl mx-auto">
              Get in touch with Ochu Medicals today.
              Our team is ready to help you find the right
              healthcare products for your needs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="border border-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-blue-950 transition"
              >
                Contact Us
              </Link>

              <a
                href="tel:+2348052847003"
                className="border border-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-blue-950 transition"
              >
                <FaPhoneAlt />
                Call Us
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Services
