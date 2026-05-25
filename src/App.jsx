import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import ComingSoon from "./sections/ComingSoon";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

import { FloatingWhatsApp } from "react-floating-whatsapp";

import logo from "./assets/logo.png";

function App() {

  return (

    <div className="overflow-hidden bg-white">

      <Helmet>

        <title>
          Al Muneer General Trading LLC | Industrial Trading Solutions UAE
        </title>

        <meta
          name="description"
          content="Al Muneer General Trading LLC supplies industrial fittings, warehouse shelving, bird protection systems, hardware products and commercial utility solutions across UAE."
        />

        <meta
          name="keywords"
          content="industrial trading UAE, warehouse shelving UAE, brass fittings UAE, industrial valves Ras Al Khaimah, Al Muneer Trading LLC"
        />

        <meta
          property="og:title"
          content="Al Muneer General Trading LLC"
        />

        <meta
          property="og:description"
          content="Industrial trading solutions and commercial supply services across UAE."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://almuneertrd.ae"
        />

      </Helmet>
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