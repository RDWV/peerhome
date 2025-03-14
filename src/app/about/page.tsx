'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Jakob Kaiser',
    role: 'Team: Computer science',
    image: '/team/jakob.jpg', // You'll need to add these images to the public folder
  },
  {
    name: 'Ender Küçükoğlu',
    role: 'Team: Strategy',
    image: '/team/ender.jpg',
  },
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
              With peer you create and share individual content, take part in votings and earn gems, peer&apos;s own cryptocurrency, with every interaction. By active participation as blockfluencer you have direct influence on the blockchain based network &quot;peer&quot;. Active participation is defined by published content, active useage of services, but also by voting on polls used for further development of the network and its components.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary w-full sm:w-auto">
                Get in contact with us
              </Link>
              <Link href="#" className="btn-white w-full sm:w-auto">
                Concept paper
              </Link>
            </div>
          </motion.div>
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
              className="card"
            >
              <h2 className="text-2xl font-bold mb-4">The peer gems</h2>
              <p className="text-gray-300">
                Gems are a decentralized cryptocurrency used on the peer platform. You can earn gems by publishing content, taking part in votings, by interacting with the website in different ways or by sharing of original content and gaining traction.
              </p>
            </motion.div>

            {/* Blockchain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <h2 className="text-2xl font-bold mb-4">The peer blockchain</h2>
              <p className="text-gray-300">
                Peer is a userfriendly social network. It does not run on a central server, which ensures a high security and privacy level for your data.
              </p>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card"
            >
              <h2 className="text-2xl font-bold mb-4">Data security on peer</h2>
              <p className="text-gray-300">
                On peer, you and only you decide who is able to see and use your data. To ensure this, the whole peer platform is based on a decentralized blockchain technology, to ensure full control, transparency and security. If you click on data sharing you get gems equal to the worth of your data for every second that you&apos;re online.
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
              The team behind peer combines expertise in technology, economy, design, and have been working since 2018 in the startup metropolis Berlin.
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
                <p className="text-gray-400 text-center">{member.role}</p>
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
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Sign up for the newsletter here ..."
                  className="flex-grow bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 