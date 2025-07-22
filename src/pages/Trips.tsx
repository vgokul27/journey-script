import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { places } from '@/data/places';

const Trips = () => {
  const navigate = useNavigate();

  const tripPosts = places.map((place, index) => ({
    ...place,
    readTime: `${Math.floor(Math.random() * 5) + 3} min read`,
    excerpt: place.description.substring(0, 150) + '...',
    publishDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
      .toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Travel 
            <span className="ocean-gradient bg-clip-text text-transparent"> Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into captivating tales of adventure, discovery, and wanderlust from destinations around the globe.
          </p>
        </motion.div>

        {/* Trip Timeline */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {tripPosts.map((trip, index) => (
            <motion.article
              key={trip.id}
              variants={itemVariants}
              className="group"
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <motion.div
                  className="lg:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative overflow-hidden rounded-2xl travel-card">
                    <img
                      src={trip.image}
                      alt={trip.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {trip.category}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{trip.publishDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{trip.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{trip.location}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                      {trip.name}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {trip.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {trip.author.charAt(0)}
                        </div>
                        <span className="text-sm text-muted-foreground">By {trip.author}</span>
                      </div>

                      <motion.button
                        onClick={() => navigate(`/place/${trip.id}`)}
                        className="group flex items-center text-primary font-semibold hover:text-accent transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Read Story
                        <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Divider */}
              {index < tripPosts.length - 1 && (
                <motion.div
                  className="mt-16 mb-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </motion.div>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4">Inspired to Share Your Story?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every journey has a story worth telling. Join our community of travelers and share your adventures with the world.
          </p>
          <motion.button
            className="glow-button sunset-gradient text-white px-8 py-4 rounded-full font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Trips;