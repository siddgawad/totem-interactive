import React from 'react';

const HorizontalCards = () => {
  const cards = [
    { id: 1, title: 'DUMMY PROJ', image: '/path-to-image-1.jpg' },
    { id: 2, title: 'DUMMY PROJ', image: '/path-to-image-2.jpg' },
    { id: 3, title: 'DUMMY PROJ', image: '/path-to-image-3.jpg' },
    { id: 4, title: 'DUMMY PROJ', image: '/path-to-image-1.jpg' },
    { id: 5, title: 'DUMMY PROJ', image: '/path-to-image-2.jpg' },
    { id: 6, title: 'DUMMY PROJ', image: '/path-to-image-3.jpg' },
    { id: 7, title: 'DUMMY PROJ', image: '/path-to-image-1.jpg' },
    { id: 8, title: 'DUMMY PROJ', image: '/path-to-image-2.jpg' },
    { id: 9, title: 'DUMMY PROJ', image: '/path-to-image-3.jpg' },
    { id: 10, title: 'DUMMY PROJ', image: '/path-to-image-1.jpg' },
    { id: 11, title: 'DUMMY PROJ', image: '/path-to-image-2.jpg' },
    { id: 12, title: 'DUMMY PROJ', image: '/path-to-image-3.jpg' },
    // Add more cards as needed
  ];

  return (
    <div className="bg-black p-4 overflow-x-auto">
      <div className="flex space-x-4">
        {cards.map((card) => (
          <div key={card.id} className="flex-shrink-0 w-64 bg-blue-900 rounded-lg overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-white text-xl font-bold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;