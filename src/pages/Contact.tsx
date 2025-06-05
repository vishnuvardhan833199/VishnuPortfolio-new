import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: 'venkateshnagavarapu75@gmail.com',
      href: 'mailto:venkateshnagavarapu75@gmail.com'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Phone',
      value: '+91 8331995176',
      href: 'tel:+918331995176'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: 'Location',
      value: 'Srikakulam district, Andhra Pradesh',
      href: 'https://maps.google.com/?q=Srikakulam,Andhra+Pradesh'
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      value: 'vishnuvardhan833199',
      href: 'https://github.com/vishnuvardhan833199'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: 'Nagavarapu Vishnu Vardhan',
      href: 'https://linkedin.com/in/nagavarapu-vishnu-vardhan/'
    }
  ];

  const codingProfiles = [
    {
      icon: <SiLeetcode className="text-2xl" />,
      label: 'LeetCode',
      value: '200+ Problems Solved',
      stats: 'Data Structures & Algorithms',
      href: 'https://leetcode.com/vishnuvardhan833199/',
      color: '#FFA116'
    },
    {
      icon: <SiHackerrank className="text-2xl" />,
      label: 'HackerRank',
      value: '5⭐ in Python',
      stats: 'Problem Solving & SQL',
      href: 'https://www.hackerrank.com/vishnuvardhan833',
      color: '#00EA64'
    },
    {
      icon: <SiCodechef className="text-2xl" />,
      label: 'CodeChef',
      value: '3⭐ Coder',
      stats: 'Competitive Programming',
      href: 'https://www.codechef.com/users/vishnu833199',
      color: '#5B4638'
    },
    {
      icon: <SiGeeksforgeeks className="text-2xl" />,
      label: 'GeeksforGeeks',
      value: 'Institute Rank #5',
      stats: '300+ Problems Solved',
      href: 'https://auth.geeksforgeeks.org/user/vishnuvardhan833199',
      color: '#2F8D46'
    }
  ];

  return (
    <div className="section relative" id="contact">
      {/* Background with overlay */}
      <div className="section-bg bg-contact" />
      <div className="section-overlay" />

      {/* Content */}
      <div className="section-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and innovation.
            </p>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Coding Profiles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {codingProfiles.map((profile) => (
                <motion.a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 hover:scale-105 transition-transform"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${profile.color}20`, color: profile.color }}
                    >
                      {profile.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{profile.label}</h4>
                    <p className="text-gray-300 font-medium mb-2">{profile.value}</p>
                    <p className="text-sm text-gray-400">{profile.stats}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="button-primary w-full py-3 text-lg font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center text-gray-400 mt-12"
          >
            <p>
              © {new Date().getFullYear()} Vishnu Vardhan Nagavarapu. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 