'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Newsletter */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              Talarex
            </Link>
            <p className="text-sm mb-4">
              Your smartest AI logistics worker
            </p>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSubmit} className="mt-6">
              <label htmlFor="email" className="block text-sm mb-2">
                Sign up to our newsletter
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/product/overview" className="hover:text-white transition">Overview</Link></li>
              <li><Link href="/product/features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="/product/integrations" className="hover:text-white transition">Integrations</Link></li>
              <li><Link href="/product/security" className="hover:text-white transition">Security</Link></li>
            </ul>
          </div>
          
          {/* Solutions Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/freight-brokerages" className="hover:text-white transition">Freight Brokerages</Link></li>
              <li><Link href="/solutions/freight-forwarders" className="hover:text-white transition">Freight Forwarders</Link></li>
              <li><Link href="/solutions/carriers" className="hover:text-white transition">Carriers</Link></li>
              <li><Link href="/solutions/shippers" className="hover:text-white transition">Shippers</Link></li>
            </ul>
          </div>
          
          {/* Company & Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/company/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/company/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/company/news" className="hover:text-white transition">News</Link></li>
            </ul>
            
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/resources/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/resources/webinars" className="hover:text-white transition">Webinars</Link></li>
              <li><Link href="/resources/docs" className="hover:text-white transition">Docs</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm">© 2024 Talarex. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <Link href="https://linkedin.com" className="hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            
            {/* Legal Links */}
            <Link href="/legal/terms" className="text-sm hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/legal/privacy" className="text-sm hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}