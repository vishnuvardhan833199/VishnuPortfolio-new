import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-screen flex items-center justify-center"
  >
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-gray-400">
        Full Stack Developer | UI/UX Enthusiast | Problem Solver
      </p>
    </div>
  </motion.div>
)

const FullPageLayout = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default FullPageLayout 