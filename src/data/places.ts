import baliBech from '@/assets/bali-beach.jpg';
import swissAlps from '@/assets/swiss-alps.jpg';
import kyotoTemple from '@/assets/kyoto-temple.jpg';
import icelandAurora from '@/assets/iceland-aurora.jpg';
import santoriniGreece from '@/assets/santorini-greece.jpg';
import machuPicchu from '@/assets/machu-picchu.jpg';
import serengetiSafari from '@/assets/serengeti-safari.jpg';
import nycSkyline from '@/assets/nyc-skyline.jpg';
import tajMahal from '@/assets/taj-mahal.jpg';
import keralaBackwaters from '@/assets/kerala-backwaters.jpg';
import rajasthanDesert from '@/assets/rajasthan-desert.jpg';
import goaBeach from '@/assets/goa-beach.jpg';

export const places = [
  {
    id: 1,
    name: "Paradise Beach Resort",
    location: "Bali, Indonesia",
    category: "Beach",
    description: "Discover the ultimate tropical paradise with crystal-clear waters, pristine white sand beaches, and breathtaking sunsets. This hidden gem offers the perfect escape from everyday life.",
    image: baliBech,
    visitDate: "March 2024",
    fullDescription: "Paradise Beach Resort in Bali represents the epitome of tropical luxury and natural beauty. Nestled along the pristine coastline of Indonesia's most beloved island, this destination offers an unparalleled experience of serenity and adventure. The resort features crystal-clear turquoise waters that stretch endlessly into the horizon, complemented by powdery white sand beaches that invite long, peaceful walks at sunrise and sunset. The area is renowned for its vibrant marine life, making it a perfect spot for snorkeling and diving enthusiasts. Local culture thrives here, with traditional Balinese ceremonies and art exhibitions regularly held on the beach. The nearby village offers authentic Indonesian cuisine and handcrafted souvenirs.",
    tips: [
      "Visit during dry season (April-October) for best weather",
      "Try traditional Balinese massage at sunset",
      "Book snorkeling tours early in the morning",
      "Don't miss the local fish market for fresh seafood"
    ],
    author: "Sarah Mitchell",
    authorBio: "Travel photographer and writer with 8 years of Southeast Asia exploration experience."
  },
  {
    id: 2,
    name: "Alpine Adventure Lodge",
    location: "Swiss Alps, Switzerland",
    category: "Mountain",
    description: "Experience the majestic beauty of snow-capped peaks, pristine alpine lakes, and world-class skiing. A perfect destination for adventure seekers and nature lovers alike.",
    image: swissAlps,
    visitDate: "December 2023",
    fullDescription: "The Alpine Adventure Lodge offers an extraordinary mountain experience in the heart of the Swiss Alps. Surrounded by towering peaks that reach toward the sky, this destination provides year-round activities for outdoor enthusiasts. In winter, the area transforms into a wonderland of pristine powder snow, perfect for skiing, snowboarding, and cross-country skiing. The lodge sits at an elevation of 1,800 meters, providing panoramic views of the surrounding valleys and glacial formations. During summer months, the region offers exceptional hiking trails, mountain biking routes, and rock climbing opportunities. The nearby alpine lake reflects the mountains like a perfect mirror, creating photo opportunities that will take your breath away. Traditional Swiss culture is preserved here through local festivals, authentic cuisine, and time-honored craftsmanship.",
    tips: [
      "Book accommodation well in advance during ski season",
      "Try traditional Swiss fondue at the lodge restaurant",
      "Take the cable car to the summit for panoramic views",
      "Pack layers - mountain weather can change quickly"
    ],
    author: "Marcus Weber",
    authorBio: "Alpine guide and adventure travel specialist with 15 years of mountain expedition experience."
  },
  {
    id: 3,
    name: "Zen Garden Temple",
    location: "Kyoto, Japan",
    category: "Cultural",
    description: "Immerse yourself in the tranquil beauty of ancient Japanese architecture, surrounded by cherry blossoms and traditional zen gardens that promote inner peace and reflection.",
    image: kyotoTemple,
    visitDate: "April 2024",
    fullDescription: "The Zen Garden Temple in Kyoto represents one of Japan's most sacred and beautiful cultural treasures. This ancient temple complex, dating back over 800 years, showcases the finest examples of traditional Japanese architecture and landscape design. The meticulously maintained zen gardens feature carefully placed rocks, raked gravel patterns, and seasonal plantings that change throughout the year. During cherry blossom season, the temple grounds transform into a pink paradise, with hundreds of sakura trees creating a canopy of delicate petals. The temple's wooden structures, built without a single nail, demonstrate the incredible craftsmanship of ancient Japanese artisans. Visitors can participate in meditation sessions, tea ceremonies, and calligraphy workshops led by resident monks. The surrounding neighborhood preserves traditional Kyoto culture with narrow streets, wooden houses, and artisan shops selling handmade ceramics and textiles.",
    tips: [
      "Visit early morning to avoid crowds and capture best photos",
      "Respect temple rules - no loud talking or flash photography",
      "Try the temple's traditional vegetarian cuisine",
      "Wear comfortable shoes for walking on temple grounds"
    ],
    author: "Yuki Tanaka",
    authorBio: "Cultural heritage specialist and Kyoto native with deep knowledge of Japanese temple traditions."
  },
  {
    id: 4,
    name: "Aurora Wilderness Camp",
    location: "Reykjavik, Iceland",
    category: "Natural Wonder",
    description: "Witness the magical dance of the Northern Lights in one of the world's most pristine wilderness areas, complete with ice formations and untouched Arctic landscapes.",
    image: icelandAurora,
    visitDate: "January 2024",
    fullDescription: "Aurora Wilderness Camp in Iceland offers one of the world's most spectacular natural phenomena experiences. Located in the remote wilderness outside Reykjavik, this destination provides optimal conditions for viewing the Northern Lights, or Aurora Borealis. The camp is strategically positioned away from light pollution, offering crystal-clear views of the dancing lights that illuminate the Arctic sky in brilliant greens, purples, and blues. The surrounding landscape features dramatic ice formations, frozen waterfalls, and vast expanses of untouched snow that create an otherworldly atmosphere. During the day, visitors can explore ice caves, go glacier hiking, or take guided tours to nearby geothermal hot springs. The camp provides heated cabins with panoramic windows specifically designed for aurora viewing, allowing guests to stay warm while watching the celestial display. Expert guides share insights about the science behind the Aurora Borealis and Icelandic folklore surrounding this natural wonder.",
    tips: [
      "Best viewing season is September through March",
      "Check aurora forecasts and plan for clear nights",
      "Bring warm, layered clothing and waterproof gear",
      "Camera with manual settings recommended for night photography"
    ],
    author: "Erik Johansson",
    authorBio: "Aurora photographer and Iceland tour guide with 12 years of experience capturing the Northern Lights."
  },
  {
    id: 5,
    name: "Santorini Paradise",
    location: "Santorini, Greece",
    category: "Island",
    description: "Experience the iconic white-washed buildings and blue domes overlooking the crystal-clear Aegean Sea in this Mediterranean paradise.",
    image: santoriniGreece,
    visitDate: "June 2024",
    fullDescription: "Santorini, one of Greece's most photographed islands, offers an unparalleled blend of stunning architecture, rich history, and breathtaking sunsets. The island's unique volcanic landscape creates dramatic cliffs that plunge into the deep blue Aegean Sea. The traditional Cycladic architecture, featuring white-washed buildings with blue domes, creates a picture-perfect setting that has captivated visitors for generations.",
    tips: ["Best sunset views from Oia village", "Try local wine from volcanic soil vineyards", "Book restaurants in advance during peak season", "Wear comfortable shoes for cobblestone streets"],
    author: "Maria Papadopoulos",
    authorBio: "Greek islands specialist and cultural heritage guide with 10 years of Mediterranean travel experience."
  },
  {
    id: 6,
    name: "Machu Picchu Wonder",
    location: "Cusco, Peru",
    category: "Historical",
    description: "Discover the mystical ancient Incan citadel perched high in the Andes Mountains, one of the New Seven Wonders of the World.",
    image: machuPicchu,
    visitDate: "September 2023",
    fullDescription: "Machu Picchu stands as one of humanity's greatest architectural achievements, built by the Incas in the 15th century and later abandoned during the Spanish conquest. This UNESCO World Heritage site sits at 2,430 meters above sea level, surrounded by tropical mountain forests and dramatic Andean peaks.",
    tips: ["Book permits well in advance", "Acclimatize to altitude in Cusco first", "Start early for fewer crowds and better photos", "Hire a certified guide for historical insights"],
    author: "Carlos Mendoza",
    authorBio: "Andean cultures expert and certified mountain guide with 12 years of Peru exploration experience."
  },
  {
    id: 7,
    name: "Serengeti Safari",
    location: "Serengeti, Tanzania",
    category: "Wildlife",
    description: "Witness the Great Migration and encounter Africa's Big Five in one of the world's most spectacular wildlife sanctuaries.",
    image: serengetiSafari,
    visitDate: "February 2024",
    fullDescription: "The Serengeti National Park spans 14,750 square kilometers of endless plains, hosting the greatest wildlife spectacle on Earth. Every year, over two million wildebeest, zebras, and gazelles migrate in search of fresh pastures, followed by predators in an ancient cycle of life.",
    tips: ["Visit during migration season for best wildlife viewing", "Book safari lodges early", "Bring telephoto lens for wildlife photography", "Pack light, neutral-colored clothing"],
    author: "James Kimani",
    authorBio: "Wildlife conservation photographer and safari guide with 15 years of East African safari experience."
  },
  {
    id: 8,
    name: "NYC Skyline",
    location: "New York, USA",
    category: "Urban",
    description: "Experience the energy of the city that never sleeps, from iconic skyscrapers to world-class museums and Broadway shows.",
    image: nycSkyline,
    visitDate: "November 2023",
    fullDescription: "New York City represents the pinnacle of urban excitement, where towering skyscrapers create dramatic canyons of steel and glass. From the bright lights of Times Square to the peaceful paths of Central Park, NYC offers endless discoveries around every corner.",
    tips: ["Use public transportation to navigate efficiently", "Book Broadway shows in advance", "Visit Top of the Rock for Empire State Building views", "Try diverse food scenes in different neighborhoods"],
    author: "Jennifer Walsh",
    authorBio: "Urban travel blogger and NYC resident with extensive knowledge of hidden city gems and local culture."
  },
  {
    id: 9,
    name: "Taj Mahal Wonder",
    location: "Agra, India",
    category: "Monument",
    description: "Marvel at the breathtaking ivory-white marble mausoleum, a UNESCO World Heritage Site and symbol of eternal love.",
    image: tajMahal,
    visitDate: "October 2023",
    fullDescription: "The Taj Mahal stands as one of the world's most recognizable and beloved monuments, built by Mughal Emperor Shah Jahan as a mausoleum for his wife Mumtaz Mahal. This architectural masterpiece combines elements of Islamic, Persian, Ottoman Turkish, and Indian architectural styles, creating a harmonious blend that has captivated visitors for centuries. The monument's beauty changes throughout the day as different lighting conditions reveal new details in the intricate marble inlay work and precious stone decorations.",
    tips: ["Visit at sunrise for golden light and fewer crowds", "Book tickets online in advance", "Photography not allowed inside the main chamber", "Respect the dress code and cultural significance"],
    author: "Priya Sharma",
    authorBio: "Indian heritage specialist and architectural historian with 8 years of experience guiding cultural tours across India."
  },
  {
    id: 10,
    name: "Kerala Backwaters",
    location: "Alleppey, India",
    category: "Nature",
    description: "Cruise through serene waterways lined with coconut palms, experiencing the tranquil beauty of India's Venice of the East.",
    image: keralaBackwaters,
    visitDate: "January 2024",
    fullDescription: "The Kerala Backwaters represent a unique ecosystem of interconnected canals, rivers, lakes, and lagoons that stretch along the Arabian Sea coast. This network of waterways, spanning over 900 kilometers, offers a glimpse into traditional Kerala life where fishing villages, rice paddies, and coconut groves create a peaceful landscape. Traditional houseboats, known as kettuvallams, provide an authentic way to explore these waters while enjoying locally prepared seafood and traditional Kerala cuisine.",
    tips: ["Best time to visit is October to March", "Book houseboat stays for full experience", "Try traditional Kerala fish curry", "Respect local customs in fishing villages"],
    author: "Rajesh Nair",
    authorBio: "Kerala tourism expert and houseboat operator with 12 years of experience showcasing backwater culture."
  },
  {
    id: 11,
    name: "Rajasthan Royal Desert",
    location: "Jaisalmer, India",
    category: "Desert",
    description: "Experience the golden city rising from the Thar Desert, with magnificent palaces, colorful markets, and camel safaris.",
    image: rajasthanDesert,
    visitDate: "February 2024",
    fullDescription: "Jaisalmer, known as the Golden City, emerges from the Thar Desert like a mirage made real. Built from yellow sandstone, the city's architecture seems to glow golden in the desert sun. The massive Jaisalmer Fort, one of the few living forts in the world, houses shops, hotels, and ancient havelis with intricate carvings. The surrounding desert offers camel safaris, traditional folk performances, and nights under star-filled skies that reveal the timeless beauty of Rajasthan's royal heritage.",
    tips: ["Visit during winter months for comfortable temperatures", "Stay overnight in desert camps for full experience", "Try traditional Rajasthani thali cuisine", "Shop for handicrafts and textiles in local markets"],
    author: "Arjun Singh",
    authorBio: "Rajasthani culture expert and desert guide with 10 years of experience in heritage tourism and camel safaris."
  },
  {
    id: 12,
    name: "Goa Beach Paradise",
    location: "Goa, India",
    category: "Beach",
    description: "Relax on pristine beaches with swaying palm trees, vibrant Portuguese architecture, and a laid-back coastal vibe.",
    image: goaBeach,
    visitDate: "December 2023",
    fullDescription: "Goa offers a perfect blend of natural beauty and cultural heritage, where Portuguese colonial influence meets Indian traditions. The state's coastline stretches for over 100 kilometers, featuring both bustling beaches with water sports and secluded coves perfect for relaxation. Beyond the beaches, Goa's interior reveals spice plantations, ancient temples, and charming villages where traditional crafts and Konkani culture thrive. The region's unique cuisine combines Indian spices with Portuguese flavors, creating distinctive dishes found nowhere else in the world.",
    tips: ["Visit between November and March for best weather", "Try local seafood and Goan curry", "Rent a scooter to explore different beaches", "Experience both North and South Goa for diverse atmospheres"],
    author: "Maria D'Souza",
    authorBio: "Goan local and cultural guide with deep knowledge of hidden beaches, local traditions, and authentic Goan cuisine."
  }
];