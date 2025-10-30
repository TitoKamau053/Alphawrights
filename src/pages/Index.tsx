import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Menu, Search, ShoppingCart, User, Phone, Mail, MapPin } from "lucide-react";
const heroImage = "https://res.cloudinary.com/dlmrb08x1/image/upload/v1761834523/IMG_20250905_104259_aboq3o.jpg";
const weldingImage = "https://res.cloudinary.com/dlmrb08x1/image/upload/v1761834011/IMG_20241210_133550_dlcttg.jpg";
const woodworkImage = "https://res.cloudinary.com/dlmrb08x1/image/upload/v1761834736/IMG_20250801_145204_ohpnyn.jpg";
const customImage = "https://res.cloudinary.com/dlmrb08x1/image/upload/v1761834689/IMG_20250823_130202_lagaf6.jpg";
import logo from "@/assets/alpha-wrights-logo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-[#1a1a1a] py-2 text-center">
        <p className="text-xs tracking-widest uppercase text-white">
          Authentic Custom Steel & Wood Fabrications - Proudly Serving Kenya
        </p>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <img src={heroImage} alt="Custom fabrication workshop" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-black opacity-90"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-wide mb-4">
            CRAFTING EXCELLENCE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-3 tracking-wide">
            Custom Steel & Wood Fabrications
          </p>
          <p className="text-white/80 text-sm md:text-base tracking-wider mb-8 max-w-2xl mx-auto">
            Authenticating our craft through precision, quality, and dedication to bringing your custom vision to life
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-transparent text-white px-10 py-4 tracking-widest text-sm font-bold uppercase hover:bg-gray-200 hover:text-black transition border-2 border-white w-full sm:w-[260px]"
              >
                <Link to="/gallery">View our works</Link>
              </Button>

              <Button
                asChild
                className="bg-transparent text-white px-10 py-4 tracking-widest text-sm font-bold uppercase hover:bg-white hover:text-black transition border-2 border-white w-full sm:w-[260px]"
              >
                <Link to="/contact">Reach us out</Link>
              </Button>
            </div>

            <a
              href="https://wa.me/254718145608"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent-500 hover:bg-green-600 text-white tracking-widest text-sm font-bold uppercase transition border-2 border-white w-full sm:w-[260px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>
          </div>


        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="border-2 border-black p-8 bg-white text-center">
            <h2 className="text-2xl md:text-3xl tracking-[0.2em] uppercase font-bold mb-6">Our Services</h2>
            <div className="text-sm md:text-base flex flex-wrap justify-center gap-x-3 gap-y-2">
              <span className="font-semibold">Custom Steel Works</span> |
              <span className="font-semibold">Furnitures</span> |
              <span className="font-semibold">Home Pictures</span> |
              <span className="font-semibold">Integrated Steel and Wood Works</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white p-12 rounded-lg shadow-lg flex items-center justify-center min-h-[400px]">
                <img src={logo} alt="Alpha Wrights Logo" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-600 mb-3">Authenticating Our Craft</p>
              <h2 className="text-3xl md:text-4xl uppercase tracking-wider mb-6 font-bold">Custom Fabrications Tailored to Your Vision</h2>

              <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                <strong>At Alpha Wrights, we specialize in custom steel and wood fabrications</strong> designed specifically to meet your unique requirements. Every project is a collaboration between our skilled craftsmen and your vision.
              </p>

              <p className="mb-6 text-gray-700 leading-relaxed">
                Based in Kenya, we pride ourselves on delivering exceptional quality and craftsmanship. From custom furniture and gates to intricate metalwork and woodworking, we bring authenticity and precision to every project.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our approach is consultation-first. We work closely with you to understand your needs, provide expert guidance, and deliver fabrications that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl tracking-[0.2em] uppercase font-bold mb-4">What We Create</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every piece we create is custom-built to your specifications. Browse our service categories and let's bring your project to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Custom Steel Fabrications */}
            <div className="relative overflow-hidden group bg-black h-[450px] flex items-center justify-center">
              <img src={weldingImage} alt="Steel welding and fabrication" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70"></div>
              <div className="relative z-10 text-white p-10 text-center">
                <p className="text-xs tracking-widest uppercase mb-4">
                  Gates, Doors, Railings, Structures & More
                </p>
                <h3 className="text-3xl tracking-[0.15em] uppercase mb-6 font-bold">Custom Steel Fabrications</h3>
                <Button asChild className="bg-white text-black px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-200 transition font-bold">
                  <Link to="/services">View Projects</Link>
                </Button>
              </div>
            </div>

            {/* Custom Wood Fabrications */}
            <div className="relative overflow-hidden group bg-[#8B4513] h-[450px] flex items-center justify-center">
              <img src={woodworkImage} alt="Wood furniture and fabrication" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B3410] to-[#4A2808] opacity-70"></div>
              <div className="relative z-10 text-white p-10 text-center">
                <p className="text-xs tracking-widest uppercase mb-4">
                  Furniture, Tables, Panels & Custom Woodwork
                </p>
                <h3 className="text-3xl tracking-[0.15em] uppercase mb-6 font-bold">Custom Wood Fabrications</h3>
                <Button asChild className="bg-white text-black px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-200 transition font-bold">
                  <Link to="/services">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Custom Furniture */}
            <div className="relative overflow-hidden group bg-gradient-to-br from-gray-700 to-gray-900 h-[450px] flex items-center justify-center">
              <img src={customImage} alt="Custom furniture design" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70"></div>
              <div className="relative z-10 text-white p-10 text-center">
                <p className="text-xs tracking-widest uppercase mb-4">
                  Dining Tables, Office Furniture, Custom Pieces
                </p>
                <h3 className="text-3xl tracking-[0.15em] uppercase mb-6 font-bold">Custom Furniture Design</h3>
                <Button asChild className="bg-white text-black px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-200 transition font-bold">
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>

            {/* Metal Gates & Doors */}
            <div className="relative overflow-hidden group bg-gradient-to-br from-slate-800 to-slate-950 h-[450px] flex items-center justify-center">
              <img src={heroImage} alt="Metal gates and doors" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 opacity-70"></div>
              <div className="relative z-10 text-white p-10 text-center">
                <p className="text-xs tracking-widest uppercase mb-4">
                  Security Gates, Entry Doors, Custom Designs
                </p>
                <h3 className="text-3xl tracking-[0.15em] uppercase mb-6 font-bold">Metal Gates & Doors</h3>
                <Button asChild className="bg-white text-black px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-200 transition font-bold">
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Welding Services */}
            <div className="relative overflow-hidden group bg-gradient-to-br from-orange-900 to-red-900 h-[450px] flex items-center justify-center">
              <img src={weldingImage} alt="Welding services" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-red-900 opacity-70"></div>
              <div className="relative z-10 text-white p-10 text-center">
                <p className="text-xs tracking-widest uppercase mb-4">
                  Professional Welding & Metal Joining Services
                </p>
                <h3 className="text-3xl tracking-[0.15em] uppercase mb-6 font-bold">Welding Services</h3>
                <Button asChild className="bg-white text-black px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-200 transition font-bold">
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Custom Orders */}
            <div className="relative overflow-hidden group bg-gradient-to-br from-purple-900 to-indigo-900 h-[450px] flex items-center justify-center">
              <img src={customImage} alt="Custom orders" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 opacity-70"></div>
              <div className="relative z-10 text-white p-10 text-center">
                <p className="text-xs tracking-widest uppercase mb-4">
                  Bring Your Vision to Life - We Build What You Imagine
                </p>
                <h3 className="text-3xl tracking-[0.15em] uppercase mb-6 font-bold">Custom Orders</h3>
                <Button asChild className="bg-white text-black px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-200 transition font-bold">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl tracking-[0.2em] uppercase font-bold mb-4">Why Choose Alpha Wrights</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border-2 border-black">
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">Custom-Built</h3>
              <p className="text-gray-700">
                Every project is tailored to your specific requirements. We don't do cookie-cutter solutions.
              </p>
            </div>

            <div className="text-center p-8 border-2 border-black">
              
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">Quality Craftsmanship</h3>
              <p className="text-gray-700">
                Our skilled artisans bring years of experience and dedication to every piece we create.
              </p>
            </div>

            <div className="text-center p-8 border-2 border-black">
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">Consultation First</h3>
              <p className="text-gray-700">
                We work closely with you from concept to completion, ensuring your vision becomes reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Book a consultation with our team and let's discuss how we can bring your custom fabrication vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-white text-black px-10 py-4 tracking-widest text-sm font-bold uppercase hover:bg-gray-200 transition">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild className="bg-transparent text-white px-10 py-4 tracking-widest text-sm font-bold uppercase hover:bg-white hover:text-black transition border-2 border-white">
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
