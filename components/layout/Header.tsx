
'use client';

import { useState, useEffect, useRef } from 'react';
import TopNavbar from './TopNavbar';
import MainNavbar from './MainNavbar';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [hideTopBar, setHideTopBar] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show fixed header when scrolled past 50px
            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Hide/show logic for TopBar - works everywhere, not just outside hero section
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling down - hide top bar
                setHideTopBar(true);
            } else if (currentScrollY < lastScrollY.current) {
                // Scrolling up - show top bar
                setHideTopBar(false);
            }

            lastScrollY.current = currentScrollY;
        };

        // Throttle scroll events for better performance
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });

        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', throttledHandleScroll);
    }, []);

    return (
        <header>
            {/* Static header at the top - only visible when not scrolled */}
            <div className={`w-full bg-white ${
                scrolled ? 'opacity-0' : 'opacity-100'
            } relative z-[9999]`}>
                <TopNavbar />
                <MainNavbar />
            </div>

            {/* Fixed header that appears when scrolled */}
            <div className={`fixed top-0 left-0 right-0 z-[1000] bg-white shadow-lg ${
                scrolled ? 'opacity-100' : 'opacity-0'
            }`}>
                <div className="w-full">
                    {/* TopNavbar with conditional visibility */}
                    <div className={`transition-all duration-300 ${
                        hideTopBar ? 'opacity-0 -translate-y-full h-0 overflow-hidden' : 'opacity-100 translate-y-0'
                    }`}>
                        <TopNavbar />
                    </div>
                    {/* MainNavbar always visible when fixed header is shown */}
                    <MainNavbar isFixed={true} />
                </div>
            </div>
        </header>
    );
}