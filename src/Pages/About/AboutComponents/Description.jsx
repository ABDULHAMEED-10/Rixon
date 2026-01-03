import { motion } from "framer-motion";

const Description = ({ 
  badge = "Welcome", 
  title = "Our Services", 
  description = "We provide comprehensive digital solutions to help your business grow and succeed in the digital world.",
  className = ""
}) => {
  return (
    <section className={`py-20 my-10 bg-gradient-to-b overflow-hidden ${className}`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              {badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Description;

