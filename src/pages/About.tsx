import { motion } from 'framer-motion';
import { Heart, Camera, MapPin, Compass, Mail, Globe, Instagram, Twitter } from 'lucide-react';
import heroImage from '@/assets/hero-adventure.jpg';

const About = () => {
  const teamMembers = [
    {
      name: "Smriti Mandhana",
      role: "Founder & Lead Explorer",
      bio: "Passionate traveler with 10+ years of experience exploring hidden gems around the world. Believes in sustainable tourism and cultural immersion.",
      icon: Compass
    },
    {
      name: "Jemimah Rodrigues",
      role: "Travel Photographer",
      bio: "Award-winning photographer specializing in landscape and cultural photography. Captures the soul of every destination through her lens.",
      icon: Camera
    },
    {
      name: "Harleen Deol",
      role: "Adventure Guide",
      bio: "Outdoor enthusiast and certified guide with expertise in mountain climbing, diving, and extreme sports across multiple continents.",
      icon: MapPin
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We believe in genuine connections with local cultures and communities, creating meaningful travel experiences."
    },
    {
      icon: Globe,
      title: "Sustainable Travel",
      description: "Committed to responsible tourism that preserves natural beauty and supports local economies."
    },
    {
      icon: Camera,
      title: "Story Telling",
      description: "Every destination has a story to tell. We capture and share these narratives through stunning visuals and compelling content."
    },
    {
      icon: Compass,
      title: "Adventure Spirit",
      description: "Embracing the unknown and encouraging others to step out of their comfort zones to discover the extraordinary."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mission Statement */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Journey Script was born from a simple belief: travel has the power to transform lives, bridge cultures, 
              and create lasting memories. We're dedicated to sharing authentic travel experiences that inspire others 
              to explore the world with curiosity, respect, and wonder.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through stunning photography, detailed guides, and personal stories, we aim to be your trusted companion 
              in discovering the extraordinary beauty that exists in every corner of our planet.
            </p>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="travel-card p-6 text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <value.icon size={28} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="travel-card p-8 text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
                >
                  <member.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          className="mb-20 py-16 px-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Countries Visited" },
              { number: "200+", label: "Stories Shared" },
              { number: "1M+", label: "Photos Captured" },
              { number: "10K+", label: "Travelers Inspired" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions about a destination? Want to share your own travel story? 
            We'd love to hear from you and be part of your journey.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { icon: Mail, label: "hello@journeyscript.com", href: "mailto:hello@journeyscript.com" },
              { icon: Instagram, label: "@journeyscript", href: "#" },
              { icon: Twitter, label: "@journey_script", href: "#" }
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                className="flex items-center gap-3 bg-muted hover:bg-muted/70 px-6 py-3 rounded-full transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <contact.icon size={20} className="text-primary" />
                <span className="font-medium">{contact.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Ready to start your own adventure? The world is waiting for you.
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
};

export default About;