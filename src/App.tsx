import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoFeatures from "./components/BentoFeatures";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <BentoFeatures />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;