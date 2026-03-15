import React from "react";
import Image from "next/image";
import TypeJS from "./TypeJS";

const Dashboard = () => {
  return (
    <>
      <main className=" ">
        <section className="text-white w-full">
          <div className="firstSection flex justify-around items-center w-full h-fit md:h-full md:pl-16 ">
            <div className="leftSection text-[3em] m-5 mb-0 w-full md:w-3/5 flex flex-col md:gap-10">
              <div className="flex flex-col gap-5">
                <div className="">
                  <span> Hi, My name is</span>
                  <span className="text-[#3e2987]"> Praveen</span>
                </div>


                <div className="text-3xl md:text-4xl font-bold h-24 h-32 md:h-auto text-start">
                  I am a{" "}
                  <br className="block md:hidden" />
                  <TypeJS
                    strings={["Web Developer.", "Web Programmer.", "MERN Stack Developer"]}
                    className="text-blue-500 "
                  />
                </div>
              </div>
              <div className="Resume+Github md:py-[20px] border-none rounded-full no-underline text-xl mx-[0] ">
                <button className="no-underline cursor-pointer text-[#c5c4c4] mr-[15px] p-[13px] pl-0 rounded-[10px]">
                  <a
                    className="no-underline hover:underline"
                    href="./assets/PraveenKumar_resume.pdf" target="_blank"
                  >
                    Download Resume
                  </a>
                </button>
                <button className="bg-[#b3bbbe] font-bold p-2 rounded-lg text-black hover:underline no-underline">
                  <a href="https://github.com/CodedPraveen">Visit Github</a>
                </button>
              </div>
                <div className="flex w-full h-32 md:h-auto text-start">
                  <div className="w-full font-bold md:py-[30px] text-white text-2xl ">
                    Ready for{" "}
                    <br className="block md:hidden" />
                    <TypeJS
                      strings={["Internship.", "Learning.", "Working with team."]}
                      className="text-green-500"
                    />
                  </div>
                </div>
            </div>
            <div className="group w-2/5 overflow-hidden rounded-xl hidden md:block">
              <Image
                className="p-[20px] md:w-1/2"
                width={100}
                height={100}
                src="/assets/bg.png"
                alt="Character Photo"
              />
            </div>
          </div>

          <div className="">
            <ul className="w-full h-auto grid grid-cols-3 justify-items-center justify-items-center md:flex md:justify-around items-center md:py-6 gap-2">
              <li>
                <Image width={100} height={100} className="w-24 h-auto md:w-24 md:h-auto invert" src="/assets/HTML5_logo.png" alt="HTML5" />
              </li>
              <li>
                <Image width={100} height={100} className="w-[68] h-auto md:w-[70] md:h-auto invert" src="/assets/CSS3_Logo.png" alt="CSS3" />
              </li>
              <li>
                <Image width={100} height={100} className="w-[90] h-auto md:w-24 md:h-auto pt-1 " src="/assets/javascript.jpg" alt="JavaScript" />
              </li>
              <li>
                <Image width={100} height={100} className="w-[80] h-auto md:w-24 md:h-auto " src="/assets/react_logo.svg" alt="React" />
              </li>
              <li>
                <Image width={100} height={100} className="w-[95] h-auto md:w-32 md:h-auto" src="/assets/nextjs.svg" alt="Next.js" />
              </li>
              <li>
                <Image width={100} height={100} className="w-[100] h-auto md:w-36 md:h-auto" src="/assets/MongoDB_Logo.svg" alt="MongoDB" />
              </li>
            </ul>
          </div>

        </section>
      </main>
    </>
  );
};

export default Dashboard;
