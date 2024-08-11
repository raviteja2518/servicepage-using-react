import React from 'react';

function ClientTestimonial({ quote, client }) {
  return (
    <div className="client-testimonial p-6 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg border-2 border-blue-400 shadow-xl">
      <p className="italic text-lg text-gray-700">"{quote}"</p>
      <p className="mt-4 text-right text-blue-700 font-semibold">- {client}</p>
      <div className="absolute inset-0 rounded-lg border-2 border-white opacity-20"></div>
    </div>
  );
}

export default ClientTestimonial;
