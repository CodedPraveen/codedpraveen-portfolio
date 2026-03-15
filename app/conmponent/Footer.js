import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 body-font">

        <div className="container px-[25] mx-auto py-3 flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl">CodedPraveen</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2026 CodedPraveen —
            <a
              href="https://twitter.com/pavitrapraveen"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Praveen-kumar
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-gray-400 hover:text-blue-700">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://x.com/Pavitra_Praveen" className="ml-3 text-gray-400 hover:text-black">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 translate-y-[1px]"
                aria-hidden="true"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.803-7.584-6.63 7.584H.48l8.6-9.834L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.293 19.694h2.039L6.486 3.048H4.298l13.31 17.799Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/pavitrapraveen_06/" className="ml-3 text-gray-400 hover:text-red-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/praveenkumar-web-dev/" className="ml-3 text-gray-400 hover:text-blue-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>


      </footer>
    </>
  );
};

export default Footer;