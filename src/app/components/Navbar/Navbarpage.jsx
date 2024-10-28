"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
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

const Navbarpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Start visible
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let interactionTimeout;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // Show navbar only if not at the very top
      setIsVisible(currentScrollTop !== 0);
    };

    const showNavbarOnInteraction = () => {
      clearTimeout(interactionTimeout);
      setIsVisible(true);

      // Hide again after 5 seconds of inactivity
      interactionTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Event listeners for scroll and user interactions
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", showNavbarOnInteraction);
    window.addEventListener("touchstart", showNavbarOnInteraction);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", showNavbarOnInteraction);
      window.removeEventListener("touchstart", showNavbarOnInteraction);
      clearTimeout(interactionTimeout);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ease-in-out lg:px-10 lg:py-6 landscape:lg:px-16 landscape:xl:px-48 2xl:px-40 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } dark:bg-[#f2ede6] bg-[#202020] shadow-lg py-2`}
      >
        <div className="flex items-center justify-between">
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
          <div className="hidden lg:flex justify-center flex-1">
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

          {/* Dark Mode & Light Mode Toggle */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Sidebar component */}
      <Sidebar isOpen={isOpen} closeMenu={closeMenu} navItems={navItems} />
    </>
  );
};

export default Navbarpage;
