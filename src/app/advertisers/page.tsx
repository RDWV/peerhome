'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Advertisers() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-gradient text-5xl md:text-7xl font-bold mb-6">
              Boost your sales
              <br />
              with Peernetwork peer
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">
              We will find right auditory for your products
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary w-full sm:w-auto">
                Contact Us
              </Link>
              <Link href="#how-it-works" className="btn-white w-full sm:w-auto">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-gradient text-4xl md:text-5xl font-bold mb-16">
              How it works?
            </h2>
            <div className="card">
              <p className="text-xl text-gray-300">
                We will find right auditory for your products through our network of creators and influencers.
                Our AI-powered matching system ensures your ads reach the most relevant audience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-8">Contact us!</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Phone</h3>
                <p className="text-gray-300">+49 151 23456789</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <p className="text-gray-300">Kantstraße 127, Berlin, Germany</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                <div className="flex gap-4">
                  {/* Add your social media icons/links here */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 