'use client';

import { Phone as PhoneIcon, Mail, MapPin, Clock } from 'lucide-react';

function ContactForm() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-200">
      <h3 className="text-xl font-bold text-slate-900 mb-6 font-playfair">
        Send a Message
      </h3>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+353 1 234 5678"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none bg-white"
          >
            <option value="">Select a service</option>
            <option value="general">General Dentistry</option>
            <option value="cosmetic">Cosmetic Dentistry</option>
            <option value="orthodontics">Orthodontics</option>
            <option value="emergency">Emergency Care</option>
            <option value="children">Children's Dentistry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your dental needs or questions..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-none resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-teal-900/10 hover:shadow-xl hover:shadow-teal-900/20"
        >
          Send Message
        </button>

        <p className="text-xs text-slate-500 text-center">
          We'll respond within 24-48 hours
        </p>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-playfair">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to transform your smile? We're here to help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 font-playfair">
              Contact Information
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all">
                <PhoneIcon className="w-6 h-6 text-teal-600 mb-3" />
                <p className="text-sm font-medium text-slate-700 mb-1">Phone</p>
                <p className="text-slate-600 font-medium">+353 1 234 5678</p>
                <p className="text-xs text-slate-500 mt-1">Available Mon-Sat</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all">
                <Mail className="w-6 h-6 text-teal-600 mb-3" />
                <p className="text-sm font-medium text-slate-700 mb-1">Email</p>
                <p className="text-slate-600 font-medium text-sm break-all">
                  info@premierdental.ie
                </p>
                <p className="text-xs text-slate-500 mt-1">24-48 hour response</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all">
                <MapPin className="w-6 h-6 text-teal-600 mb-3" />
                <p className="text-sm font-medium text-slate-700 mb-1">Address</p>
                <p className="text-slate-600 text-sm">
                  123 Main Street
                  <br />
                  Dublin, D02 XY12
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all">
                <Clock className="w-6 h-6 text-teal-600 mb-3" />
                <p className="text-sm font-medium text-slate-700 mb-1">Hours</p>
                <div className="text-slate-600 text-sm space-y-1">
                  <p>Mon-Fri: 9am - 6pm</p>
                  <p>Saturday: 9am - 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Insurance Providers Placeholder */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <p className="text-sm font-medium text-slate-700 mb-3">
                Insurance Providers
              </p>
              <div className="flex flex-wrap gap-3">
                {['VHI', 'Laya', 'Irish Life Health', 'Aviva'].map((provider) => (
                  <span
                    key={provider}
                    className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium"
                  >
                    {provider}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">
                And most major dental insurance plans
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="aspect-[21/9] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium mb-1">Interactive Map</p>
              <p className="text-sm text-slate-500">123 Main Street, Dublin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
