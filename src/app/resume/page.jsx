"use client";
import { useState, useEffect } from "react";
import WipeInRightAnimation from "../components/Animations/WipeInRightAnimation";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FiPenTool } from "react-icons/fi";
import { FaComputer } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { LuDatabaseBackup } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import Navbarpage from "../components/Navbar/Navbarpage";
import Footer from "../components/Footer/page";
export default function Resume() {
  const [experience2016, setExperience2016] = useState(0);
  const [experience2014, setExperience2014] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setExperience2016(currentYear - 2016);
    setExperience2014(currentYear - 2014);
  }, []);

  return (
    <div className="relative flex flex-col font-general px-7">
      <WipeInRightAnimation duration="2.5s">
        <Navbarpage />
        <div className="flex flex-col justify-center items-center mt-10 lg:mt-20 lg:mb-10 gap-y-5">
          <h4 className="text-xl text-primary">I&apos;m available for hire</h4>
          <h2 className="text-5xl font-semibold">My Resume</h2>
          <hr className="w-28 mx-auto my-4 border-t-2 border-primary" />

          {/* Education Section Start */}
          <div className="flex flex-col md:flex-row lg:flex-row md:gap-x-16 2xl:gap-x-64 font-general">
            <div className="flex flex-col w-full lg:w-fit lg:p-4">
              <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] dark:text-gray-800 text-white dark:hover:text-primary hover:text-primary hover:border-primary dark:hover:border-primary dark:border-gray-800 border-[#FFFFFF33] rounded px-4 py-2 mb-6 w-fit">
                Education
              </h1>
              <div className="w-full max-w-3xl mx-auto">
                <div className="-my-6 ml-8">
                  <div className="relative pt-6 group">
                    <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['1'] after:text-white after:text-sm font-bold">
                      <div className="text-sm font-normal text-primary pl-9 mt-3">
                        2024
                      </div>
                    </div>
                    <div className="dark:text-gray-800 text-white pl-9">
                      <div className="mb-2">
                        <span className="text-xl font-bold">College </span>
                        <span className="block lg:hidden"></span>{" "}
                      </div>
                      <div className="mb-2 text-primary">
                        Mabalacat City College
                      </div>
                      <div className="mb-2">
                        Bachelor of Science in Information Technology
                      </div>
                      <div className="mb-2">
                        Dolores, Mabalacat City Pampanga
                      </div>
                    </div>
                  </div>

                  <div className="relative pt-6 group">
                    <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['2'] after:text-white after:text-sm font-bold">
                      <div className="text-sm font-normal text-primary pl-9 mt-3">
                        2020
                      </div>
                    </div>
                    <div className="dark:text-gray-800 text-white pl-9">
                      <div className="mb-2">
                        <span className="text-xl font-bold">Senior High </span>
                      </div>
                      <div className="mb-2 text-primary">
                        Children of Fatima Inc.
                      </div>
                      <div className="mb-2">
                        Information Communication Technology
                      </div>
                      <div className="mb-2">
                        San Francisco, Mabalacat City Pampanga
                      </div>
                    </div>
                  </div>

                  <div className="relative pt-6 group">
                    <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['3'] after:text-white after:text-sm font-bold">
                      <div className="text-sm  font-normal text-primary pl-9 mt-3">
                        2018
                      </div>
                    </div>
                    <div className="dark:text-gray-800 text-white pl-9">
                      <div className="mb-2">
                        <span className="text-xl font-bold">Junior High </span>
                      </div>
                      <div className="mb-2 text-primary">
                        Tinajero National High School Main
                      </div>
                      <div className="mb-2">
                        Madapdap, Mabalacat City Pampanga
                      </div>
                    </div>
                  </div>

                  <div className="relative pt-6 group">
                    <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['4'] after:text-white after:text-sm font-bold">
                      <div className="text-sm  font-normal text-primary pl-9 mt-3">
                        2017
                      </div>
                    </div>
                    <div className="dark:text-gray-800 text-white pl-9">
                      <div className="mb-2">
                        <span className="text-xl font-bold">Elementary </span>
                      </div>
                      <div className="mb-2 text-primary">
                        Talba Elementary School
                      </div>
                      <div className="mb-2">
                        Madapdap, Mabalacat City Pampanga
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-fit lg:p-4">
              <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] dark:text-gray-800 text-white dark:hover:text-primary hover:text-primary hover:border-primary dark:hover:border-primary dark:border-gray-800 border-[#FFFFFF33] rounded px-4 py-2 mb-6 mt-11 md:mt-0 lg:mt-0 w-fit">
                Working Experience
              </h1>
              <div className="w-full max-w-3xl mx-auto">
                <div className="-my-6 ml-8">
                  <div className="relative pt-6 group">
                    <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['1'] after:text-white after:text-sm font-bold">
                      <div className="text-sm  font-normal text-primary pl-9 mt-3">
                        2016 - Present ({experience2016} years)
                      </div>
                    </div>
                    <div className="dark:text-gray-800 text-white pl-9">
                      <div className="mb-2">
                        <span className="text-xl font-bold">
                          Graphic Designer{" "}
                        </span>
                      </div>
                      <div className="mb-2 text-primary">
                        Freelance Graphic Designer
                      </div>
                      <div className="mb-2">Self-Employed</div>
                      <div className="mb-2">Mabalacat City Pampanga</div>
                    </div>
                  </div>

                  <div className="relative pt-6 group">
                    <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['2'] after:text-white after:text-sm font-bold">
                      <div className="text-sm  font-normal text-primary pl-9 mt-3">
                        2014 - Present ({experience2014} years)
                      </div>
                    </div>
                    <div className="dark:text-gray-800 text-white pl-9">
                      <div className="mb-2">
                        <span className="text-xl font-bold">
                          Computer Technician{" "}
                        </span>
                      </div>
                      <div className="mb-2 text-primary">
                        Freelance Computer Technician
                      </div>
                      <div className="mb-2">Self-Employed</div>
                      <div className="mb-2">Mabalacat City Pampanga</div>
                    </div>
                  </div>

                  <div className="relative pt-6 group">
                    <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['3'] after:text-white after:text-sm font-bold">
                      <div className="text-sm  font-normal text-primary pl-9 mt-3">
                        2024
                      </div>
                    </div>
                    <div className="dark:text-gray-800 text-white pl-9">
                      <div className="mb-2">
                        <span className="text-xl font-bold">
                          Developer Internship{" "}
                        </span>
                      </div>
                      <div className="mb-2 text-primary">
                        Geopro Global Solutions Inc.
                      </div>
                      <div className="mb-2">Full Stack Web Developer</div>
                      <div className="mb-2">
                        Dolores, Mabalacat City Pampanga
                      </div>
                    </div>
                  </div>

                  <div className="relative pt-6 group">
                    <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['4'] after:text-white after:text-sm font-bold">
                      <div className="text-sm font-normal  text-primary pl-9 mt-3">
                        2023 - 2024
                      </div>
                    </div>
                    <div className="dark:text-gray-800 text-white pl-9">
                      <div className="mb-2">
                        <span className="text-xl font-bold">
                          Project Manager
                        </span>
                      </div>
                      <div className="mb-2 text-primary">
                        Children of Fatima Inc.
                      </div>
                      <div className="mb-2">College Capstone Development</div>
                      <div className="mb-2">
                        Dolores, Mabalacat City Pampanga
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Education Section End */}

          {/* Applications Used Start */}
          <div className="relative">
            <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] dark:text-gray-800 text-white dark:hover:text-primary hover:text-primary hover:border-primary dark:hover:border-primary dark:border-gray-800 border-[#FFFFFF33] rounded inline-block text-center p-3 mt-5 md:mt-5 lg:mt-0">
              Applications Used
            </h1>
            <div className="flex flex-col md:flex-row lg:flex-row pt-8 lg:pt-10 lg:p-4 gap-x-2 items-start">
              <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
                <div className="service-container flex items-center hover:text-primary">
                  <div className="mr-4 flex items-center justify-center self-start">
                    <AiOutlineHtml5 className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl md:text-lg lg:text-xl mb-2 font-bold">
                      Website Design
                    </h1>
                    <div className="text-sm space-y-4">
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          HTML
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          CSS
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          React JS
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Vue JS
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          TypeScript
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Tailwind
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Boot Strap
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
                <div className="service-container flex items-center hover:text-primary">
                  <div className="mr-4 flex items-center justify-center self-start font-general">
                    <FiPenTool className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl md:text-lg lg:text-xl mb-2 font-bold">
                      Graphic Design
                    </h1>
                    <div className="text-sm space-y-4">
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Adoble Photoshop
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Adobe Illustrator
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Adobe Premier
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Adobe Indesign
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Adobe Lightroom
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Figma UI
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Canva
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
                <div className="service-container flex items-center hover:text-primary">
                  <div className="mr-4 flex items-center justify-center self-start">
                    <FaComputer className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl md:text-lg lg:text-xl mb-2 font-bold">
                      Computer Technician
                    </h1>
                    <div className="text-sm space-y-4">
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          OS Installation (Window, MAC, Linux)
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Software Installation
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Burning Test
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Memtest
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Hirens
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Disk Sentinel
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row md:mt-10 lg:mt-0 lg:p-4 gap-x-2 items-start">
              <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
                <div className="service-container flex items-center hover:text-primary">
                  <div className="mr-4 flex items-center justify-center self-start">
                    <SiGoogledocs className="h-10 w-12 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl md:text-lg lg:text-xl mb-2 font-bold">
                      Computer Literate
                    </h1>
                    <div className="text-sm space-y-4">
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Microsoft Office Suite
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Wps Office Suite
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Google Office Suite
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Cloud Storage
                        </span>
                      </p>
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Email Clients
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
                <div className="service-container flex items-center hover:text-primary">
                  <div className="mr-4 flex items-center justify-center self-start font-general">
                    <MdOutlineSecurity className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl md:text-lg lg:text-xl mb-2 font-bold">
                      Backup & Security
                    </h1>
                    <div className="text-sm leading-8">
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white">
                          Introducing our sleek Backup and Security <br /> app -
                          ensuring the utmost data protection by <br />
                          seamlessly safeguarding your digital assets <br />{" "}
                          with robust solution
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
                <div className="service-container flex items-center hover:text-primary">
                  <div className="mr-4 flex items-center justify-center self-start">
                    <LuDatabaseBackup className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl md:text-lg lg:text-xl mb-2 font-bold">
                      IT Consultancy
                    </h1>
                    <div className="text-sm leading-8">
                      <p className="text-primary">
                        ➤{" "}
                        <span className="dark:text-gray-800 text-white ">
                          I specialize in enhancing business efficiency through
                          strategic IT solutions. Let&apos;s navigate the tech
                          landscape together for your success.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Applications Used End */}
        </div>
        <div className="flex justify-end fixed top-4 right-4"></div>
        {/* <Footer /> */}
      </WipeInRightAnimation>
    </div>
  );
}
