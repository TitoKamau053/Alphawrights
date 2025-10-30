import React, { useEffect, useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type ImageItem = { id: string; src: string };
type GalleryGroup = { category: string; count: number; cover: string | null; images: ImageItem[] };

export default function Gallery() {
  const [groups, setGroups] = useState<GalleryGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/nested-gallery.json", { cache: "force-cache" });
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setGroups(data);
      } catch (e) {
        console.warn("Could not load /nested-gallery.json", e);
        setGroups([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Optional image path optimization if you have compressed versions
  const optimizedGroups = useMemo(() => groups, [groups]);

  return (
    <>
      <Navigation />
      <section className="py-10 px-6 md:px-16 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Our Gallery</h1>

        {loading ? (
          <div className="text-center text-gray-500">Loading gallery…</div>
        ) : optimizedGroups.length === 0 ? (
          <div className="text-center text-gray-600">
            No gallery data available.
          </div>
        ) : (
          <div className="space-y-8">
            {optimizedGroups.map((g, idx) => {
              const parts = g.category.split("/");
              const title = parts[parts.length - 1] || g.category || "Gallery";

              return (
                <article
                  key={g.category + idx}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="md:flex">
                    {/* Left section */}
                    <div className="w-28 bg-amber-400 text-black flex-shrink-0 flex flex-col justify-center p-4">
                      <div className="text-xs uppercase font-semibold">{title}</div>
                      <div className="text-sm text-gray-800 mt-2">{g.count} items</div>
                      <div className="mt-auto text-6xl font-bold text-black opacity-10 select-none">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Right section */}
                    <div className="flex-1 p-4">
                      <div className="md:flex md:items-start gap-4">
                        {/* Cover image */}
                        <div className="md:w-2/3 w-full">
                          {g.cover ? (
                            <img
                              src={g.cover}
                              alt={title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-64 md:h-56 object-cover rounded-md transition-opacity duration-500 ease-in-out"
                              style={{
                                width: "100%",
                                height: "auto",
                                aspectRatio: "16 / 9",
                                backgroundColor: "#f0f0f0",
                              }}
                            />
                          ) : (
                            <div className="w-full h-64 md:h-56 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                              No image
                            </div>
                          )}
                        </div>

                        {/* Thumbnails */}
                        <div className="md:w-1/3 w-full mt-4 md:mt-0">
                          <h3 className="text-xl font-semibold">{g.category}</h3>
                          <p className="text-sm text-gray-600 mt-2">
                            A selection of work from the {title} collection.
                            Click any item to view larger.
                          </p>

                          <div className="mt-4 grid grid-cols-3 gap-2">
                            {g.images.slice(0, 6).map((img) => (
                              <button
                                key={img.id}
                                className="h-20 w-full overflow-hidden rounded-md bg-gray-50"
                                style={{
                                  aspectRatio: "1 / 1",
                                  backgroundColor: "#fafafa",
                                }}
                              >
                                <img
                                  src={img.src}
                                  alt={img.id}
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
