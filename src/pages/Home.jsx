import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Products from "@/components/layout/Products";
import Careers from "@/components/layout/Career";
import Team from "@/components/layout/Team";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";

const Home = () => {

  return (
    <>

    {/* Hero Section */}
    <section id="hero-section">
      <Hero />
    </section>

      {/* About Us Section */}
      <section className="-mt-32 bg-[#EEF7FF] px-4 pb-20 pt-20 border-b" id="about-section">
        <About />
      </section>

      {/* Products Section */}
      <section className="px-4 pt-20 pb-20 border-b" id="product-section">
        <Products />
      </section>

      {/* Career Section */}
      <section className="px-4 pt-20 pb-20 border-b" id="careers-section">
        <Careers />
      </section>

      {/* Team Section */}
      <section className="px-4 pt-20 pb-20 border-b" id="team-section">
        <Team />
      </section>

      {/* Contact Us Section */}
      <section className="relative bg-white pb-24 pt-20 px-4 border-b" id="contact-section">
        <Contact />
      </section>

      {/* Footer */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}


export default Home;
