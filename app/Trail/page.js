"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);
  const readyEl = useRef(null);
  const [showLang, setShowLang] = useState(false);

  useEffect(() => {
    const typed1 = new Typed(el.current, {
      strings: ["Web Developer.", "Web Programmer."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    const typed2 = new Typed(readyEl.current, {
      strings: [
        "Internship.",
        "Learn.",
        "Gain experience.",
        "Work with Team.",
        "Work with this language.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        I am a <span ref={el} className="text-blue-500"></span>
      </h1>

      <h2 className="text-xl mt-4">
        Ready for <span ref={readyEl} className="text-green-500"></span>
      </h2>

      <div className="mt-6">
        <button
          onClick={() => setShowLang(!showLang)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Toggle Language
        </button>

        {showLang && (
          <div id="langMenu" className="mt-2 p-3 border rounded bg-gray-100">
            Language Menu Content
          </div>
        )}
      </div>
    </div>
  );
}
        