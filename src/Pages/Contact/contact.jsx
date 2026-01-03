import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="py-20 my-10 overflow-hidden bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-600/20 text-green-600 border border-green-600/30 text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Get In <span className="text-green-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">Contact Information</h2>
                <p className="text-gray-300 mb-4 text-sm">
                  We're here to help! Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:info@rixon.agency"
                  className="flex items-center gap-3 p-3 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-green-600 hover:border-green-500 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-base font-semibold group-hover:text-green-600 transition-colors duration-300">
                      info@rixon.agency
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+923000713825"
                  className="flex items-center gap-3 p-3 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-green-600 hover:border-green-500 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="text-base font-semibold group-hover:text-green-600 transition-colors duration-300">
                      +92 3000 713 825
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-green-600">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-base font-semibold text-white">Serving Globally</p>
                    <p className="text-xs text-gray-400">Europe, America, UK, Australia & Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t border-green-600">
                <div className="rounded-xl p-4">
                  <p className="text-sm md:text-base font-bold text-white mb-1">Follow Us</p>
                  <p className="text-xs text-gray-400 mb-3">Connect with us on social media</p>
                  <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href="https://x.com/abdulhameed013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/Abdul.Hameedx001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/abdulhameed.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mrahameed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-green-600 p-5 md:p-6 shadow-xl"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Send us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-green-600">Message Sent!</p>
                  <p className="text-gray-400 mt-2">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-green-600/50 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/30 focus:placeholder:opacity-0 transition-all duration-300 text-white placeholder:text-gray-500 placeholder:transition-opacity"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-green-600/50 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/30 focus:placeholder:opacity-0 transition-all duration-300 text-white placeholder:text-gray-500 placeholder:transition-opacity"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-green-600/50 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/30 focus:placeholder:opacity-0 transition-all duration-300 text-white placeholder:text-gray-500 placeholder:transition-opacity"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

    <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2.5 border border-green-600/50 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/30 focus:placeholder:opacity-0 transition-all duration-300 resize-none text-white placeholder:text-gray-500 placeholder:transition-opacity"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="nav__button w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
