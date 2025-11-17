import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { title } from "process";

const logo = "/assets/homepagelogo.jpg";
const heroVideo = "/assets/herovideo.mp4";

const weldingImage = "/assets/metalworks_home.jpg"; 
const woodworkImage = "/assets/furnishes_home.jpg";

const carports = "/assets/services/carports.jpg";
const doors = "/assets/services/doors.jpg";
const enclosures = "/assets/services/enclosures.jpg";
const fences = "/assets/services/fences.jpg";
const gates = "/assets/services/gates.jpg";
const shelves = "/assets/services/shelves.jpg";
const carmods = "/assets/services/carmods.jpeg";
const customfab = "/assets/services/customfabrication.jpeg";
const machinery = "/assets/services/machinery.jpeg";
const signage = "/assets/services/signage.jpeg";
const staircase="/assets/services/staircase.jpeg";
const coffeetable="/assets/services/furnishings/coffeetable.jpeg";





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
        "- Custom Fabrications",
        "- Gates, Doors & Fencing",
        "- Steel Enclosures & Cages",
        "- Custom Signages",
        "- Carports & Work Shades",
        "- Machinery Builds & Welding Repairs",
        "- Staircase and Handrails",
      ],
      image: weldingImage,
    },
    wood: {
      title: "Custom Furnishings — Steel & Wood",
      description: [
        "Furniture where steel structure meets the warmth of natural wood — elevating everyday spaces.",
        "Each piece is crafted to balance strength and elegance, across a range of refined categories:",
        "- Coffee Tables:",
        "- Dining & Conference Tables",
        "- Office Desks",
        "- Shelving & Storage Units",
        "- Outdoor Furniture",
        "- TV Consoles & Accent Pieces",
      ],
      image: woodworkImage,
    },
  };


const collectionGroups = {
  metal: [
    {
      title: "Carports and Working Shades",
      image: carports,
      link: "/collections/metal/carports",
      subtitle: "Engineered for protection & performance",
      description: "Stylish steel shades designed to protect vehicles and outdoor workspaces.",
    },
    {
      title: "Doors",
      image: doors,
      link: "/collections/metal/doors",
      subtitle: "Bold entrances built to last",
      description: "Custom steel doors blending security, precision, and timeless design.",
    },
    {
      title: "Enclosures",
      image: enclosures,
      link: "/collections/metal/enclosures",
      subtitle: "Purpose-built steel protection",
      description: "Durable enclosures customized to safeguard spaces and equipment.",
    },
    {
      title: "Fences",
      image: fences,
      link: "/collections/metal/fences",
      subtitle: "Strength that defines boundaries",
      description: "Tough, elegant fencing solutions for privacy and security.",
    },
    {
      title: "Gates",
      image: gates,
      link: "/collections/metal/gates",
      subtitle: "Where security meets artistry",
      description: "Statement gates designed for durability, access, and style.",
    },
    {
      title: "Shelves",
      image: shelves,
      link: "/collections/metal/shelves",
      subtitle: "Storage built for strength",
      description: "Heavy-duty shelves engineered for storage and organization.",
    },
    {
      title: "Car Modifications",
      image: carmods,
      link: "/collections/metal/carmods",
      subtitle: "Performance meets personalization",
      description: "Custom car mods built for power, safety, and identity.",
    },
    {
      title: "Custom Fabrications",
      image: customfab,
      link: "/collections/metal/customfab",
      subtitle: "Crafted from concept to creation",
      description: "Tailor-made metalworks combining creativity and precision.",
    },
    {
      title: "Machinery Fabrication & Repairs",
      image: machinery,
      link: "/collections/metal/machinery",
      subtitle: "Precision-engineered performance",
      description: "Expert fabrication and repair for reliable machinery performance.",
    },
    {
      title: "Custom Signage",
      image: signage,
      link: "/collections/metal/signages",
      subtitle: "Design that commands attention",
      description: "Durable metal signage built to define brands and spaces.",
    },
    {
      title: "Staircases and Handrails",
      image: staircase,
      link: "/collections/metal/staircase",
      subtitle: "Functional elegance in every step",
      description: "Modern steel staircases and handrails with lasting appeal.",
    },
  ],

  furnishings: [
    {
      title: "Coffee Tables",
      image: coffeetable,
      link: "/collections/furnishings/coffeetables",
      subtitle: "Elegant centerpieces",
      description: "Blend artistry and functionality to elevate your living space.",
    },
    // {
    //   title: "Dining & Conference Tables",
    //   image: "/assets/furnishings/dining.jpg",
    //   link: "/collections/furnishings/dining",
    //   subtitle: "Sophisticated surfaces",
    //   description: "Designed for memorable meals and productive meetings alike.",
    // },
    // {
    //   title: "Office Tables",
    //   image: "/assets/furnishings/office.jpg",
    //   link: "/collections/furnishings/office",
    //   subtitle: "Stylish workstations",
    //   description: "Durable tables that inspire focus and professionalism.",
    // },
    // {
    //   title: "Outdoor Furniture",
    //   image: "/assets/furnishings/outdoor.jpg",
    //   link: "/collections/furnishings/outdoor",
    //   subtitle: "Refined & weather-resistant",
    //   description: "Transform outdoor spaces into luxurious retreats.",
    // },
    // {
    //   title: "Shelves",
    //   image: "/assets/furnishings/shelves.jpg",
    //   link: "/collections/furnishings/shelves",
    //   subtitle: "Functional storage",
    //   description: "Chic shelving solutions that organize and showcase your style.",
    // },
    // {
    //   title: "Beds & Seating",
    //   image: "/assets/furnishings/beds.jpg",
    //   link: "/collections/furnishings/beds",
    //   subtitle: "Comfort meets craftsmanship",
    //   description: "Designed for rest, relaxation, and elegance.",
    // },
    // {
    //   title: "Custom Interior",
    //   image: "/assets/furnishings/interior.jpg",
    //   link: "/collections/furnishings/interior",
    //   subtitle: "Tailor-made accent pieces",
    //   description: "TV consoles and accents that reflect your unique vision.",
    // },
  ],
};


  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;
    if (scrollTarget) {
      const el = document.querySelector(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    useEffect(() => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, []);


  const [activeTab, setActiveTab] = useState<keyof typeof services>("steel");
  const active = services[activeTab];
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 300], [0, -50]);


  const [activeGroup, setActiveGroup] = useState<keyof typeof collectionGroups>("metal");
  const activeCollections = collectionGroups[activeGroup];


  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-[#1a1a1a] py-2 text-center">
        <p className="text-xs tracking-widest uppercase text-white">
          Authentic Custom Steel & Wood Fabrications - Proudly Serving Kenya
        </p>
      </div>

      <Navigation />

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
              <Link to="/" state={{ scrollTo: "#collections" }}>View our works</Link>
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
                <div className="absolute inset-0 bg-black/25 "></div>

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
      

      {/* Collections Section */}
      <section id="collections" className="py-20 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em]">
            Our Collections
          </h2>
          <p className="text-gray-600 mt-4">
            Explore our crafted range — where steel and wood meet artistry.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10 text-sm md:text-base uppercase tracking-wider font-semibold">
          <button
            onClick={() => setActiveGroup("metal")}
            className={`pb-1 border-b-2 transition-all duration-300 ${
              activeGroup === "metal"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            Custom Metal Works
          </button>
          <button
            onClick={() => setActiveGroup("furnishings")}
            className={`pb-1 border-b-2 transition-all duration-300 ${
              activeGroup === "furnishings"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            Custom Furnishings
          </button>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {activeCollections.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <div className="relative w-full h-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-white text-center max-w-xl">
                    {item.subtitle && (
                      <p className="text-xs tracking-widest uppercase mb-4 opacity-90">
                        {item.subtitle}
                      </p>
                    )}
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[0.12em] mb-3">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-white/90 mb-6">{item.description}</p>
                    )}
                    <div className="inline-block bg-white text-black px-6 py-2 text-sm font-semibold uppercase rounded">
                      View Collection
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
              <Link to="/" state={{ scrollTo: "#collections" }}>View our Works</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
