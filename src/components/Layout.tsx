import { FC, ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('Home');
  const sections = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Certificates', 'Contact'];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        sections={sections}
      />
      <main className="container mx-auto px-4 py-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-hidden"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout; 