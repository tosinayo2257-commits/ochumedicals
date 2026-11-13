
import { Link } from "react-router";
import {
  FaHeartbeat,
  FaUserMd,
  FaAward,
  FaShieldAlt,
  FaCheckCircle,
  FaTruck,
  FaHeadset,
  FaHospital,
} from "react-icons/fa";
import Footer from "./Footer";
import Applayout from "../Layout/Applayout";

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Quality Assurance",
    description:
      "We are committed to providing quality medical equipment that supports safe and reliable healthcare delivery.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Patient Care",
    description:
      "We believe every patient deserves access to dependable medical equipment and quality healthcare support.",
  },
  {
    icon: <FaAward />,
    title: "Professionalism",
    description:
      "We strive to maintain professionalism, honesty and excellence in everything we do.",
  },
  {
    icon: <FaUserMd />,
    title: "Customer Satisfaction",
    description:
      "Our customers are important to us. We aim to provide excellent service and support.",
  },
];

const reasons = [
  {
    icon: <FaCheckCircle />,
    title: "Quality Medical Equipment",
    description:
      "A selection of medical equipment designed to meet different healthcare needs.",
  },
  {
    icon: <FaTruck />,
    title: "Reliable Delivery",
    description:
      "We aim to make ordering and receiving medical supplies convenient.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    description:
      "Our team is available to assist customers with product enquiries and support.",
  },
  {
    icon: <FaHospital />,
    title: "Healthcare Solutions",
    description:
      "We provide equipment for hospitals, clinics, laboratories and healthcare facilities.",
  },
];

const About = () => {
  return (
  
      <div className="bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 opacity-95" />

        <div className="relative mx-auto max-w-7xl px-5 text-center">
          <span className="mb-5 inline-block rounded-full bg-blue-800 px-5 py-2 text-sm font-semibold text-blue-100">
            About OchuMedicals Nigeria Limited
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Supporting Better Healthcare Through Quality Medical Equipment
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            We are committed to making quality medical equipment and
            healthcare supplies accessible to healthcare professionals,
            hospitals, clinics and individuals.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-900"
            >
              Explore Our Products
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">

          <div>
            <span className="font-bold uppercase tracking-widest text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Your Trusted Partner in Medical Equipment Solutions
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Ochu Medicals is focused on providing medical equipment and
              healthcare supplies for hospitals, clinics, laboratories
              and other healthcare facilities.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We understand the importance of dependable medical equipment
              in delivering effective healthcare services. That is why
              we aim to make it easier for healthcare providers to find
              the equipment and supplies they need.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our goal is to build lasting relationships with our
              customers through quality products, reliable service
              and a commitment to customer satisfaction.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-block rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Browse Products
            </Link>
          </div>

          <div className="flex min-h-[380px] items-center justify-center rounded-3xl bg-blue-50 p-10">
            <div className="text-center">
              <FaHospital className="mx-auto text-8xl text-blue-700" />

              <h3 className="mt-7 text-3xl font-bold text-blue-950">
                OchuMedicals Nigeria Limited
              </h3>

              <p className="mt-3 text-gray-600">
                Quality Equipment. Better Healthcare.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-14 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-600">
              Our Purpose
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-9 shadow-sm transition hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                <FaHeartbeat />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To provide accessible and dependable medical equipment
                and healthcare supplies that support healthcare
                professionals and contribute to better patient care.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-9 shadow-sm transition hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                <FaAward />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To become a trusted provider of medical equipment and
                healthcare solutions, recognized for quality,
                reliability and excellent customer service.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-14 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-600">
              What Drives Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our values guide how we serve our customers and contribute
              to the healthcare industry.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-700">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-14 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-300">
              Why OchuMedicals
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Why Choose Us?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              We are focused on providing a convenient and dependable
              medical equipment purchasing experience.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="rounded-2xl border border-blue-800 bg-blue-900/60 p-7 transition hover:bg-blue-900"
              >
                <div className="text-3xl text-blue-300">
                  {reason.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-blue-100">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-50 px-6 py-14 text-center sm:px-12">

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Let's Support Better Healthcare Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Looking for reliable medical equipment and healthcare
            supplies? Explore our products or get in touch with us
            for assistance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="rounded-xl border border-blue-700 px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
            >
              Our Products
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-blue-700 px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </section>

    </div>
  
  );
};

export default About;
