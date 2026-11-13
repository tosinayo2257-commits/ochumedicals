
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import Footer from "./Footer";

// Import images from assets
import StainlessSteelSurgicalScrubSink from "../assets/Stainless Steel Surgical Scrub Sink.jpg";
import DoubleStation from "../assets/Double-Station Surgical Scrub Sink.jpg";
import wheelchair from "../assets/wheelchair.jpg";
import ElectricAdjustable from "../assets/Electric Adjustable Hospital Bed.jpg";
import OlympusMedical from "../assets/Olympus Medical Endoscopy System.jpg";
import MedicalInstrumentTrolley from "../assets/Adjustable Mobile Medical Instrument Trolley.jpg";
import DigitalUltrasoundScanner from "../assets/Portable Digital Ultrasound Scanner.jpg";
import UltrasoundTransducerProbe from "../assets/Ultrasound Transducer Probe.jpg";
import UltrasoundMachine from "../assets/Mindray 3D-4D Ultrasound Machine.jpg";
import HandheldFetalDopplerProbe from "../assets/Handheld Fetal Doppler Probe.jpg";
import StainlessSteelTheatre from "../assets/Stainless Steel Theatre Instrument Sterilization Box.jpg";
import  DigitalXRay from "../assets/digital xray radiography system.jpg";
import HydraulicElectricGynecological from "../assets/Hydraulic Electric Gynecological Examination Table.jpg";
import AutomatedExternalDefibrillator from "../assets/Automated External Defibrillator.jpg";
import CArmXRayMachine from '../assets/C-Arm X-Ray.jpg'
import ManualHospitalBed from '../assets/Electric Suction Apparatus.jpg'
import MedicalConsultationBooth from '../assets/Medical Consultation Booth.jpg'
import BedScreens from '../assets/Hospital Privacy Curtains.jpg'
import MRIScanner from '../assets/MRI Scanner.jpg'
import VerticalSteam from '../assets/Vertical Steam Sterilizer.jpg'
import HandheldPulseOximeter from '../assets/Handheld Pulse Oximeter.jpg'
import Callsystem from '../assets/Wireless Call System.jpg'
import Callbutton from '../assets/Wireless Call Button.jpg'
import Watchpager from '../assets/Wireless Watch Pager.jpg'
import Applayout from "../Layout/Applayout";

const products = [
  {
    id: 1,
    name: "Stainless Steel Surgical Scrub Sink",
    category: "Diagnostic Equipment",
    image: StainlessSteelSurgicalScrubSink,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Double-Station Surgical Scrub Sink (800 × 600 × 1800 mm)",
    category: "Patient Monitoring",
    image: DoubleStation,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Medical Wheelchair",
    category: "Mobility Aids",
    image: wheelchair,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Electric Adjustable Hospital Bed",
    category: "Respiratory Equipment",
    image: ElectricAdjustable,
    rating: 4.8,
  },
  {
    id: 5,
    name: "Olympus Medical Endoscopy System",
    category: "Hospital Furniture",
    image: OlympusMedical,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Adjustable Mobile Medical Instrument Trolley",
    category: " Hospital Furniture",
    image:MedicalInstrumentTrolley,
    rating: 4.8,
  },
  {
    id: 7,
    name: "Portable Digital Ultrasound Scanner",
    category: "Sterilization Equipment",
    image: DigitalUltrasoundScanner,
    rating: 4.7,
  },
  {
    id: 8,
    name: "Ultrasound Transducer Probe",
    category: "Laboratory Equipment",
    image: UltrasoundTransducerProbe,
    rating: 4.9,
  },
  {
    id: 9,
    name: "Mindray 3D/4D Ultrasound Machine",
    category: "Respiratory Equipment",
    image: UltrasoundMachine,
    rating: 4.8,
  },
  {
    id: 10,
    name: "Handheld Fetal Doppler Probe (exact model needs confirmation)",
    category: "Respiratory Equipment",
    image: HandheldFetalDopplerProbe ,
    rating: 4.7,
  },
  {
    id: 11,
    name: "Stainless Steel Theatre Instrument Sterilization Box",
    category: "Diagnostic Equipment",
    image: StainlessSteelTheatre,
    rating: 4.8,
  },
  {
    id: 12,
    name: "Digital X-Ray Radiography System",
    category: "Hospital Furniture",
    image: DigitalXRay,
    rating: 4.9,
  },
  {
    id: 13,
    name: "Hydraulic Electric Gynecological Examination Table",
    category: "Sterilization Equipment",
    image: HydraulicElectricGynecological,
    rating: 4.8,
  },
  {
    id: 14,
    name: "Automated External Defibrillator (AED)",
    category: "Laboratory Equipment",
    image: AutomatedExternalDefibrillator,
    rating: 4.9,
  },
   {
      id: 15,
      name: 'C-Arm X-Ray Machine',
      description: 'Comfortable and adjustable beds for patient care.',
      image: CArmXRayMachine,
      rating: 4.8,
    },
    {
      id: 16,
      name: 'Electric Suction Apparatus',
      description: 'Reliable tools for accurate medical diagnosis.',
      image: ManualHospitalBed,
      rating: 4.8,
    },
    {
      id: 17,
      name: 'Medical Consultation Booth / Soundproof Medical Booth',
      description: 'Advanced equipment for monitoring vital signs.',
      image: MedicalConsultationBooth,
    rating: 4.8,
    },
    {
      id: 18,
      name: 'Hospital Privacy Curtains / Bed Screens',
      description: 'Precision instruments for medical procedures.',
      image: BedScreens,
     rating: 4.8,
    },
    
    {
      id: 19,
      name: 'MRI Scanner (Magnetic Resonance Imaging Machine)',
      description: 'Essential supplies for everyday healthcare.',
      image: MRIScanner,
      rating: 4.8,
    },
    {
      id: 20,
      name: 'Vertical Steam Sterilizer (Autoclave)',
      description: 'Modern equipment for laboratory testing.',
      image: VerticalSteam ,
      rating: 4.8,
    },
    {
      id: 21,
      name: 'Handheld Pulse Oximeter',
      description: 'Equipment designed to support breathing care.',
      image: HandheldPulseOximeter,
      rating: 4.8,
    },
     {
      id: 22,
      name: 'Wireless Watch Pager',
      description: 'Equipment designed to alert.',
      image: Watchpager,
      rating: 4.8,
    },
     {
      id: 23,
      name: 'Wireless Call System',
      description: 'Equipment designed to alert.',
      image: Callsystem,
      rating: 4.8,
    },
     {
      id: 25,
      name: 'Wireless Call Button',
      description: 'Equipment designed to alert.',
      image: Callbutton,
      rating: 4.8,
    },
];

const FeaturedProducts = () => {
  return (
 <Applayout>
     <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Products
          </span>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Medical Equipment
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our selection of quality medical equipment and
            healthcare supplies designed to support better patient care.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Product Image */}
              <div className="relative flex h-60 items-center justify-center overflow-hidden bg-gray-50 p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Information */}
              <div className="p-5">
                <p className="mb-2 text-sm font-medium text-blue-600">
                  {product.category}
                </p>

                <h3 className="min-h-12 text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                  </div>

                  <span className="text-sm font-medium text-gray-600">
                    {product.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
 </Applayout>
  );
};

export default FeaturedProducts;
