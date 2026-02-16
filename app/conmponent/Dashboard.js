import React from "react";
import Image from "next/image";
import TypeJS from "./TypeJS";

const Dashboard = () => {
  return (
    <>
      <main className=" ">
        <section className="text-white">
          <div className="firstSection flex justify-around items-center w-full h-full pl-16 ">
            <div className="leftSection text-[3em] py-[0] m-5 mb-0 w-3/5 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="">
                  <span> Hi, My name is</span>
                  <span className="text-[#3e2987]"> Praveen</span>
                </div>


                <h1 className="text-4xl font-bold">
                  I am a{" "}
                  <TypeJS
                    strings={["Web Developer.", "Web Programmer.", "MERN Stack Developer"]}
                    className="text-blue-500"
                  />
                </h1>
              </div>
              <div className="Resume+Github py-[20px] border-none rounded-full no-underline text-xl mx-[0] ">
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
                <div className="footer flex w-full">
                  <h2 className=" w-[50%] font-bold py-[30px] text-white text-2xl mt-4">
                    Ready for{" "}
                    <TypeJS
                      strings={["Internship.", "Learning.", "Working with team."]}
                      className="text-green-500"
                    />
                  </h2>
                </div>
              </div>
            </div>
            <div className="group w-2/5 overflow-hidden rounded-xl ">
              <Image
                className="p-[20px] w-[48%] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] group-hover:scale-105"
                width={100}
                height={100}
                src="/assets/bg.png"
                alt="Character Photo"
              />
            </div>
          </div>

          <div className="flex">
            <ul className="w-full flex justify-around items-center py-6">
              <li>
                <Image width={100} height={100} className=" invert" src="/assets/HTML5_logo.png" alt="HTML5" />
              </li>
              <li>
                <Image width={70} height={70} className=" invert" src="/assets/CSS3_Logo.png" alt="CSS3" />
              </li>
              <li>
                <Image width={97} height={97} className="pt-1 " src="/assets/javascript.jpg" alt="JavaScript" />
              </li>
              <li>
                <Image width={100} height={100} className=" " src="/assets/react_logo.svg" alt="React" />
              </li>
              <li>
                <Image width={100} height={100} className="w-35 " src="/assets/nextjs.svg" alt="Next.js" />
              </li>
              <li>
                <Image width={100} height={100} className="w-52 " src="/assets/MongoDB_Logo.svg" alt="MongoDB" />
              </li>
            </ul>
          </div>

        </section>
      </main>
    </>
  );
};

export default Dashboard;
