import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Filter, MapPin } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import PlaceCard from '@/components/PlaceCard';
import { places } from '@/data/places';

const Places = () => {
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['All', 'India', 'Others'];

  const applyFilters = (query: string, category: string) => {
    let filtered = places;

    // Filter by category
    if (category !== 'All') {
      if (category === 'India') {
        filtered = filtered.filter(place => place.location?.includes('India'));
      } else {
        filtered = filtered.filter(place => !place.location?.includes('India'));
      }
    }

    // Filter by search query
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(place =>
        (place.name?.toLowerCase() || '').includes(lowerQuery) ||
        (place.location?.toLowerCase() || '').includes(lowerQuery) ||
        (place.description?.toLowerCase() || '').includes(lowerQuery)
      );
    }

    setFilteredPlaces(filtered);
  };

  const handleSearch = (query: string) => {
    console.log('Places search triggered with query:', query);
    setSearchQuery(query);
    applyFilters(query, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    applyFilters(searchQuery, category);
  };

  const handlePlaceClick = (place: any) => {
    navigate(`/place/${place.id}`);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explore <span className="ocean-gradient bg-clip-text text-transparent">Places</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover breathtaking destinations from around the globe, each with its own unique story and unforgettable experiences.
          </p>

          <SearchBar onSearch={handleSearch} />
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center text-muted-foreground mr-4">
            <Filter size={18} className="mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/70 text-muted-foreground hover:text-foreground'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredPlaces.length}</span>
            {filteredPlaces.length === 1 ? ' place' : ' places'}
            {selectedCategory !== 'All' && (
              <span> in <span className="font-semibold text-primary">{selectedCategory}</span></span>
            )}
          </p>
        </motion.div>

        {/* Places Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredPlaces.map((place, index) => (
            <PlaceCard
              key={place.id}
              place={place}
              index={index}
              onClick={handlePlaceClick}
            />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPlaces.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-md mx-auto">
              <MapPin size={64} className="mx-auto text-muted-foreground mb-6" />
              <h3 className="text-2xl font-bold mb-4">No places found</h3>
              <p className="text-muted-foreground mb-8">
                We couldn't find any places matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <motion.button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setFilteredPlaces(places);
                }}
                className="glow-button bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show All Places
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* World Map Placeholder */}
        <motion.div
          className="mt-20 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Places Around the World</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our journey has taken us to amazing destinations across different continents, each offering unique experiences and memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(
              places.reduce((acc: Record<string, typeof places>, place) => {
                const continent =
                  place.location?.includes('Indonesia') || place.location?.includes('Japan') ? 'Asia' :
                  place.location?.includes('Switzerland') ? 'Europe' :
                  place.location?.includes('Iceland') ? 'Nordic' : 'Other';

                if (!acc[continent]) acc[continent] = [];
                acc[continent].push(place);
                return acc;
              }, {})
            ).map(([continent, continentPlaces], index) => (
              <motion.div
                key={continent}
                className="travel-card p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">{continent}</h3>
                <div className="space-y-2">
                  {continentPlaces.map(place => (
                    <div key={place.id} className="flex items-center text-muted-foreground">
                      <MapPin size={14} className="mr-2 text-accent" />
                      <span className="text-sm">{place.location}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">{continentPlaces.length}</span>
                  <span className="text-muted-foreground ml-2">
                    {continentPlaces.length === 1 ? 'destination' : 'destinations'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Places;
