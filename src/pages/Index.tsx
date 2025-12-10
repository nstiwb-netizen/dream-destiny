import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { VideoHero, HeroContent } from "@/components/shared/VideoHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { DestinationCard } from "@/components/shared/DestinationCard";
import { destinations } from "@/data/destinations";
import {
  MapPin,
  Users,
  Calendar,
  Package,
  Hotel,
  Car,
  Compass,
  UtensilsCrossed,
  Headphones,
  BadgeDollarSign,
  Star,
  ArrowRight,
  Quote
} from "lucide-react";


const features = [
  {
    icon: Hotel,
    title: "Comfortable Stays",
    description: "Unwind in well-appointed rooms that combine modern comfort with elegant design, ensuring a restful and memorable experience."
  },
  {
    icon: Car,
    title: "Reliable Transport",
    description: "Travel in style with our comfortable and punctual transport services—designed for smooth, stress-free journeys every time."
  },
  {
    icon: Compass,
    title: "Expert Guides",
    description: "Discover more with our professional guides who share fascinating stories and local insights to enrich every destination."
  },
  {
    icon: UtensilsCrossed,
    title: "Delicious Cuisine",
    description: "Savor every bite with meals prepared fresh, blending regional flavors and traditions for a true taste of the place."
  },
  {
    icon: Headphones,
    title: "24/7 Travel Assistance",
    description: "We're here whenever you need us. Enjoy peace of mind with our always-available customer support team."
  },
  {
    icon: BadgeDollarSign,
    title: "Best Value Pricing",
    description: "We negotiate directly to secure the best prices—delivering top value without compromising quality."
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review: "Absolutely incredible experience! The Andaman trip was perfectly organized. Every detail was taken care of. Highly recommend Deem Holidays!"
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    review: "Best travel agency I've worked with. The Kerala backwaters tour exceeded all expectations. The houseboat stay was magical!"
  },
  {
    name: "Anita Patel",
    location: "Bangalore",
    rating: 5,
    review: "Professional service from start to finish. Our Rajasthan heritage tour was beautifully planned. Will definitely book again!"
  }
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <VideoHero videoUrl="/videos/home.mp4">
        <HeroContent
          badge="Discover India's Hidden Gems"
          title="Turn Your Travel Dreams Into Reality"
          subtitle="Discover breathtaking destinations, unforgettable memories, and journeys that last a lifetime."
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="gradient-primary border-0">
              <Link to="/destinations">View Destinations</Link>
            </Button>
            <Button asChild variant="hero" size="lg">
              <Link to="/book-now">Book Your Trip</Link>
            </Button>
          </div>
        </HeroContent>
      </VideoHero>

      

      {/* Popular Destinations */}
<section className="relative py-20 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop"
      alt="Travel background"
      className="w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
  </div>

  {/* Content */}
  <div className="relative container mx-auto px-4">
    <SectionHeader
      label="Popular Destinations"
      title="Explore Our Top Picks"
      subtitle="Hand-picked destinations that offer unforgettable experiences and create lasting memories."
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.slice(0, 6).map((destination, index) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          index={index}
        />
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mt-12"
    >
      <Button asChild variant="outline" size="lg">
        <Link to="/destinations">
          View All Destinations
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </motion.div>
  </div>
</section>

      {/* Why Choose Us */}
<section className="relative py-20 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop"
      alt="Why choose us background"
      className="w-full h-full object-cover"
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm" />
  </div>

  {/* Content */}
  <div className="relative container mx-auto px-4">
    <SectionHeader
      label="Why Choose Us"
      title="What Sets Us Apart"
      subtitle="Enjoy exceptional service, thoughtful details, and experiences crafted with care—your journey, our priority."
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-card/95 backdrop-blur rounded-2xl p-8 shadow-soft hover-lift"
        >
          <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
            <feature.icon className="w-7 h-7 text-primary-foreground" />
          </div>

          <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
            {feature.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


     {/* Testimonials */}
<section className="relative py-24 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2000&auto=format&fit=crop"
      alt="Happy travelers background"
      className="w-full h-full object-cover"
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
  </div>

  {/* Content */}
  <div className="relative container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-14">
      <p className="text-primary uppercase tracking-widest text-sm mb-3">
        TESTIMONIALS
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5">
        What Our Customers Say
      </h2>

      <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
        Real experiences from travelers who trusted us with their dream vacations.
      </p>
    </div>

    {/* Testimonials Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="bg-card/95 backdrop-blur rounded-3xl p-10 shadow-soft relative"
        >
          <Quote className="w-12 h-12 text-primary/30 absolute top-6 right-6" />

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-foreground text-lg leading-relaxed mb-8">
            “{testimonial.review}”
          </p>

          {/* Author */}
          <div>
            <p className="font-semibold text-lg text-foreground">
              {testimonial.name}
            </p>
            <p className="text-muted-foreground">
              {testimonial.location}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Google Review Button */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mt-14"
    >
      <Button
        asChild
        size="lg"
        className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition"
      >
        <a
          href="https://g.page/r/review"
          target="_blank"
          rel="noopener noreferrer"
        >
          Review Us on Google
        </a>
      </Button>
    </motion.div>
  </div>
</section>



     {/* CTA Section – Video + Image */}
<section className="relative py-28 overflow-hidden">
  {/* Background Image (Fallback) */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
      alt="Travel CTA background"
      className="w-full h-full object-cover"
    />
  </div>



  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
        Ready to Start Your Adventure?
      </h2>

      <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
        Join thousands of happy travelers who have discovered their dream
        destinations with us.
      </p>

      <Button
        asChild
        size="xl"
        className="bg-white text-foreground hover:bg-white/90"
      >
        <Link to="/book-now">Book Your Trip Now</Link>
      </Button>
    </motion.div>
  </div>
</section>
     
</main>
  );
};

export default Index;
