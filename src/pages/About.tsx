import React from 'react';
import Hero from '../components/Hero';

const About: React.FC = () => {
  return (
    <div>
      <Hero
        title="About Rising Sun Distributors"
        subtitle="Our journey from Caribbean roots to global e-commerce solutions"
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">Rising Sun Distributors began its journey in the heart of the Caribbean, distributing quality food products and health remedies to local retailers. Our deep understanding of the region's unique market needs and our commitment to quality quickly established us as a trusted partner in the distribution industry.</p>
            <p className="mb-4">As the world of commerce evolved, so did we. Recognizing the immense potential of e-commerce, we expanded our horizons beyond the Caribbean shores. We leveraged our expertise in distribution and our extensive network of manufacturers and buyers to venture into the global online marketplace.</p>
            <p className="mb-4">Today, Rising Sun Distributors stands as a leading e-commerce solutions provider, helping businesses of all sizes thrive across major platforms like Amazon, Shopify, and eBay. Our journey from local distributors to global e-commerce enablers has equipped us with a unique perspective and a wealth of experience that we bring to every client partnership.</p>
            <p>Our mission remains unchanged: to empower businesses with the tools, products, and expertise they need to shine brightly in the competitive world of online selling. At Rising Sun Distributors, we're not just distributing products; we're distributing success.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;