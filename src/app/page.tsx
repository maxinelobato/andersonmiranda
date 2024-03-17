import AboutForex from './components/AboutForex'
import Advantages from './components/Advantages'
import Hero from './components/Hero'
import Investments from './components/Investments'
import ProgressScroll from './components/ProgressScroll'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <>
      <ProgressScroll />
      <Hero />
      <Investments />
      <AboutForex />
      <Advantages />
      <Testimonials />
    </>
  )
}
