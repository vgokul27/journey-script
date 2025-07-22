import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User, Lightbulb } from 'lucide-react';
import { places } from '@/data/places';

const PlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = places.find(p => p.id === parseInt(id));

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Place Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <motion.div
        className="relative h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft size={24} />
        </motion.button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <span className="bg-accent px-4 py-2 rounded-full text-sm font-medium mr-4">
                {place.category}
              </span>
              <div className="flex items-center text-gray-200">
                <MapPin size={16} className="mr-1" />
                <span>{place.location}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{place.name}</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
              {place.description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">About This Destination</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {place.fullDescription}
              </p>
            </motion.div>

            {/* Travel Tips */}
            <motion.div
              className="bg-muted/50 rounded-2xl p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Lightbulb className="text-accent mr-3" size={24} />
                <h3 className="text-2xl font-bold">Travel Tips</h3>
              </div>
              <ul className="space-y-3">
                {place.tips.map((tip, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Visit Details */}
            <motion.div
              className="travel-card p-6 mb-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">Visit Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="text-accent mr-3" size={20} />
                  <div>
                    <p className="font-medium">Visit Date</p>
                    <p className="text-muted-foreground">{place.visitDate}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-accent mr-3" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{place.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Author Info */}
            <motion.div
              className="travel-card p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <div className="flex items-start">
                <User className="text-accent mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium mb-2">{place.author}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {place.authorBio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready for Your Own Adventure?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover more incredible destinations and start planning your next unforgettable journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => navigate('/')}
              className="glow-button bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More Places
            </motion.button>
            <motion.button
              onClick={() => navigate('/trips')}
              className="glow-button border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Travel Stories
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PlaceDetails;