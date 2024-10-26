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

// Define navItems at the top level
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
      <nav className="w-full landscape:lg:pt-32 landscape:xl:pt-0 landscape:2xl:pt-0 portrait:lg:pb-40">
        <div className="w-full items-center py-2 lg:py-10 h-5 lg:pb-20">
          <div className="flex items-center space-x-3">
            {/* Mobile menu toggle button */}
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

            {/* Brand */}
            <Link href="#">
              <div className="flex items-center space-x-3 cursor-pointer w-full">
                <span className="self-center text-primary text-2xl font-semibold whitespace-nowrap">
                  <button href="#">FGOL</button>
                </span>
              </div>
            </Link>

            <div className="flex lg:hidden xl:hidden 2xl:hidden w-full items-end justify-end">
              <ThemeToggle />
            </div>

            {/* Navbar links */}
            <div className="hidden lg:flex justify-center w-full">
              <ul className="flex flex-col lg:flex-row">
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

            {/* Dark Mode & Light Mode Button */}
            <div className="hidden lg:flex items-center space-x-5 cursor-pointer">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar component */}
      <Sidebar isOpen={isOpen} closeMenu={closeMenu} navItems={navItems} />
    </>
  );
};

export default Navbar;
