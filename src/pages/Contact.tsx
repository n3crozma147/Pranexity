import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Pranexity AI Solutions', 'Koramangala, Bangalore', 'Karnataka 560095, India'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['80 1234 5678', '80 8765 4321', 'Mon-Fri 9AM-6PM IST'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@pranexity.com', 'support@pranexity.com', 'careers@pranexity.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100"
          >
            Let's discuss how we can elevate your business with AI.
          </motion.p>
        </div>
      </div>

      {/* Contact Section */}
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-10 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-base text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-teal-50"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Location</h2>
            <p className="text-lg text-gray-600">
              Visit our office in the heart of Bangalore's tech hub
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              title="Pranexity AI Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9024022126976!2d77.5945627153953!3d12.971598890855219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e9f1c3cb%3A0xbaa8e9b5d9eb0a0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698839339670!5m2!1sen!2sin"
              className="w-full h-[450px] border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm text-white text-center p-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Visit Our Office</h3>
              <p className="text-lg mb-5">Pranexity AI Solutions, Koramangala, Bangalore</p>
              <a
                href="https://maps.google.com/?q=Pranexity+AI+Solutions,+Koramangala,+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Get Directions
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-cyan-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/20 via-teal-700/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the AI revolution. Let's build something extraordinary together.
            </p>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-700 rounded-full font-semibold hover:shadow-xl hover:scale-105 hover:bg-gray-100 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
