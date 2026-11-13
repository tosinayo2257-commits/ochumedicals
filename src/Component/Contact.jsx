
import { useState } from "react";
import { Link } from "react-router";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
  FaHospital,
} from "react-icons/fa";
import Footer from "./Footer";
import Applayout from "../Layout/Applayout";

// Ochu Medicals WhatsApp Number
const WHATSAPP_NUMBER = "2348052847003";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Redirect contact form to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Ochu Medicals,

I would like to make an enquiry.

Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

Thank you.
    `;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.location.href = whatsappURL;
  };

  // Contact Information
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      details: "+234 805 284 7003",
      link: "tel:+2348052847003",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      details: "infoochumedicals@gmail.com",
      link: "mailto:infoochumedicals@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      details:
        "351 Ikotun Road, Opposite Idimu Primary School, Isheri Idimu, Alimosho, Lagos State, Nigeria",
      link: "https://www.google.com/maps/search/?api=1&query=351+Ikotun+Road+Opposite+Idimu+Primary+School+Isheri+Idimu+Alimosho+Lagos+Nigeria",
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: "Monday - Friday: 8AM - 5PM",
      link: null,
    },
  ];

  return (
   <Applayout>
     <div className="bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800" />

        <div className="relative mx-auto max-w-7xl px-5 text-center">

          <span className="inline-block rounded-full bg-blue-800 px-5 py-2 text-sm font-semibold text-blue-100">
            Get In Touch
          </span>

          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Contact OchuMedicals Nigeria Limited
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Have questions about our medical equipment or healthcare
            supplies? We are happy to hear from you. Get in touch with
            our team today.
          </p>

          <div className="mt-8">
            <Link
              to="/products"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-900 transition hover:bg-blue-100"
            >
              Explore Products
            </Link>
          </div>

        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-12 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-600">
              Contact Information
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              We'd Love to Hear From You
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Reach out to us through any of the following channels.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                  {info.icon}
                </div>

                <h3 className="mt-5 font-bold text-gray-900">
                  {info.title}
                </h3>

                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-3 block text-sm text-gray-600 transition hover:text-blue-700"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="mt-3 text-sm text-gray-600">
                    {info.details}
                  </p>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <span className="font-bold uppercase tracking-widest text-blue-600">
              Send Us a Message
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Let's Talk About Your Medical Equipment Needs
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Whether you are looking for hospital equipment,
              laboratory supplies, diagnostic devices or other
              healthcare products, our team is ready to assist you.
            </p>

            <div className="mt-10 rounded-2xl bg-blue-950 p-8 text-white">

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-800 text-2xl">
                  <FaHospital />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    OchuMedicals NIgeria Limited
                  </h3>

                  <p className="mt-1 text-sm text-blue-200">
                    Quality Equipment. Better Healthcare.
                  </p>
                </div>
              </div>

              <p className="mt-7 leading-8 text-blue-100">
                We are committed to helping healthcare professionals
                and facilities find suitable medical equipment
                and healthcare supplies.
              </p>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Ochu Medicals, I would like to make an enquiry."
                )}`}
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
              >
                <FaWhatsapp className="text-xl" />
                Chat With Us
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">

            <h3 className="text-2xl font-bold text-gray-900">
              Send a Message
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form below and continue your enquiry on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your enquiry about?"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                Send Message via WhatsApp
                <FaWhatsapp className="text-xl" />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-10 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-600">
              Find Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Our Location
            </h2>

            <p className="mt-4 text-gray-600">
              Visit OchuMedicals in Lagos, Nigeria.
            </p>
          </div>

          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl bg-blue-50 p-10 text-center">

            <FaMapMarkerAlt className="text-5xl text-blue-700" />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              OchuMedicals, Lagos
            </h3>

            <p className="mt-3 max-w-lg text-gray-600">
              351 Ikotun Road, Opposite Idimu Primary School,
              Isheri Idimu, Alimosho, Lagos State, Nigeria.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=351+Ikotun+Road+Opposite+Idimu+Primary+School+Isheri+Idimu+Alimosho+Lagos+Nigeria"
              target="_blank"
              rel="noreferrer"
              className="mt-6 rounded-xl bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Get Directions
            </a>

          </div>
        </div>
      </section>


    </div>
   </Applayout>
  );
};

export default Contact;