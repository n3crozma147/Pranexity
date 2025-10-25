import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, category, index }: ServiceCardProps) => {
  const IconComponent = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Box;

  const categoryColors: { [key: string]: string } = {
    Healthcare: 'from-red-500 to-pink-500',
    Education: 'from-blue-500 to-cyan-500',
    Finance: 'from-green-500 to-emerald-500',
    Retail: 'from-purple-500 to-violet-500',
    Agriculture: 'from-yellow-500 to-orange-500',
    Logistics: 'from-indigo-500 to-blue-500',
    'Smart Cities': 'from-teal-500 to-green-500',
  };

  const gradientClass = categoryColors[category] || 'from-gray-500 to-gray-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`}></div>

      <div className="p-6">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>

        <div className="mb-2">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradientClass} text-white`}>
            {category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-green-500 transition-all">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:h-1 group-hover:opacity-100 transition-all duration-300`}></div>
    </motion.div>
  );
};

export default ServiceCard;
