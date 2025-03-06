import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#151515] text-dark-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-traditional-300">NW</h2>
              <div className="h-1 w-12 bg-traditional-300 mt-2 rounded-full"></div>
            </div>
            <p className="text-dark-muted max-w-md text-lg font-light leading-relaxed">
              Bridging tradition and innovation through design, style, and
              cultural immersion. Join us on a journey through Bengal's rich
              heritage.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://instagram.com"
                className="text-dark-muted hover:text-traditional-300 transition-all transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-dark-muted hover:text-traditional-300 transition-all transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                className="text-dark-muted hover:text-traditional-300 transition-all transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-traditional-300 relative">
              Explore
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-traditional-300"></span>
            </h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-dark-muted hover:text-traditional-300 transition-colors inline-block relative group"
                  >
                    About
                    <span className="absolute w-0 h-0.5 bg-traditional-300 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design-studio"
                    className="text-dark-muted hover:text-traditional-300 transition-colors inline-block relative group"
                  >
                    Design Studio
                    <span className="absolute w-0 h-0.5 bg-traditional-300 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/styling-consultancy"
                    className="text-dark-muted hover:text-traditional-300 transition-colors inline-block relative group"
                  >
                    Styling
                    <span className="absolute w-0 h-0.5 bg-traditional-300 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bengal-immersion"
                    className="text-dark-muted hover:text-traditional-300 transition-colors inline-block relative group"
                  >
                    Bengal Immersion
                    <span className="absolute w-0 h-0.5 bg-traditional-300 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-traditional-300 relative">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-traditional-300"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:hello@nw.com"
                  className="hover:text-traditional-300 transition-colors"
                >
                  hello@nw.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+15551234567"
                  className="hover:text-traditional-300 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-map-pin"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Kolkata, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter subscription - optional */}
        <div className="mt-16 pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              Subscribe to our newsletter for updates on new collections and
              cultural events
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-stone-800 text-dark-muted border border-dark-border rounded-l-md focus:outline-none focus:ring-1 focus:ring-traditional-300"
              />
              <button className="bg-traditional-300 text-dark-surface px-4 py-2 rounded-r-md hover:bg-traditional-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} NW. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-traditional-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-traditional-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
