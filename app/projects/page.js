"use client";
import Image from "next/image";
import Navbar from "../conmponent/Navbar";
import Footer from "../conmponent/Footer";
export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            name: "Get Me A Chai",
            img: "/assets/chai.png",
            detail:
                "Get Me A Chai is a crowdfunding platform designed for creators to receive financial support directly from their fans. It serves as a Patreon-style tool to help followers fund creative projects.",
            stack: "React, Node, Express, MongoDB, Razorpay integration, Github OAuth",
            deploy: "https://get-me-a-chai-inky.vercel.app/"
        },
        {
            id: 2,
            name: "Password Manager",
            img: "/assets/pass.png",
            detail:
                "Pass OP (MongoDB) is a web-based password manager created by CodedPraveen. It allows users to securely store and manage website credentials using a simple interface built with MongoDB and React.",
            stack: "React, Node, Express, MongoDB",
            deploy: "https://pass-op-mongo-psi.vercel.app/"
        },
        {
            id: 3,
            name: "Password Manager",
            img: "/assets/pass.png",
            detail:
                "Pass OP (localStorage) is a minimalist, web-based password manager created by CodedPraveen. It allows users to securely store and manage website credentials locally with a simple, user-friendly interface.",
            stack: "React, Node, Express, localStorage",
            deploy: "https://pass-op-theta-weld.vercel.app/"
        },
        {
            id: 4,
            name: "iTask - To Do List Application",
            img: "/assets/iTask_Todo.png",
            detail:
                "iTask is a minimalist React-based To-Do List application. It provides a simple and intuitive interface for managing daily tasks and staying organized. you can add, edit, and delete tasks, making it easy to keep track of your to-do list.",
            stack: "React, Node, Express, MongoDB",
            deploy: "https://todo-list-app-psi-jade.vercel.app/"
        },
        {
            id: 5,
            name: "Tharpe Clone",
            img: "/assets/Tharpe-Clone.png",
            detail:
                "Tharpe marketing website clone that replicates the design and functionality of the original site. his project demonstrates proficiency in front-end development, showcasing skills in HTML, CSS, and JavaScript to create a visually appealing.",
            stack: "HTML, CSS, JavaScript",
            deploy: "https://thar-pay-web-app.vercel.app/"
        },
        {
            id: 6,
            name: "ezeePay Clone",
            img: "/assets/ezeePay-Clone.png",
            detail:
                "ezeePay marketing website clone that replicates the design and functionality of the original site. This project demonstrates proficiency in front-end development, showcasing skills in HTML, CSS, and JavaScript to create a visually appealing.",
            stack: "HTML, CSS, JavaScript",
            deploy: "https://ezee-pay-psi.vercel.app/"
        },
        {
            id: 7,
            name: "Portfoli Website",
            img: "/assets/portfolio.png",
            detail:
                "Personal portfolio website built with Next.js and Tailwind CSS. This project showcases my skills, projects, and experience in web development. It features a clean and responsive design, highlighting my work and providing an easy way for visitors to learn more about me.",
            stack: "Next.js, React, TailwindCSS",
            deploy: "https://codedpraveen.vercel.app/"
        },
    ];

    return (
        <>
            <Navbar />

            <div className="bg-gradient-to-r from-[#00092d57] to-[#00092d57] border border-gray-900 rounded-xl shadow-xs grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 md:py-6 mx-4 md:mx-14">
                {projects.map((p) => (
                    <div key={p.id} className="bg-[#101828] p-8  flex flex-col justify-center items-start w-fit rounded-xl m-7">
                        <a href="#">
                            <img className="rounded-xl h-full w-full object-cover top-0" src={p.img} alt={p.name} />
                        </a>
                        <a href="#">
                            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-white">{p.name}</h5>
                        </a>
                        <p className="mb-6 text-gray-400">{p.detail}</p>
                        <p className="text-gray-400 pb-2">{p.stack}</p>
                        <a href={p.deploy} className="inline-flex items-center text-gray-400 bg-gray-800 box-border border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:ring-blue-500 shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none">
                            Deploy Link
                        </a>
                    </div>
                ))}</div>

            <Footer />
        </>
    );
}