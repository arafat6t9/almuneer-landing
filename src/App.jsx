import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import ComingSoon from "./sections/ComingSoon";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

import { FloatingWhatsApp } from "react-floating-whatsapp";

import logo from "./assets/logo.png";

function App() {

  return (

    <div className="overflow-hidden bg-white">

      <Navbar />

      <Hero />

      <About />

      <Products />

      <ComingSoon />

      <Contact />

      <Footer />

      {/* WHATSAPP FLOAT */}
      <FloatingWhatsApp
        phoneNumber="+971568994436"
        accountName="Al Muneer Trading LLC"
        avatar={logo}
        statusMessage="Typically replies instantly"
        chatMessage="Hello 👋\nHow can we help you today?"
        placeholder="Type your message..."
        allowEsc
        allowClickAway
        notification
        notificationSound
        darkMode
      />

    </div>

  );
}

export default App;