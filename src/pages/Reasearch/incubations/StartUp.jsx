 import React from "react";
import {
  UserCog,
  HandCoins,
  Settings,
  Scale,
  Handshake,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";

const StartUp = () => {
  const supportServices = [
    {
      title: "Mentorship Program",
      description:
        "One-on-one guidance from industry experts and successful entrepreneurs",
      icon: UserCog,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Funding Support",
      description:
        "Access to seed funding, angel investors, and venture capital networks",
      icon: HandCoins,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Technical Infrastructure",
      description: "State-of-the-art labs, equipment, and research facilities",
      icon: Settings,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Legal & IP Support",
      description:
        "Patent filing, trademark registration, and legal compliance assistance",
      icon: Scale,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Market Access",
      description:
        "Industry connections, customer introductions, and partnership opportunities",
      icon: Handshake,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Skill Development",
      description:
        "Workshops, training programs, and business development courses",
      icon: GraduationCap,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto mt-15 mb-12 px-4">
      {/* Stats */}
      <div className="py-12 mb-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Startups Incubated", value: "50+", color: "blue" },
              { label: "Funding Raised", value: "₹25Cr+", color: "green" },
              { label: "Jobs Created", value: "200+", color: "cyan" },
              { label: "Success Rate", value: "75%", color: "yellow" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`bg-white shadow-md hover:shadow-lg transition rounded-2xl p-6 text-center border-t-4 border-${stat.color}-500`}
              >
                <div className={`text-4xl font-extrabold text-${stat.color}-600`}>
                  {stat.value}
                </div>
                <p className="text-gray-600 mt-2 text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Services */}
      <div className="text-center mb-10">
        <h3 className="text-3xl text-primary font-bold">
          Startup Support Services
        </h3>
        <p className="text-gray-500">
          Comprehensive ecosystem to help your startup succeed
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {supportServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center p-6"
            >
              <div className={`w-20 h-20 mx-auto ${service.color} rounded-full flex items-center justify-center mb-4`}>
                <Icon className="w-8 h-8" />
              </div>
              <h5 className="text-lg font-semibold mb-2 text-gray-800">
                {service.title}
              </h5>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Success Story */}
      <SuccessStoriesCarousel />

      {/* Application Process */}
      <div className="text-center mb-10">
        <h3 className="text-2xl text-primary font-semibold">
          Join Our Startup Ecosystem
        </h3>
        <p className="text-gray-500">Simple process to get started</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["Apply Online", "Evaluation", "Pitch Presentation", "Incubation"].map(
          (step, index) => {
            const colors = [
              "bg-pink-400",
              "bg-green-600",
              "bg-sky-500",
              "bg-yellow-500",
            ];
            const descriptions = [
              "Submit your startup idea and business plan",
              "Expert panel reviews your application",
              "Present your idea to our selection committee",
              "Begin your startup journey with our support",
            ];
            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div
                  className={`text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-3 ${colors[index]}`}
                >
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h6 className="font-semibold text-gray-800">{step}</h6>
                <p className="text-sm text-gray-500">
                  {descriptions[index]}
                </p>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default StartUp;
