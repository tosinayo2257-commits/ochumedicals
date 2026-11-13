
import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa'

// Import category images from assets
import CArmXRayMachine from '../../assets/C-Arm X-Ray.jpg'
import ManualHospitalBed from '../../assets/Electric Suction Apparatus.jpg'
import MedicalConsultationBooth from '../../assets/Medical Consultation Booth.jpg'
import BedScreens from '../../assets/Hospital Privacy Curtains.jpg'
import wheelchair from '../../assets/wheelchair.jpg'
import MRIScanner from '../../assets/MRI Scanner.jpg'
import VerticalSteam from '../../assets/Vertical Steam Sterilizer.jpg'
import HandheldPulseOximeter from '../../assets/Handheld Pulse Oximeter.jpg'

const categories = [
  {
    id: 1,
    name: 'C-Arm X-Ray Machine',
    description: 'Comfortable and adjustable beds for patient care.',
    image: CArmXRayMachine,
    path: '/products?category=hospital-beds',
  },
  {
    id: 2,
    name: 'Electric Suction Apparatus',
    description: 'Reliable tools for accurate medical diagnosis.',
    image: ManualHospitalBed,
    path: '/products?category=diagnostic-equipment',
  },
  {
    id: 3,
    name: 'Medical Consultation Booth / Soundproof Medical Booth',
    description: 'Advanced equipment for monitoring vital signs.',
    image: MedicalConsultationBooth,
    path: '/products?category=patient-monitoring',
  },
  {
    id: 4,
    name: 'Hospital Privacy Curtains / Bed Screens',
    description: 'Precision instruments for medical procedures.',
    image: BedScreens,
    path: '/products?category=surgical-instruments',
  },
  {
    id: 5,
    name: 'WheelChair',
    description: 'Supporting movement and patient independence.',
    image: wheelchair,
    path: '/products?category=mobility-aids',
  },
  {
    id: 6,
    name: 'MRI Scanner (Magnetic Resonance Imaging Machine)',
    description: 'Essential supplies for everyday healthcare.',
    image: MRIScanner,
    path: '/products?category=medical-consumables',
  },
  {
    id: 7,
    name: 'Vertical Steam Sterilizer (Autoclave)',
    description: 'Modern equipment for laboratory testing.',
    image: VerticalSteam ,
    path: '/products?category=laboratory-equipment',
  },
  {
    id: 8,
    name: 'Handheld Pulse Oximeter',
    description: 'Equipment designed to support breathing care.',
    image: HandheldPulseOximeter,
    path: '/products?category=respiratory-equipment',
  },
]

function CategorySection() {
  return (
    <section className="bg-white py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-5">
            Explore Our Medical Equipment
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Discover quality medical equipment and healthcare
            supplies from Ochu Medicals. We provide reliable
            solutions for hospitals, clinics, laboratories,
            and healthcare professionals.
          </p>

        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Category Image */}
              <div className="relative h-56 overflow-hidden bg-blue-50">

                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent pointer-events-none" />

              </div>

              {/* Category Details */}
              <div className="p-5">

                <h3 className="text-lg font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {category.description}
                </p>

                <Link
                  to={category.path}
                  className="inline-flex items-center gap-3 text-blue-700 font-semibold text-sm hover:text-blue-900"
                >
                  Explore Category

                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">

          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-100 transition duration-300"
          >
            View All Products
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  )
}

export default CategorySection
