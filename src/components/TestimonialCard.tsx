import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({ name, role, company, image, quote, rating, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-xl p-8 relative hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="absolute top-6 right-6 text-orange-500 opacity-20">
        <Quote className="w-16 h-16" />
      </div>

      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-orange-500 to-green-500"
        />
        <div className="ml-4">
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm font-semibold text-blue-600">{company}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed italic">
        "{quote}"
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 rounded-b-2xl"></div>
    </motion.div>
  );
};

export default TestimonialCard;
