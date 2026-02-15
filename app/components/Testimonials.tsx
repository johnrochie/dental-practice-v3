import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Murphy',
      initial: 'J',
      review: 'The team at Premier Dental made my daughter\'s first dentist visit truly wonderful. They were patient, gentle, and explained everything in terms she could understand. She actually looks forward to coming back!',
      rating: 5,
      date: 'January 2025',
      service: 'Family Dentistry',
    },
    {
      name: 'Aileen Kelly',
      initial: 'A',
      review: 'I\'ve been to several dental practices over the years, but none compare to the care and attention I received here. Dr. O\'Brien took the time to understand my concerns and created a treatment plan that fit my budget.',
      rating: 5,
      date: 'December 2024',
      service: 'Cosmetic Dentistry',
    },
    {
      name: 'Patrick O\'Sullivan',
      initial: 'P',
      review: 'Had a dental emergency on a Saturday morning and they got me in within two hours. The team was incredibly professional and helped me stay calm. The quality of care during a stressful situation was exceptional.',
      rating: 5,
      date: 'November 2024',
      service: 'Emergency Care',
    },
    {
      name: 'Siobhán Byrne',
      initial: 'S',
      review: 'After years of avoiding the dentist due to anxiety, I finally took the leap. The sedation option changed everything. Dr. Walsh was so gentle and I didn\'t feel a thing. My teeth have never looked better!',
      rating: 5,
      date: 'October 2024',
      service: 'Sedation Dentistry',
    },
    {
      name: 'Liam Gallagher',
      initial: 'L',
      review: 'My whole family comes here now. From my toddler\'s first checkup to my mother\'s implants, they handle everything with the same level of care and professionalism. It\'s rare to find a practice that serves all ages so well.',
      rating: 5,
      date: 'September 2024',
      service: 'Family Dentistry',
    },
    {
      name: 'Maeve Collins',
      initial: 'M',
      review: 'I\'ve been getting compliments on my smile everywhere since my veneers were done. Dr. Chen has an artistic eye and technical skill that\'s unmatched. The entire process was smooth and the results exceeded my expectations.',
      rating: 5,
      date: 'August 2024',
      service: 'Cosmetic Dentistry',
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-playfair">
            Patient Stories
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Real experiences from patients who trust us with their smiles
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-bold">
                    {item.initial}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-sm text-slate-600 truncate">
                    {item.service}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="text-slate-700 leading-relaxed mb-4 italic">
                "{item.review}"
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-200">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <span className="font-semibold text-slate-900">4.9</span>
            <span className="text-slate-600">on Google</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">2,847 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
