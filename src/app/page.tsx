import AboutForex from "./components/AboutForex";
import Advantages from "./components/Advantages";
import Hero from "./components/Hero";
import Investments from "./components/Investments";
import ProgressScroll from "./components/ProgressScroll";
// import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
// import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <ProgressScroll/>
      <Hero />
      <Investments />
      <AboutForex />
      <Advantages />
      <Testimonials />
    </>
  );
}
