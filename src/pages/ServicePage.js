import React, { useRef } from 'react';

import ServiceCard from '../components/ServiceCard';
import HighlightedProduct from '../components/HighlightedProduct';
import ClientTestimonial from '../components/ClientTestimonial';

import javaImage from '../assets/images/java.jpeg';
import ds from '../assets/images/ds.jpeg';
import dbms from '../assets/images/dbms.png';
import cs from '../assets/images/cs.jpeg';
import mern from '../assets/images/mern.png';

function ServicePage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 200;
    } else {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="service-page p-4">
      
      <div className="relative">
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10">
          &lt;
        </button>
        <div 
          className="service-cards flex overflow-x-scroll scrollbar-hide space-x-4" 
          ref={scrollRef}
        >
          <ServiceCard 
            name="Java" 
            description="A course on Java..." 
            image={javaImage} 
            rating={4.9}  // Added rating for Java
          />
          <ServiceCard 
            name="Data science" 
            description="Data science combines math and statistics..." 
            image={ds} 
            rating={4.5}  // Added rating for Data Science
          />
          <ServiceCard 
            name="DBMS" 
            description="Database Management System is a software or technology..." 
            image={dbms} 
            rating={4.1}  // Added rating for DBMS
          />
          {/* Add more ServiceCards as needed */}
        </div>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10">
          &gt;
        </button>
      </div>

      <h2 className="text-3xl font-bold mt-8">Highlighted Products</h2>
      <div className="highlighted-products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <HighlightedProduct name="Cyber Security" description="Cybersecurity is the practice of protecting systems, networks,
         and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users through ransomware; or interrupting normal business processes.
Implementing effective cybersecurity measures is particularly challenging today because there are 
more devices than people, and attackers are becoming more innovative.
A successful cybersecurity posture has multiple layers of protection spread across the computers, 
networks, programs, or data that one intends to keep safe. 
In an organization, a unified threat management gateway system can automate integrations across 
products and accelerate key security operations functions: detection, investigation, and remediation. 
People, processes, and technology must all complement one another to create an effective defense from
 cyberattacks." image={cs} />
        <HighlightedProduct name="MERN stack" description="The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node.js, with each component playing a role in the development process. MongoDB serves as a document-oriented database that can efficiently store data in JSON format. Express is a web application framework that provides a set of features to streamline the assembly of web applications. React is a front-end JavaScript library that offers a large toolkit for crafting user interfaces. Node.js is the runtime environment for execution of JavaScript code on the server side, coordinating communication between front-end and back-end components.

As a group, these components make the MERN stack a preferred choice for developers seeking an efficient, full-stack development framework." image={mern}  />
      </div>
      
      
      <h2 className="text-3xl font-bold mt-8">Client Testimonials</h2>
      <div className="client-testimonials grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ClientTestimonial quote="Great service!" client="Amaresh" />
        <ClientTestimonial quote="Excellent products!" client="john buksahka" />
        <ClientTestimonial quote="Excellent course !" client="hamilton" />
      </div>
      
      
      
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div className="social-media">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/https://www.linkedin.com/company/gloom-dev-pvt-ltd/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <form action="https://formspree.io/f/movaweop" method="POST">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="message">Your Message</label>
                <textarea name="message" id="message" className="w-full p-2 border rounded" rows="4" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
            </form>
          </div>

          {/* Address and Email */}
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="mb-2">Address: Plot number 68, 1st floor, Sri Hari Gardens, Penamaluru, Vijayawada, 521139</p>
            <p className="mb-2">Email: <a href="mailto:admin@gloomdev.in" className="underline">admin@gloomdev.in</a></p>
            <p>Phone: +91 9154882506</p>
          </div>
        </div>
          <center><p>
          <a href="#login" className="underline hover:text-blue-400">Login</a> | 
          <a href="#register" className="underline hover:text-blue-400">Register</a>
        </p></center>
      </footer>

      {/* Line Divider */}
      <div className="border-t border-gray-500 mt-4"></div>

      {/* Copyright Text */}
      <div className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm">© Gloom Pvt Ltd.All Rights Reserved</p>
      </div>
    </>
  );
}

export default ServicePage;
