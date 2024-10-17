import React from 'react';
import Hero from '../components/Hero';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team of e-commerce experts"
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8">We're here to answer any questions you have about our services. Reach out to us and we'll respond as soon as we can.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-4" />
                  <span>123 E-commerce Street, Digital City, 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-4" />
                  <span>info@risingsundistributors.com</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;