import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import ComingSoon from "./sections/ComingSoon";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;