import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            Let's Talk
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Ready to transform your smile? Get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#1e293b] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="p-4 bg-white rounded-xl border border-[#e2e8f0]">
                <p className="text-sm font-medium text-[#1e293b] mb-2">📍 Address</p>
                <p className="text-slate-600 text-sm sm:text-base">
                  123 Main Street
                  <br />
                  Dublin, Ireland
                  <br />
                  D02 XY12
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e2e8f0]">
                <p className="text-sm font-medium text-[#1e293b] mb-2">📞 Phone</p>
                <p className="text-slate-600 text-sm sm:text-base">
                  +353 1 234 5678
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e2e8f0]">
                <p className="text-sm font-medium text-[#1e293b] mb-2">✉️ Email</p>
                <p className="text-slate-600 text-sm sm:text-base">
                  info@premierdental.ie
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#e2e8f0]">
                <p className="text-sm font-medium text-[#1e293b] mb-2">🕐 Opening Hours</p>
                <div className="space-y-1 text-sm text-slate-600">
                  <p>Mon-Fri: 9am - 6pm</p>
                  <p>Saturday: 9am - 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
