import CloseBtn from "../components/CloseBtn";
import {
  AiOutlineHtml5,
  AiOutlineCode,
  AiOutlinePicture,
} from "react-icons/ai";

export default function Resume() {
  return (
    <div className="relative flex flex-col font-general px-7">
      <div className="flex flex-col justify-center items-center my-10 lg:my-20 gap-y-5">
        <h4 className="text-xl text-primary">I'm available for hire</h4>
        <h2 className="text-5xl font-semibold">My Resume</h2>
        <hr className="w-28 mx-auto my-4 border-t-2 border-primary" />
        {/* Timeline Section Start */}
        <div className="flex flex-col lg:flex-row md:gap-x-16 2xl:gap-x-64 font-general">
          <div className="flex flex-col w-full lg:w-fit lg:p-4">
            <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] border-[#FFFFFF33] rounded px-4 py-2 mb-6 w-fit">
              Education
            </h1>
            <div className="w-full max-w-3xl mx-auto">
              <div className="-my-6 ml-8">
                <div className="relative py-6 group">
                  <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['1'] after:text-white after:text-sm font-bold">
                    <div className="text-sm font-normal text-primary pl-9 mt-3">
                      2024
                    </div>
                  </div>
                  <div className="text-white pl-9">
                    <div className="mb-2">
                      <span className="text-xl font-bold">College </span>
                      <span className="block lg:hidden"></span>
                      <span className="hidden lg:inline">- </span>
                      <span className="text-lg lg:text-sm text-primary">
                        Mabalacat City College
                      </span>
                    </div>
                    <div className="mb-2">
                      Bachelor of Science in Information Technology
                    </div>
                    <div className="mb-2">Dolores, Mabalacat City Pampanga</div>
                  </div>
                </div>

                <div className="relative py-6 group">
                  <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['2'] after:text-white after:text-sm font-bold">
                    <div className="text-sm font-normal text-primary pl-9 mt-3">
                      2020
                    </div>
                  </div>
                  <div className="text-white pl-9">
                    <div className="mb-2">
                      <span className="text-xl font-bold">Senior High </span>
                      <span className="block lg:hidden"></span>
                      <span className="hidden lg:inline">- </span>
                      <span className="text-lg lg:text-sm text-primary">
                        Children of Fatima Inc.
                      </span>
                    </div>
                    <div className="mb-2">
                      Information Communication Technology
                    </div>
                    <div className="mb-2">
                      San Francisco, Mabalacat City Pampanga
                    </div>
                  </div>
                </div>

                <div className="relative py-6 group">
                  <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['3'] after:text-white after:text-sm font-bold">
                    <div className="text-sm  font-normal text-primary pl-9 mt-3">
                      2018
                    </div>
                  </div>
                  <div className="text-white pl-9">
                    <div className="mb-2">
                      <span className="text-xl font-bold">Junior High </span>
                      <span className="block lg:hidden"></span>
                      <span className="hidden lg:inline">- </span>
                      <span className="text-lg lg:text-sm text-primary">
                        Tinajero National High School Main
                      </span>
                    </div>
                    <div className="mb-2">
                      Madapdap, Mabalacat City Pampanga
                    </div>
                  </div>
                </div>

                <div className="relative py-6 group">
                  <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['4'] after:text-white after:text-sm font-bold">
                    <div className="text-sm  font-normal text-primary pl-9 mt-3">
                      2017
                    </div>
                  </div>
                  <div className="text-white pl-9">
                    <div className="mb-2">
                      <span className="text-xl font-bold">Elementary </span>
                      <span className="block lg:hidden"></span>
                      <span className="hidden lg:inline">- </span>
                      <span className="text-lg lg:text-sm text-primary">
                        Talba Elementary School
                      </span>
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
            <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] border-[#FFFFFF33] rounded px-4 py-2 mb-6 mt-7 lg:mt-0 w-fit">
              Working Experience
            </h1>
            <div className="w-full max-w-3xl mx-auto">
              <div className="-my-6 ml-8">
                <div className="relative py-6 group">
                  <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['1'] after:text-white after:text-sm font-bold">
                    <div className="text-sm  font-normal text-primary pl-9 mt-3">
                      2016 - Present
                    </div>
                  </div>
                  <div className="text-white pl-9">
                    <div className="mb-2">
                      <span className="text-xl font-bold">
                        Graphic Designer{" "}
                      </span>
                      <span className="block lg:hidden"></span>
                      <span className="hidden lg:inline">- </span>
                      <span className="text-lg lg:text-sm text-primary">
                        Freelance Graphic Designer
                      </span>
                    </div>
                    <div className="mb-2">Self-Employed</div>
                    <div className="mb-2">Mabalacat City Pampanga</div>
                  </div>
                </div>

                <div className="relative py-6 group">
                  <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['2'] after:text-white after:text-sm font-bold">
                    <div className="text-sm  font-normal text-primary pl-9 mt-3">
                      2014 - Present
                    </div>
                  </div>
                  <div className="text-white pl-9">
                    <div className="mb-2">
                      <span className="text-xl font-bold">
                        Computer Technician{" "}
                      </span>
                      <span className="block lg:hidden"></span>
                      <span className="hidden lg:inline">- </span>
                      <span className="text-lg lg:text-sm text-primary">
                        Freelance Computer Technician
                      </span>
                    </div>
                    <div className="mb-2">Self-Employed</div>
                    <div className="mb-2">Mabalacat City Pampanga</div>
                  </div>
                </div>

                <div className="relative py-6 group">
                  <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['3'] after:text-white after:text-sm font-bold">
                    <div className="text-sm  font-normal text-primary pl-9 mt-3">
                      2023 - 2024
                    </div>
                  </div>
                  <div className="text-white pl-9">
                    <div className="mb-2">
                      <span className="text-xl font-bold">
                        Project Manager{" "}
                      </span>
                      <span className="block lg:hidden"></span>
                      <span className="hidden lg:inline">- </span>
                      <span className="text-lg lg:text-sm text-primary">
                        College Capstone Development
                      </span>
                    </div>
                    <div className="mb-2">System Development</div>
                    <div className="mb-2">Dolores, Mabalacat City Pampanga</div>
                  </div>
                </div>

                <div className="relative py-6 group">
                  <div className="flex items-center mb-1 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-primary before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 sm:after:left-0 after:w-10 after:h-10 after:bg-primary after:rounded-full after:flex after:items-center after:justify-center after:-translate-x-1/2 after:translate-y-1.5 after:content-['4'] after:text-white after:text-sm font-bold">
                    <div className="text-sm font-normal  text-primary pl-9 mt-3">
                      2019 - 2020
                    </div>
                  </div>
                  <div className="text-white pl-9">
                    <div className="mb-2">
                      <span className="text-xl font-bold">Web Designer </span>
                      <span className="block lg:hidden"></span>
                      <span className="hidden lg:inline">- </span>
                      <span className="text-lg lg:text-sm text-primary">
                        SHS Capstone Development
                      </span>
                    </div>
                    <div className="mb-2">Project Manager</div>
                    <div className="mb-2">
                      San Francisco, Mabalacat City Pampanga
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Timeline Section End */}

        {/* Applications Used Start */}
        <div className="relative">
          <h1 className="text-2xl lg:text-3xl font-general font-semibold border-[3px] border-[#FFFFFF33] rounded inline-block text-center p-3">
            Applications Used
          </h1>
          <div className="flex flex-col lg:flex-row pt-8 lg:pt-10 lg:p-4 gap-x-2 items-start">
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start">
                  <AiOutlineHtml5 className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Website Design</h1>
                  <div className="text-sm space-y-4">
                    <p className="text-primary">
                      ➤ <span className="text-white">HTML</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">CSS</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Javascript</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Bootstrap</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Figma UI</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start font-general">
                  <AiOutlineCode className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Graphic Design</h1>
                  <div className="text-sm space-y-4">
                    <p className="text-primary">
                      ➤ <span className="text-white">Adoble Photoshop</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Adobe Illustrator</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Adobe Premier</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Adobe Indesign</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Adobe Lightroom</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Ibis Paint</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start">
                  <AiOutlinePicture className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">
                    Computer Technician
                  </h1>
                  <div className="text-sm space-y-4">
                    <p className="text-primary">
                      ➤{" "}
                      <span className="text-white">
                        OS Installation (Window, MAC, Linux)
                      </span>
                    </p>
                    <p className="text-primary">
                      ➤{" "}
                      <span className="text-white">
                        Microsoft Office Installation
                      </span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Burning Test</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Memtest</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Hirens</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Disk Sentinel</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:p-4 gap-x-2 items-start">
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start">
                  <AiOutlineHtml5 className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Computer Literate</h1>
                  <div className="text-sm space-y-4">
                    <p className="text-primary">
                      ➤ <span className="text-white">Microsoft Word</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Microsoft Powerpoint</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Microsoft Excel</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Microsoft Publisher</span>
                    </p>
                    <p className="text-primary">
                      ➤ <span className="text-white">Microsoft Access</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start font-general">
                  <AiOutlineCode className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">Backup & Security</h1>
                  <div className="text-sm leading-8">
                    <p className="text-primary">
                      ➤{" "}
                      <span className="text-white">
                        Introducing our sleek Backup and Security <br /> app -
                        ensuring the utmost data protection by <br />
                        seamlessly safeguarding your digital assets <br /> with
                        robust solution
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-1 mb-4 sm:mb-0">
              <div className="service-container flex items-center">
                <div className="mr-4 flex items-center justify-center self-start">
                  <AiOutlinePicture className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl mb-2 font-bold">IT Consultancy</h1>
                  <div className="text-sm leading-8">
                    <p className="text-primary">
                      ➤{" "}
                      <span className="text-white ">
                        I specialize in enhancing business efficiency through
                        strategic IT solutions. Let's navigate the tech
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
      <div className="flex justify-end fixed top-4 right-4">
        <CloseBtn/>
      </div>
    </div>
  );
}
