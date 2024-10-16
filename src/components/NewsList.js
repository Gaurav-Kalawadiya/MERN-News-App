import React, { useState } from 'react';
import NewsCard from './NewsCard'; // Assuming NewsCard is in the same directory
import './NewsList.css';

const NewsList = () => {
  const [newsItems, setNewsItems] = useState([
    // Use the updated news data structure with image URLs
    {
      id: 1,
      title: 'Climate Change and Sustainability',
      date: '29/09/2024',
      description: 'A new study published in Nature Climate Change reveals that global warming is causing sea levels to rise at an alarming rate.',
      extraDescription:'A new study published in Nature Climate Change reveals that global warming is causing sea levels to rise at an alarming rate. Scientists predict that coastal cities around the world could face devastating flooding and erosion if emissions continue unabated. The studys findings underscore the urgency of addressing climate change and transitioning to sustainable energy sources',
      imageUrl: require('../img/environment.png'),
    },
    {
      id: 2,
      title: 'Government New Affordable Housing Scheme',
      date: '01/10/2024',
      description: 'The Indian government has announced a new affordable housing scheme aimed at providing affordable homes to low-income families.',
      imageUrl: require('../img/housing.png'),
    },
    {
      id: 3,
      title: 'Artificial Intelligence and Technology',
      date: '30/09/2024',
      description: 'A team of scientists has leveraged artificial intelligence to rapidly identify potential drug candidates for COVID-19.',
      imageUrl: require('../img/ai.jpg'),
    },
    {
      id: 4,
      title: 'Serena Williams Announces Retirement from Tennis',
      date: '02/10/2024',
      description: 'Tennis legend Serena Williams has announced her retirement from professional tennis after a long and illustrious career.',
      imageUrl: require('../img/tennis.png'),
    },
  ]);

  const handleDelete = (id) => {
    setNewsItems(newsItems.filter((item) => item.id !== id));
  };

  const handleEdit = (editedItem) => {
    setNewsItems(
      newsItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
  };

  return (
    <div className="news-list">
      {newsItems.map((item) => (
        <NewsCard key={item.id} newsItem={item} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default NewsList;
