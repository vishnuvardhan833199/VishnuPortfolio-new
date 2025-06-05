import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, GraduationCap, Code, Award, BookOpen, Mail, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/home', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { path: '/about', icon: <User className="w-5 h-5" />, label: 'About' },
    { path: '/education', icon: <GraduationCap className="w-5 h-5" />, label: 'Education' },
    { path: '/skills', icon: <Code className="w-5 h-5" />, label: 'Skills' },
    { path: '/projects', icon: <Award className="w-5 h-5" />, label: 'Projects' },
    { path: '/coding-profiles', icon: <BookOpen className="w-5 h-5" />, label: 'Coding Profiles' },
    { path: '/certificates', icon: <Award className="w-5 h-5" />, label: 'Certificates' },
    { path: '/contact', icon: <Mail className="w-5 h-5" />, label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white md:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation Bar */}
      <motion.nav
        initial={false}
        animate={{
          width: isOpen ? 240 : '4rem',
          transition: { duration: 0.3, ease: 'easeInOut' }
        }}
        className="fixed left-0 top-0 h-screen bg-gray-900/50 backdrop-blur-md border-r border-gray-800/50 z-40"
        onMouseEnter={() => !isOpen && setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex flex-col h-full py-8">
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <ul className="space-y-2 px-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-4 px-3 py-3 rounded-lg transition-all ${
                      isActive(item.path)
                        ? 'bg-indigo-600/20 text-indigo-400'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation; 