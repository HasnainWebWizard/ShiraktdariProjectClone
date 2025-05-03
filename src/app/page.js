import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Info from './components/Info.js';
import Imgdiv from './components/Imgdiv.js';
import HowItWorksSection from './components/HowItWorksSection.js';
import Details from "./components/Details.js";
import Footer from './components/Footer.js';



function Home() {
  return (
    <div>
      <Navbar /> {/* Correctly using the Navbar component */}
      <Hero />   {/* Correctly using the Hero component */}
      <Info />
      <Imgdiv />
      <HowItWorksSection />
      <Details />
      <Footer />
    </div>
  );
}
export default Home;
