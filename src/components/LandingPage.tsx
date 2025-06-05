import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500 rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animation: `pulse ${Math.random() * 3 + 2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="z-10 text-center px-4" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Vishnu Vardhan
        </h1>
        <div className="text-xl md:text-2xl mb-8 text-gray-300">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'React.js Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            repeat={Infinity}
            wrapper="span"
            cursor={true}
          />
        </div>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400">
          Transforming ideas into elegant, efficient, and scalable solutions
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            to="/home"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore Portfolio
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-blue-500 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-8 flex gap-6 z-10" data-aos="fade-up" data-aos-delay="300">
        <a
          href="https://github.com/vishnuvardhan833199"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vishnu-vardhan-nagavarapu-3b1b74219/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default LandingPage; 