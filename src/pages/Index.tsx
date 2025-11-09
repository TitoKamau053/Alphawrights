import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";

const logo = "/assets/homepagelogo.jpg";
const heroVideo = "/assets/herovideo.mp4";

// Cloudinary images
const weldingImage =
  "https://res.cloudinary.com/dlmrb08x1/image/upload/v1761834011/IMG_20241210_133550_dlcttg.jpg";
const woodworkImage =
  "https://res.cloudinary.com/dlmrb08x1/image/upload/v1761834736/IMG_20250801_145204_ohpnyn.jpg";

const Index = () => {
  // Define services
  const services = {
    about: {
      title: "What We Do",
      description: [
        "Alpha Wrights",
        "Built with Soul. Forged with Purpose.",
        "Every great piece begins with a spark — a vision to shape raw material into something meaningful.",
        "At Alpha Wrights, that spark lives in everything we do. We are a team of builders, dreamers, and craftsmen who believe that true design is born from passion, patience, and purpose.",
        "Our journey began with a simple idea: to bring steel and wood together in harmony, creating furniture and structures that carry both strength and soul.",
        "Each project is a chance to explore — to refine, to imagine, and to push boundaries.",
        "From bold industrial tables to timeless architectural details, we take pride in creating pieces that are as strong as they are beautiful.",
      ],
      image: logo,
    },
    steel: {
      title: "Custom Metal Works",
      description: [
        "Precision-built steel solutions crafted for strength, function, and lasting design.",
        "Our metalwork spans a range of specialized categories, each engineered for purpose and built to last:",
        "- Custom Fabrications: Bespoke steel builds — from automotive structures to industrial components.",
        "- Gates, Doors & Fencing: Secure architectural metalwork with clean lines and modern symmetry.",
        "- Steel Enclosures & Cages: Protective structures for storage and generators — designed for resilience.",
        "- Custom Signages: Durable identity pieces with refined detailing and visual precision.",
        "- Carports & Work Shades: Load-considered shade structures with sleek architectural integration.",
        "- Machinery Builds & Welding Repairs: Fabrication, reinforcement, and restoration for longevity.",
      ],
      image: weldingImage,
    },
    wood: {
      title: "Custom Furnishings — Steel & Wood",
      description: [
        "Furniture where steel structure meets the warmth of natural wood — elevating everyday spaces.",
        "Each piece is crafted to balance strength and elegance, across a range of refined categories:",
        "- Coffee Tables: Centerpieces with clean structure and effortless visual presence.",
        "- Dining & Conference Tables: Designs that gather people with intention — for homes, offices, or boardrooms.",
        "- Office Desks: Precision-built workspaces with comfort-minded design and professional presence.",
        "- Shelving & Storage Units: Functional simplicity that organizes space and complements interiors.",
        "- Outdoor Furniture: Weather-considered comfort with steel frameworks and warm wooden finishes.",
        "- TV Consoles & Accent Pieces: Minimal, balanced details that complete a space with quiet expression.",
      ],
      image: woodworkImage,
    },
  };

  const [activeTab, setActiveTab] = useState<keyof typeof services>("steel");
  const active = services[activeTab];
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-[#1a1a1a] py-2 text-center">
        <p className="text-xs tracking-widest uppercase text-white">
          Authentic Custom Steel & Wood Fabrications - Proudly Serving Kenya
        </p>
      </div>

      <Navigation />

      {/* ✅ Updated Hero Section with Parallax Video */}
      <section className="relative w-full h-[70vh] sm:h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Parallax Content */}
        <motion.div
          style={{ y: yTransform }}
          className="relative z-10 px-4 sm:px-6 md:px-8 py-10 sm:py-20 max-w-4xl w-full flex flex-col items-center justify-center text-white"
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-wide mb-4 leading-tight">
            CRAFTING EXCELLENCE
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-3 tracking-wide">
            Custom Steel & Wood Fabrications
          </p>

          <p className="text-white/90 text-sm sm:text-base md:text-lg tracking-wider mb-8 max-w-2xl mx-auto">
            Authenticating our craft through precision, quality, and dedication
            to bringing your custom vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              asChild
              className="bg-transparent text-white px-8 py-3 sm:px-10 sm:py-4 tracking-widest text-sm font-bold uppercase hover:bg-gray-200 hover:text-black transition border-2 border-white w-full sm:w-[240px]"
            >
              <Link to="/gallery">View our works</Link>
            </Button>

            <Button
              asChild
              className="bg-transparent text-white px-8 py-3 sm:px-10 sm:py-4 tracking-widest text-sm font-bold uppercase hover:bg-white hover:text-black transition border-2 border-white w-full sm:w-[240px]"
            >
              <Link to="/contact">Reach us out</Link>
            </Button>

            <a
              href="https://wa.me/254718145608"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 bg-transparent hover:bg-green-600 text-white tracking-widest text-sm font-bold uppercase transition border-2 border-white w-full sm:w-[240px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-white border border-gray-200 p-6 md:p-10 rounded-2xl">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base uppercase tracking-wider font-semibold">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as keyof typeof services)}
                className={`pb-1 border-b-2 transition-all duration-300 ${
                  activeTab === key
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {services[key as keyof typeof services].title}
              </button>
            ))}
          </div>

          {/* Responsive Display */}
          <div className="relative w-full flex flex-col md:flex-row gap-10 h-[400px] md:h-[420px]">
            {/* Image with Zoom Effect */}
            <div className="relative w-full md:w-1/2 h-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  exit={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </AnimatePresence>

              {/* Mobile Text Overlay */}
              <div className="absolute inset-0 md:hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

                <div className="relative z-10 text-white p-4 rounded-xl w-full h-full overflow-y-auto flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {active.title}
                  </h3>
                  <div className="text-sm space-y-2 px-2 text-center">
                    {Array.isArray(active.description)
                      ? active.description.map((line, i) => <p key={i}>{line}</p>)
                      : active.description}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Text Block */}
            <div className="w-full md:w-1/2 h-full overflow-y-auto hidden md:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="h-full px-2"
                >
                  <h3 className="text-2xl font-bold mb-4">{active.title}</h3>
                  <div className="space-y-3 text-gray-700">
                    {Array.isArray(active.description)
                      ? active.description.map((line, i) => <p key={i}>{line}</p>)
                      : active.description}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl tracking-[0.2em] uppercase font-bold mb-4">
              Why Choose Alpha Wrights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border-2 border-black">
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">
                Custom-Built
              </h3>
              <p className="text-gray-700">
                Every project is tailored to your specific requirements. We
                don't do cookie-cutter solutions.
              </p>
            </div>

            <div className="text-center p-8 border-2 border-black">
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-700">
                Our skilled artisans bring years of experience and dedication to
                every piece we create.
              </p>
            </div>

            <div className="text-center p-8 border-2 border-black">
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">
                Consultation First
              </h3>
              <p className="text-gray-700">
                We work closely with you from concept to completion, ensuring
                your vision becomes reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 text-gray-300">
            Book a consultation with our team and let's discuss how we can
            bring your custom fabrication vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              className="bg-white text-black px-10 py-4 tracking-widest text-sm font-bold uppercase hover:bg-gray-200 transition"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent text-white px-10 py-4 tracking-widest text-sm font-bold uppercase hover:bg-white hover:text-black transition border-2 border-white"
            >
              <Link to="/gallery">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
