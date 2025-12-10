import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface VideoHeroProps {
  videoUrl: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  height?: "full" | "large" | "medium";
}

export const VideoHero = ({
  videoUrl,
  children,
  className,
  overlayClassName,
  height = "full"
}: VideoHeroProps) => {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[85vh]",
    medium: "min-h-[60vh]"
  };

  return (
    <section className={cn("relative overflow-hidden", heightClasses[height], className)}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className={cn("video-overlay", overlayClassName)} />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pt-24">
        {children}
      </div>
    </section>
  );
};

interface HeroContentProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "center" | "left";
}

export const HeroContent = ({
  badge,
  title,
  subtitle,
  children,
  align = "center"
}: HeroContentProps) => {
  return (
    <div className={cn(
      "container mx-auto px-4 h-full flex flex-col justify-center pt-20",
      align === "center" ? "items-center text-center" : "items-start text-left"
    )}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        {badge && (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-primary-foreground/20"
          >
            {badge}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
