'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between py-2 px-6 md:px-16 lg:px-24 bg-white shadow-sm relative">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="UB MAGER Logo"
          width={170}
          height={170}
          className="object-contain"
        />
      </Link>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex items-center space-x-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-semibold text-[16px] text-gray-700 transition-all duration-300 
                hover:text-[#043A53] group
                ${isActive ? 'text-[#043A53]' : ''}
              `}
            >
              {link.label}

              {/* Garis bawah animasi hover */}
              <span
                className={`absolute left-0 -bottom-3 h-[5px] w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r from-[#043A53] to-[#BFEBFF] 
                ${
                  isActive
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700 z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu} />
      )}

      {/* Mobile Menu Content */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-gray-700"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold text-[18px] transition-all duration-300 py-2 px-4 rounded-lg
                    ${isActive 
                      ? 'text-[#043A53] bg-blue-50 border-l-4 border-[#043A53]' 
                      : 'text-gray-700 hover:text-[#043A53] hover:bg-gray-50'
                    }
                  `}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Optional: Add some bottom content or branding */}
          <div className="mt-auto pb-8">
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-500 text-sm">UB MAGER WEB</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;