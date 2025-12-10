import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { VideoHero, HeroContent } from "@/components/shared/VideoHero";
import { DestinationCard } from "@/components/shared/DestinationCard";
import { destinations } from "@/data/destinations";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = useMemo(() => {
    if (!searchQuery.trim()) return destinations;

    const query = searchQuery.toLowerCase();
    return destinations.filter(
      (d) =>
        d.name.toLowerCase().includes(query) ||
        d.category.toLowerCase().includes(query) ||
        d.shortDescription.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <main>
      {/* ✅ HERO WITH SEARCH */}
      <VideoHero
        videoUrl="/videos/destination.mp4"
        height="medium"
      >
        <HeroContent
          title="Our Destinations"
          subtitle="From tranquil backwaters to thrilling mountain adventures, find your perfect getaway."
        >
          {/* ✅ Search Bar INSIDE Hero */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  h-14
                  pl-14
                  pr-6
                  rounded-full
                  bg-white
                  text-base
                  border border-border
                  shadow-sm
                  focus-visible:ring-2
                  focus-visible:ring-primary/30
                "
              />
            </div>
          </div>
        </HeroContent>
      </VideoHero>

      {/* ✅ GRID SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground mb-8"
          >
            Showing {filteredDestinations.length} destination
            {filteredDestinations.length !== 1 ? "s" : ""}
          </motion.p>

          {/* Destinations Grid */}
          {filteredDestinations.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg mb-4">
                No destinations found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-primary hover:underline"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Destinations;
