"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import TypingAnimation from "./components/TypingAnimation";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import JLoading from "./components/JLoading/JLoading";
import WipeInLeftAnimation from "./components/Animations/WipeInLeftAnimation";
import JParticles from "./components/JParticles";
import HomeSkeleton from "./components/Skeleton/HomeSkeleton";
import Link from "next/link";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/faocci/",
      icon: (
        <FaFacebookF className="social-media-icon h-5 w-5 text-white dark:hover:text-gray-800 hover:text-white" />
      ),
    },
    {
      href: "https://www.linkedin.com/in/faocci/",
      icon: (
        <FaLinkedinIn className="social-media-icon h-5 w-5 text-white dark:hover:text-gray-800 hover:text-white" />
      ),
    },
    {
      href: "https://github.com/faocciworx",
      icon: (
        <FaGithub className="social-media-icon h-7 w-6 text-white dark:hover:text-gray-800 hover:text-white" />
      ),
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background">
      <JLoading />
      <WipeInLeftAnimation duration="2.5s">
        <Navbar />
        <JParticles />
        <div className="flex flex-col lg:flex-row justify-center items-center flex-1 py-5 md:px-5 portrait:md:py-20 lg:px-0 portrait:lg:pt-48 xl:pt-16 2xl:pt-16 w-full h-full lg:min-h-0">
          <div className="flex justify-center items-center pb-5 w-full md:w-1/2 lg:order-1">
            <div className="rounded-full overflow-hidden relative">
              {!imageLoaded && (
                <HomeSkeleton
                  width="500px"
                  height="540px"
                  className="w-60 h-64 md:w-72 md:h-auto lg:w-[500px] lg:h-[540px] absolute inset-0"
                />
              )}
              <Image
                src="/background/Profile.png"
                width={500}
                height={500}
                alt="Faocci Layug Photo"
                className={`w-60 h-64 md:w-72 md:h-auto lg:w-[500px] lg:h-[540px] transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 gap-y-4 px-4 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-general font-bold">
              I&apos;m&nbsp;
              <span className="text-primary">Faocci&nbsp;</span>
              Layug
            </h1>
            <div className="flex font-general text-xl md:text-4xl lg:text-3xl whitespace-pre text-primary overflow-hidden animate-caret">
              I&apos;m&nbsp;
              <TypingAnimation
                texts={[
                  "Web Developer ‎",
                  "Graphic Artist ‎",
                  "Computer Technician ‎",
                ]}
                baseSpeed={100}
                speedVariance={30}
                className=""
              />
            </div>
            <p className="font-general text-base lg:text-lg mt-4 dark:text-gray-800 text-white w-full lg:w-11/12 leading-7 md:leading-10 lg:leading-8 text-justify">
              Hello, I&apos;m Faocci Ghaize O. Layug, a tech and design
              enthusiast ready to bring my expertise to your projects. With a
              knack for creative problem-solving in web and graphic design, and
              a solid foundation in computer technology, I&apos;m excited to
              contribute to a team that values innovation and excellence.
              Let&apos;s make a positive impact in the digital sphere together!
            </p>

            <div className="flex justify-center space-x-5 cursor-pointer text-center md:text-left">
              {socialMediaLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300"
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

            <div className="flex flex-col lg:flex-row gap-2 portrait:md:gap-6 portrait:md:pt-2 w-full lg:w-3/4 xl:w-2/3">
              <a
                href="/documents/Resume/Layug, Faocci Ghaize -CV.pdf"
                download
                className="w-full md:w-auto"
              >
                <button
                  type="button"
                  className="w-full text-white dark:hover:text-gray-800 border border-primary bg-primary hover:bg-transparent 2xl:hover:animate-bounce hover:border-primary font-medium rounded-lg py-2.5 text-center px-5 md:py-4 lg:py-2.5 mb-2 md:mb-0 text-sm md:text-lg lg:text-sm"
                >
                  Download CV
                </button>
              </a>
              <Link href="/contact" className="w-full md:w-auto">
                <button
                  type="button"
                  className="w-full dark:text-gray-800 text-white dark:hover:text-white border border-primary 2xl:hover:animate-bounce hover:bg-primary font-medium rounded-lg py-2.5 text-center px-5 md:py-4 lg:py-2.5 mb-2 md:mb-0 text-sm md:text-lg lg:text-sm"
                >
                  Hire Me!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </WipeInLeftAnimation>
    </div>
  );
}
