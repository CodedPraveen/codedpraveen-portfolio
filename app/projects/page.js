"use client";

import { useEffect } from "react";

export default function ProjectsRedirect() {
  useEffect(() => {
    window.location.replace("/#projects");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center text-slate-400">
      Redirecting…
    </div>
  );
}
