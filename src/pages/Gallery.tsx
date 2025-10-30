import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

type ImageItem = { id: string; src: string };
type GalleryGroup = { category: string; count: number; cover: string | null; images: ImageItem[] };

export default function Gallery() {
  const [groups, setGroups] = useState<GalleryGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/nested-gallery.json");
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setGroups(data);
      } catch (e) {
        console.warn("Could not load /nested-gallery.json, frontend will be empty.", e);
        setGroups([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <>
      <Navigation />
      <section className="py-10 px-6 md:px-16 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Our Gallery</h1>

        {loading ? (
          <div className="text-center text-gray-500">Loading gallery…</div>
        ) : groups.length === 0 ? (
          <div className="text-center text-gray-600">No gallery data available. Run the generator to populate /public/nested-gallery.json</div>
        ) : (
          <div className="space-y-8">
            {groups.map((g, idx) => {
              const parts = g.category.split("/");
              const title = parts[parts.length - 1] || g.category || "Gallery";

              return (
                <article key={g.category + idx} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="md:flex">
                    {/* Left vertical bar */}
                    <div className="w-28 bg-amber-400 text-black flex-shrink-0 flex flex-col justify-center p-4">
                      <div className="text-xs uppercase font-semibold">{title}</div>
                      <div className="text-sm text-gray-800 mt-2">{g.count} items</div>
                      <div className="mt-auto text-6xl font-bold text-black opacity-10 select-none">{String(idx + 1).padStart(2, '0')}</div>
                    </div>

                    {/* Right content */}
                    <div className="flex-1 p-4">
                      <div className="md:flex md:items-start gap-4">
                        <div className="md:w-2/3 w-full">
                          {g.cover ? (
                            <img src={g.cover} alt={title} className="w-full h-64 md:h-56 object-cover rounded-md" />
                          ) : (
                            <div className="w-full h-64 md:h-56 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">No image</div>
                          )}
                        </div>

                        <div className="md:w-1/3 w-full mt-4 md:mt-0">
                          <h3 className="text-xl font-semibold">{g.category}</h3>
                          <p className="text-sm text-gray-600 mt-2">A selection of work from the {title} collection. Click any item to view larger.</p>

                          <div className="mt-4 grid grid-cols-3 gap-2">
                            {g.images.slice(0, 6).map((img) => (
                              <button key={img.id} className="h-20 w-full overflow-hidden rounded-md bg-gray-50">
                                <img src={img.src} alt={img.id} className="w-full h-full object-cover" />
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

