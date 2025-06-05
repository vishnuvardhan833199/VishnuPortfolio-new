import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  variant: 'about' | 'education' | 'skills' | 'projects' | 'internships' | 'certificates' | 'contact';
}

const variants = {
  about: {
    background: "bg-about",
    overlay: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    accent: "blue",
    animation: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    }
  },
  education: {
    background: "bg-education",
    overlay: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    accent: "indigo",
    animation: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  },
  skills: {
    background: "bg-skills",
    overlay: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    accent: "cyan",
    animation: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    }
  },
  projects: {
    background: "bg-projects",
    overlay: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    accent: "purple",
    animation: {
      hidden: { opacity: 0, rotateX: -15 },
      visible: { opacity: 1, rotateX: 0 }
    }
  },
  internships: {
    background: "bg-internships",
    overlay: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    accent: "emerald",
    animation: {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { opacity: 1, scale: 1 }
    }
  },
  certificates: {
    background: "bg-certificates",
    overlay: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    accent: "amber",
    animation: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    }
  },
  contact: {
    background: "bg-contact",
    overlay: "from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95",
    accent: "rose",
    animation: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    }
  }
};

const SectionWrapper = ({ children, className = "", variant }: SectionWrapperProps) => {
  const sectionVariant = variants[variant];

  return (
    <div className={`relative min-h-screen ${sectionVariant.background} bg-cover bg-center bg-fixed ${className}`}>
      {/* Background overlay with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${sectionVariant.overlay}`} />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-${sectionVariant.accent}-500/10 to-transparent blur-3xl`}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-${sectionVariant.accent}-500/10 to-transparent blur-3xl`}
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariant.animation}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </div>
  );
};

export default SectionWrapper; 