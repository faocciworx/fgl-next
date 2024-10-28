import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/faocci/",
      icon: (
        <FaFacebookF className="social-media-icon h-3 w-3 text-white dark:hover:text-gray-800 hover:text-white" />
      ),
    },
    {
      href: "https://www.linkedin.com/in/faocci/",
      icon: (
        <FaLinkedinIn className="social-media-icon h-3 w-3 text-white dark:hover:text-gray-800 hover:text-white" />
      ),
    },
    {
      href: "https://github.com/faocciworx",
      icon: (
        <FaGithub className="social-media-icon h-3 w-3 text-white dark:hover:text-gray-800 hover:text-white" />
      ),
    },
  ];

  return (
    <div>
      <footer className="text-sm leading-6">
        <div className="py-5 sm:flex sm:justify-between text-slate-500">
          <div className="mb-3 sm:mb-0 sm:flex sm:items-center sm:justify-center justify-center flex-col sm:flex-row">
            <p className="text-center sm:text-left dark:text-gray-800 text-white dark:hover:text-primary hover:text-primary">
              Copyright © 2024 FGOL - Faocci Layug.
            </p>
            <p className="text-center sm:text-left dark:text-gray-800 text-white dark:hover:text-primary hover:text-primary 2xl:ml-2">
              All rights reserved.
            </p>
            <p className="text-center sm:text-left 2xl:ml-2">
              <a className="text-primary" href="/contact">
                Contact Me
              </a>
            </p>
          </div>
          <div className="hidden sm:flex justify-center space-x-3 cursor-pointer text-center xl:mr-2">
            {socialMediaLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-6 h-6 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full dark:text-gray-800 text-white hover:text-primary transform transition-transform duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
