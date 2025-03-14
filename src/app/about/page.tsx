'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Jakob Kaiser',
    role: 'Team: Computer Science',
    bio: 'Leading the technical development of Peer Network with expertise in blockchain and distributed systems.',
    image: '/team/jakob.jpg',
  },
  {
    name: 'Ender Küçükoğlu',
    role: 'Team: Strategy',
    bio: 'Driving the strategic vision and business development of Peer Network, focusing on growth and partnerships.',
    image: '/team/ender.jpg',
  },
];

const achievements = [
  {
    title: "User Privacy",
    description: "Complete control over your data with blockchain-based security",
    icon: "🔐"
  },
  {
    title: "Decentralized",
    description: "No central server - your data remains yours",
    icon: "🌐"
  },
  {
    title: "Fair Rewards",
    description: "Earn gems based on your content's popularity and engagement",
    icon: "💎"
  },
  {
    title: "Community Driven",
    description: "Active participation shapes the network's future",
    icon: "👥"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - What is Peer? */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-gradient text-5xl md:text-7xl font-bold mb-8">
              What is Peer?
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Peer Network is a revolutionary social platform where content creators can monetize their influence through our unique cryptocurrency, Peer Gems. By actively participating as a blockfluencer, you directly influence the blockchain-based network while earning rewards for your contributions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary w-full sm:w-auto">
                Get in contact with us
              </Link>
              <Link href="/whitepaper.pdf" className="btn-white w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                Download Whitepaper
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Building a secure, transparent, and rewarding social network for creators
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Peer Gems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card hover:border-blue-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">The Peer Gems</h2>
              <p className="text-gray-300">
                Peer Gems are our decentralized cryptocurrency, earned through active participation in the network. Create content, engage in votings, and share original work to earn gems that can be converted into real value.
              </p>
            </motion.div>

            {/* Blockchain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card hover:border-blue-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">The Peer Blockchain</h2>
              <p className="text-gray-300">
                Our decentralized infrastructure ensures maximum security and privacy. Without a central server, your data remains under your control while maintaining a seamless user experience.
              </p>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card hover:border-blue-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-300">
                You have complete control over your data sharing preferences. Our blockchain technology ensures transparency and security, while rewarding you with gems for every second you choose to share your data.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="heading-gradient text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300">
              Since 2018, our team has been working in Berlin&apos;s startup ecosystem, combining expertise in technology, economics, and design to create the future of social networking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-blue-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Stay Updated</h2>
              <p className="text-gray-300 text-center mb-8">
                Subscribe to our newsletter for the latest updates on Peer Network&apos;s development and upcoming features.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 