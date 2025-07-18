 import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Award, Heart, Target, Globe } from 'lucide-react';

const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 pt-6 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = '' }) => (
  <h2 className={`font-bold ${className}`}>{children}</h2>
);
const CardContent = ({ children, className = '' }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

const NSSIntroduction = () => {
  const stats = [
    { icon: Users, label: 'Active Volunteers', value: '500+', color: 'text-blue-600' },
    { icon: Calendar, label: 'Events Organized', value: '50+', color: 'text-green-600' },
    { icon: Award, label: 'Service Hours', value: '10,000+', color: 'text-purple-600' },
    { icon: Heart, label: 'Lives Impacted', value: '25,000+', color: 'text-red-600' },
  ];

  const objectives = [
    {
      icon: Target,
      title: 'Community Development',
      description: 'Engage in meaningful community service projects that create lasting positive impact.'
    },
    {
      icon: Users,
      title: 'Social Responsibility',
      description: 'Develop a sense of civic duty and social consciousness among students.'
    },
    {
      icon: Globe,
      title: 'National Integration',
      description: 'Foster unity and understanding across diverse communities and cultures.'
    },
    {
      icon: Heart,
      title: 'Character Building',
      description: 'Build leadership skills, empathy, and moral values through service learning.'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="space-y-8 mx-20"
    >
      {/* Mission Statement */}
      <motion.div variants={fadeInUp}>
        <Card className="border-l-4 border-l-blue-600">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-gray-700">
              The National Service Scheme (NSS) is a government-sponsored public service program under the
              Ministry of Youth Affairs & Sports, aimed at building social consciousness, civic responsibility,
              and leadership among students through voluntary community service. We believe in the philosophy
              of "Not Me, But You" - emphasizing service before self.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Statistics */}
      <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div variants={fadeInUp} custom={index} key={index} whileHover={{ scale: 1.05 }}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Objectives */}
      <motion.div variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Objectives</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <motion.div variants={fadeInUp} custom={index} key={index} whileHover={{ scale: 1.02 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{objective.title}</h3>
                        <p className="text-gray-600">{objective.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={fadeInUp}>
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-xl mb-6">
              Be part of a community that believes in making a difference. Together, we can create positive change.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Become a Volunteer
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default NSSIntroduction;
