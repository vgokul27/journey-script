import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search destinations..." }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Trigger search on each keystroke
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`relative search-glow rounded-full bg-card overflow-hidden transition-shadow ${
          isFocused ? 'ring-2 ring-accent/20' : ''
        }`}
        animate={{
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused
            ? '0 0 30px hsla(25, 95%, 65%, 0.3)'
            : '0 4px 20px hsla(205, 87%, 21%, 0.1)',
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Search icon */}
        <motion.div
          className="absolute inset-y-0 left-0 flex items-center pl-4"
          animate={{ scale: isFocused ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Search
            className={`h-5 w-5 transition-colors duration-200 ${
              isFocused ? 'text-accent' : 'text-muted-foreground'
            }`}
          />
        </motion.div>

        {/* Input field */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full py-3 pl-12 pr-4 text-foreground bg-transparent border-none outline-none placeholder-muted-foreground cursor-text"
        />

        {/* Animated glow border */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 pointer-events-none"
          animate={{
            borderColor: isFocused ? 'hsl(25, 95%, 65%)' : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.form>
  );
};

export default SearchBar;
