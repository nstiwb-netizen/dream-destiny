import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeader = ({
  label,
  title,
  subtitle,
  align = "center",
  className
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {label && (
        <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
