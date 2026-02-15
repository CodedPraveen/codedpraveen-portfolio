import React from "react";
import Navbar from "../conmponent/Navbar";
import Footer from "../conmponent/Footer";
import BG from "../conmponent/BG";

const About = () => {
  return (
    <>
      <BG />
      <Navbar />
      <main className="text-white">
        <div className="about px-20 py-3">
          <h1 className="font-bold text-xl  underline-offset-4 ">About Me</h1>
          <p className="font-semibold py-2">
            {/* <p> Hey, My name is Praveen Kumar </p>  */}
            Hi, I’m <span>Praveen Kumar</span>, a self-taught Full Stack Web
            Developer. I don’t have a formal CS degree, but I’ve built my skills
            through hands-on practice and real projects.
          </p>

          <div className="font-bold ">💻 Skills </div>
          <ul className="skills flex gap-[120px] justify-center py-2">
            <li className="px-[0] font-bold list-disc">
              HTML, CSS, Tailwind CSS
            </li>

            <li className="px-[0] font-bold list-disc">JavaScript, React</li>

            <li className="px-[0] font-bold list-disc">MongoDB</li>

            <li className="px-[0] font-bold list-disc">Git & GitHub</li>

            <li className="px-[0] font-bold list-disc">Postman</li>

            <li className="px-[0] font-bold list-disc">
              Currently learning Next.js
            </li>
          </ul>
          

          <div className="font-">
            {" "}
            (⊙_⊙)？What I’m Looking For
            <span className="newline py-2">
              –→ I’m seeking a Web Development Internship where I can:
            </span>
          </div>

          <ul>
            <li className="px-[0] py-[10px] font-bold list-disc">
              {" "}
              Work on real-world projects
            </li>

            <li className="px-[0] py-[10px] font-bold list-disc">
              {" "}
              Learn from experienced developers
            </li>

            <li className="px-[0] py-[10px] font-bold list-disc">
              {" "}
              Improve my frontend and backend skills
            </li>
          </ul>

          <p className="font-semibold">
            {" "}
            → I’m quick to learn, consistent, and serious about growing as a
            developer.
          </p>
          
          <p className="font-semibold py-2"> ⟫⟫⟫ Mindset</p>

          <p className="font-semibold">
            {" "}
            I believe in learning by building, writing clean code, and
            continuously improving.{" "}
          </p>
        </div>
        <div className="h-42"></div>
      </main>
      <Footer />
    </>
  );
};

export default About;
