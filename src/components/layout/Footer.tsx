import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const offices = [
  {
    type: "Head Offices",
    locations: [
      "Near Bramha Vighyan Inter College, Atarra, Banda, UP – 210201",
      "Ban Talab, Sitapur, Chitrakoot Dham, Karwi, UP – 210205"
    ]
  },
  {
    type: "Branch Offices",
    locations: [
      "Near Tamilnadu Cloth Store, Supply Line, Aberdeen Bazar, Port Blair, Andaman & Nicobar – 744101",
      "Ram Nagar, Sitapur, Saheed Dweep (Neil Island), Andaman & Nicobar – 744104",
      "C/O Basanto Hira, Bakultala (RV), Rangat Island, Andaman & Nicobar – 744205"
    ]
  }
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/book-now", label: "Book Now" }
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/people/%E0%A4%A1%E0%A5%80%E0%A4%AE-%E0%A4%B9%E0%A5%89%E0%A4%B2%E0%A5%80%E0%A4%A1%E0%A5%87%E0%A4%9C/100006113147673/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/deemholidays", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/deemholidays", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/@deemholidays", label: "YouTube" }, 
  { icon: Linkedin, href: "https://www.linkedin.com/company/deem-holidays", label: "LinkedIn" }
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-serif font-semibold">Deem Holidays</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Turn your travel dreams into reality with our curated experiences across India's most breathtaking destinations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-semibold mb-6">Our Offices</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {offices.map((office) => (
                <div key={office.type}>
                  <h5 className="text-sm font-semibold text-primary mb-3">{office.type}</h5>
                  <ul className="space-y-3">
                    {office.locations.map((location, idx) => (
                      <li key={idx} className="flex gap-2 text-background/70 text-sm">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="tel:+918765402662" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 8765402662</span>
            </a>
            <a href="tel:+919452886348" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 9452886348</span>
            </a>
            <a href="mailto:tours.deemholidays@gmail.com" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>tours.deemholidays@gmail.com</span>
            </a>
          </div>
          <p className="text-center text-background/50 text-sm">
            © 2025 Deem Holidays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
