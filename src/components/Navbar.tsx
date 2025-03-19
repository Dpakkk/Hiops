'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  return (
    <nav className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/logo.svg" 
                alt="HiOps logo"
                width={170}
                height={36}
                className="object-contain"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/solutions" className="text-sm font-medium text-gray-700 hover:text-cast-blue transition-colors">
                Solutions
              </Link>
              
              <Link href="/resources" className="text-sm font-medium text-gray-700 hover:text-cast-blue transition-colors">
                Resources
              </Link>
              
              <Link href="/company" className="text-sm font-medium text-gray-700 hover:text-cast-blue transition-colors">
                Company
              </Link>
              
              <Link href="/docs" className="text-sm font-medium text-gray-700 hover:text-cast-blue transition-colors">
                Docs
              </Link>
              
              <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-cast-blue transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/demo" className="text-sm font-medium text-gray-700 hover:text-cast-blue transition-colors whitespace-nowrap flex items-center h-8">
              Book a demo
            </Link>
            
            <Link 
              href="/login" 
              className="text-sm font-medium text-gray-700 border border-gray-300 rounded px-3 flex items-center justify-center h-8 hover:text-cast-blue hover:border-cast-blue transition-colors"
            >
              Sign in
            </Link>
            
            <Link 
              href="/signup" 
              className="text-sm font-medium text-white bg-black rounded px-3 flex items-center justify-center h-8 hover:bg-gray-800 transition-colors"
            >
              Start free
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/solutions"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cast-blue hover:bg-gray-50 transition-colors"
            >
              Solutions
            </Link>
            <Link 
              href="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cast-blue hover:bg-gray-50 transition-colors"
            >
              Resources
            </Link>
            <Link 
              href="/company"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cast-blue hover:bg-gray-50 transition-colors"
            >
              Company
            </Link>
            <Link 
              href="/docs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cast-blue hover:bg-gray-50 transition-colors"
            >
              Docs
            </Link>
            <Link 
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cast-blue hover:bg-gray-50 transition-colors"
            >
              Pricing
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col px-5 space-y-3">
              <Link 
                href="/demo"
                className="text-base font-medium text-gray-700 hover:text-cast-blue transition-colors"
              >
                Book a demo
              </Link>
              <Link 
                href="/login"
                className="inline-block text-center text-base font-medium text-gray-700 border border-gray-300 rounded px-3 py-1.5 hover:text-cast-blue hover:border-cast-blue transition-colors"
              >
                Sign in
              </Link>
              <Link 
                href="/signup"
                className="inline-block text-center text-base font-medium text-white bg-black rounded px-3 py-1.5 hover:bg-gray-800 transition-colors"
              >
                Start free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;