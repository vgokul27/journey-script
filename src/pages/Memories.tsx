import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, MapPin, Calendar } from 'lucide-react';
import { places } from '@/data/places';

const Memories = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Create gallery data from places
  const memoryGallery = places.flatMap(place => [
    {
      id: `${place.id}-1`,
      image: place.image,
      title: place.name,
      location: place.location,
      date: place.visitDate,
      category: place.category,
      description: place.description
    }
  ]);

  const openModal = (memory) => {
    setSelectedImage(memory);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Travel 
            <span className="sunset-gradient bg-clip-text text-transparent"> Memories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A visual journey through the most beautiful and unforgettable moments captured around the world.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {memoryGallery.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ y: -8 }}
              onClick={() => openModal(memory)}
            >
              <div className="relative overflow-hidden rounded-2xl travel-card">
                <motion.img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-white"
                  >
                    <h3 className="font-bold text-lg mb-1">{memory.title}</h3>
                    <div className="flex items-center text-sm text-gray-300 mb-2">
                      <MapPin size={14} className="mr-1" />
                      <span>{memory.location}</span>
                    </div>
                    <span className="bg-accent px-2 py-1 rounded-full text-xs">
                      {memory.category}
                    </span>
                  </motion.div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={18} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {memoryGallery.length}
            </motion.div>
            <p className="text-muted-foreground">Memories Captured</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {new Set(memoryGallery.map(m => m.location.split(',')[1]?.trim())).size}
            </motion.div>
            <p className="text-muted-foreground">Countries Visited</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {new Set(memoryGallery.map(m => m.category)).size}
            </motion.div>
            <p className="text-muted-foreground">Categories</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              2024
            </motion.div>
            <p className="text-muted-foreground">Journey Started</p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span className="mr-4">{selectedImage.location}</span>
                      <Calendar size={16} className="mr-1" />
                      <span>{selectedImage.date}</span>
                    </div>
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">
                      {selectedImage.category}
                    </span>
                  </div>
                  
                  <motion.button
                    onClick={closeModal}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Memories;