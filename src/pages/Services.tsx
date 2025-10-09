import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import workshopHero from "@/assets/workshop-hero.jpg";
import weldingImage from "@/assets/service-welding.jpg";
import woodworkImage from "@/assets/service-woodwork.jpg";
import customImage from "@/assets/service-custom.jpg";

const Services = () => {
  const services = [
    {
      title: "Steel Welding & Fabrication",
      image: weldingImage,
      description:
        "Professional steel welding and metal fabrication services for both residential and industrial applications.",
      features: [
        "Custom steel furniture frames",
        "Structural steel work",
        "Metal railings and gates",
        "Industrial fabrication",
        "Repairs and modifications",
      ],
    },
    {
      title: "Wood Furniture & Furnishings",
      image: woodworkImage,
      description:
        "Handcrafted wood furniture featuring live edge slabs, epoxy resin river tables, and custom designs.",
      features: [
        "Live edge wood slabs",
        "Epoxy resin river tables",
        "Custom dining tables",
        "Wood shelving and storage",
        "Kiln drying services",
      ],
    },
    {
      title: "Custom Metal & Wood Combinations",
      image: customImage,
      description:
        "Unique pieces that combine the strength of steel with the warmth of wood for one-of-a-kind creations.",
      features: [
        "Industrial dining tables",
        "Custom desks and workstations",
        "Shelving units",
        "Coffee and side tables",
        "Commercial installations",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section relative mt-16">
        <img src={workshopHero} alt="Workshop interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-background mb-6">Our Services</h1>
          <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto">
            Expert craftsmanship in steel and wood fabrication
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-container">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover shadow-lg"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From concept to completion, we guide you through every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your vision and requirements",
              },
              {
                step: "02",
                title: "Design",
                description: "Create detailed plans and mockups",
              },
              {
                step: "03",
                title: "Fabrication",
                description: "Expert craftsmanship brings it to life",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Professional installation and finishing",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-6xl font-bold text-secondary/20 mb-4">{item.step}</div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="bg-primary text-primary-foreground p-12 md:p-16 text-center rounded-none">
          <h2 className="text-background mb-4">Let's Create Something Amazing</h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your custom fabrication project
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
