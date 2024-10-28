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
  const [isVisible, setIsVisible] = useState(false); // Start hidden
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
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } dark:bg-[#f2ede6] bg-[#202020] shadow-lg py-2 lg:px-10 lg:py-6`}
      >
        <div className="w-full items-center h-full">
          <div className="flex items-center space-x-3">
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
            <Link href="#">
              <div className="flex items-center space-x-3 cursor-pointer w-full">
                <span className="self-center hover:text-primary text-2xl font-semibold whitespace-nowrap">
                  <button href="/">FGOL</button>
                </span>
              </div>
            </Link>
            <div className="flex lg:hidden xl:hidden 2xl:hidden w-full items-end justify-end">
              <ThemeToggle />
            </div>
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
            <div className="hidden lg:flex items-center space-x-5 cursor-pointer">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} closeMenu={closeMenu} navItems={navItems} />
    </>
  );
};

export default Navbarpage;
