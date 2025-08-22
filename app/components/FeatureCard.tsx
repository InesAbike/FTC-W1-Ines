import React from 'react';
import { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="">
      <div className="bg-gray-900/80 backdrop-blur-sm border border-fuchsia-600/20 rounded-2xl p-8 w-full shadow-2xl hover:shadow-3xl shadow-[#61597170] hover:bg-gray-900/90 hover:border-gray-600/70 hover:scale-105 transition-all duration-300 ease-out group">
        {/* Icon */}
        <div className="mb-2">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer ${feature.iconColor}`}>
            {feature.icon}
          </div>
        </div>

        {/* Title */}
        <div className="mb-2">
          <h2 className="text-white text-2xl font-bold mb-4 leading-tight">
            {feature.title}
          </h2>
        </div>

        {/* Description */}
        <div className="mb-2">
          <p className="text-gray-300 text-base leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* CTA Link */}
        <div>
          <a
            href="#"
            className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300/50 text-sm"
          >
            {feature.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;