'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    title: "No entry fees",
    description: "Our social network is for everyone. You don't need to pay anything to join or to earn your first money!",
    icon: "💫"
  },
  {
    title: "Safety",
    description: "Your money and transfers are protected by our blockchain system, ensuring complete security for all transactions.",
    icon: "🔒"
  },
  {
    title: "Support creativity",
    description: "The only thing that matters is how people like your post! Feel free to express yourself and earn from your creativity.",
    icon: "🎨"
  },
];

const timeline = [
  {
    date: 'April 2025',
    title: 'Beta version',
    description: 'Launch of the Beta Version of Peer Network for iOS, Android and Web.',
  },
  {
    date: 'July 2025',
    title: 'Payments',
    description: 'Peer Token payouts and in-app purchases for advertisers and additional features are now available.',
  },
  {
    date: 'Summer 2025',
    title: 'Offline events',
    description: 'A variety of launch promotion events, including networking sessions, conferences, parties, and more.',
  },
  {
    date: 'Fall 2025',
    title: 'Update 1.1',
    description: 'New features, such as user shops, are introduced. Future updates will be guided by user feedback.',
  },
];

export default function Home() {
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
              Monetise your talent
              <br />
              with Peernetwork peer
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">
              Get payment for your popularity - earn money with Peer Network
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="https://testflight.apple.com/join/xcCR5A67" className="btn-primary w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                Download iOS Beta
              </Link>
              <Link href="#how-it-works" className="btn-white w-full sm:w-auto">
                How it works?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why choose Peer Network?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our innovative platform where creativity meets opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Evolution</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our journey as an innovative startup! Each year, we add new features to Peer.Network to enhance user convenience
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="card max-w-lg relative group hover:border-blue-500/50 transition-colors duration-300">
                    <div 
                      className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300"
                      style={{
                        [index % 2 === 0 ? 'right' : 'left']: '-2rem',
                      }}
                    />
                    <span className="text-blue-400 text-lg font-semibold">{item.date}</span>
                    <h3 className="text-2xl font-bold mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{item.title}</h3>
                    <p className="text-gray-300 mt-4 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-gradient text-4xl md:text-6xl font-bold mb-12">
              Join Peer Network Today
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Start your journey with Peer Network and turn your creativity into earnings
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="https://testflight.apple.com/join/xcCR5A67" className="btn-primary w-full sm:w-auto text-lg flex items-center justify-center gap-2 hover:scale-105 transform transition-all" target="_blank" rel="noopener noreferrer">
                <span>Download iOS Beta (TestFlight)</span>
              </Link>
              <Link href="#" className="btn-white w-full sm:w-auto text-lg flex items-center justify-center gap-2 hover:scale-105 transform transition-all">
                <span>Coming Soon to Google Play</span>
              </Link>
              <Link href="#" className="btn-outline w-full sm:w-auto text-lg flex items-center justify-center gap-2 hover:scale-105 transform transition-all">
                <span>Web App (Coming Soon)</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
