import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Home: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div>
      <Hero
        title="Welcome to Rising Sun Distributors"
        subtitle="Empowering businesses to thrive in the global e-commerce market"
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
        large={true}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="mb-6">To empower businesses with cutting-edge e-commerce solutions, enabling them to reach new heights in the digital marketplace. We strive to be the bridge between quality products and global consumers, fostering growth and innovation in online retail.</p>
              <Link to="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="mb-6">To be the world's leading e-commerce enabler, recognized for our innovative solutions, unparalleled product access, and commitment to our clients' success. We envision a future where every business, regardless of size, can thrive in the global digital economy.</p>
              <Link to="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="max-w-3xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="mb-4 border-b border-gray-300 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-xl font-semibold">{item.title}</span>
                  {openItem === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                {openItem === index && (
                  <p className="mt-2 text-gray-600">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">E-commerce Solutions</h3>
              <p className="mb-4">Comprehensive strategies for Amazon, Shopify, eBay, and more.</p>
              <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Product Distribution</h3>
              <p className="mb-4">Access to hard-to-find, name-brand products through our exclusive network.</p>
              <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Growth Consulting</h3>
              <p className="mb-4">Expert advice to help your business expand in the competitive online market.</p>
              <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const whyChooseUs = [
  {
    title: "Exclusive Product Access",
    description: "Tap into a network of unique, high-demand products that will set your store apart from the competition."
  },
  {
    title: "Multi-Platform Expertise",
    description: "Whether you're on Amazon, Shopify, or eBay, our team has the specialized knowledge to help you succeed across all major e-commerce platforms."
  },
  {
    title: "Comprehensive Support",
    description: "From initial setup to ongoing management and optimization, we're with you every step of the way on your e-commerce journey."
  },
  {
    title: "Proven Track Record",
    description: "We've helped countless sellers grow their businesses with our customized solutions and data-driven strategies."
  }
];

const testimonials = [
  {
    quote: "Rising Sun Distributors transformed our e-commerce strategy. Their expertise in multi-platform selling has been invaluable to our growth.",
    name: "Sarah Johnson",
    position: "CEO, TechGadgets Inc."
  },
  {
    quote: "The product sourcing capabilities of Rising Sun are unmatched. They've helped us access unique products that set us apart from competitors.",
    name: "Michael Chen",
    position: "Founder, GlobalMarket"
  },
  {
    quote: "Their growth consulting services provided us with actionable insights that doubled our online sales within six months.",
    name: "Emily Rodriguez",
    position: "Marketing Director, FashionForward"
  }
];

export default Home;