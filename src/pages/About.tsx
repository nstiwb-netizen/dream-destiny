import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { VideoHero, HeroContent } from "@/components/shared/VideoHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Target,
  Heart,
  Leaf,
  Users,
  Hotel,
  Car,
  MapPin,
  Plane
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Creating transformative travel experiences that connect people with India's rich culture, stunning landscapes, and warm hospitality."
  },
  {
    icon: Heart,
    title: "Our Passion",
    description: "Travel is not just business for us—it's our life. Every journey we craft comes from the heart, designed to create lasting memories."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We believe in responsible tourism that protects destinations and benefits local communities for generations to come."
  },
  {
    icon: Users,
    title: "Community First",
    description: "We work with local guides and artisans to provide authentic experiences while supporting fair practices and local economies."
  }
];

const services = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    title: "Hotel Booking",
    description: "Experience unparalleled comfort with our seamless hotel booking service. Choose from a curated selection of premium accommodations tailored to your needs."
  },
  {
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
    title: "Airport Pickup & Drop",
    description: "Start and end your journey stress-free with our reliable airport pickup and drop services. Safety and punctuality are our top priorities."
  },
  {
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600",
    title: "Sightseeing Tours",
    description: "Discover hidden gems and iconic landmarks with expert guided sightseeing tours. Immerse yourself in local culture while we handle the details."
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600",
    title: "Flight Tickets",
    description: "Fly with ease by booking your tickets through us. Find the best deals and enjoy flexible options for a smooth journey from start to finish."
  }
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Destinations" },
  { value: "25+", label: "Expert Guides" }
];

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <VideoHero
        videoUrl="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
        height="medium"
      >
        <HeroContent
          badge="Our Story"
          title="About Deem Holidays"
          subtitle="Born from a passion for exploration and a deep love for India's diverse landscapes, we've been crafting unforgettable journeys since 2008."
        />
      </VideoHero>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400"
                    alt="Cultural heritage"
                    className="rounded-2xl shadow-soft w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400"
                    alt="Beach destination"
                    className="rounded-2xl shadow-soft w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400"
                    alt="Backwaters"
                    className="rounded-2xl shadow-soft w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400"
                    alt="Mountains"
                    className="rounded-2xl shadow-soft w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card rounded-xl shadow-elevated px-8 py-4 text-center"
              >
                <p className="text-3xl font-serif font-bold text-primary">15+</p>
                <p className="text-muted-foreground text-sm">Years of Excellence</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Who We Are 
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
                Crafting Dreams Into Journeys
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Founded with a vision to transform how people experience travel, Deem Holidays 
                  has grown from a small startup to one of India's most trusted travel partners.
                </p>
                <p>
                  Our team of passionate travel experts brings decades of combined experience, 
                  ensuring every itinerary goes beyond typical tourist routes to reveal the 
                  true essence of each destination.
                </p>
                <p>
                  We believe that travel should be transformative—opening minds, creating 
                  connections, and leaving you with stories that last a lifetime.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl md:text-3xl font-serif font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Principles"
            title="Our Values & Vision"
            subtitle="These core principles guide everything we do and shape every journey we create."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="What We Offer"
            title="Our Services"
            subtitle="Comprehensive travel solutions designed to make your journey seamless and memorable."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover-lift"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Let us help you plan the perfect trip. Our team is ready to create 
              an unforgettable experience just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90">
                <Link to="/book-now">Book Your Trip</Link>
              </Button>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
