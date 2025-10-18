import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import weldingImage from "@/assets/service-welding.jpg";
import woodworkImage from "@/assets/service-woodwork.jpg";
import customImage from "@/assets/service-custom.jpg";
import heroImage from "@/assets/hero-fabrication.jpg";
import workshopHero from "@/assets/workshop-hero.jpg";
import logo from "@/assets/alpha-wrights-logo.jpg";

// Gallery categories organized according to Alpha Wrights services
const categories = [
  {
    id: "custom-steel-works",
    name: "Custom Steel Works",
    images: [
      { id: 1, src: weldingImage, alt: "Custom steel table bases and structures" },
      { id: 2, src: heroImage, alt: "Steel doors, gates, and fences" },
      { id: 3, src: workshopHero, alt: "Heavy duty shelves and steel boxes" },
    ],
  },
  {
    id: "furniture",
    name: "Furniture",
    images: [
      { id: 4, src: woodworkImage, alt: "Coffee tables and dining tables" },
      { id: 5, src: customImage, alt: "Office desks and work tables" },
      { id: 6, src: logo, alt: "Wooden table tops and shelves" },
    ],
  },
  {
    id: "home-pictures",
    name: "Home Pictures",
    images: [
      { id: 7, src: customImage, alt: "Custom decorative home pieces" },
      { id: 8, src: weldingImage, alt: "Artistic metalwork and wall art" },
      { id: 9, src: woodworkImage, alt: "Personalized home installations" },
    ],
  },
  {
    id: "integrated-works",
    name: "Integrated Steel & Wood Works",
    images: [
      { id: 10, src: workshopHero, alt: "Steel and wood combinations" },
      { id: 11, src: customImage, alt: "Mixed material furniture" },
      { id: 12, src: heroImage, alt: "Hybrid design pieces" },
    ],
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-container mt-16">
        <div className="text-center mb-16">
          <h1 className="mb-4">Our Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio organized by our four main service categories: Custom Steel Works, Furniture, Home Pictures, and Integrated Steel & Wood Works
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-base">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.images.map((image, index) => (
                  <Card
                    key={image.id}
                    className="overflow-hidden group cursor-pointer animate-fade-in hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
