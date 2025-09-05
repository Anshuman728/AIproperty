import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { RadialGradient } from "react-text-gradients";
import { HeroHighlight } from "./ui/hero-highlight";
const popularLocations = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
];

// High-quality real estate images from Unsplash
const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop",
];

export const AnimatedContainer = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directions = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring({
    from: {
      transform: `translate${directions[direction]}(${
        reverse ? `-${distance}px` : `${distance}px`
      })`,
    },
    to: inView ? { transform: `translate${directions[direction]}(0px)` } : {},
    config: { tension: 50, friction: 25 },
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

AnimatedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  distance: PropTypes.number,
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  reverse: PropTypes.bool,
};

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (location = searchQuery) => {
    navigate(`/properties?location=${encodeURIComponent(location)}`);
  };

  return (
    <AnimatedContainer distance={50} direction="vertical">
      <div className="mt-20">
        <div className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 my-3 mx-6">
          {/* Background Image Carousel with Enhanced Overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0 rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform scale-105"
                style={{
                  backgroundImage: `url(${images[currentImageIndex]})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-900/60 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Image Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <RadialGradient
                  gradient={[
                    "circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 100%",
                  ]}
                >
                  Find Your Perfect
                  <br />
                  <span className="text-white z-50">Living Space</span>
                </RadialGradient>
              </h1>

              <p className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-light">
                Discover your dream home in the most sought-after locations
              </p>
            </motion.div>

            {/* Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative max-w-md mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Enter location..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-0 bg-white/90 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <button
                  onClick={() => handleSubmit()}
                  className="md:w-auto w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 
                    transition-colors flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg
                    transform hover:scale-105 transition-transform duration-200"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>

              {/* Location Suggestions */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg divide-y divide-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      <h3 className="text-xs font-medium text-gray-500 px-3 mb-2">
                        Popular Locations
                      </h3>
                      {popularLocations.map((location) => (
                        <button
                          key={location}
                          onClick={() => {
                            setSearchQuery(location);
                            handleSubmit(location);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center 
                            justify-between text-gray-700 transition-colors hover:bg-blue-50"
                        >
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                            <span>{location}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default Hero;
