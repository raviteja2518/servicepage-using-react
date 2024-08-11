import React, { useState } from 'react';

function ServiceCard({ name, description, image, rating }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="service-card border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      
      {/* Rating Section */}
      {rating && (
        <div className="rating text-yellow-500 flex items-center mb-2">
          <span className="text-lg">&#9733;</span> {/* Star symbol */}
          <span className="ml-1 text-lg">{rating}</span>
        </div>
      )}

      {/* Description with Toggle */}
      <p className="text-gray-700">
        {isExpanded ? description : description.substring(0, 100) + '...'}
        <button onClick={handleToggle} className="text-blue-500 ml-2">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </p>


      {/* Conditional Roadmap Link */}
      {isExpanded && (
        <p className="mt-2">
          For more information, <a href="/src/components/Roadmap.js" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">click here</a>.
        </p>
        
      )}
    </div>
  );
}

export default ServiceCard;
