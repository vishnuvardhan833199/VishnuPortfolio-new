import { Link } from 'react-router-dom'

const Sidebar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="w-64 bg-gray-800 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Vishnu Vardhan
        </h1>
      </div>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar 