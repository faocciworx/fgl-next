// app/components/Navbar/Navbar.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaFileAlt, FaFolderOpen, FaCertificate, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About Me", icon: <FaUser /> },
    { href: "/resume", label: "Resume", icon: <FaFileAlt /> },
    { href: "/portfolio", label: "Portfolio", icon: <FaFolderOpen /> },
    { href: "/certifications", label: "Certifications", icon: <FaCertificate /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> }
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="sidebar"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>

          <Link href="#">
            <div className="flex items-center space-x-3 cursor-pointer">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Faocci</span>
            </div>
          </Link>

        </div>
        <div className={`fixed inset-0 z-50 flex bg-gray-900 bg-opacity-50 ${isOpen ? 'flex' : 'hidden'} md:hidden`} onClick={toggleMenu}>
          <div className="w-64 bg-white dark:bg-gray-800 p-4" onClick={(e) => e.stopPropagation()} style={{ left: '', right: 0 }}>
            <div className="flex justify-between items-center">
              <Link href="https://flowbite.com/">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </div>
              </Link>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                onClick={closeMenu}
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-2 mt-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} passHref>
                    <span className={`flex items-center space-x-2 py-2 px-3 rounded cursor-pointer ${item.href === pathname ? 'text-white bg-blue-700 dark:bg-blue-700' : 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white'}`}>
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:justify-between w-full md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} passHref>
                  <span className={`flex items-center space-x-2 py-2 px-3 rounded cursor-pointer ${item.href === pathname ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500'}`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
