import { Award, ShieldCheck, Clock, Users } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-playfair">
            Why Patients Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted care you can rely on
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-playfair">
              Certified Experts
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Board-certified dentists with specialized training and ongoing education
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-playfair">
              Modern Technology
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Advanced digital X-rays, 3D imaging, and laser treatments for precision care
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-playfair">
              Same-Day Care
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Emergency appointments available daily with extended opening hours
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-playfair">
              Patient-Centered
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Personalized treatment plans and gentle care for your comfort
            </p>
          </div>
        </div>

        {/* Certifications Badge */}
        <div className="mt-12 sm:mt-16 p-8 bg-white rounded-2xl border border-slate-200 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-10 h-10 text-teal-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-playfair">
                GDC Registered Practice
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Fully registered with the General Dental Council (GDC). Our team maintains the highest standards of clinical excellence and patient safety. Registration No: 123456
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
