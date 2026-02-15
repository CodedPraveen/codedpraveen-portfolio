import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-400 body-font h-18">
        <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-200 mb-4 md:mb-1">
            <span className="text-blue-950 text-xl font-bold">&lt;</span>

            <span className=" text-2xl">CodedPraveen</span>
            <span className="text-blue-950 text-xl font-bold"> /&gt;</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center justify-center gap-3 text-lg">
            <Link href="/" className="mr-5 hover:text-gray-200">
              Home
            </Link>
            <Link href="./About" className="mr-5 hover:text-gray-200">
              About
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-200">
              language
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-200">
              Project
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black text-gray-400 rounded text-lg mt-4 md:mt-0">
            <a href="https://github.com/CodedPraveen" target="blank">Checkout Github </a>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
