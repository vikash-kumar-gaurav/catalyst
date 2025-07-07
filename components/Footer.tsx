import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaChevronRight
} from 'react-icons/fa';
import '../app/globals.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <Image 
                src="/college-logo.png" 
                alt="College Logo"
                width={180}
                height={70}
                className="dark:invert"
              />
            </div>
            <p className="mb-4 text-muted-foreground text-sm">
              123 Education Avenue<br />
              Academic City, AC 12345<br />
              United States
            </p>
            <p className="text-muted-foreground text-sm">
              © {currentYear} College Name. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Academics', href: '/academics' },
                { name: 'Admissions', href: '/admissions' },
                { name: 'Research', href: '/research' },
                { name: 'Campus Life', href: '/campus-life' },
              ].map((link) => (
                <li key={link.name} className="flex items-center">
                  <FaChevronRight className="mr-2 text-muted-foreground text-xs" />
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <FaPhone className="mt-0.5" />
                <div>
                  <p className="font-medium">General Inquiries</p>
                  <p>(123) 456-7890</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@college.edu</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaBuilding className="mt-0.5" />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p>Administration Building, Room 101</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Stay Connected</h3>
            <div className="flex gap-4 mb-6">
              <Link href="#" aria-label="Facebook" className="social-icon">
                <FaFacebook />
              </Link>
              <Link href="#" aria-label="Twitter" className="social-icon">
                <FaTwitter />
              </Link>
              <Link href="#" aria-label="Instagram" className="social-icon">
                <FaInstagram />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="social-icon">
                <FaLinkedin />
              </Link>
              <Link href="#" aria-label="YouTube" className="social-icon">
                <FaYoutube />
              </Link>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-muted-foreground">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="newsletter-input"
                />
                <button className="newsletter-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-divider flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4 md:mb-0">
            <Link href="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-link">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="footer-link">
              Accessibility
            </Link>
          </div>
          <div className="text-center md:text-right">
            Accredited by the Higher Education Commission
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;