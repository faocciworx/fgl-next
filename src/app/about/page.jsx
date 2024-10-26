"use client";
import Head from "next/head";
import ClickableImageModal from "../components/PictureEffect/ClickableImageModal";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FiPenTool } from "react-icons/fi";
import { FaComputer } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { LuDatabaseBackup } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import Testimonials from "../components/Testimonials";
import WipeInRightAnimation from "../components/Animations/WipeInRightAnimation";
import Navbarpage from "../components/Navbar/Navbarpage";

export default function About() {
  return (
    <div className="relative flex flex-col font-general px-7">
      <WipeInRightAnimation duration="2.5s">
        <Navbarpage />
        <div className="flex flex-col justify-center items-center my-10 lg:my-20 gap-y-5">
          <h4 className="text-xl text-primary">Who I Am</h4>
          <h2 className="text-5xl font-semibold">About Me</h2>
          <hr className="w-28 mx-auto my-4 border-t-2 border-primary" />
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-x-28 items-center">
          <div className="max-w-auto mx-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg text-gray-900 relative">
            <div className="h-auto overflow-hidden border-b-4 border-primary">
              <ClickableImageModal
                imageUrl="/background/1.jpg"
                containerClassName="w-full h-full"
                imageClassName="object-cover object-top w-full h-full"
              />
            </div>

            <div className="absolute w-[40%] h-[40%] right-[-2%] md:right-[-13%] lg:right-[-13%] bottom-[-20%]">
              <ClickableImageModal
                imageUrl="/background/2.jpg"
                containerClassName="w-full h-full"
                imageClassName=" w-full h-full border-b-4 border-primary"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col items-start pt-20 lg:pt-2">
            <h1 className="text-2xl lg:text-4xl font-general font-bold">
              Hello, I&apos;m&nbsp;
              <span className="text-primary">Faocci Layug</span>
            </h1>
            <p className="text-sm lg:text-lg font-general mt-4 dark:text-gray-800 text-white w-auto text-justify ">
              Hello, I&apos;m Faocci Ghaize O. Layug, a dedicated individual
              with a passion for technology and design. My journey in the
              dynamic intersection of creativity and innovation has driven me to
              constantly seek new challenges and push the boundaries of
              what&apos;s possible in the digital realm.
            </p>
            <p className="text-sm lg:text-lg font-general mt-4 dark:text-gray-800 text-white">
              <span className="text-primary">Residence:&nbsp;</span>
              Yona, Guam, USA
            </p>
            <p className="text-sm lg:text-lg font-general mt-2 dark:text-gray-800 text-white">
              <a
                href="mailto:faocciworx@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-primary">Email:&nbsp;</span>
                faocciworx@gmail.com
              </a>
            </p>
            <p className="text-sm lg:text-lg font-general mt-2 dark:text-gray-800 text-white">
              <a
                href="https://wa.me/16717878564"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-primary">Phone:&nbsp;</span>
                +(671) 787- 8564
              </a>
            </p>
          </div>
        </div>
        <div className="relative">
          <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] dark:text-gray-800 text-white dark:hover:text-primary hover:text-primary hover:border-primary dark:hover:border-primary dark:border-gray-800 border-[#FFFFFF33] rounded inline-block text-center p-3 mt-6 md:mt-10 lg:mt-16">
            My Services
          </h1>

          {/* First Three */}
          <div className="flex flex-col md:flex-row lg:flex-row pt-8 lg:pt-10 lg:p-4 gap-x-2 items-start">
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center hover:text-primary">
                <div className="mr-4 flex items-center justify-center self-start ">
                  <AiOutlineHtml5 className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Website Design</h1>
                  <p className="text-sm">
                    Proficient in HTML, CSS, and introductory JavaScript.
                    Experienced in using modern tools such as Next.js, React.js,
                    Vue, Vite, TypeScript, Bootstrap, SASS, and Tailwind CSS for
                    creating and styling responsive web pages. Skilled in
                    optimizing performance and ensuring seamless user
                    experiences across devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center hover:text-primary">
                <div className="mr-4 flex items-center justify-center self-start font-general">
                  <FiPenTool className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Graphic Design</h1>
                  <p className="text-sm">
                    Skilled in using graphic design tools such as Adobe
                    Photoshop for image editing, Adobe Illustrator for vector
                    graphics, Adobe Premiere for video editing, Adobe InDesign
                    for layout design, Adobe Lightroom for photo editing, as
                    well as Figma for UI design and Canva for creating visual
                    content.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center hover:text-primary">
                <div className="mr-4 flex items-center justify-center self-start">
                  <FaComputer className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">
                    Computer Technician
                  </h1>
                  <p className="text-sm ">
                    Experienced in hardware installation, software
                    troubleshooting, and network configuration expertise.
                    Proficient in OS installation Windows, macOS, Linux,
                    software installation, and utilizing tools such as Burning
                    Test, Memtest, Hirens BootCD, and Disk Sentinel for system
                    diagnostics and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Three */}
          <div className="flex flex-col md:flex-row lg:flex-row lg:p-4 gap-x-2 items-start md:mt-8 lg:mt-0">
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center hover:text-primary">
                <div className="mr-4 flex items-center justify-center self-start">
                  <SiGoogledocs className="h-10 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Computer Literate</h1>
                  <p className="text-sm">
                    Well-versed in operating systems Windows, macOS, Microsoft
                    Office Suite, and internet navigation, with expertise in
                    basic troubleshooting. Comfortable with various software
                    applications, including Microsoft Office Suite, WPS Office
                    Suite, Google Workspace, cloud storage solutions, and email
                    clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center hover:text-primary">
                <div className="mr-4 flex items-center justify-center self-start font-general">
                  <LuDatabaseBackup className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Backup & Security</h1>
                  <p className="text-sm">
                    Proficient in backup and security practices, including data
                    backup, recovery, and encryption. Skilled in implementing
                    security measures to protect data and systems. Experienced
                    with tools for creating secure backups, managing firewalls,
                    and ensuring data integrity across multiple platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center hover:text-primary">
                <div className="mr-4 flex items-center justify-center self-start">
                  <MdOutlineSecurity className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">IT Consultancy</h1>
                  <p className="text-sm">
                    Specializing in IT consultancy, I enhance business
                    efficiency through strategic IT solutions. Lets work
                    together to navigate the tech landscape, implement tailored
                    strategies, optimize workflows, improve productivity, and
                    drive your business success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] dark:text-gray-800 text-white dark:hover:text-primary hover:text-primary hover:border-primary dark:hover:border-primary dark:border-gray-800 border-[#FFFFFF33] rounded inline-block text-center p-3 mt-2 md:mt-10 lg:mt-16">
              Testimonials
            </h1>
            <Testimonials />
          </div>
        </div>
        <div className="flex justify-end fixed top-4 right-4"></div>
      </WipeInRightAnimation>
    </div>
  );
}
