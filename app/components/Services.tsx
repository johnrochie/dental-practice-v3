import { Activity, Sparkles, Smile, Phone, Baby, Stethoscope } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Activity,
      title: 'General Dentistry',
      description: 'Comprehensive exams, cleanings, and preventative care to keep your smile healthy.',
      features: ['Regular checkups', 'Professional cleaning', 'X-rays & digital imaging'],
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with teeth whitening, veneers, and smile makeovers.',
      features: ['Teeth whitening', 'Porcelain veneers', 'Complete makeovers'],
    },
    {
      icon: Smile,
      title: 'Orthodontics',
      description: 'Straighten your teeth with modern braces and clear aligners for all ages.',
      features: ['Traditional braces', 'Invisalign', 'Clear braces'],
    },
    {
      icon: Phone,
      title: 'Emergency Care',
      description: 'Urgent dental issues treated quickly with same-day appointments available.',
      features: ['Same-day appointments', 'Pain relief', 'Emergency repairs'],
    },
    {
      icon: Baby,
      title: 'Children\'s Dentistry',
      description: 'Gentle, child-friendly care in a welcoming, anxiety-free environment.',
      features: ['Age-appropriate care', 'Behavioural guidance', 'Prevention focus'],
    },
    {
      icon: Stethoscope,
      title: 'Preventive Care',
      description: 'Protect your oral health with regular checkups and personalized prevention plans.',
      features: ['Dental hygiene', 'Fluoride treatments', 'Oral cancer screenings'],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-playfair">
            Comprehensive Dental Services
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need for optimal oral health, all in one place
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-playfair">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-teal-900/10 hover:shadow-xl hover:shadow-teal-900/20"
          >
            Book Your Appointment Today
          </a>
        </div>
      </div>
    </section>
  );
}
