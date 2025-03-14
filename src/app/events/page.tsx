'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const contestSteps = [
  {
    date: 'until 20.12.2024',
    title: 'Registration',
    description: 'Please register using the button below and send us an email describing:\n\n• What your startup is about\n• How long you have been working on it\n• How successful it is\n• Its impact on society/environment/etc',
  },
  {
    date: 'until 10.01.2025',
    title: 'Revision',
    description: 'We will review your application and send you a letter with an invitation to the contest',
  },
  {
    date: '16.01.2025',
    title: 'Contest',
    description: 'We look forward to welcoming you and your team to our cozy co-working space at\n\nKantstraße 127, Berlin, Germany',
  },
  {
    date: '16.01.2024',
    title: 'Final Step',
    description: 'Description Description Description Description Description Description Description',
  },
];

const upcomingEvents = [
  {
    date: '15.3.2025',
    time: '20:00',
    title: 'Peer PARTY',
    location: 'Möckern Straße 68C',
    type: 'social',
  },
];

export default function Events() {
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
            <h1 className="heading-gradient text-5xl md:text-7xl font-bold mb-8">
              Pitch Contest
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Pitch Contest is the competition of 15(20) startups with a main prize of 5 000€ and free-rent office space in the modern co-working Garage 127. Everything what you need for your startup to grow!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#register" className="btn-primary w-full sm:w-auto">
                Register Now
              </Link>
              <Link href="#timeline" className="btn-white w-full sm:w-auto">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contest Timeline */}
      <section id="timeline" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-gradient text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Contest Timeline
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
            
            {/* Timeline items */}
            <div className="space-y-24">
              {contestSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex ${index % 2 === 0 ? 'justify-end md:justify-start' : 'justify-end'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
                >
                  <div className="card max-w-lg relative group hover:border-blue-500/50 transition-colors duration-300">
                    <div 
                      className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300"
                      style={{
                        [index % 2 === 0 ? 'right' : 'left']: '-2rem',
                      }}
                    />
                    <span className="text-blue-400 text-lg font-semibold">{step.date}</span>
                    <h3 className="text-2xl font-bold mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{step.title}</h3>
                    <p className="text-gray-300 mt-4 text-lg leading-relaxed whitespace-pre-line">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-gradient text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Upcoming Events
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {event.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-400 text-xl font-semibold">{event.date}</p>
                    <p className="text-gray-400">{event.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 relative">
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
              <h2 className="text-3xl font-bold mb-8 text-center">Register for Pitch Contest</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Startup Name"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your startup..."
                    rows={6}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 