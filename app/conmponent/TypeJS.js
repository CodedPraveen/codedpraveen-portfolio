"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypeJS({ strings, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, [strings]);

  return <span ref={ref} className={className} />;
}
