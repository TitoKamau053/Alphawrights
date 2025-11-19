/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

const CollectionPage = () => {

const [galleryData, setGalleryData] = useState<any[]>([]);

useEffect(() => {
  fetch("/nested-gallery.json")
    .then((res) => res.json())
    .then((data) => setGalleryData(data));
}, []);

const getImagesByCategory = (category: string) => {
const entry = galleryData.find((c) => c.category === category);
  return entry?.images.map((img, i) => ({
    title: `${category.split("/").pop()} ${i + 1}`,
    image: img.src,
  })) || [];
};

  const getCoverImage = (category: string) => {
  const entry = galleryData.find((c) => c.category === category);
  return entry?.cover || "";
  };

const collections = {

  
  metal: {
    title: "Custom Metal Works",
    items: {
      carports: {
        title: "Carports and Working Shades",
        hero: "/assets/services/carports.jpg",
        description: [
          "Protect your vehicles and workspaces with durable, weather-resistant carports designed for both function and style.",
          "Each unit is expertly engineered with reinforced steel frames to ensure long-lasting strength against sun, wind, and rain.",
          "From single-vehicle shelters to expansive shades, every carport is custom-built to complement your property’s layout and aesthetics."
        ],
        subtypes: Array.from({ length: 11 }, (_, i) => ({
          title: `Carport ${i + 1}`,
          image: `/assets/collections/carports/carports${i + 1}.jpg`,
        })),
      },

      doors: {
        title: "Custom Doors",
        hero: "/assets/services/doors.jpg",
        description: [
          "Redefine entryways with premium custom steel doors that combine security, durability, and refined craftsmanship.",
          "Our doors are available in contemporary, industrial, and classic styles—each tailored to suit your architectural design.",
          "Built with precision engineering, every door offers a seamless blend of strength, function, and elegance."
        ],
        subtypes: Array.from({ length: 13 }, (_, i) => ({
          title: `Door ${i + 1}`,
          image: `/assets/collections/doors/doors${i + 1}.jpg`,
        })),
      },

      enclosures: {
        title: "Custom Enclosures",
        hero: "/assets/services/enclosures.jpg",
        description: [
          "Transform open spaces into protected zones with expertly built enclosures that combine utility and design.",
          "Ideal for gardens, workshops, machinery, or industrial areas—each enclosure is customized for your exact use case.",
          "Constructed from heavy-duty steel and finished with precision detailing to ensure safety, ventilation, and durability."
        ],
        subtypes: Array.from({ length: 6 }, (_, i) => ({
          title: `Enclosure ${i + 1}`,
          image: `/assets/collections/enclosures/enclosures${i + 1}.jpg`,
        })),
      },

      fences: {
        title: "Custom Fences",
        hero: "/assets/services/fences.jpg",
        description: [
          "Define your boundaries with strength and style using our expertly crafted custom steel fences.",
          "Available in a range of patterns and finishes—from sleek modern panels to traditional ornamental designs.",
          "Each fence is built to withstand the elements while enhancing your property's security and visual appeal."
        ],
        subtypes: Array.from({ length: 10 }, (_, i) => ({
          title: `Fence ${i + 1}`,
          image: `/assets/collections/fences/fences${i + 1}.jpg`,
        })),
      },

      gates: {
        title: "Custom Gates",
        hero: "/assets/services/gates.jpg",
        description: [
          "Make a bold entrance with our premium custom gates that merge security and design excellence.",
          "Choose from swing, sliding, or automated gate systems—each fabricated to meet your structural and aesthetic preferences.",
          "Built with top-grade steel, our gates add an elegant yet commanding presence to residential and commercial properties alike."
        ],
        subtypes: Array.from({ length: 12 }, (_, i) => ({
          title: `Gate ${i + 1}`,
          image: `/assets/collections/gates/gates${i + 1}.jpg`,
        })),
      },

      shelves: {
        title: "Custom Shelves",
        hero: "/assets/services/shelves.jpg",
        description: [
          "Maximize your storage potential with durable, space-optimized shelving solutions built to last.",
          "Perfect for homes, workshops, offices, and warehouses—crafted from heavy-duty steel to hold even the heaviest loads.",
          "Each unit is customized to your layout, ensuring both functionality and a polished industrial look."
        ],
        subtypes: Array.from({ length: 6 }, (_, i) => ({
          title: `Shelf ${i + 1}`,
          image: `/assets/collections/shelves/shelves${i + 1}.jpg`,
        })),
      },

      carmods: {
        title: "Car Modifications & Accessories",
        hero: "/assets/services/carmods.jpeg",
        description: [
          "Enhance your ride with expertly fabricated car modifications designed for performance, style, and endurance.",
          "From custom bumpers and roll cages to unique exhaust designs, we turn your automotive ideas into steel reality.",
          "Precision-crafted parts tailored to fit your vehicle’s specifications for maximum functionality and visual impact."
        ],
        subtypes: Array.from({ length: 14 }, (_, i) => ({
          title: `Car Modification ${i + 1}`,
          image: `/assets/collections/carmods/carmods${i + 1}.jpeg`,
        })),
      },

      customfab: {
        title: "Custom Fabrications",
        hero: "/assets/services/customfabrication.jpeg",
        description: [
          "Bring your concepts to life with bespoke metal fabrication services tailored to your exact specifications.",
          "From architectural features to industrial components, our expert team handles every cut, weld, and finish with precision.",
          "Whether it’s a one-off prototype or a full-scale project, we guarantee craftsmanship that exceeds expectations."
        ],
        subtypes: Array.from({ length: 17 }, (_, i) => {
          const descriptions = {
            14: "Custom aircraft access platforms built for precision and reliability.",
            15: "Unique functional builds designed to solve challenges others can’t.",
            16: "One-of-a-kind solutions engineered to fit exact needs.",
            17: "Fabrication that transforms bold ideas into reality."
          };
          return {
            title: `Custom Fabrication ${i + 1}`,
            image: `/assets/collections/customfab/custom fabrication${i + 1}.jpeg`,
            description: descriptions[i + 1] || null
          };
        }),
      },

      machinery: {
        title: "Machinery Fabrication & Repairs",
        hero: "/assets/services/machinery.jpeg",
        description: [
          "We design, fabricate, and repair industrial machinery with a focus on performance, reliability, and precision.",
          "Our skilled engineers restore worn or damaged components and manufacture new parts to exact tolerances.",
          "From heavy-duty repairs to full custom builds, we keep your equipment running at peak efficiency."
        ],
        subtypes: Array.from({ length: 13 }, (_, i) => ({
          title: `Machinery Fabrication & Repair ${i + 1}`,
          image: `/assets/collections/machinery/machine fabrication and repairs${i + 1}.jpeg`,
        })),
      },

      signages: {
        title: "Custom Signage",
        hero: "/assets/services/signage.jpeg",
        description: [
          "Make your brand stand out with striking, durable custom metal signage built to capture attention.",
          "We design and fabricate signs for businesses, buildings, and events using precision laser cutting and professional finishes.",
          "From bold logos to elegant nameplates, every piece is tailored to your identity and environment."
        ],
        subtypes: Array.from({ length: 8 }, (_, i) => ({
          title: `Custom Signage ${i + 1}`,
          image: `/assets/collections/signages/custom signange${i + 1}.jpeg`,
        })),
      },

      staircase: {
        title: "Staircases & Handrails",
        hero: "/assets/services/staircase.jpeg",
        description: [
          "Elevate your space with beautifully engineered staircases and handrails that combine safety with sophistication.",
          "Each design is crafted from premium steel and finished to enhance both residential and commercial interiors.",
          "From sleek modern spirals to robust industrial steps, our custom builds define elegance in every ascent."
        ],
        subtypes: Array.from({ length: 11 }, (_, i) => ({
          title: `Staircase and Handrails ${i + 1}`,
          image: `/assets/collections/staircase/staircase and handrails${i + 1}.jpeg`,
        })),
      },
    },
  },

  furnishings: {
      title: "Custom Furnishings — Steel & Wood",
      items: {
        coffeeTables: {
          title: "Coffee Tables",
          hero: "/assets/services/furnishings/coffeetable.jpeg",
          description: [
            "Elegant centerpieces that blend artistry and functionality.",
            "Crafted to elevate your living space with strength and style."
          ],
          subtypes: Array.from({ length: 17 }, (_, i) => ({
            title: `Coffee Table ${i + 1}`,
            image: `/assets/collections/furnishings/coffeetable/coffeetable${i + 1}.jpeg`,
          })),
        },

        diningTables: {
          title: "Dining & Conference Tables",
          hero: getCoverImage("Furnitures/Dining Tables"),
          description: [
            "Sophisticated surfaces designed for memorable meals and productive meetings alike.",
            "Built to balance durability, elegance, and functionality."
          ],
          subtypes: getImagesByCategory("Furnitures/Dining Tables"),
        },

        officeTables: {
          title: "Office Desks",
          hero: getCoverImage("Furnitures/Office Desks"),
          description: [
            "Stylish, durable workstations that inspire focus and professionalism.",
            "Designed to fit seamlessly into modern workspaces."
          ],
          subtypes: getImagesByCategory("Furnitures/Office Desks"),
        },

        outdoorFurniture: {
          title: "Outdoor Furniture",
          hero: getCoverImage("Furnitures/Work Tables"),
          description: [
            "Refined, weather-resistant pieces for patios and gardens.",
            "Transform outdoor spaces into luxurious retreats."
          ],
          subtypes: getImagesByCategory("Furnitures/Outdoor Furniture"),
        },

      },
    },
};
const { group, collectionId } = useParams();
const normalizedId = Object.keys(collections[group]?.items || {}).find(
  key => key.toLowerCase() === (collectionId || "").toLowerCase()
);

const collection = collections[group]?.items[normalizedId];

const [activeSubtype, setActiveSubtype] = useState(null);

     

if (!collection) {
        return <div className="p-10 text-center text-gray-600">Collection not found.</div>;
}
return (
        <main className="bg-[#f5f5f5] min-h-screen">

         <Navigation /> 
          {/* Hero Section */}
          <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
            <img src={collection.hero} alt={collection.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.2em] text-center px-4">
                {collection.title}
              </h1>
            </div>
          </section>

          {/* Category Bar */}
          {collection.categories?.length > 0 && (
            <section className="bg-white border-y border-gray-300 py-4 px-4">
              <h2 className="text-lg font-semibold uppercase tracking-widest mb-2 text-gray-700 text-center">
                Explore Subcategories
              </h2>
              <div className="flex overflow-x-auto gap-3 scrollbar-hide justify-center">
                {collection.categories.map((cat: string, i: number) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-300 transition cursor-pointer"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Overview Section */}
          <section className="max-w-6xl mx-auto py-12 px-4 md:px-0 flex flex-col md:flex-row gap-8 items-center">
            {/* Image + Text Container */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <img
                src={collection.hero}
                alt={collection.title}
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />

              {/* Overlay text for mobile only */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/40 text-white md:hidden">
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">Overview</h3>
                <div className="text-sm space-y-2">
                  {collection.description.map((line: string, i: number) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Normal text block for desktop only */}
            <div className="hidden md:block md:w-1/2 w-full">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide text-gray-800">Overview</h3>
              <div className="text-gray-700 text-base space-y-4">
                {collection.description.map((line: string, i: number) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Subtype Grid */}
          {collection.subtypes?.length > 0 && (
            <>
              <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 px-4">
                {collection.subtypes.map((sub: any, i: number) => (
                  <article
                    key={i}
                    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                    onClick={() => setActiveSubtype(sub)}
                  >
                    <img
                      src={sub.image}
                      alt={`${sub.title} preview image`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg">
                      Click to View
                    </div>
                  </article>
                ))}
              </section>

              {/* Enlarged Modal View */}
              {activeSubtype && (
                <div
                  className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                  onClick={() => setActiveSubtype(null)} // close modal on background click
                >
                  <div
                    className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full"
                    onClick={(e) => e.stopPropagation()} // prevent close when clicking image
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveSubtype(null)}
                      className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center"
                    >
                      &times;
                    </button>

                    {/* Enlarged Image */}
                    <img
                      src={activeSubtype.image}
                      alt={activeSubtype.title}
                      className="w-full max-h-[80vh] object-contain bg-black"
                    />

                    {/* Caption */}
                    <div className="p-4 text-center">
                      <h4 className="text-xl font-bold uppercase tracking-wide mb-2 text-gray-800">
                        {activeSubtype.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {activeSubtype.description
                          ? activeSubtype.description
                          : collection.description[
                              collection.subtypes.indexOf(activeSubtype) % collection.description.length
                            ]}
                      </p>
                      <Link
                        to="/contact"
                        state={{
                          group,                
                          collectionId,     
                          title: activeSubtype.title,
                          image: activeSubtype.image,
                          description: activeSubtype.description
                            ? activeSubtype.description
                            : collection.description[
                                collection.subtypes.indexOf(activeSubtype) % collection.description.length
                              ],
                        }}
                      >
                        Request Quote
                      </Link>

                    </div>

                  </div>
                </div>
              )}
            </>
          )}
        </main>
);};

export default CollectionPage;
