import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, Plane, Users, Calendar, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { destinations } from "@/data/destinations";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email is required").max(255),
  phone: z.string().min(10, "Valid phone number is required").max(15),
  persons: z.coerce.number().min(1, "At least 1 person required"),
  kids: z.coerce.number().min(0).optional(),
  kidsAge: z.string().optional(),
  nights: z.coerce.number().min(1, "At least 1 night required"),
  hotelCategory: z.string().min(1, "Please select a hotel category"),
  destination: z.string().optional(),
  placesToCover: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const hotelCategories = [
  { value: "budget", label: "Budget" },
  { value: "3star", label: "3 Star" },
  { value: "4star", label: "4 Star" },
  { value: "5star", label: "5 Star" },
  { value: "luxury", label: "Luxury" },
];

const BookNow = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const destinationSlug = searchParams.get("destination");

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      persons: 2,
      kids: 0,
      kidsAge: "",
      nights: 3,
      hotelCategory: "",
      destination: destinationSlug || "",
      placesToCover: "",
      additionalInfo: "",
    },
  });

  const kidsCount = form.watch("kids");

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Query Submitted!",
      description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="videos/destination.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-foreground/60 backdrop-blur-sm -z-10" />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center"
            >
              <Plane className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Book Your Dream Trip
            </h1>
            <p className="text-primary-foreground/80">
              Fill in your travel details and our team will craft the perfect itinerary for you.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-strong rounded-2xl p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone No *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Trip Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="persons"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          No. of Persons *
                        </FormLabel>
                        <FormControl>
                          <Input type="number" min={1} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="kids"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No. of Kids</FormLabel>
                        <FormControl>
                          <Input type="number" min={0} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="nights"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          No. of Nights *
                        </FormLabel>
                        <FormControl>
                          <Input type="number" min={1} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Kids Age - Conditional */}
                {kidsCount && kidsCount > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <FormField
                      control={form.control}
                      name="kidsAge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age of Kids</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 5, 8" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="hotelCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Hotel className="w-4 h-4" />
                          Hotel Category *
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {hotelCategories.map((cat) => (
                              <SelectItem key={cat.value} value={cat.value}>
                                {cat.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Destination</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select destination" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {destinations.map((dest) => (
                              <SelectItem key={dest.slug} value={dest.slug}>
                                {dest.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="placesToCover"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Places to Cover</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter places you want to visit"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Info</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any specific requests or information"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary border-0"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Query
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default BookNow;
