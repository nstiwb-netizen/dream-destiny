import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

export const DestinationCard = ({ destination, index = 0 }: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
          {destination.category}
        </span>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">{destination.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {destination.name}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {destination.shortDescription}
        </p>

        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <Clock className="w-4 h-4" />
          <span>{destination.duration}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">Starting from</span>
            <p className="text-xl font-semibold text-primary">₹{destination.price.toLocaleString()}</p>
          </div>

          <Button asChild variant="outline" size="sm" className="group/btn">
            <Link to={`/destinations/${destination.slug}`}>
              Explore
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
