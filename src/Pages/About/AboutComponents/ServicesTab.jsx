import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "E-Commerce Solutions",
  "SEO Optimization",
  "Digital Marketing",
  "Cloud Solutions",
  "Maintenance & Support",
];

const ServicesTab = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Our Services
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We offer a comprehensive range of digital services to help your
          business grow and succeed in the digital landscape.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start p-6 bg-gradient-to-br from-gray-900 to-black border border-green-600/30 rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-600/20 hover:border-green-600 transition-all duration-300 hover:scale-105"
          >
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600/20 to-green-700/20 border-2 border-green-600/30 flex items-center justify-center text-green-600 shadow-lg">
                <CheckCircle className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">
                {service}
              </h4>
              <p className="text-gray-300">
                We deliver custom {service.toLowerCase()} solutions tailored to
                your specific business needs and goals.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesTab;
