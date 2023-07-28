import AboutForex from "./components/AboutForex";
import Advantages from "./components/Advantages";
import ButtonFloat from "./components/ButtonFloat";
import Hero from "./components/Hero";
import Investments from "./components/Investments";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Investments />
      <AboutForex />
      <Advantages />
      <Testimonials />
      <ButtonFloat />
    </>
  );
}
