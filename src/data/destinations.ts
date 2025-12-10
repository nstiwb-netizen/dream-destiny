export interface FoodItem {
  name: string;
  description: string;
  image: string;
}

export interface Attraction {
  name: string;
  description: string;
  image: string;
}

export interface Activity {
  name: string;
  description: string;
  image: string;
}

export interface Adventure {
  name: string;
  description: string;
  image: string;
}

export interface Accommodation {
  name: string;
  type: string;
  description: string;
  image: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface ItineraryPackage {
  name: string;
  days: number;
  nights: number;
  price: number;
  itinerary: ItineraryDay[];
}

export interface HowToReach {
  byAir: { description: string; airports: string[] };
  byTrain: { description: string; stations: string[] };
  byRoad: { description: string; routes: string[] };
  bySea?: { description: string; ports: string[] };
}

export interface Event {
  name: string;
  month: string;
  description: string;
  image: string;
}

export interface FilmingLocation {
  name: string;
  movie: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  videoUrl: string;
  imageUrl: string;
  category: string;
  rating: number;
  duration: string;
  price: number;
  shortDescription: string;
  overview: string;
  bestTimeToVisit: string;
  climate: string;
  attractions: Attraction[];
  culture: string;
  nature: string;
  food: FoodItem[];
  activities: Activity[];
  adventure: Adventure[];
  wellness: string;
  accommodation: Accommodation[];
  itineraryPackages: ItineraryPackage[];
  howToReach: HowToReach;
  events: Event[];
  filmingLocations: FilmingLocation[];
  highlights: string[];
  includes: string[];
  excludes: string[];
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Andaman Islands",
    slug: "andaman-islands",
    videoUrl: "/videos/Andaman.mp4",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    category: "Tropical Paradise",
    rating: 4.9,
    duration: "6 Days / 5 Nights",
    price: 25999,
    shortDescription: "Crystal clear waters, pristine beaches, and vibrant coral reefs await you.",
    overview: "The Andaman Islands are a breathtaking archipelago in the Bay of Bengal, known for their pristine beaches, crystal-clear turquoise waters, and rich marine biodiversity. From the historic Cellular Jail to the stunning Radhanagar Beach, every corner offers a unique experience.",
    bestTimeToVisit: "October to May is the best time to visit Andaman Islands. The weather is pleasant with clear skies, perfect for water activities and beach exploration.",
    climate: "Tropical climate with temperatures ranging from 23°C to 31°C. Monsoon season (May-September) brings heavy rainfall.",
    attractions: [
      {
        name: "Cellular Jail",
        description: "A national memorial dedicated to freedom fighters. The light and sound show narrates India's freedom struggle.",
        image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=600"
      },
      {
        name: "Radhanagar Beach",
        description: "Ranked as Asia's best beach, known for white sand and stunning sunsets.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
      },
      {
        name: "Ross Island",
        description: "Once the administrative headquarters of the British, now a serene getaway with colonial ruins.",
        image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600"
      },
      {
        name: "Havelock Island",
        description: "Paradise for divers and beach lovers with crystal clear waters.",
        image: "https://images.unsplash.com/photo-1468413253725-0d5181091f54?w=600"
      },
      {
        name: "Neil Island",
        description: "Known as 'vegetable bowl' of Andaman, offering serene beaches and natural bridge.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600"
      }
    ],
    culture: "Experience the unique blend of indigenous tribal cultures and colonial heritage. Visit local markets, interact with settlers from the mainland, and learn about the islands' fascinating history.",
    nature: "Home to tropical rainforests, mangrove creeks, and an incredible array of marine life. Spot exotic birds, sea turtles, and colorful coral formations in their natural habitat.",
    food: [
      {
        name: "Grilled Lobster",
        description: "Fresh lobster grilled to perfection with local spices and butter, a must-try delicacy.",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600"
      },
      {
        name: "Fish Curry",
        description: "Traditional Andamanese fish curry with coconut milk and aromatic spices.",
        image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=600"
      },
      {
        name: "Prawn Fry",
        description: "Crispy fried prawns marinated in local spices, perfect beach snack.",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600"
      },
      {
        name: "Coconut Curry Crab",
        description: "Mud crabs cooked in rich coconut gravy with local herbs.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600"
      },
      {
        name: "Amritsari Fish Tikka",
        description: "Crispy fish tikka with Punjabi flavors, popular among tourists.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600"
      },
      {
        name: "Fresh Coconut Water",
        description: "Refreshing tender coconut water straight from the tree.",
        image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=600"
      }
    ],
    activities: [
      {
        name: "Snorkeling at Elephant Beach",
        description: "Explore colorful coral reefs and marine life in crystal clear waters.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600"
      },
      {
        name: "Glass-bottom Boat Rides",
        description: "See underwater marine life without getting wet through transparent boat floor.",
        image: "https://images.unsplash.com/photo-1544551763-77932f23a6a5?w=600"
      },
      {
        name: "Kayaking through Mangroves",
        description: "Paddle through scenic mangrove forests and spot exotic birds.",
        image: "https://images.unsplash.com/photo-1544551763-92ab472cad5a?w=600"
      },
      {
        name: "Sunset Beach Walks",
        description: "Romantic walks along pristine beaches during golden hour.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
      },
      {
        name: "Island Hopping Tours",
        description: "Visit multiple islands in a day to experience diverse attractions.",
        image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600"
      }
    ],
    adventure: [
      {
        name: "Scuba Diving",
        description: "Dive deep to explore vibrant coral reefs and exotic marine life.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600"
      },
      {
        name: "Sea Walking",
        description: "Walk on the ocean floor with a special helmet and breathe underwater.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600"
      },
      {
        name: "Jet Skiing",
        description: "High-speed water sports adventure on crystal clear waters.",
        image: "https://images.unsplash.com/photo-1544551763-77932f23a6a5?w=600"
      },
      {
        name: "Parasailing",
        description: "Soar above the ocean and enjoy breathtaking aerial views.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600"
      },
      {
        name: "Night Kayaking",
        description: "Experience magical bioluminescence in the dark waters.",
        image: "https://images.unsplash.com/photo-1544551763-92ab472cad5a?w=600"
      }
    ],
    wellness: "Rejuvenate at beachside yoga sessions, spa retreats, and Ayurvedic treatments. The serene island atmosphere provides the perfect setting for relaxation and meditation.",
    accommodation: [
      {
        name: "Symphony Samudra",
        type: "Luxury Resort",
        description: "5-star beachfront resort with private beach access and world-class amenities.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"
      },
      {
        name: "Barefoot at Havelock",
        type: "Eco Resort",
        description: "Eco-friendly cottages nestled in tropical gardens near the beach.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600"
      },
      {
        name: "SeaShell Resort",
        type: "Premium Hotel",
        description: "Comfortable rooms with modern amenities and sea views.",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600"
      },
      {
        name: "TSG Emerald View",
        type: "Budget Friendly",
        description: "Clean and affordable accommodation close to major attractions.",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600"
      }
    ],
    itineraryPackages: [
      {
        name: "Quick Escape",
        days: 3,
        nights: 2,
        price: 15999,
        itinerary: [
          {
            day: 1,
            title: "Arrival & Port Blair",
            description: "Arrive at Port Blair airport, transfer to hotel. Evening visit to Cellular Jail and attend the light and sound show.",
            activities: ["Airport pickup", "Hotel check-in", "Cellular Jail visit", "Light & Sound Show"]
          },
          {
            day: 2,
            title: "Ross & North Bay Islands",
            description: "Morning ferry to Ross Island for colonial ruins exploration. Afternoon snorkeling and water sports at North Bay Island.",
            activities: ["Ross Island tour", "North Bay snorkeling", "Glass-bottom boat ride", "Coral viewing"]
          },
          {
            day: 3,
            title: "Departure",
            description: "Morning at leisure, local shopping at Aberdeen Bazaar. Transfer to airport for departure.",
            activities: ["Local shopping", "Airport transfer", "Departure"]
          }
        ]
      },
      {
        name: "Island Explorer",
        days: 5,
        nights: 4,
        price: 22999,
        itinerary: [
          {
            day: 1,
            title: "Arrival & Port Blair",
            description: "Arrive at Port Blair, check into hotel. Evening Cellular Jail visit with light and sound show.",
            activities: ["Airport pickup", "Hotel check-in", "Cellular Jail visit", "Light & Sound Show"]
          },
          {
            day: 2,
            title: "Ross & North Bay Islands",
            description: "Full day island hopping. Explore Ross Island ruins and enjoy water sports at North Bay.",
            activities: ["Ross Island tour", "North Bay snorkeling", "Sea walking", "Underwater photos"]
          },
          {
            day: 3,
            title: "Havelock Island",
            description: "Morning ferry to Havelock Island. Check into resort. Evening visit to famous Radhanagar Beach for sunset.",
            activities: ["Ferry to Havelock", "Resort check-in", "Radhanagar Beach sunset", "Beach dinner"]
          },
          {
            day: 4,
            title: "Elephant Beach Adventure",
            description: "Full day at Elephant Beach. Snorkeling, kayaking, and beach activities.",
            activities: ["Elephant Beach visit", "Snorkeling", "Kayaking", "Beach games", "Water sports"]
          },
          {
            day: 5,
            title: "Return & Departure",
            description: "Morning ferry back to Port Blair. Local shopping and airport transfer.",
            activities: ["Ferry to Port Blair", "Local shopping", "Airport transfer"]
          }
        ]
      },
      {
        name: "Complete Andaman",
        days: 7,
        nights: 6,
        price: 32999,
        itinerary: [
          {
            day: 1,
            title: "Arrival & Port Blair",
            description: "Welcome at Port Blair airport. Hotel check-in and relaxation. Evening Cellular Jail visit.",
            activities: ["VIP airport pickup", "Luxury hotel check-in", "Welcome drink", "Cellular Jail", "Light & Sound Show"]
          },
          {
            day: 2,
            title: "Ross, North Bay & Corbyn's Cove",
            description: "Full day exploring islands. Water sports and beach activities.",
            activities: ["Ross Island heritage walk", "North Bay snorkeling", "Corbyn's Cove Beach", "Jet skiing"]
          },
          {
            day: 3,
            title: "Havelock Island",
            description: "Luxury ferry to Havelock. Premium resort check-in. Radhanagar Beach sunset.",
            activities: ["Premium ferry ride", "Resort check-in", "Beach cycling", "Radhanagar sunset", "Candlelight dinner"]
          },
          {
            day: 4,
            title: "Scuba Diving & Beach",
            description: "Morning scuba diving experience. Afternoon relaxation at Kala Patthar Beach.",
            activities: ["Scuba diving (certified)", "Underwater photography", "Kala Patthar Beach", "Spa session"]
          },
          {
            day: 5,
            title: "Neil Island",
            description: "Ferry to Neil Island. Visit Natural Bridge, Bharatpur and Laxmanpur beaches.",
            activities: ["Ferry to Neil Island", "Natural Bridge visit", "Bharatpur Beach", "Laxmanpur sunset"]
          },
          {
            day: 6,
            title: "Neil Island & Return",
            description: "Morning beach activities. Afternoon ferry to Port Blair. Evening at leisure.",
            activities: ["Beach breakfast", "Glass-bottom boat", "Ferry to Port Blair", "Local market visit"]
          },
          {
            day: 7,
            title: "Departure",
            description: "Leisurely breakfast, last-minute shopping. Airport transfer for departure.",
            activities: ["Breakfast", "Souvenir shopping", "Airport transfer", "Departure"]
          }
        ]
      }
    ],
    howToReach: {
      byAir: {
        description: "The nearest airport is Veer Savarkar International Airport in Port Blair. Regular flights from major Indian cities.",
        airports: ["Veer Savarkar International Airport, Port Blair (IXZ)"]
      },
      byTrain: {
        description: "There is no railway connectivity to Andaman Islands as it's an archipelago in the Bay of Bengal.",
        stations: []
      },
      byRoad: {
        description: "Road connectivity is not possible. Islands are connected by ferries and private boats.",
        routes: []
      },
      bySea: {
        description: "Ships run from Chennai, Kolkata, and Visakhapatnam to Port Blair. Journey takes 50-60 hours.",
        ports: ["Chennai Port", "Kolkata Port", "Visakhapatnam Port"]
      }
    },
    events: [
      {
        name: "Island Tourism Festival",
        month: "January",
        description: "Cultural extravaganza showcasing local art, dance, and music.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600"
      },
      {
        name: "Beach Festival",
        month: "April",
        description: "Water sports competitions and beach activities.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
      },
      {
        name: "Monsoon Festival",
        month: "July",
        description: "Celebration of monsoon with local festivities.",
        image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600"
      }
    ],
    filmingLocations: [
      {
        name: "Kala Patthar Beach",
        movie: "Various Bollywood Films",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
      },
      {
        name: "Radhanagar Beach",
        movie: "Commercial Ad Shoots",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600"
      },
      {
        name: "Havelock Island",
        movie: "International Documentaries",
        image: "https://images.unsplash.com/photo-1468413253725-0d5181091f54?w=600"
      }
    ],
    highlights: [
      "Scuba Diving",
      "Beach Camping",
      "Water Sports",
      "Island Hopping",
      "Coral Reef Exploration",
      "Bioluminescence Experience"
    ],
    includes: [
      "Pick-up and drop-off service",
      "Private AC vehicle with chauffeur",
      "Fuel, parking, tolls, interstate taxes",
      "Professional tour guide",
      "Bottled water",
      "All government taxes (GST)"
    ],
    excludes: [
      "Driver & guide tips",
      "Souvenir photos",
      "Accommodation or hotels",
      "Meals",
      "Personal expenses",
      "Entry fees",
      "Additional activities",
      "Air/train/bus fares"
    ]
  },
  {
    id: "2",
    name: "Kerala Backwaters",
    slug: "kerala-backwaters",
    videoUrl: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2732_1440_25fps.mp4",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    category: "Serene Escape",
    rating: 4.8,
    duration: "5 Days / 4 Nights",
    price: 22999,
    shortDescription: "Cruise through tranquil backwaters on traditional houseboats.",
    overview: "Kerala's backwaters are a network of lagoons, lakes, and canals stretching along the Arabian Sea coast. Experience the unique ecosystem, traditional village life, and the famous houseboat cruises that make Kerala God's Own Country.",
    bestTimeToVisit: "September to March is ideal. The monsoon (June-August) offers a unique experience with lush greenery but heavy rainfall.",
    climate: "Tropical climate with temperatures between 22°C to 33°C. High humidity throughout the year.",
    attractions: [
      {
        name: "Alleppey Backwaters",
        description: "Venice of the East - palm-fringed canals and lagoons perfect for houseboat stays.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600"
      },
      {
        name: "Kumarakom Bird Sanctuary",
        description: "14-acre sanctuary home to migratory birds and diverse wildlife.",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600"
      },
      {
        name: "Vembanad Lake",
        description: "One of the largest lakes in India, hosting the famous Nehru Trophy Boat Race.",
        image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600"
      },
      {
        name: "Marari Beach",
        description: "Pristine fishing village beach known for its tranquility.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
      },
      {
        name: "Fort Kochi",
        description: "Historic area with Portuguese, Dutch, and British colonial influences.",
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600"
      }
    ],
    culture: "Immerse yourself in Kerala's rich cultural heritage through Kathakali performances, temple festivals, and traditional art forms. Experience the warmth of local hospitality.",
    nature: "Palm-fringed canals, paddy fields, coconut groves, and a diverse ecosystem of birds and aquatic life. The backwaters offer a unique window into sustainable living.",
    food: [
      {
        name: "Karimeen Pollichathu",
        description: "Pearl spot fish wrapped in banana leaf and grilled with spices - Kerala's signature dish.",
        image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=600"
      },
      {
        name: "Appam with Stew",
        description: "Lacy rice pancakes served with coconut milk vegetable or meat stew.",
        image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600"
      },
      {
        name: "Kerala Sadya",
        description: "Traditional vegetarian feast served on banana leaf with 20+ dishes.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600"
      },
      {
        name: "Puttu & Kadala Curry",
        description: "Steamed rice cylinders with coconut, served with black chickpea curry.",
        image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600"
      },
      {
        name: "Kerala Prawn Curry",
        description: "Prawns cooked in spicy coconut gravy with curry leaves and kokum.",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600"
      },
      {
        name: "Payasam",
        description: "Traditional sweet pudding made with rice, milk, and jaggery.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600"
      }
    ],
    activities: [
      {
        name: "Houseboat Cruises",
        description: "Overnight stay on traditional kettuvallam (rice boats) through scenic backwaters.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600"
      },
      {
        name: "Canoe Village Tours",
        description: "Explore narrow canals and villages on traditional country boats.",
        image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600"
      },
      {
        name: "Fishing with Locals",
        description: "Traditional fishing experience with local fishermen using Chinese nets.",
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600"
      },
      {
        name: "Bird Watching",
        description: "Spot migratory birds at Kumarakom Bird Sanctuary.",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600"
      },
      {
        name: "Toddy Tasting",
        description: "Experience Kerala's traditional palm wine at local toddy shops.",
        image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=600"
      }
    ],
    adventure: [
      {
        name: "Kayaking",
        description: "Paddle through narrow canals and mangrove forests.",
        image: "https://images.unsplash.com/photo-1544551763-92ab472cad5a?w=600"
      },
      {
        name: "Stand-up Paddleboarding",
        description: "SUP on calm backwater lagoons with stunning views.",
        image: "https://images.unsplash.com/photo-1544551763-77932f23a6a5?w=600"
      },
      {
        name: "Cycling through Villages",
        description: "Cycle through scenic village paths and paddy fields.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
      },
      {
        name: "Bamboo Rafting",
        description: "Traditional bamboo raft experience on backwater channels.",
        image: "https://images.unsplash.com/photo-1544551763-92ab472cad5a?w=600"
      }
    ],
    wellness: "Kerala is famous for Ayurveda. Experience authentic treatments, yoga retreats, and meditation sessions in serene settings.",
    accommodation: [
      {
        name: "Kumarakom Lake Resort",
        type: "Luxury Resort",
        description: "Heritage resort with private pool villas overlooking Vembanad Lake.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"
      },
      {
        name: "Premium Houseboat",
        type: "Houseboat Stay",
        description: "Traditional kettuvallam with AC bedrooms and private deck.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600"
      },
      {
        name: "Coconut Lagoon",
        type: "Heritage Property",
        description: "Restored Kerala tharavadu (ancestral home) in backwater setting.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600"
      },
      {
        name: "Backwater Homestay",
        type: "Homestay",
        description: "Authentic Kerala experience with local family hospitality.",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600"
      }
    ],
    itineraryPackages: [
      {
        name: "Weekend Getaway",
        days: 3,
        nights: 2,
        price: 12999,
        itinerary: [
          {
            day: 1,
            title: "Arrival in Alleppey",
            description: "Arrive at Cochin airport, transfer to Alleppey. Board houseboat for overnight cruise.",
            activities: ["Airport pickup", "Alleppey transfer", "Houseboat boarding", "Backwater cruise", "Sunset viewing"]
          },
          {
            day: 2,
            title: "Backwater Exploration",
            description: "Continue houseboat cruise. Afternoon canoe ride through narrow canals and village visit.",
            activities: ["Morning cruise", "Village walk", "Canoe ride", "Kerala lunch", "Evening leisure"]
          },
          {
            day: 3,
            title: "Departure",
            description: "Morning yoga on deck, disembark and transfer to airport.",
            activities: ["Sunrise yoga", "Breakfast on boat", "Disembark", "Airport transfer"]
          }
        ]
      },
      {
        name: "Kerala Highlights",
        days: 5,
        nights: 4,
        price: 22999,
        itinerary: [
          {
            day: 1,
            title: "Arrival & Fort Kochi",
            description: "Arrive at Cochin airport. Explore Fort Kochi - Chinese fishing nets, churches, and cafes.",
            activities: ["Airport pickup", "Fort Kochi tour", "Chinese fishing nets", "Santa Cruz Basilica", "Kerala dinner"]
          },
          {
            day: 2,
            title: "Houseboat Journey",
            description: "Transfer to Alleppey, board luxury houseboat. Cruise through palm-fringed canals.",
            activities: ["Transfer to Alleppey", "Houseboat boarding", "Full day cruise", "Traditional meals on board", "Sunset deck"]
          },
          {
            day: 3,
            title: "Kumarakom",
            description: "Disembark and transfer to Kumarakom. Visit bird sanctuary and enjoy Ayurvedic spa.",
            activities: ["Kumarakom check-in", "Bird sanctuary visit", "Ayurvedic massage", "Lake view dinner"]
          },
          {
            day: 4,
            title: "Marari Beach",
            description: "Drive to Marari Beach. Relax at pristine beach and fishing village visit.",
            activities: ["Marari Beach transfer", "Beach relaxation", "Fishing village walk", "Seafood dinner", "Beach bonfire"]
          },
          {
            day: 5,
            title: "Departure",
            description: "Morning yoga, breakfast. Transfer to Cochin airport.",
            activities: ["Morning yoga", "Breakfast", "Souvenir shopping", "Airport transfer"]
          }
        ]
      },
      {
        name: "Complete Kerala",
        days: 7,
        nights: 6,
        price: 35999,
        itinerary: [
          {
            day: 1,
            title: "Arrival & Cochin",
            description: "VIP arrival at Cochin airport. Luxury hotel check-in. Evening Kathakali performance.",
            activities: ["VIP pickup", "Hotel check-in", "Rest & refresh", "Kathakali show", "Welcome dinner"]
          },
          {
            day: 2,
            title: "Fort Kochi Exploration",
            description: "Full day Fort Kochi heritage tour. Spice markets and Jewish synagogue visit.",
            activities: ["Fort Kochi walking tour", "Mattancherry Palace", "Jewish Synagogue", "Spice market", "Fusion dinner"]
          },
          {
            day: 3,
            title: "Munnar Hills",
            description: "Drive to Munnar hill station. Visit tea plantations and waterfalls en route.",
            activities: ["Scenic drive", "Cheeyappara Falls", "Tea museum", "Plantation walk", "Mountain resort check-in"]
          },
          {
            day: 4,
            title: "Munnar Sightseeing",
            description: "Visit Eravikulam National Park, Top Station, and tea gardens.",
            activities: ["Eravikulam National Park", "Nilgiri Tahr sighting", "Top Station views", "Tea plucking", "Bonfire dinner"]
          },
          {
            day: 5,
            title: "Alleppey Houseboat",
            description: "Drive to Alleppey. Board premium houseboat for overnight backwater experience.",
            activities: ["Munnar to Alleppey", "Premium houseboat", "Sunset cruise", "Traditional dinner", "Star gazing"]
          },
          {
            day: 6,
            title: "Backwaters & Kumarakom",
            description: "Morning cruise continues. Afternoon at Kumarakom for Ayurvedic treatment.",
            activities: ["Morning cruise", "Village canoe ride", "Kumarakom transfer", "Ayurvedic treatment", "Farewell dinner"]
          },
          {
            day: 7,
            title: "Departure",
            description: "Leisurely morning, breakfast. Transfer to Cochin airport.",
            activities: ["Late breakfast", "Souvenir shopping", "Airport transfer", "Departure"]
          }
        ]
      }
    ],
    howToReach: {
      byAir: {
        description: "Cochin International Airport (COK) is the nearest airport, well-connected to major Indian and international cities.",
        airports: ["Cochin International Airport (COK)", "Trivandrum International Airport (TRV)"]
      },
      byTrain: {
        description: "Excellent rail connectivity. Major stations at Ernakulam, Alleppey, and Kottayam.",
        stations: ["Ernakulam Junction", "Alleppey Railway Station", "Kottayam Railway Station"]
      },
      byRoad: {
        description: "Well-connected by national highways. Buses from major South Indian cities.",
        routes: ["NH66 from Mumbai/Goa", "NH544 from Bangalore", "NH85 from Tamil Nadu"]
      }
    },
    events: [
      {
        name: "Nehru Trophy Boat Race",
        month: "August",
        description: "Famous snake boat race on Punnamada Lake, Alleppey.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600"
      },
      {
        name: "Onam Festival",
        month: "August-September",
        description: "Kerala's harvest festival with boat races, dance, and grand feast.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600"
      },
      {
        name: "Thrissur Pooram",
        month: "April-May",
        description: "Grand temple festival with decorated elephants and fireworks.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600"
      }
    ],
    filmingLocations: [
      {
        name: "Alleppey Backwaters",
        movie: "Various Malayalam Films",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600"
      },
      {
        name: "Fort Kochi",
        movie: "International Travel Documentaries",
        image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600"
      },
      {
        name: "Kumarakom",
        movie: "Wedding Shoots & Films",
        image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600"
      }
    ],
    highlights: [
      "Houseboat Stay",
      "Ayurvedic Spa",
      "Village Tours",
      "Bird Watching",
      "Sunset Cruises",
      "Toddy Shop Experience"
    ],
    includes: [
      "Pick-up and drop-off service",
      "Private AC vehicle with chauffeur",
      "Fuel, parking, tolls, interstate taxes",
      "Professional tour guide",
      "Bottled water",
      "All government taxes (GST)"
    ],
    excludes: [
      "Driver & guide tips",
      "Souvenir photos",
      "Accommodation or hotels",
      "Meals",
      "Personal expenses",
      "Entry fees",
      "Additional activities",
      "Air/train/bus fares"
    ]
  },
  {
    id: "3",
    name: "Manali & Kullu",
    slug: "manali-kullu",
    videoUrl: "https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4",
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    category: "Mountain Adventure",
    rating: 4.7,
    duration: "5 Days / 4 Nights",
    price: 18999,
    shortDescription: "Snow-capped peaks, adventure sports, and Himalayan beauty.",
    overview: "Nestled in the Himalayas, Manali and Kullu offer breathtaking mountain landscapes, adventure activities, and spiritual experiences. From snow-covered peaks to ancient temples, this region is a paradise for nature lovers and thrill-seekers.",
    bestTimeToVisit: "December to February for snow, March to June for pleasant weather. Avoid July-September due to monsoon.",
    climate: "Alpine climate with cold winters (-7°C to 10°C) and mild summers (10°C to 25°C).",
    attractions: [
      {
        name: "Rohtang Pass",
        description: "High mountain pass at 13,050 ft offering stunning snow views and adventure activities.",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600"
      },
      {
        name: "Solang Valley",
        description: "Adventure hub for paragliding, skiing, zorbing, and ropeway rides.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
      },
      {
        name: "Hadimba Temple",
        description: "Ancient wooden temple dedicated to Hadimba Devi, set in cedar forest.",
        image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=600"
      },
      {
        name: "Old Manali",
        description: "Bohemian village with cafes, shops, and backpacker vibes.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600"
      },
      {
        name: "Manikaran Hot Springs",
        description: "Sacred hot springs and Gurudwara, believed to have healing properties.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
      }
    ],
    culture: "Experience the rich Himachali culture, ancient temples, and traditional village life. Visit monasteries and learn about local customs and festivals.",
    nature: "Pine forests, snow-capped mountains, gushing rivers, and alpine meadows. The region offers stunning views of the Himalayan range.",
    food: [
      {
        name: "Siddu",
        description: "Traditional steamed bread stuffed with poppy seeds and walnut, served with ghee.",
        image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600"
      },
      {
        name: "Dham",
        description: "Traditional Himachali feast with rice, dal, rajma, and sweet rice.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600"
      },
      {
        name: "Trout Fish",
        description: "Fresh river trout cooked in local spices, a Manali specialty.",
        image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=600"
      },
      {
        name: "Babru",
        description: "Deep-fried kachori stuffed with black gram, a popular breakfast.",
        image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600"
      },
      {
        name: "Tibetan Momos",
        description: "Steamed dumplings with meat or vegetable filling, popular in Old Manali.",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600"
      },
      {
        name: "Apple Cider",
        description: "Fresh apple cider and apple products from Kullu orchards.",
        image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=600"
      }
    ],
    activities: [
      {
        name: "River Rafting",
        description: "White water rafting on Beas River with Grade II-IV rapids.",
        image: "https://images.unsplash.com/photo-1544551763-92ab472cad5a?w=600"
      },
      {
        name: "Paragliding",
        description: "Soar over Solang Valley with breathtaking Himalayan views.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600"
      },
      {
        name: "Trekking",
        description: "Various treks from easy walks to challenging Himalayan expeditions.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
      },
      {
        name: "Hot Spring Bathing",
        description: "Relax in natural hot springs at Manikaran and Vashisht.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600"
      },
      {
        name: "Cafe Hopping",
        description: "Explore quirky cafes in Old Manali with mountain views.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600"
      }
    ],
    adventure: [
      {
        name: "Skiing",
        description: "Winter skiing at Solang Valley and Rohtang slopes.",
        image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600"
      },
      {
        name: "Snowboarding",
        description: "Snowboarding on powder snow during winter months.",
        image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600"
      },
      {
        name: "Zorbing",
        description: "Roll down snow-covered slopes in transparent orbs.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
      },
      {
        name: "Bungee Jumping",
        description: "Take the plunge from 180 ft platform over Beas River.",
        image: "https://images.unsplash.com/photo-1544551763-77932f23a6a5?w=600"
      },
      {
        name: "Rock Climbing",
        description: "Natural rock faces perfect for climbing enthusiasts.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
      }
    ],
    wellness: "Rejuvenate in natural hot springs, practice yoga with mountain views, and experience traditional Himalayan healing practices.",
    accommodation: [
      {
        name: "The Himalayan",
        type: "Luxury Resort",
        description: "5-star resort with panoramic mountain views and world-class amenities.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"
      },
      {
        name: "Span Resort & Spa",
        type: "Premium Hotel",
        description: "Riverside resort with spa facilities and apple orchards.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600"
      },
      {
        name: "Mountain Cottage",
        type: "Boutique Stay",
        description: "Cozy cottages in apple orchards with valley views.",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600"
      },
      {
        name: "Zostel Manali",
        type: "Backpacker Hostel",
        description: "Popular hostel for solo travelers and backpackers.",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600"
      }
    ],
    itineraryPackages: [
      {
        name: "Mountain Express",
        days: 3,
        nights: 2,
        price: 11999,
        itinerary: [
          {
            day: 1,
            title: "Arrival & Manali",
            description: "Arrive at Bhuntar airport/Manali bus stand. Transfer to hotel. Evening Mall Road visit.",
            activities: ["Airport/bus stand pickup", "Hotel check-in", "Mall Road walk", "Local dinner"]
          },
          {
            day: 2,
            title: "Solang Valley Adventure",
            description: "Full day at Solang Valley for adventure activities. Paragliding, zorbing, and ropeway.",
            activities: ["Solang Valley visit", "Paragliding", "Zorbing", "Ropeway ride", "Snow activities"]
          },
          {
            day: 3,
            title: "Local Sightseeing & Departure",
            description: "Visit Hadimba Temple, Vashisht Hot Springs, and Old Manali before departure.",
            activities: ["Hadimba Temple", "Vashisht Hot Springs", "Old Manali cafes", "Departure"]
          }
        ]
      },
      {
        name: "Himalayan Explorer",
        days: 5,
        nights: 4,
        price: 18999,
        itinerary: [
          {
            day: 1,
            title: "Arrival in Manali",
            description: "Arrive and check into hotel. Evening leisure walk at Mall Road.",
            activities: ["Airport transfer", "Hotel check-in", "Rest & acclimatize", "Mall Road evening", "Welcome dinner"]
          },
          {
            day: 2,
            title: "Solang Valley",
            description: "Full day adventure at Solang Valley. Paragliding, skiing (winter), and cable car.",
            activities: ["Solang Valley", "Paragliding", "Gondola ride", "Snow activities", "Valley views"]
          },
          {
            day: 3,
            title: "Rohtang Pass",
            description: "Day trip to Rohtang Pass (permit required). Snow point activities and stunning views.",
            activities: ["Rohtang Pass visit", "Snow point", "Photo sessions", "Hot chai", "Return evening"]
          },
          {
            day: 4,
            title: "Kullu & Manikaran",
            description: "River rafting at Kullu. Visit Manikaran for hot springs and Gurudwara.",
            activities: ["River rafting", "Manikaran Hot Springs", "Gurudwara visit", "Local lunch", "Return to Manali"]
          },
          {
            day: 5,
            title: "Local Tour & Departure",
            description: "Visit Hadimba Temple, Old Manali, Tibetan monastery. Departure.",
            activities: ["Hadimba Temple", "Tibetan Monastery", "Old Manali", "Shopping", "Departure"]
          }
        ]
      },
      {
        name: "Ultimate Himalayan",
        days: 7,
        nights: 6,
        price: 28999,
        itinerary: [
          {
            day: 1,
            title: "Arrival & Relaxation",
            description: "VIP arrival. Luxury resort check-in with mountain views. Evening at leisure.",
            activities: ["VIP pickup", "Luxury resort check-in", "Welcome drink", "Spa session", "Gourmet dinner"]
          },
          {
            day: 2,
            title: "Manali Exploration",
            description: "Visit Hadimba Temple, Manu Temple, Vashisht Hot Springs, and Old Manali.",
            activities: ["Hadimba Temple", "Manu Temple", "Vashisht Hot Springs", "Old Manali cafes", "Shopping"]
          },
          {
            day: 3,
            title: "Solang Valley Adventure",
            description: "Full day adventure activities at Solang Valley.",
            activities: ["Paragliding", "Zorbing", "Gondola ride", "Snow activities", "Mountain lunch"]
          },
          {
            day: 4,
            title: "Rohtang Pass Expedition",
            description: "Full day at Rohtang Pass. Snow activities and photography.",
            activities: ["Rohtang Pass", "Snow scooter", "Skiing spot", "Photography", "Hot lunch"]
          },
          {
            day: 5,
            title: "Kullu Valley",
            description: "River rafting, Kullu shawl factories, and Great Himalayan National Park.",
            activities: ["River rafting", "Shawl factory visit", "National Park", "Local market", "Cultural dinner"]
          },
          {
            day: 6,
            title: "Manikaran & Kasol",
            description: "Visit Manikaran Hot Springs, Kasol village, and Parvati Valley.",
            activities: ["Manikaran Hot Springs", "Gurudwara langar", "Kasol exploration", "Riverside cafe", "Bonfire"]
          },
          {
            day: 7,
            title: "Leisure & Departure",
            description: "Morning yoga, spa. Local shopping and departure.",
            activities: ["Morning yoga", "Spa treatment", "Souvenir shopping", "Departure"]
          }
        ]
      }
    ],
    howToReach: {
      byAir: {
        description: "Bhuntar Airport (Kullu-Manali Airport) is 50 km from Manali. Connected to Delhi with daily flights.",
        airports: ["Bhuntar Airport (KUU)", "Chandigarh Airport (as alternate)"]
      },
      byTrain: {
        description: "Nearest railway stations are Chandigarh (310 km) and Pathankot (285 km). Volvo buses connect to Manali.",
        stations: ["Chandigarh Railway Station", "Pathankot Railway Station", "Joginder Nagar (narrow gauge)"]
      },
      byRoad: {
        description: "Well-connected by road from Delhi (550 km), Chandigarh (310 km). Luxury Volvo buses available.",
        routes: ["NH21 from Chandigarh", "NH3 from Delhi via Chandigarh", "From Leh via Rohtang (seasonal)"]
      }
    },
    events: [
      {
        name: "Winter Carnival",
        month: "January",
        description: "Week-long festival with cultural programs, snow sports, and folk performances.",
        image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600"
      },
      {
        name: "Kullu Dussehra",
        month: "October",
        description: "Unique week-long Dussehra celebration with processions of local deities.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600"
      },
      {
        name: "Spring Festival",
        month: "March",
        description: "Celebration of spring with folk dances and local cuisine.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
      }
    ],
    filmingLocations: [
      {
        name: "Rohtang Pass",
        movie: "Jab We Met",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600"
      },
      {
        name: "Solang Valley",
        movie: "Yeh Jawaani Hai Deewani",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
      },
      {
        name: "Old Manali",
        movie: "Various Bollywood Songs",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600"
      }
    ],
    highlights: [
      "Snow Activities",
      "Paragliding",
      "River Rafting",
      "Temple Visits",
      "Hot Springs",
      "Café Hopping"
    ],
    includes: [
      "Pick-up and drop-off service",
      "Private AC vehicle with chauffeur",
      "Fuel, parking, tolls, interstate taxes",
      "Professional tour guide",
      "Bottled water",
      "All government taxes (GST)"
    ],
    excludes: [
      "Driver & guide tips",
      "Souvenir photos",
      "Accommodation or hotels",
      "Meals",
      "Personal expenses",
      "Entry fees",
      "Additional activities",
      "Air/train/bus fares"
    ]
  }
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find((d) => d.slug === slug);
};
