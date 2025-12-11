import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  Check,
  X,
  ChevronDown,
  Compass,
  Sparkles,
  Calendar,
  Plane,
  Train,
  Car,
  Ship,
  UtensilsCrossed,
  Hotel,
  Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoHero } from "@/components/shared/VideoHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getDestinationBySlug } from "@/data/destinations";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  {
    label: "Explore",
    icon: Compass,
    items: ["Overview", "Attractions", "Culture", "Nature"]
  },
  {
    label: "Experience",
    icon: Sparkles,
    items: ["Food & Cuisine", "Activities", "Adventure", "Wellness"]
  },
  {
    label: "Plan",
    icon: Calendar,
    items: ["Accommodation", "Itineraries", "How to Reach", "Events", "Filming Locations"]
  }
];

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState(0);

  const destination = getDestinationBySlug(slug || "");

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold mb-4">Destination not found</h1>
          <Button asChild>
            <Link to="/destinations">Back to Destinations</Link>
          </Button>
        </div>
      </div>
    );
  }

  const selectSection = (section: string) => {
    // If clicking the same section, hide it; otherwise show the new section
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <VideoHero videoUrl={destination.videoUrl} height="large">
        <div className="container mx-auto px-4 h-full flex flex-col justify-between pb-12 pt-20">
          {/* Back button - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="self-start"
          >
            <Button variant="hero" size="sm" onClick={() => navigate("/destinations")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Destinations
            </Button>
          </motion.div>

          {/* Destination Info - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="self-end text-right"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-4 border border-primary-foreground/20">
              {destination.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
              {destination.name}
            </h1>
            <div className="flex flex-wrap items-center justify-end gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="font-medium">{destination.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{destination.name}, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </VideoHero>

      {/* Navigation */}
      <nav className="sticky top-16 z-40 bg-card/95 backdrop-blur-xl border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            {navigationItems.map((nav) => (
              <DropdownMenu key={nav.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <nav.icon className="w-4 h-4" />
                    {nav.label}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-card">
                  {nav.items.map((item) => (
                    <DropdownMenuItem
                      key={item}
                      onClick={() => selectSection(item)}
                      className={cn("cursor-pointer gap-2", activeSection === item && "bg-primary/10 text-primary")}
                    >
                      {activeSection === item && <Check className="w-4 h-4" />}
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <Button asChild variant="ghost" className="ml-auto">
              <Link to="/destinations">All Destinations</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Overview - Always Visible */}
          <section id="overview" className="mb-16 scroll-mt-32">
            <SectionHeader title={`About ${destination.name}`} align="left" />
            <div className="max-w-4xl space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">{destination.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h4 className="font-semibold text-foreground mb-2">Best Time to Visit</h4>
                  <p className="text-muted-foreground">{destination.bestTimeToVisit}</p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h4 className="font-semibold text-foreground mb-2">Climate</h4>
                  <p className="text-muted-foreground">{destination.climate}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Attractions */}
          <AnimatePresence>
            {activeSection === "Attractions" && (
              <motion.section
                id="attractions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Top Attractions" align="left" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.attractions.map((attraction, index) => (
                    <motion.div key={attraction.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift">
                      <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{attraction.name}</h4>
                        <p className="text-muted-foreground text-sm">{attraction.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Culture */}
          <AnimatePresence>
            {activeSection === "Culture" && (
              <motion.section
                id="culture"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Culture & Heritage" align="left" />
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">{destination.culture}</p>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Nature */}
          <AnimatePresence>
            {activeSection === "Nature" && (
              <motion.section
                id="nature"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Nature & Wildlife" align="left" />
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">{destination.nature}</p>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Food & Cuisine */}
          <AnimatePresence>
            {activeSection === "Food & Cuisine" && (
              <motion.section
                id="food-&-cuisine"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Famous Food & Cuisine" align="left" subtitle="Must-try local delicacies and dishes" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.food.map((item, index) => (
                    <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift">
                      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <UtensilsCrossed className="w-5 h-5 text-primary" />
                          <h4 className="font-serif text-lg font-semibold text-foreground">{item.name}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Activities */}
          <AnimatePresence>
            {activeSection === "Activities" && (
              <motion.section
                id="activities"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Things to Do" align="left" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.activities.map((activity, index) => (
                    <motion.div key={activity.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift">
                      <img src={activity.image} alt={activity.name} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{activity.name}</h4>
                        <p className="text-muted-foreground text-sm">{activity.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Adventure */}
          <AnimatePresence>
            {activeSection === "Adventure" && (
              <motion.section
                id="adventure"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Adventure Sports" align="left" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.adventure.map((item, index) => (
                    <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift">
                      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{item.name}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Wellness */}
          <AnimatePresence>
            {activeSection === "Wellness" && (
              <motion.section
                id="wellness"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Wellness & Relaxation" align="left" />
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">{destination.wellness}</p>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Accommodation */}
          <AnimatePresence>
            {activeSection === "Accommodation" && (
              <motion.section
                id="accommodation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Where to Stay" align="left" />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {destination.accommodation.map((hotel, index) => (
                    <motion.div key={hotel.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{hotel.type}</span>
                        <h4 className="font-serif text-lg font-semibold text-foreground mt-2 mb-1">{hotel.name}</h4>
                        <p className="text-muted-foreground text-sm">{hotel.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Itineraries */}
          <AnimatePresence>
            {activeSection === "Itineraries" && (
              <motion.section
                id="itineraries"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Sample Itineraries" align="left" subtitle="Choose the perfect package for your trip" />

                {/* Package Selector */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {destination.itineraryPackages.map((pkg, index) => (
                    <button key={pkg.name} onClick={() => setSelectedPackage(index)} className={cn("px-6 py-3 rounded-xl font-medium transition-all", selectedPackage === index ? "gradient-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:border-primary")}>
                      {pkg.days} Days / {pkg.nights} Nights
                      <span className="block text-sm opacity-80">₹{pkg.price.toLocaleString()}</span>
                    </button>
                  ))}
                </div>

                {/* Selected Package Itinerary */}
                {destination.itineraryPackages[selectedPackage] && (
                  <motion.div key={selectedPackage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-6">{destination.itineraryPackages[selectedPackage].name}</h3>
                    {destination.itineraryPackages[selectedPackage].itinerary.map((day, index) => (
                      <motion.div key={day.day} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl p-6 shadow-soft">
                        <div className="flex gap-6">
                          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-xl font-bold text-primary-foreground">{day.day}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-serif text-xl font-semibold text-foreground mb-2">{day.title}</h4>
                            <p className="text-muted-foreground mb-4">{day.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {day.activities.map((activity) => (
                                <span key={activity} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{activity}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.section>
            )}
          </AnimatePresence>

          {/* How to Reach */}
          <AnimatePresence>
            {activeSection === "How to Reach" && (
              <motion.section
                id="how-to-reach"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="How to Reach" align="left" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Plane className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-serif text-xl font-semibold text-foreground">By Air</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">{destination.howToReach.byAir.description}</p>
                    {destination.howToReach.byAir.airports.length > 0 && (
                      <ul className="space-y-1">{destination.howToReach.byAir.airports.map((a) => <li key={a} className="text-sm text-foreground">• {a}</li>)}</ul>
                    )}
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Train className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-serif text-xl font-semibold text-foreground">By Train</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">{destination.howToReach.byTrain.description}</p>
                    {destination.howToReach.byTrain.stations.length > 0 && (
                      <ul className="space-y-1">{destination.howToReach.byTrain.stations.map((s) => <li key={s} className="text-sm text-foreground">• {s}</li>)}</ul>
                    )}
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-soft">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Car className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-serif text-xl font-semibold text-foreground">By Road</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">{destination.howToReach.byRoad.description}</p>
                    {destination.howToReach.byRoad.routes.length > 0 && (
                      <ul className="space-y-1">{destination.howToReach.byRoad.routes.map((r) => <li key={r} className="text-sm text-foreground">• {r}</li>)}</ul>
                    )}
                  </div>

                  {destination.howToReach.bySea && (
                    <div className="bg-card rounded-xl p-6 shadow-soft">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Ship className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-serif text-xl font-semibold text-foreground">By Sea</h4>
                      </div>
                      <p className="text-muted-foreground mb-3">{destination.howToReach.bySea.description}</p>
                      {destination.howToReach.bySea.ports.length > 0 && (
                        <ul className="space-y-1">{destination.howToReach.bySea.ports.map((p) => <li key={p} className="text-sm text-foreground">• {p}</li>)}</ul>
                      )}
                    </div>
                  )}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Events */}
          <AnimatePresence>
            {activeSection === "Events" && (
              <motion.section
                id="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Events & Festivals" align="left" />
                <div className="grid md:grid-cols-3 gap-6">
                  {destination.events.map((event, index) => (
                    <motion.div key={event.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift">
                      <img src={event.image} alt={event.name} className="w-full h-40 object-cover" />
                      <div className="p-6">
                        <span className="text-xs font-medium text-primary">{event.month}</span>
                        <h4 className="font-serif text-lg font-semibold text-foreground mt-1 mb-2">{event.name}</h4>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Filming Locations */}
          <AnimatePresence>
            {activeSection === "Filming Locations" && (
              <motion.section
                id="filming-locations"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16 scroll-mt-32"
              >
                <SectionHeader title="Famous Filming Locations" align="left" />
                <div className="grid md:grid-cols-3 gap-6">
                  {destination.filmingLocations.map((location, index) => (
                    <motion.div key={location.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift">
                      <img src={location.image} alt={location.name} className="w-full h-40 object-cover" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Camera className="w-5 h-5 text-primary" />
                          <h4 className="font-serif text-lg font-semibold text-foreground">{location.name}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">{location.movie}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Trip Highlights */}
          <section className="mb-16">
            <SectionHeader title="Trip Highlights" align="left" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {destination.highlights.map((highlight, index) => (
                <motion.div key={highlight} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-primary/10 rounded-xl p-4 text-center">
                  <Check className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-medium text-foreground text-sm">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Includes & Excludes */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-success/10 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                <Check className="w-6 h-6 text-success" /> Tour Includes
              </h3>
              <ul className="space-y-3">
                {destination.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-destructive/10 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                <X className="w-6 h-6 text-destructive" /> Tour Excludes
              </h3>
              <ul className="space-y-3">
                {destination.excludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <Button asChild size="xl" className="gradient-primary border-0">
              <Link to={`/book-now?destination=${destination.slug}`}>Book This Trip</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default DestinationDetail;
