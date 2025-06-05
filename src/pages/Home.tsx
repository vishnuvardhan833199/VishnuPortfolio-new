import type { FC } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const Home: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
    </motion.div>
  );
};

export default Home; 