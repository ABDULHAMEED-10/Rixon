// Brand images are now in public/Trusted BY folder
// Testimonial images are now in public/Testimonials folder

const servicestype = [
  {
    id: 1,
    to: "/service/webDevelopment",
    title: "Web Development",
  },
  {
    id: 2,
    to: "/service/mobileDevelopment",
    title: "App Development",
  },
  {
    id: 3,
    to: "/service/uiux",
    title: "UI/UX Designing",
  },
  {
    id: 4,
    to: "/service/graphicDesigning",
    title: "Graphic Designing",
  },
  {
    id: 5,
    to: "/service/seo",
    title: "SEO",
  },
  {
    id: 6,
    to: "/service/Ecommerce",
    title: "E-commerce",
  },
  {
    id: 7,
    to: "/service/dataScience",
    title: "Data Science",
  },
];
const brandsData = [
  {
    id: 1,
    imageSrc: "/Trusted BY/AAWIC logo.png",
    altText: "AAWIC",
    website: "https://www.aawic.org",
  },
  {
    id: 2,
    imageSrc: "/Trusted BY/haliqo logo.png",
    altText: "Haliqo",
    website: "https://www.haliqo.com",
  },
  {
    id: 3,
    imageSrc: "/Trusted BY/hectors logo.png",
    altText: "Hectors",
    website: "https://www.hectorsglobalhair.com/",
  },
  {
    id: 4,
    imageSrc: "/Trusted BY/nfoh-logo.png",
    altText: "NFOH",
    website: "https://nfohworld.com/",
  },
  {
    id: 5,
    imageSrc: "/Trusted BY/Vholocity Logo.png",
    altText: "Vholocity",
    website: "https://www.vholocity.com",
  },
];
const servicesData = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Web Development",
    description:
      "Build powerful, responsive websites and web applications that deliver exceptional user experiences and drive business growth.",
    lnk: "/service/webDevelopment",
  },
  {
    id: 2,
    icon: "fas fa-mobile-alt",
    title: "App Development",
    description:
      "Create innovative mobile applications for iOS and Android that engage users and scale with your business needs.",
    lnk: "/service/mobileDevelopment",
  },
  {
    id: 3,
    icon: "fas fa-paint-brush",
    title: "UI/UX Designing",
    description:
      "Design intuitive and beautiful user interfaces that enhance user satisfaction and improve conversion rates.",
    lnk: "/service/uiux",
  },
  {
    id: 4,
    icon: "fas fa-palette",
    title: "Graphic Designing",
    description:
      "We provide professional graphic design services to create stunning visual identities and marketing materials for your brand.",
    lnk: "/service/graphicDesigning",
  },
  {
    id: 5,
    icon: "fas fa-search",
    title: "SEO",
    description:
      "We provide comprehensive SEO services to improve your website's visibility and drive organic traffic to your business.",
    lnk: "/service/seo",
  },
  {
    id: 6,
    icon: "fas fa-shopping-cart",
    title: "E-commerce",
    description:
      "We provide complete e-commerce solutions to help you build and grow your online store with seamless shopping experiences.",
    lnk: "/service/Ecommerce",
  },
  {
    id: 7,
    icon: "fas fa-chart-line",
    title: "Data Science",
    description:
      "We provide data science and analytics services to help you make data-driven decisions and unlock insights from your data.",
    lnk: "/service/dataScience",
  },
];

const discountData = [
  {
    id: 1,
    icon: "fa-solid fa-circle-check",
    title: "Army Veterans - 20% Off",
    description:
      "Rixon Honor You, 20% Discount for Army Veterans. You Served Us, Now Let Us Serve You.",
    lnk: "",
  },
  {
    id: 2,
    icon: "fa-solid fa-hand-holding-hand",
    title: "Individuals over 60",
    description:
      "Special 20% Discount for Individuals Over 60. Let Us Help You, Every Step of the Way.",
    lnk: "",
  },
  {
    id: 3,
    icon: "fas fa-rocket",
    title: "Under 20 Enterpreneurs",
    description:
      "Special 15% Discount for Entrepreneurs Under 20. Your Ideas Deserve Our Respect and Support.",
    lnk: "",
  },
];

const reviewsData = [
  {
    id: 1,
    pic: "/Testimonials/Haitam.jpeg",
    name: "Haitam Ajnaoua",
    designation: "Founder of Haliqo",
    company: "Haliqo",
    location: "Belgium",
    review:
      "Abdul delivered an excellent solution using Next.js, Supabase, and AWS, with a strong focus on scalability and reliability. The AI features were well integrated and added real value to the platform, enhancing our workflow efficiency significantly. Peppol-compliant invoice handling was implemented correctly and professionally, meeting all required standards and ensuring seamless compliance. His attention to detail and technical expertise throughout the development process was outstanding. Abdul's ability to understand our business needs and translate them into robust technical solutions has been invaluable. Overall, a very solid and well-executed technical solution that continues to serve our business effectively.",
  },
  {
    id: 2,
    pic: "/Testimonials/michael-pendleton.jpg",
    name: "Michael Pendleton",
    designation: "Founder of NFOH",
    company: "NFOH World",
    location: "USA",
    review:
      "Abdul serves as our Lead Technologist, creating a new Digital Economy centered on Media, Arts & Entertainment. He has been instrumental in identifying technology platforms that enable an Independent Data Warehouse, making content more intelligent through AI and machine learning. His innovation provides a smart decentralized highway powered by VR, AR, and Mixed Reality, allowing us to create immersive experiences beyond imagination. I highly recommend Abdul. He creates custom solutions that directly meet your needs and establish an Iconic Advantage in the global marketplace.",
  },
  {
    id: 3,
    pic: "/Testimonials/terra-renee.jpg",
    name: "Terra Renee",
    designation: "Founder of AAWIC",
    company: "AAWIC",
    location: "USA",
    review:
      "Working with Abdul has been an exceptional experience. His technical expertise and attention to detail transformed our vision into a powerful digital platform. He demonstrated deep understanding of our mission and delivered a solution that not only meets but exceeds our expectations. Abdul's ability to combine cutting-edge technology with user-centric design has significantly elevated our online presence and engagement. His professionalism, communication, and commitment to excellence make him an invaluable partner for any organization looking to make a meaningful impact in the digital space.",
  },
  {
    id: 4,
    pic: "/Testimonials/hectors.jpg",
    name: "Hector Obeng",
    designation: "Owner & Founder",
    company: "Hector's Global Hair",
    location: "UK",
    review:
      "Abdul transformed our business with a comprehensive, AI-enhanced eCommerce platform that perfectly captures our diverse brand offerings. From perfumes and fashion to hair services and beyond, the platform seamlessly handles our entire product range. The intelligent product recommendations, integrated booking system, and responsive design have significantly enhanced our customer experience across all services. Abdul's technical expertise and understanding of our multi-faceted business model have been instrumental in growing our digital presence and streamlining operations.",
  },
];

const statsData = [
  {
    id: 1,
    icon: "fa-solid fa-crown",
    title: "We Own Every Corner of the Market from 2024",
    description:
      "From AI and Mobile App Development to Marketing and Design.Our comprehensive team of experts tackles it all.",
  },
  {
    id: 2,
    icon: "fa-solid fa-comments",
    title: "Our Multilingual Agents Deliver a Proven Win-Win",
    description:
      "Communication made easy! Our 8+ language agents understand your needs and ensure a smooth conversation experience.",
  },
  {
    id: 3,
    icon: "fa-solid fa-phone",
    title: "Free Consultation, Real Results for Free",
    description:
      "Get a free 30-minute consultation for your business idea.No $250 charge - we're your allies, offering this service for free.",
  },
  {
    id: 4,
    icon: "fa-solid fa-video",
    title: "Two meetings a week,every update on Time",
    description:
      "We prioritize our clients by two weekly meetings to showcase our progress, gather feedback, and ensure it with their vision.",
  },
];

const titleParaInfo = [
  {
    id: 1,
    title: "Top Featured Services",
    heading: "Experience Top Services of Our Agency",
    description:
      "These are the Special services of Rixon,Guaranteed Satisfaction and Professionalism.",
  },
  {
    id: 2,
    title: "Thats How We Work",
    heading: "Experience Rixon's Flows",
    description:
      "Think of our algorithm like butter on bread—smooth and effortless. It's that simple! Each step flows seamlessly, making meetings a breeze.",
  },
  {
    id: 3,
    title: "SPECIAL DISCOUNTS",
    heading: "Special Offers for Special People by Rixon",
    description: "Get the Best Offers and Discounts on our Services.",
  },
  {
    id: 4,
    title: "Why People Choose Us",
    heading: "Why Choose Rixon Over Others",
    description:
      "With over 1 million agencies out there, here's what sets us apart and keeps clients winning.",
  },
  {
    id: 5,
    title: "Our Happy Clients",
    heading: "What Our Clients Say About Us",
    description:
      "Our clients are our biggest supporters. Take a look for yourself in the testimonials.",
  },
  {
    id: 6,
    title: "FAQs",
    heading: "Frequently Asked Questions",
    description: "",
  },
];
const FAQdata = [
  {
    id: 1,
    icon: "fa-solid fa-lightbulb",
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services, including web development, app development, UI/UX designing, SEO, e-commerce, and data science. Our team of experts is dedicated to helping you grow your business online.",
  },
  {
    id: 2,
    icon: "fa-solid fa-book",
    question: "How do I get started with Rixon?",
    answer:
      "Getting started with Rixon is easy! Simply fill out our contact form, and one of our agents will reach out to you to discuss your needs and recommend the best solutions for your business.",
  },
  {
    id: 3,
    icon: "fa-solid fa-pen-to-square",
    question: "What makes Rixon different from other agencies?",
    answer:
      "Rixon is different from other agencies because we prioritize our clients' needs and deliver high-quality work on time and within budget. Our team of experts is committed to helping you achieve your business goals and grow your online presence.",
  },
  {
    id: 4,
    icon: "fa-solid fa-handshake",
    question: "Do you offer free consultations?",
    answer:
      "Yes! We offer free 30-minute consultations for your business idea. Our team of experts will provide you with valuable insights and recommendations to help you get started on the right foot.",
  },
];
const allProjects = [
  // Web Projects
  {
    id: 1,
    title: "HALIQO – Artisans SaaS",
    category: "web",
    tags: ["React", "Supabase", "OpenAI", "Peppol invoices", "Stripe"],
    image: "/Projects/Web/Haliqo.png",
    description:
      "AI-powered business management platform for artisans and craftsmen. Features intelligent quote generation, automated invoicing with Peppol compliance, advanced lead tracking, and seamless payment processing.",
    client: "Haliqo",
    date: "",
    link: "https://www.haliqo.com/",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Hectors – eCommerce Store",
    category: "web",
    tags: ["Next.js", "Supabase", "OpenAI", "Chatbot", "Stripe"],
    image: "/Projects/Web/Hectors.png",
    description:
      "Modern AI-enhanced eCommerce platform with intelligent product recommendations and integrated booking system. Features responsive design, real-time inventory management, AI-powered chatbot support, and secure payment processing.",
    client: "Hector's Global Hair",
    date: "",
    link: "https://www.hectorsglobalhair.com/",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Dubease – AI Voice Dubbing Platform",
    category: "web",
    tags: ["MERN Stack", "FFmpeg", "TTS", "Machine Learning"],
    image: "/Projects/Web/Dubease.png",
    description:
      "Multilingual voice cloning video dubbing platform with emotional voices. Advanced AI powered solution that enables seamless video dubbing without relying on external APIs.",
    client: "Dubease",
    date: "",
    link: "https://dubease.vercel.app/",
    github: "#",
    featured: true,
  },
  {
    id: 4,
    title: "NFOH World – Immersive Digital Entertainment",
    category: "web",
    tags: ["Next.js", "VR/AR", "Immersive Tech", "Digital Media"],
    image: "/Projects/Web/nfoh.png",
    description:
      "Next-generation digital entertainment ecosystem blending VR, AR, and mixed reality with creative storytelling.",
    client: "NFOH",
    date: "",
    link: "https://nfohworld.com/",
    github: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Vholocity – Open World Gaming Platform",
    category: "web",
    tags: ["Next.js", "Web Platform", "Interactive Design", "Gaming Tech"],
    image: "/Projects/Web/Vholocity.png",
    description:
      "Immersive open world video game platform offering interactive exploration and dynamic gameplay experiences.",
    client: "Vholocity",
    date: "",
    link: "https://vholocity.com/",
    github: "#",
    featured: true,
  },
  {
    id: 6,
    title: "AAWIC – Digital Platform",
    category: "web",
    tags: ["Next.js", "React", "Web Platform", "Digital Media"],
    image: "/Projects/Web/aawic.png",
    description:
      "Robust and user-friendly platform for AAWIC that perfectly meets organizational needs. Features modern design, seamless user experience, and comprehensive functionality for digital engagement.",
    client: "AAWIC",
    date: "",
    link: "https://aawic.vercel.app/",
    github: "#",
    featured: true,
  },
  // App Projects
  {
    id: 7,
    title: "Cabs – Ride Booking App",
    category: "mobile",
    tags: ["React Native", "Mobile App", "Booking System"],
    image: "/Projects/App/Cabs.png",
    description:
      "Modern ride booking mobile application with real-time tracking, secure payment processing, and seamless user experience.",
    client: "Cabs",
    date: "",
    link: null,
    github: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Crypto – Cryptocurrency Trading App",
    category: "mobile",
    tags: ["React Native", "Mobile App", "Crypto Trading"],
    image: "/Projects/App/Crypto.png",
    description:
      "Comprehensive cryptocurrency trading mobile application with real-time market data, secure wallet integration, and advanced trading features.",
    client: "Crypto",
    date: "",
    link: null,
    github: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Kids Game – Educational Gaming App",
    category: "mobile",
    tags: ["React Native", "Mobile App", "Educational Games"],
    image: "/Projects/App/Kids Game.png",
    description:
      "Engaging educational gaming application designed for children with interactive learning experiences and fun gameplay mechanics.",
    client: "Kids Game",
    date: "",
    link: null,
    github: "#",
    featured: false,
  },
  {
    id: 10,
    title: "Restaurant – Food Ordering App",
    category: "mobile",
    tags: ["React Native", "Mobile App", "Food Delivery"],
    image: "/Projects/App/Resturant.png",
    description:
      "Complete food ordering and delivery mobile application with menu browsing, order tracking, and integrated payment system.",
    client: "Restaurant",
    date: "",
    link: null,
    github: "#",
    featured: false,
  },
];
export {
  servicestype,
  brandsData,
  servicesData,
  discountData,
  reviewsData,
  statsData,
  titleParaInfo,
  FAQdata,
  allProjects,
};
