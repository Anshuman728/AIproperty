import { logos } from "../assets/logo";
import { motion } from "framer-motion";

const Companies = () => {
  return (
    <div className="mt-16 my-3 mx-6 ">
      {/* Trusted Companies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl pb-12 border border-gray-100"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-xl font-semibold text-gray-800 mb-2"
          >
            Trusted by 200+ companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-600 text-sm mb-8"
          >
            Leading companies trust our platform for their real estate needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
          >
            {[
              { src: logos.Googlelogo, alt: "Google" },
              { src: logos.Bookinglogo, alt: "Booking" },
              { src: logos.Airbnblogo, alt: "Airbnb" },
              { src: logos.Microsoftlogo, alt: "Microsoft" },
              { src: logos.Amazonlogo, alt: "Amazon" },
            ].map((company, index) => (
              <motion.div
                key={company.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 flex items-center justify-center p-4"
              >
                <img
                  className="w-full h-auto object-contain  transition-all duration-300"
                  src={company.src}
                  alt={company.alt}
                  width="158"
                  height="48"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Companies;
