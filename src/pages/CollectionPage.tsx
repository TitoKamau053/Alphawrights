import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";


      const collections = {
        carports: {
          title: "Carports and Working Shades",
          hero: "/assets/services/carports.jpg", // hero image = homepage image
          description: [
            "Durable and stylish carports designed to protect your vehicles from the elements.",
            "Built with high-quality steel for long-lasting performance and weather resistance.",
            "Custom sizes and designs available to fit any space and aesthetic preference.",
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
            "Elegant and secure custom doors for your home or business entrance.",
            "Available in various styles, materials, and finishes to match your design needs.",
            "Precision crafted for perfect fit, function, and added security.",
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
            "Versatile enclosures for various applications, from garden structures to industrial uses.",
            "Built to protect and enhance your space with sturdy steel construction.",
            "Custom designs available to meet your specific requirements and dimensions.",
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
            "Strong and attractive fences for security, privacy, and property definition.",
            "Available in multiple styles, heights, and materials to suit your needs.",
            "Tailored to complement your property's landscape and architectural style.",
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
            "Secure and stylish, our gates are built with precision and architectural harmony.",
            "Choose from modern, rustic, or industrial styles — all tailored to your space.",
            "Our gates not only provide security but also enhance the overall look of your property with high-quality craftsmanship.",
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
            "Heavy-duty shelves for storage and organization in homes, garages, or warehouses.",
            "Built with steel for durability and strength to handle heavy loads.",
            "Custom sizes and configurations available to maximize your space.",
          ],
          subtypes: Array.from({ length: 6 }, (_, i) => ({
            title: `Shelf ${i + 1}`,
            image: `/assets/collections/shelves/shelves${i + 1}.jpg`,
          })),
        },
      };

      const CollectionPage = () => {
      const { collectionId } = useParams();
      const key = (collectionId || "").toLowerCase();
      const collection = collections[key];

      const [activeSubtype, setActiveSubtype] = useState(null);


      if (!collection) {
        return <div className="p-10 text-center text-gray-600">Collection not found.</div>;
      }

      return (
        <main className="bg-[#f5f5f5] min-h-screen">
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
                        {
                          collection.description[
                            collection.subtypes.indexOf(activeSubtype) %
                              collection.description.length
                          ]
                        }
                      </p>
                        <Link
                          to="/contact"
                          state={{
                            collection: key,
                            title: activeSubtype.title,
                            image: activeSubtype.image,
                            description:
                              collection.description[
                                collection.subtypes.indexOf(activeSubtype) % collection.description.length
                              ],
                          }}
                          className="bg-gray-900 text-white font-bold px-5 py-2 rounded shadow hover:bg-gray-700 transition"
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
      );
    };

    export default CollectionPage;
