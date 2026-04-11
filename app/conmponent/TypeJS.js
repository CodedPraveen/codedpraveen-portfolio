"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypeJS({ strings, className }) {
  const ref = useRef(null);
  const stringsKey = JSON.stringify(strings);

  useEffect(() => {
    if (!ref.current) return;
    const parsed = JSON.parse(stringsKey);
    const typed = new Typed(ref.current, {
      strings: parsed,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, [stringsKey]);

  return <span ref={ref} className={className} />;
}
