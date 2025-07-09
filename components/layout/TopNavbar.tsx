'use client';

import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function TopNavbar() {
  // Common styles for reuse
  const socialIconContainerStyle = "bg-white/20 w-8 h-8 flex items-center justify-center rounded-full";
  const contactIconContainerStyle = "bg-white/20 p-2 rounded-full";

  return (
      <div className="hidden lg:block w-full bg-gradient-to-r from-red-500 to-indigo-800 text-white py-3">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 gap-4">
          <div className="flex items-center gap-3">
            <span className="mr-3 text-base">Follow us:-</span>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/cimage/" className="hover:text-gray-200 transition-colors">
                <div className={socialIconContainerStyle}>
                  <FaFacebookF size={16} />
                </div>
              </Link>
              <Link href="https://in.linkedin.com/school/cimage/" className="hover:text-gray-200 transition-colors">
                <div className={socialIconContainerStyle}>
                  <FaLinkedinIn size={16} />
                </div>
              </Link>
              <Link href="https://www.instagram.com/cimagecollege/?hl=en" className="hover:text-gray-200 transition-colors">
                <div className={socialIconContainerStyle}>
                  <FaInstagram size={16} />
                </div>
              </Link>
              <Link href="https://x.com/cimagecollege?lang=en" className="hover:text-gray-200 transition-colors">
                <div className={socialIconContainerStyle}>
                  <FaTwitter size={16} />
                </div>
              </Link>
              <Link href="https://www.youtube.com/@cimagepatna" className="hover:text-gray-200 transition-colors">
                <div className={socialIconContainerStyle}>
                  <FaYoutube size={16} />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 lg:gap-8">
            <div className="flex items-center gap-3">
              <div className={contactIconContainerStyle}>
                <Phone size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light">WhatsApp Now !</span>
                <span className="text-sm font-medium">+91 72507 67676</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className={contactIconContainerStyle}>
                <Phone size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light">Call Now !</span>
                <span className="text-sm font-medium">+91 98350 24444</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className={contactIconContainerStyle}>
                <Mail size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light">Email Now</span>
                <span className="text-sm font-medium">info@cimage.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}