"use client";

import { useEffect } from "react";

export default function AboutRedirect() {
  useEffect(() => {
    window.location.replace("/#about");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center text-slate-400">
      Redirecting…
    </div>
  );
}
