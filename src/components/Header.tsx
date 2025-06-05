import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
}

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (index: number) => void;
  sections: Section[];
}

const Header: FC<HeaderProps> = ({ activeSection, onSectionChange, sections }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/internships', label: 'Internships' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/contact', label: 'Contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center relative">
          {/* Active section indicator */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 glass rounded-full p-6"
            layoutId="activeSection"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.h1 
              className="text-2xl font-bold text-gradient text-shadow-glow"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection.label}
            </motion.h1>
          </motion.div>

          {/* Hidden navigation menu */}
          <nav className="hidden">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(index)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 