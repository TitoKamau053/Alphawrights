import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Wrench, Hammer, Boxes } from "lucide-react";
import heroImage from "@/assets/hero-fabrication.jpg";
import weldingImage from "@/assets/service-welding.jpg";
import woodworkImage from "@/assets/service-woodwork.jpg";
import customImage from "@/assets/service-custom.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section relative mt-16">
        <img src={heroImage} alt="Custom fabrication workshop" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-background mb-6">
            Custom Steel & Wood
            <br />
            Fabrications
          </h1>
          <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Bringing your vision to life with expert craftsmanship. From concept to creation, we deliver premium custom fabrications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <Button asChild variant="secondary" size="xl">
              <Link to="/services">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We specialize in custom fabrications tailored to your unique requirements. Every project is crafted with precision and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Steel Welding"
            description="Custom steel fabrication and welding services for industrial and residential projects."
            image={weldingImage}
            link="/services"
          />
          <ServiceCard
            title="Wood Furniture"
            description="Live edge wood slabs, epoxy resin tables, and custom wood furnishings."
            image={woodworkImage}
            link="/services"
          />
          <ServiceCard
            title="Custom Designs"
            description="Unique metal and wood combinations tailored to your specific vision and requirements."
            image={customImage}
            link="/services"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Alpha Wrights</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert craftsmanship meets innovative design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-none flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="mb-3">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">
                Years of experience in custom fabrication ensures premium quality in every project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-none flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Every piece is tailored to your specific requirements and vision.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-none flex items-center justify-center mx-auto mb-4">
                <Boxes className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="mb-3">Quality Materials</h3>
              <p className="text-muted-foreground">
                We use only premium steel, locally-sourced woods, and top-grade materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-primary text-primary-foreground p-12 md:p-16 text-center rounded-none">
          <h2 className="text-background mb-4">Ready to Start Your Project?</h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your custom fabrication needs and bring your vision to life.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
