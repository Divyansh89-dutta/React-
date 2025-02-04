import React from 'react';

function Cards() {
  const cards = [
    {
      id: 1,
      name: 'Card 1',
      description: 'This is card 1',
    },
    {
      id: 2,
      name: 'Card 2',
      description: 'This is card 2',
    },
    {
      id: 3,
      name: 'Card 3',
      description: 'This is card 3',
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {cards.map((card, index) => (
        <div key={card.id} className="border p-4 rounded-md shadow-md bg-gray-100">
          <h3 className="text-lg font-bold">{card.name}</h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
