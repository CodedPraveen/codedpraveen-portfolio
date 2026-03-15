import React from "react";
import Navbar from "../conmponent/Navbar";
import Footer from "../conmponent/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <div className="about px-10 md:px-20 text-xl">
          <h1 className="font-bold text-2xl relative left-[100] md:left-[45%] w-fit">About Me</h1>
          <p className="font-semibold text-lg py-4 md:py-6">
            Hi,
            <br />
            I’m <span className="text-blue-300 font-bold">Praveen Kumar</span>, <br /> A self-taught Full Stack Web
            Developer. I don’t have a formal CS degree, but I’ve built my skills
            through hands-on practice and real projects.
          </p>

          <div className="font-bold text-blue-300">💻 Skills </div>
          <ul className="flex flex-col md:flex-row gap-4 list-disc md:list-none md:gap-28 justify-center py-5 relative md:right-5">
            <li className="font-bold ">
              Frontend with Tailwind CSS
            </li>

            <li className="font-bold ">JavaScript, React</li>

            <li className="font-bold ">MongoDB</li>

            <li className="font-bold ">Git & GitHub</li>

            <li className="font-bold ">Postman</li>

            <li className="font-bold ">
              Next.js
            </li>
          </ul>


          <div className="font-semibold text-lg">
            {" "}
            <span className="text-blue-400">(⊙_⊙)？</span> What I’m Looking For
            <div className="newline h-12 flex items-center relative top-1 right-6 w-[300]">
              <p className="mr-2 relative bottom-4 md:bottom-0">→</p>
              I’m seeking a Web Development Internship where I can :
            </div>
          </div>

          <ul className="font-semibold text-lg flex flex-col py-1 gap-4">
            <li className="font-bold list-disc">
              {" "}
              Work on real-world projects,
            </li>

            <li className="font-bold list-disc">
              {" "}
              Learn from experienced developers,
            </li>

            <li className="font-bold list-disc">
              {" "}
              Improve my frontend and backend skills.
            </li>
          </ul>

          <div className="font-semibold relative right-6">
            {" "}
            <div className="newline h-24 md:h-14 flex items-center w-[300]">
              <p className="mr-1 relative bottom-7 md:bottom-0">→</p>I’m quick to learn, consistent, and serious about growing as a
              developer.
            </div>
          </div>

          <p className="font-semibold pt-2 pb-3 relative right-6">⟫⟫ Mindset</p>

          <p className="font-semibold">
            {" "}
            I believe in learning by building, writing clean code, and
            continuously improving.{" "}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
