import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStackSection from "./components/TechStackSection";
import Achievements from "./components/Achievements";
import AboutSection from "./components/AboutSection";
import ContactMe from "./components/ContactMe";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <main>
      {/* Gradient Image */}
      <img
        src={import.meta.env.BASE_URL + "gradient.png"}
        alt="Gradient Background"
        className="absolute top-0 right-0 opacity-60 -z-10"
      />

      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Header />
      {console.log("1. App.jsx loaded")}
      <Hero />
      {console.log("2. Hero component rendered")}
      <AboutSection />
      {console.log("3. AboutSection component rendered")}
      <Portfolio />
      {console.log("4. Portfolio component rendered")}
      <Achievements />
      {console.log("5. Achievements component rendered")}
      <TechStackSection />
      {console.log("6. TechStackSection component rendered")}
      <ContactMe />
      {console.log("7. ContactMe component rendered")}
    </main>
  );
}
