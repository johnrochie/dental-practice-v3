export default function Footer() {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const socialLinks = [
    { name: 'Phone', href: 'tel:+35312345678', icon: '📞' },
    { name: 'Email', href: 'mailto:info@premierdental.ie', icon: '✉️' },
  ];

  return (
    <footer className="bg-[#0f172a] text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm md:text-base text-[#94a3b8]">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-3">
              Premium Dental Care
            </h3>
            <p className="text-[#94a3b8] mb-6 text-sm leading-relaxed">
              Ireland's foremost dental practice providing comprehensive care with modern technology and gentle care since 2010.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-[#1e293b] hover:bg-[#2563eb] flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-lg">Contact Us</h4>
            <div className="space-y-2 text-[#94a3b8] text-sm">
              <p>+353 1 234 5678</p>
              <p>info@premierdental.ie</p>
              <p>123 Main Street</p>
              <p>Dublin, Ireland D02 XY12</p>
              <p className="pt-2">Mon-Fri: 9am-6pm</p>
              <p>Saturday: 9am-12pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#94a3b8] font-semibold mb-3 text-lg">Legal</h4>
            <ul className="space-y-2 text-[#94a3b8] text-sm">
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-[#334155] text-center">
          <p className="text-[#94a3b8] text-sm">
            © 2026 Premium Dental Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
