
import React from 'react';

interface ProductFeatureProps {
  icon: string;
  title: string;
  description: string;
  imagePlaceholder: string;
  bgColor: string;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ 
  icon, 
  title, 
  description, 
  imagePlaceholder, 
  bgColor 
}) => {
  return (
    <div className={`${bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl shadow-md">
            {icon}
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center text-white/70 text-xs text-center p-2">
            {imagePlaceholder}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
