import React, { useState, useRef } from 'react';
import { Users, Clock, Star, CheckCircle } from 'lucide-react';
import DeliveryPlatforms from '../components/DeliveryPlatforms';

const Catering = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    eventType: '',
    menuPreference: '',
    dietaryRequirements: '',
    venue: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const hiddenFormRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hiddenFormRef.current) {
      hiddenFormRef.current.submit();
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your catering request has been submitted successfully. We'll contact you within 24 hours
            to discuss your event details and provide a customized quote.
          </p>
          <p className="text-md text-gray-500">
            You will also receive a confirmation email shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Catering Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Let us bring the authentic taste of India to your special events
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ... your existing services JSX ... */}
        </div>
      </section>

      {/* Catering Form */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600">
              Tell us about your event and we'll create a customized menu just for you
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Visible Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
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
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Phone & Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select guest count</option>
                    <option value="10-25">10-25 guests</option>
                    <option value="26-50">26-50 guests</option>
                    <option value="51-100">51-100 guests</option>
                    <option value="101-200">101-200 guests</option>
                    <option value="200+">200+ guests</option>
                  </select>
                </div>
              </div>

              {/* Event Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Time *
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    required
                    value={formData.eventTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Event Type & Menu Preference */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select event type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="religious">Religious Celebration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="menuPreference" className="block text-sm font-medium text-gray-700 mb-2">
                    Menu Preference
                  </label>
                  <select
                    id="menuPreference"
                    name="menuPreference"
                    value={formData.menuPreference}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select preference</option>
                    <option value="vegetarian">Vegetarian Only</option>
                    <option value="mixed">Mixed (Veg & Non-Veg)</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                    <option value="custom">Custom Menu</option>
                  </select>
                </div>
              </div>

              {/* Venue */}
              <div>
                <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Venue *
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  required
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="Full address of the event venue"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Dietary Requirements */}
              <div>
                <label htmlFor="dietaryRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Requirements
                </label>
                <input
                  type="text"
                  id="dietaryRequirements"
                  name="dietaryRequirements"
                  value={formData.dietaryRequirements}
                  onChange={handleChange}
                  placeholder="Any allergies or special dietary needs"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Tell us more about your event, special requests, or any questions you have"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors"
              >
                Submit Catering Request
              </button>
            </form>

            {/* Hidden FormSubmit form */}
            <form
              ref={hiddenFormRef}
              action="https://formsubmit.co/theindianfeast03@gmail.com"
              method="POST"
              style={{ display: 'none' }}
            >
              {Object.keys(formData).map((key) => (
                <input key={key} type="hidden" name={key} value={formData[key as keyof typeof formData]} />
              ))}
              <input type="hidden" name="_subject" value="New Catering Request - The Indian Feast" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for your catering inquiry! We have received your request and will contact you within 24 hours to discuss your event details and provide a customized quote. We look forward to making your event memorable with our authentic Indian cuisine."
              />
              <input type="hidden" name="_template" value="table" />
            </form>
          </div>
        </div>
      </section>

      <DeliveryPlatforms />
    </div>
  );
};

export default Catering;
