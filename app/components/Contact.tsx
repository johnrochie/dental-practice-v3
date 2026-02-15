export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
            Let's Talk
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Ready to transform your smile? Get in touch with our team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#1e293b] mb-4 sm:mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-sm font-medium text-[#1e293b]">Address</p>
                <p className="text-slate-600 text-sm sm:text-base">
                  123 Main Street
                  <br />
                  Dublin, Ireland
                  <br />
                  D02 XY12
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#1e293b]">Phone</p>
                <p className="text-slate-600 text-sm sm:text-base">
                  +353 1 234 5678
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#1e293b]">Email</p>
                <p className="text-slate-600 text-sm sm:text-base">
                  info@premierdental.ie
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#1e293b]">Opening Hours</p>
                <div className="space-y-1 text-sm text-slate-600">
                  <p>Mon-Fri: 9am - 6pm</p>
                  <p>Saturday: 9am - 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#ffffff] rounded-2xl shadow-lg p-6 sm:p-8 border border-[#e2e8f0]">
              <h3 className="font-semibold text-[#1e293b] mb-4 sm:mb-6">
                Send us a message
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/20 transition-all outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-[#e2e8f0] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/20 transition-all outline-none"
                  required
                />
                <textarea
                  rows={4}
                  placeholder="How can we help you? Describe your dental needs in detail..."
                  className="w-full px-4 py-2 rounded-lg border-[#e2e8f0] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/20 transition-all outline-none resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 bg-[#2563eb] hover:bg-[#38bdf8] text-white rounded-lg font-semibold transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
