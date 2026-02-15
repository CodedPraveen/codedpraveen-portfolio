import Image from "next/image";
import Navbar from "./conmponent/Navbar";
import Footer from "./conmponent/Footer";
import Dashboard from "./conmponent/Dashboard";
import BG from "./conmponent/BG";

export default function Home() {
  return (
    <>
      <BG/>
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
}
