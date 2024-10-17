import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  large?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageSrc, large = false }) => {
  return (
    <div className={`relative ${large ? 'h-screen' : 'h-96'} flex items-center justify-center text-white`}>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-20 text-center">
        <h1 className={`font-bold mb-4 ${large ? 'text-6xl' : 'text-4xl'}`}>{title}</h1>
        <p className={`${large ? 'text-xl' : 'text-lg'} max-w-2xl mx-auto`}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;