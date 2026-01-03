import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Clock, Users, Award, Code, Smartphone, Palette, Database } from "lucide-react";

const stats = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    value: "48+",
    label: "Projects Done",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "2100+",
    label: "Hours Logged",
  },
  { 
    icon: <Users className="h-6 w-6" />, 
    value: "30+", 
    label: "Active Clients" 
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "36+",
    label: "Deployed Sites",
  },
];

const CompanyTab = () => {
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
      className="space-y-16"
    >
      {/* Founder Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-600/20 rounded-full z-0"></div>
          <div className="relative rounded-lg shadow-xl border-2 border-green-600/30 overflow-hidden bg-gray-900">
            <img
              src="/Team/abdulhameed.jpg"
              alt="Abdul Hameed - Founder of Rixon Agency"
              className="w-full object-cover object-top h-[450px] md:h-[550px]"
              style={{ objectPosition: 'center top' }}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600/10 rounded-full z-0"></div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Abdul Hameed
          </h3>
          <p className="text-xl md:text-2xl text-green-600 font-semibold mb-6">
            Software Engineer & Founder of Rixon Agency
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I am an Entrepreneur and Founder & CEO leading multiple companies and digital ventures. 
            I specialize in building scalable businesses, guiding high performing technical teams, 
            and delivering innovative technology solutions that drive sustainable growth and impact.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            With expertise in AI-Powered SaaS, Microservices, Web Design & UI/UX Solutions, 
            I've successfully delivered 48+ projects, logged 2100+ hours, and currently serve 
            30+ active clients across Europe, America, UK, Australia, and Worldwide.
          </p>

          {/* Stats Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">By the Numbers</h4>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-900 to-black border border-green-600/30 rounded-xl hover:border-green-600 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600/20 border-2 border-green-600/30 rounded-xl text-green-600">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.a
            href="https://www.abdulhameed.dev/"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            View Portfolio
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>


      {/* Company Story */}
      <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900 to-black border border-green-600 rounded-xl p-8 md:p-12 shadow-lg hover:border-green-500 hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-300">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white" style={{ fontFamily: "'Ample Display', 'Arial Black', 'Arial Bold', sans-serif" }}>
          About <span className="text-white">Rix</span><span className="text-green-600">on</span> Agency
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Rixon Agency was founded with a mission to help businesses thrive in the digital world. 
          We combine creativity, technical expertise, and strategic thinking to deliver exceptional 
          digital solutions that drive business growth.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          We believe in creating long-term partnerships with our clients, understanding their unique 
          challenges, and delivering solutions that exceed expectations. Our collaborative approach 
          and commitment to excellence have earned us the trust of clients across industries worldwide.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-green-600/30">
            <Code className="h-5 w-5 text-green-600" />
            <span className="text-white text-sm">Web Development</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-green-600/30">
            <Smartphone className="h-5 w-5 text-green-600" />
            <span className="text-white text-sm">App Development</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-green-600/30">
            <Palette className="h-5 w-5 text-green-600" />
            <span className="text-white text-sm">UI/UX Design</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-green-600/30">
            <Database className="h-5 w-5 text-green-600" />
            <span className="text-white text-sm">AI & Data Science</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompanyTab;
