import type { FC } from 'react';
import { motion } from 'framer-motion';
import InternshipsComponent from '../components/Internships';

const Internships: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <InternshipsComponent />
    </motion.div>
  );
};

export default Internships; 