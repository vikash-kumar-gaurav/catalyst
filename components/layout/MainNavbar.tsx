'use client';

import { useState, useEffect, useRef, MouseEvent, KeyboardEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { navItems } from './Constants';


type NavItem = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
  isMegaMenu?: boolean;
  megaMenuItems?: { title?: string; links: { name: string; href: string }[] }[];
};

type MainNavbarProps = {
  isFixed?: boolean;
};

export default function MainNavbar({ isFixed = false }: MainNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const breakpoints = { lg: 1024 };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoints.lg) {
        setMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    const handleClickOutside = (e: MouseEvent | globalThis.MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const btn = document.getElementById('hamburger-button');

      if (
        mobileMenuOpen &&
        menu &&
        !menu.contains(e.target as Node) &&
        btn &&
        !btn.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent | globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setOpenSubmenu(null);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  // Mouse enter handler for dropdowns
  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  // Mouse leave handler for dropdowns
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleSubmenu = (idx: number) => {
    setOpenSubmenu(openSubmenu === idx ? null : idx);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const menuVariants = {
    closed: { opacity: 0, height: 0, y: -10 },
    open: { opacity: 1, height: 'auto', y: 0 }
  };

  const submenuVariants = {
    closed: { opacity: 0, scale: 0.95, y: -5 },
    open: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className={`w-full bg-white relative ${isFixed ? 'z-[1000]' : 'z-[1001]'}`}>
      <div className="flex items-center justify-between py-4 sm:py-4 relative px-4 sm:px-4 lg:px-6 xl:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 z-10 transition-all duration-300">
          <Image
            src="https://catalystcollege.in/Catalyst_logo.jpg"
            alt="CIMAGE Group of Institutions"
            width={100}
            height={80}
            className="w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <nav className="flex items-center space-x-5">
            {navItems.map((item: NavItem, i: number) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item?.submenu ? "#" : item.href}
                  className="px-2 xl:px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-600 flex items-center transition-colors duration-300 rounded-md hover:bg-gray-50"
                >
                  {item.name}
                  {(item.submenu || item.isMegaMenu) && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === i ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Mega Menu */}
                {item.isMegaMenu && activeDropdown === i && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={submenuVariants}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-1/2 transform -translate-x-1/2 top-full z-[9999] mt-1"
                    style={{ zIndex: 9999 }}
                  >
                    <div className="w-[90vw] max-w-4xl bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden transition-all duration-300">
                      <div className="p-4 sm:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {item.megaMenuItems?.map((cat, x) => (
                          <div key={x} className="transition-all duration-300 hover:scale-[1.02]">
                            <h3 className="text-sm font-semibold mb-2 text-gray-900 truncate">
                              {cat.title}
                            </h3>
                            <ul className="space-y-1">
                              {cat.links.map((lnk, y) => (
                                <li key={y} className="transition-all duration-300 hover:translate-x-1">
                                  <Link
                                    href={lnk.href}
                                    className="text-sm text-gray-700 hover:text-red-600 block py-1 px-1 rounded hover:bg-gray-50 transition-colors"
                                  >
                                    {lnk.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submenu */}
                {item.submenu && !item.isMegaMenu && activeDropdown === i && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={submenuVariants}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 top-full z-[9999] mt-1"
                    style={{ zIndex: 9999 }}
                  >
                    <div className="w-48 lg:w-56 bg-white shadow-xl rounded-lg border border-gray-200 py-2 transition-all duration-300">
                      {item.submenu.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-all duration-300 hover:translate-x-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Register Button */}
        <div className="hidden lg:block">
          <Button
            className={`text-sm px-4 py-1.5 whitespace-nowrap transition-all duration-300 hover:scale-105`}
          >
            REGISTER ONLINE
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <button
            id="hamburger-button"
            className="p-2 rounded-md hover:bg-gray-100 transition-all duration-300 z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <IoCloseOutline className="h-6 w-6 text-gray-800 transition-transform duration-300 rotate-180" />
            ) : (
              <HiOutlineMenuAlt3 className="h-6 w-6 text-gray-800 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden relative z-[9999]"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item: NavItem, i: number) => (
                <div key={i}>
                  {item.submenu || item.isMegaMenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(i)}
                        className="flex justify-between w-full px-3 py-3 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
                      >
                        {item.name}
                        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSubmenu === i ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {openSubmenu === i && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="bg-gray-50 rounded-md px-2 py-2"
                          >
                            {(item.isMegaMenu ? item.megaMenuItems ?? [] : [{ links: item.submenu ?? [] }]).map((sec, si) => (
                              <div key={si} className="transition-all duration-300">
                                {sec.title && <p className="text-sm font-semibold px-2 mb-1 transition-all duration-300">{sec.title}</p>}
                                {sec.links.map((lnk, li) => (
                                  <Link
                                    key={li}
                                    href={lnk.href}
                                    className="block px-3 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-white rounded transition-all duration-300 hover:translate-x-1"
                                    onClick={closeMobileMenu}
                                  >
                                    {lnk.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-3 text-base text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md transition-all duration-300"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <Button
                  className="w-full text-center py-3 text-base font-medium transition-all duration-300 hover:scale-105"
                  onClick={closeMobileMenu}
                >
                  REGISTER ONLINE
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}