import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-2xl p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
            placeholder="98765 43210"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      <div className="flex items-center justify-between">
        <motion.button
          type="submit"
          disabled={isSubmitting || isSuccess}
          whileTap={{ scale: 0.95 }}
          animate={{
            backgroundColor: isSuccess
              ? '#16a34a' // green when sent
              : 'linear-gradient(to right, #06b6d4, #0d9488)',
            scale: isSubmitting ? 0.97 : 1,
          }}
          transition={{ duration: 0.3 }}
          className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold text-white ${
            isSuccess
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:shadow-lg hover:scale-105'
          } transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="sending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <motion.div
                  className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                  transition={{ repeat: Infinity, duration: 1 }}
                ></motion.div>
                Sending...
              </motion.div>
            ) : isSuccess ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <CheckCircle className="w-5 h-5 mr-2 text-white" />
                Message Sent
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center text-green-600 font-semibold"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Message sent successfully!
          </motion.div>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;
