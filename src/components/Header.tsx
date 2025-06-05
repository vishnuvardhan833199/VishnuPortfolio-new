import { FC } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  sections: string[];
}

const Header: FC<HeaderProps> = ({ activeSection, onSectionChange, sections }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Vishnu Vardhan
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-6"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`text-lg ${
                  activeSection === section
                    ? 'text-blue-400 font-medium'
                    : 'text-gray-300 hover:text-white'
                } transition-colors`}
              >
                {section}
              </button>
            ))}
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 