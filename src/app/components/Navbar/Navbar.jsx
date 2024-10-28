"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaFileAlt,
  FaFolderOpen,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import ThemeToggle from "../ThemeToggle";

const navItems = [
  { href: "/", label: "Home", icon: <FaHome className="lg:hidden" /> },
  { href: "/about", label: "About Me", icon: <FaUser className="lg:hidden" /> },
  {
    href: "/resume",
    label: "Resume",
    icon: <FaFileAlt className="lg:hidden" />,
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    icon: <FaFolderOpen className="lg:hidden" />,
  },
  {
    href: "/certifications",
    label: "Certifications",
    icon: <FaCertificate className="lg:hidden" />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <FaEnvelope className="lg:hidden" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="w-full flex items-center justify-between py-1">
        {/* Mobile menu toggle button and Brand */}
        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm dark:text-gray-800 text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="sidebar"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>

          <Link href="/" passHref>
            <div className="flex items-start space-x-3 cursor-pointer">
              <span className="self-start dark:text-primary text-white text-2xl font-semibold">
                FGOL
              </span>
            </div>
          </Link>
        </div>

        {/* Navbar links */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center space-x-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} passHref>
                  <span
                    className={`flex items-center space-x-2 py-2 px-3 rounded cursor-pointer ${
                      item.href === pathname
                        ? "text-primary"
                        : "dark:text-gray-800 text-white hover:text-primary"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dark Mode & Light Mode Toggle */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
        </div>
      </nav>

      {/* Sidebar component */}
      <Sidebar isOpen={isOpen} closeMenu={closeMenu} navItems={navItems} />
    </>
  );
};

export default Navbar;
