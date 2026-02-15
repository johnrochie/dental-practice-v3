import { CheckCircle, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Accepting New Patients',
      description: 'We\'re currently welcoming new patients. Book your first appointment today and experience our difference.',
      icon: CheckCircle,
    },
    {
      title: 'Insurance Friendly',
      description: 'We accept most major dental insurance plans. Our team handles direct billing for your convenience.',
      icon: CheckCircle,
    },
    {
      title: 'Sedation Available',
      description: 'Nervous about dental visits? We offer sedation options for anxiety-free treatment.',
      icon: CheckCircle,
    },
    {
      title: 'Extended Hours',
      description: 'Evening and Saturday appointments available to fit your busy schedule.',
      icon: CheckCircle,
    },
    {
      title: 'Free Consultations',
      description: 'Want to explore your options? We offer free initial consultations for new patients.',
      icon: CheckCircle,
    },
    {
      title: 'Emergency Care 24/7',
      description: 'Dental emergency? We\'re here when you need us with urgent care services.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-playfair">
              Your Partner in Oral Health
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Premier Dental Care, we believe everyone deserves exceptional dental care. Our dedicated team combines expertise with genuine compassion, ensuring every visit is comfortable and effective.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-teal-900/10 hover:shadow-xl hover:shadow-teal-900/20 group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl overflow-hidden relative">
              {/* Abstract Medical Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Central circle */}
                  <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-50 blur-3xl absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-pulse" />

                  {/* Inner circles */}
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="text-center text-white">
                        <div className="text-4xl sm:text-5xl font-bold mb-1">15+</div>
                        <div className="text-sm font-medium opacity-90">Years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-teal-100 rounded-full opacity-30" />
              <div className="absolute bottom-12 right-8 w-16 h-16 bg-emerald-100 rounded-full opacity-30" />
              <div className="absolute top-1/2 right-4 w-12 h-12 bg-teal-100 rounded-full opacity-20" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">98%</span>
                </div>
                <div>
                  <div className="text-sm text-slate-600">Satisfaction Rate</div>
                  <div className="text-2xl font-bold text-slate-900">Excellent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
