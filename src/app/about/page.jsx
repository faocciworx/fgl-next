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
import CloseBtn from "../components/CloseBtn";
import WipeInRightAnimation from "../components/Animations/WipeInRightAnimation";

export default function About() {
  return (
    <div className="relative flex flex-col font-general px-7">
      <WipeInRightAnimation duration="2.5s">
        <div className="flex flex-col justify-center items-center my-10 lg:my-20 gap-y-5">
          <h4 className="text-xl text-primary">Who I Am</h4>
          <h2 className="text-5xl font-semibold">About Me</h2>
          <hr className="w-28 mx-auto my-4 border-t-2 border-primary" />
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-x-28 items-center">
          <div className="max-w-auto mx-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg text-gray-900 relative">
            <div className="h-auto overflow-hidden">
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
                imageClassName=" w-full h-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col items-start pt-20 lg:pt-2">
            <h1 className="text-2xl lg:text-4xl font-general font-bold">
              Hello, I'm&nbsp;
              <span className="text-primary">Faocci Layug</span>
            </h1>
            <p className="text-sm lg:text-lg font-general mt-4 text-white w-auto text-justify ">
              Hello, I'm Faocci Ghaize O. Layug, a dedicated individual with a
              passion for technology and design. My journey in the dynamic
              intersection of creativity and innovation has driven me to
              constantly seek new challenges and push the boundaries of what's
              possible in the digital realm.
            </p>
            <p className="text-sm lg:text-lg font-general mt-4 text-white">
              <span className="text-primary">Residence:&nbsp;</span>
              Mabalacat City, Pampanga, Philippines
            </p>
            <p className="text-sm lg:text-lg font-general mt-2 text-white">
              <span className="text-primary">Email:&nbsp;</span>
              faocciworx@gmail.com
            </p>
            <p className="text-sm lg:text-lg font-general mt-2 text-white">
              <span className="text-primary">Phone:&nbsp;</span>
              +(63) 909-122-6365
            </p>
          </div>
        </div>
        <div className="relative">
          <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] border-[#FFFFFF33] rounded inline-block text-center p-3 mt-8 landscape:md:mt-0 landscape:2xl:mt-36">
            My Services
          </h1>

          {/* First Three */}
          <div className="flex flex-col md:flex-row lg:flex-row pt-8 lg:pt-10 lg:p-4 gap-x-2 items-start">
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start">
                  <AiOutlineHtml5 className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Website Design</h1>
                  <p className="text-sm">
                    Proficient in HTML, CSS, and introductory JavaScript,
                    Bootstrap for creating and styling web pages. Familiar with
                    principles of responsive design.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start font-general">
                  <FiPenTool className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Graphic Design</h1>
                  <p className="text-sm">
                    Skilled in using graphic design tools such as Adobe
                    Photoshop for image editing and Adobe Illustrator for vector
                    graphics.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
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
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Three */}
          <div className="flex flex-col md:flex-row lg:flex-row lg:p-4 gap-x-2 items-start md:mt-8 lg:mt-0">
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start">
                  <SiGoogledocs className="h-10 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Computer Literate</h1>
                  <p className="text-sm">
                    Well-versed in operating systems (Windows, MacOS), Microsoft
                    Office Suite, internet navigation, and basic
                    troubleshooting. Comfortable with various software
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start font-general">
                  <LuDatabaseBackup className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Backup & Security</h1>
                  <p className="text-sm">
                    Skilled in using graphic design tools such as Adobe
                    Photoshop for image editing and Adobe Illustrator for vector
                    graphics.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start">
                  <MdOutlineSecurity className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">IT Consultancy</h1>
                  <p className="text-sm ">
                    I specialize in enhancing business efficiency through
                    strategic IT solutions. Let's navigate the tech landscape
                    together for your success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] border-[#FFFFFF33] rounded inline-block text-center p-3 mt-2 md:mt-10 lg:mt-16">
              Testimonials
            </h1>
            <Testimonials />
          </div>
        </div>
        <div className="flex justify-end fixed top-4 right-4">
          <CloseBtn />
        </div>
      </WipeInRightAnimation>
    </div>
  );
}
