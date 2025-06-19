
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    rating: 5,
    text: "Eu já tentei tanto na internet que quase desisti, e depois de pegar esse pack, em 20 dias eu fiz 1200 dólares no TikTok!"
  },
  {
    name: "João Santos",
    rating: 5,
    text: "Nunca contratei agência, e tinha medo de contratar. Peguei o pack de conteúdos, e realmente tem muita opções. Minha rede social hoje tem uma outra cara! Obrigada por tanto!"
  },
  {
    name: "Ana Costa",
    rating: 5,
    text: "Em 15 dias usando os templates, consegui triplicar meu engajamento e fazer minhas primeiras vendas online. Incrível!"
  },
  {
    name: "Pedro Lima",
    rating: 5,
    text: "Os prompts do ChatGPT são ouro puro! Criei 3 produtos digitais em uma semana e já estou vendendo."
  },
  {
    name: "Carla Oliveira",
    rating: 5,
    text: "Nunca pensei que seria tão fácil criar conteúdo viral. Os vídeos prontos me salvaram tempo e dinheiro!"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 text-center">
              <div className="flex justify-center mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
