import React, { useEffect, useState } from 'react';
import services from '../assets/images/services.png'; // Replace with the correct path to your image

function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedText, setAnimatedText] = useState('');

  const fullText = `
    Our institution is accredited by AICTE for excellence in technical education and recognized by MSME for its contributions to the growth of small and medium enterprises.
    Our mission is to empower businesses and individuals through innovative technologies and comprehensive training programs. 
    We focus on delivering bespoke solutions that foster digital transformation and practical skill development. 
    At GLOOM DEV, we are committed to making a significant impact in the tech industry by providing customized and impactful solutions.
  `;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.introduction');
      const rect = section.getBoundingClientRect();
      const topInView = rect.top >= 0 && rect.top <= window.innerHeight;
      const bottomInView = rect.bottom >= 0 && rect.bottom <= window.innerHeight;
      
      if (topInView || bottomInView) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const intervalId = setInterval(() => {
        setAnimatedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(intervalId);
        }
      }, 50);
    }
  }, [isVisible, fullText]);

  return (
    <section className="introduction p-4 flex flex-col md:flex-row items-center md:items-start">
      <div className={`md:w-1/2 mb-4 md:mb-0 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-3xl font-bold mb-4">SERVICES</h1>
        <p className="text-justify">
          GLOOM DEV is a dynamic startup specializing in Data Science, IoT, AI, and Machine Learning solutions.
        </p>
        <p className="text-justify">
          {animatedText}
        </p>
      </div>
      <div className={`md:w-1/2 flex justify-center transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <img 
          src={services} 
          alt="Introduction" 
          className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}

export default Introduction;
