'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold text-white">
                Peernetwork
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  For Creators
                </Link>
                <Link
                  href="/advertisers"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/advertisers') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  For Advertisers
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/about') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/events"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/events') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Events
                </Link>
                <Link
                  href="/blog"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/blog') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Blog
                </Link>
                <Link
                  href="https://testflight.apple.com/join/xcCR5A67"
                  className="btn-primary text-sm py-2 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download iOS App
                </Link>
                <Link
                  href="/whitepaper.pdf"
                  className="btn-outline text-sm py-2 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Whitepaper
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-black/90 border-t border-gray-800/50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <div className="space-y-2">
                  <Link href="/" className="block text-gray-400 hover:text-white">For Creators</Link>
                  <Link href="/advertisers" className="block text-gray-400 hover:text-white">For Advertisers</Link>
                  <Link href="/about" className="block text-gray-400 hover:text-white">About Us</Link>
                  <Link href="/events" className="block text-gray-400 hover:text-white">Events</Link>
                  <Link href="/blog" className="block text-gray-400 hover:text-white">Blog</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Kantstraße 127</p>
                  <p>Berlin, Germany</p>
                  <p>+49 151 23456789</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <div className="space-y-2">
                  <Link href="/privacy" className="block text-gray-400 hover:text-white">Privacy Policy</Link>
                  <Link href="/terms" className="block text-gray-400 hover:text-white">Terms of Service</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Add social media icons here */}
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Peernetwork. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
