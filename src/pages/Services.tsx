import React from 'react';
import Hero from '../components/Hero';
import { ShoppingCart, BarChart, Users, Globe, Search, Megaphone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="Comprehensive e-commerce solutions to fuel your online success"
        imageSrc="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<ShoppingCart size={48} />}
              title="Amazon & Multi-Platform Store Setup"
              description="We expertly set up and optimize your stores across Amazon, Shopify, eBay, and more, ensuring a strong presence on all major e-commerce platforms."
            />
            <ServiceCard
              icon={<BarChart size={48} />}
              title="Inventory Management"
              description="Our advanced inventory management solutions keep your stock levels optimized, preventing stockouts and overstock situations across all your sales channels."
            />
            <ServiceCard
              icon={<Users size={48} />}
              title="Account Management & Optimization"
              description="We provide ongoing account management and optimization services to maximize your store's performance, improve search rankings, and boost sales."
            />
            <ServiceCard
              icon={<Globe size={48} />}
              title="Global Shipping & Logistics"
              description="Leverage our global shipping and logistics network to efficiently deliver your products worldwide, reducing costs and improving customer satisfaction."
            />
            <ServiceCard
              icon={<Search size={48} />}
              title="Exclusive Product Sourcing"
              description="Access our extensive network of manufacturers and suppliers to source unique, high-demand products that set your store apart from the competition."
            />
            <ServiceCard
              icon={<Megaphone size={48} />}
              title="Brand Strategy & Marketing"
              description="Develop a strong brand identity and implement effective marketing strategies to increase visibility, attract customers, and drive sales growth."
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Rising Sun Distributors?</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-4">At Rising Sun Distributors, we bring years of experience in both traditional distribution and e-commerce to help your business thrive in the digital marketplace. Our comprehensive suite of services is designed to address every aspect of your online selling journey.</p>
            <p className="mb-4">From setting up your store on multiple platforms to managing your inventory, optimizing your accounts, and handling global logistics, we've got you covered. Our exclusive product sourcing capabilities and strategic marketing approach ensure that your brand stands out in a crowded market.</p>
            <p>Partner with us to unlock the full potential of your e-commerce business and experience growth like never before.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Services;