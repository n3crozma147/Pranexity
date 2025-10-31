import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Globe, TrendingUp } from 'lucide-react';
import Hero from '../components/Hero';

import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  const isK = value.includes("K");
  const isPercent = value.includes("%");
  const numericPart = parseFloat(value.replace(/[^\d.]/g, ""));
  const target = isK ? numericPart * 1000 : numericPart;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 10;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  const displayValue = () => {
    if (isK) return `${Math.floor(count / 1000)}K+`;
    if (isPercent) return `${Math.floor(count)}%`;
    return `${Math.floor(count)}+`;
  };

  return <div className="text-4xl md:text-5xl font-bold mb-2">{displayValue()}</div>;
};


const Home = () => {
  const verticals = [
    {
      icon: Activity,
      title: 'Healthcare',
      description: 'AI-powered telemedicine and diagnostic solutions for accessible healthcare.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Adaptive learning platforms that personalize education for every student.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Finance',
      description: 'Smart lending and fraud detection systems for secure financial services.',
      color: 'from-cyan-600 to-blue-600',
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Intelligent inventory and customer analytics for optimized retail operations.',
      color: 'from-slate-600 to-cyan-700',
    },
  ];

  const stats = [
    { icon: Users, value: '100K+', label: 'Users Empowered' },
    { icon: Zap, value: '50+', label: 'AI Solutions' },
    { icon: Globe, value: '15+', label: 'Cities Covered' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="AI That Elevates, Not Just Automates"
        subtitle="Empowering communities with accessible technology. Building smarter lives through AI-integrated infrastructure."
        ctaText="Explore Our Solutions"
        ctaLink="/services"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transforming Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring cutting-edge AI solutions to sectors that matter most to India's growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${vertical.color} flex items-center justify-center mb-6`}>
                  <vertical.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{vertical.title}</h3>
                <p className="text-gray-600 mb-4">{vertical.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     <section className="py-20 bg-gradient-to-br from-slate-800 via-cyan-900 to-teal-900 text-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <stat.icon className="w-12 h-12 mx-auto mb-4" />
          <AnimatedCounter value={stat.value} />
          <div className="text-lg opacity-90">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Pranexity?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're not just building technology. We're creating opportunities, empowering communities,
                and making AI accessible to every corner of India.
              </p>
              <ul className="space-y-4">
                {[
                  'Indian-first AI solutions designed for local needs',
                  'Job creation through AI-integrated infrastructure',
                  'Ethical and responsible AI development',
                  'Proven track record across multiple industries',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Learn About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations leveraging AI to create impact and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold border-2 border-cyan-600 hover:bg-cyan-50 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

import { Activity, GraduationCap, ShoppingBag } from 'lucide-react';

export default Home;
