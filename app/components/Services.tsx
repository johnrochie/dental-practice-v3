import { Activity, Sparkles, Smile, Phone, Baby, Stethoscope } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Activity,
      title: 'General Dentistry',
      description: 'Comprehensive exams, cleanings, and preventative care to keep your smile healthy.',
      features: ['Regular checkups', 'Professional cleaning', 'X-rays & digital imaging'],
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&h=400',
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with teeth whitening, veneers, and smile makeovers.',
      features: ['Teeth whitening', 'Porcelain veneers', 'Complete makeovers'],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&h=400',
    },
    {
      icon: Smile,
      title: 'Orthodontics',
      description: 'Straighten your teeth with modern braces and clear aligners for all ages.',
      features: ['Traditional braces', 'Invisalign', 'Clear braces'],
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&h=400',
    },
    {
      icon: Phone,
      title: 'Emergency Care',
      description: 'Urgent dental issues treated quickly with same-day appointments available.',
      features: ['Same-day appointments', 'Pain relief', 'Emergency repairs'],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400',
    },
    {
      icon: Baby,
      title: 'Children\'s Dentistry',
      description: 'Gentle, child-friendly care in a welcoming, anxiety-free environment.',
      features: ['Age-appropriate care', 'Behavioural guidance', 'Prevention focus'],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5&q=80&w=600&auto=format&fit=crop',
    },
    {
      icon: Stethoscope,
      title: 'Preventive Care',
      description: 'Protect your oral health with regular checkups and personalized prevention plans.',
      features: ['Dental hygiene', 'Fluoride treatments', 'Oral cancer screenings'],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400',
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
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-teal-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
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
