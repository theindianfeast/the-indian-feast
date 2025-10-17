import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, CheckCircle } from 'lucide-react';
import DeliveryPlatforms from '../components/DeliveryPlatforms';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with us for reservations, inquiries, or just to say hello
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      62 Brudenell Rd, Leeds LS6 1EG,
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">++44 7775604501</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">theindianfeast03@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                    <div className="text-gray-600">
                      <p>Mon – Tue: 11:00 AM – 11:00 PM</p>
                      <p>Wed: Closed</p>
                      <p>Thu – Sun: 11:00 AM – 11:00 PM</p>
                      <p>Kitchen closes at 10:30 PM</p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.2394948195088!2d-1.5735641117315047!3d53.81258120133633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795fad9ea615dd%3A0x670acc056af6a322!2sThe%20Indian%20Feast!5e1!3m2!1sen!2sin!4v1758789504423!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-700">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form
                action="https://formsubmit.co/theindianfeast03@gmail.com"
                method="POST"
                className="space-y-6"
                onSubmit={() => setIsSubmitted(true)}
              >
                {/* Hidden fields for autoresponder & subject */}
                <input type="hidden" name="_subject" value="General Inquiry - The Indian Feast" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting The Indian Feast! We have received your message and will get back to you within 24 hours."
                />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Reservation">Reservation</option>
                      <option value="Catering">Catering Services</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <DeliveryPlatforms />

      {/* Quick Contact */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <p className="text-xl text-gray-600 mb-8">
            Need something specific? Choose the action that best suits your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/book-table"
              className="bg-yellow-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors block"
            >
              Reserve a Table
            </a>
            <a
              href="/catering"
              className="bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors block"
            >
              Request Catering
            </a>
            <a
              href="tel:+442012345678"
              className="bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors block"
            >
              Call for Takeaway
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
