import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

interface PlaceCardProps {
  place: any;
  index: number;
  onClick: (place: any) => void;
}

const PlaceCard = ({ place, index, onClick }: PlaceCardProps) => {
  return (
    <motion.div
      className="travel-card cursor-pointer group"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      onClick={() => onClick(place)}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={place.image}
          alt={place.name}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Floating badge */}
        <motion.div
          className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
        >
          {place.category}
        </motion.div>
        
        {/* Location pin */}
        <motion.div
          className="absolute bottom-4 left-4 flex items-center text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <MapPin size={16} className="mr-1" />
          <span className="text-sm font-medium">{place.location}</span>
        </motion.div>
      </div>
      
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {place.name}
        </motion.h3>
        
        <motion.p
          className="text-muted-foreground mb-4 line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {place.description}
        </motion.p>
        
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{place.visitDate}</span>
          </div>
          
          <motion.div
            className="text-accent font-semibold glow-button px-3 py-1 rounded-full border border-accent/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlaceCard;