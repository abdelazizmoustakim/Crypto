import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
interface MenuLink {
  id: number;
  name: string;
  link: string;
}
const MenuLinks: MenuLink[] = [
  { id: 1, name: 'Markets', link: '/Markets' },
  { id: 2, name: 'News', link: '/News' },
];
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  };

  return (
    <div className={`bg-white duration-200 relative z-40 ${darkMode ? 'dark' : ''}`}>
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={toggleMenu}>
              <GiHamburgerMenu className={`text-2xl hover:text-gray-800 transition-colors duration-300 ${menuOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>
          {/* Logo */}
          <Link to="/" className="text-gray-750 font-semibold tracking-widest text-2xl sm:text-3xl lg:mx-0 lg:ml-0 text-center">
            CryptoSquad
          </Link>
          {/* Search Bar and User Profile */}
          <div className="flex items-center gap-4">
            {/* User Profile Icon */}
            <button className="text-lg text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <FaUserCircle />
            </button>
            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="text-lg text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
      {/* Menu Links - Centered Between Logo and Search/Cart */}
      <div className="hidden lg:flex flex-grow justify-center">
        <ul className="flex items-center gap-8">
          {MenuLinks.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="block px-4 py-2 text-gray-800 hover:text-gray-600 font-medium text-lg transition-all duration-300 rounded-md">
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu Links */}
      <div className={`fixed top-0 left-0 w-2/3 h-full bg-white dark:bg-gray-900 z-30 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-start mt-8 h-full p-8">
          <ul className="flex flex-col items-start gap-6">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:text-gray-100 font-medium text-lg transition-all duration-300 rounded-md">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Overlay for mobile when menu is open */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleMenu} />
      )}
    </div>
  );
};
export default Navbar;