import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-strong shadow-soft py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className={cn(
              "text-xl font-serif font-semibold transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>
              Deem Holidays
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground",
                  location.pathname === link.href && (isScrolled ? "text-primary" : "text-primary-foreground")
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full",
                  isScrolled ? "bg-primary" : "bg-primary-foreground"
                )} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" className="gradient-primary border-0 hover:opacity-90">
              <Link to="/book-now">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "text-sm font-medium py-2 transition-colors",
                      isScrolled ? "text-foreground" : "text-primary-foreground",
                      location.pathname === link.href && "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="gradient-primary border-0 w-full mt-2">
                  <Link to="/book-now">Book Now</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
