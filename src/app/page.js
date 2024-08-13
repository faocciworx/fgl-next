import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import TypingAnimation from "./components/TypingAnimation";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import JLoading from "./components/JLoading/JLoading";
import WipeInLeftAnimation from "./components/Animations/WipeInLeftAnimation";

// app/page.js
export default function Home() {
  const socialMediaLinks = [
    {
      href: "https://example.com/facebook",
      icon: <FaFacebook className="social-media-icon" />,
    },
    {
      href: "https://example.com/twitter",
      icon: <FaLinkedin className="social-media-icon" />,
    },
    {
      href: "https://example.com/twitter",
      icon: <FaGithub className="social-media-icon" />,
    },
    // Add more social media links as needed
  ];

  return (
    <div className="relative flex flex-col font-general items-center justify-center min-h-screen ">
      <JLoading />
      <WipeInLeftAnimation duration="2.5s">
        <Navbar />
        <div className="flex flex-col md:flex-row justify-center items-center flex-1 py-10 md:pt-8 lg:pt-10 w-full">
          <div className="flex justify-center items-center pb-5 w-full md:w-1/2 md:order-1">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/background/Profile.png"
                width={500}
                height={500}
                alt="Faocci Layug Photo"
                className="w-60 h-64 md:w-50 md:h-auto lg:w-[500px] lg:h-[540px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 gap-y-4 px-4 text-center md:text-left">
            <h1 className="text-3xl lg:text-5xl font-general font-bold">
              I'm&nbsp;
              <span className="text-primary"> Faocci&nbsp;</span>
              Layug
            </h1>
            <div className="flex font-general text-xl lg:text-3xl whitespace-pre text-primary overflow-hidden animate-caret">
              I'm am&nbsp;
              <TypingAnimation
                texts={[
                  "Web Developer ‎ ‎ ",
                  "Graphic Artist ‎  ‎ ",
                  "Computer Technician ‎ ‎ ",
                ]}
                baseSpeed={100}
                speedVariance={30}
                className=""
              />
            </div>
            <p className="font-general text-white w-full lg:w-11/12 leading-8 text-justify">
              Hello, I'm Faocci Ghaize O. Layug, a tech and design enthusiast
              ready to bring my expertise to your projects. With a knack for
              creative problem-solving in web and graphic design, and a solid
              foundation in computer technology, I'm excited to contribute to a
              team that values innovation and excellence. Let's make a positive
              impact in the digital sphere together!
            </p>

            <div className="flex justify-center space-x-3 cursor-pointer text-center md:text-left">
              {socialMediaLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transform transition-transform duration-300 hover:scale-110"
                  >
                    {link.icon}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-2 w-full md:w-3/4 xl:w-2/3">
              <button
                type="button"
                className="text-white border border-primary bg-primary hover:bg-transparent hover:border-primary font-medium rounded-lg text-sm py-2.5 text-center px-5 mb-2 md:mb-0"
              >
                Download CV
              </button>
              <button
                type="button"
                className="text-white hover:text-white border border-primary hover:bg-primary font-medium rounded-lg text-sm py-2.5 text-center px-5"
              >
                Hire Me!
              </button>
            </div>
          </div>
        </div>
      </WipeInLeftAnimation>
    </div>
  );
}
