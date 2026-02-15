import { Phone, Calendar, ShieldCheck, Award, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZjc2N2UiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djEwSDI0VjM0aDEyem0wLTIwdjEwSDI0VjE0aDEyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-8">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">
              Trusted by 10,000+ patients since 2010
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight font-playfair">
            Care You Can Trust.<br />
            <span className="text-teal-600">Smile You Deserve.</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Modern dentistry meets compassionate care. From routine checkups to complete smile transformations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <a
              href="#contact"
              className="group px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-teal-900/10 hover:shadow-xl hover:shadow-teal-900/20 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="tel:+35312345678"
              className="group px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-teal-200 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-1">15+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-1">10K+</div>
              <div className="text-sm text-slate-600">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-1">4.9</div>
              <div className="text-sm text-slate-600">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-1">24/7</div>
              <div className="text-sm text-slate-600">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
