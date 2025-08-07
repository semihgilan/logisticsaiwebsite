'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Talarex
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/product" className="text-gray-700 hover:text-gray-900">
              Product
            </Link>
            
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                className="text-gray-700 hover:text-gray-900 flex items-center"
              >
                Solutions by Role
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {solutionsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link href="/solutions/freight-brokerages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Freight Brokerages
                    </Link>
                    <Link href="/solutions/freight-forwarders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Freight Forwarders
                    </Link>
                    <Link href="/solutions/carriers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Carriers
                    </Link>
                    <Link href="/solutions/shippers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Shippers
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/company" className="text-gray-700 hover:text-gray-900">
              Company
            </Link>
            
            <Link href="/demo" className="ml-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/product" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Product
              </Link>
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Solutions by Role</div>
                <div className="ml-4 space-y-1">
                  <Link href="/solutions/freight-brokerages" className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                    Freight Brokerages
                  </Link>
                  <Link href="/solutions/freight-forwarders" className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                    Freight Forwarders
                  </Link>
                  <Link href="/solutions/carriers" className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                    Carriers
                  </Link>
                  <Link href="/solutions/shippers" className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                    Shippers
                  </Link>
                </div>
              </div>
              <Link href="/company" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Company
              </Link>
              <Link href="/demo" className="block px-3 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700">
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}