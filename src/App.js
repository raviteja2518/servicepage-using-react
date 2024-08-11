import React, { useState } from 'react';
import Introduction from './components/Introduction';
import ServicePage from './pages/ServicePage';

function App() {
  const [selectedService, setSelectedService] = useState('Java');

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="App">
      <nav className="bg-blue-500 p-4 flex items-center justify-between flex-wrap">
        {/* Logo Section */}
        <div className="flex-shrink-0 mr-4">
          <img src="src/assets/images/logo.png" alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-around w-full md:w-auto">
          <li><a href='#introduction' className="text-white block p-2">Introduction</a></li>
          <li><a href="#services" className="text-white block p-2">Services</a></li>
          <li><a href="#HighlitedProduct" className="text-white block p-2">Products</a></li>
          <li><a href="#testimonials" className="text-white block p-2">Testimonials</a></li>
          <li><a href="#contact" className="text-white block p-2">Contact</a></li>
        </ul>
      </nav>

      <section id="introduction" className="p-4">
        <Introduction />
      </section>

      <section id="services" className="p-4">
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <button
            onClick={() => handleServiceChange('Java')}
            className={`p-2 mx-2 mb-2 md:mb-0 ${selectedService === 'Java' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Java
          </button>
          <button
            onClick={() => handleServiceChange('DBMS')}
            className={`p-2 mx-2 mb-2 md:mb-0 ${selectedService === 'DBMS' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            DBMS
          </button>
          <button
            onClick={() => handleServiceChange('DS')}
            className={`p-2 mx-2 mb-2 md:mb-0 ${selectedService === 'DS' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Data Science
          </button>
        </div>
        <ServicePage selectedService={selectedService} />
      </section>
    </div>
  );
}

export default App;
