import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import PlaceCard from '@/components/PlaceCard';
import { places } from '@/data/places';

const Home = () => {
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log('Home search triggered with query:', query);
    if (!query.trim()) {
      setFilteredPlaces(places);
      return;
    }

    const filtered = places.filter(place =>
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.location.toLowerCase().includes(query.toLowerCase()) ||
      place.category.toLowerCase().includes(query.toLowerCase())
    );
    console.log('Home filtered results:', filtered.length);
    setFilteredPlaces(filtered);
  };

  const handlePlaceClick = (place: any) => {
    navigate(`/place/${place.id}`);
  };

  return (
    <div className="min-h-screen">
      {/* Search Section */}
      <motion.section
        className="py-12 px-4 bg-background text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Find Your Next  
          <span className="ocean-gradient bg-clip-text text-transparent"> Destination</span>
        </motion.h1>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <SearchBar onSearch={handleSearch} />
        </motion.div>
      </motion.section>

      {/* Places Grid Section */}
      <motion.section
        className="px-4 py-4 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured
              <span className="ocean-gradient bg-clip-text text-transparent"> Destinations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked destinations that will inspire your next adventure and create memories to last a lifetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPlaces.map((place, index) => (
              <PlaceCard
                key={place.id}
                place={place}
                index={index}
                onClick={handlePlaceClick}
              />
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">No destinations found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms to find amazing places to visit.</p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
