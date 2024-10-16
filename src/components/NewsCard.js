// src/components/NewsCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title} className="news-card-img" />
      <div className="news-card-content">
        <h3>{news.title}</h3>
        <p>{news.description}</p>
        <span>{news.date}</span>
      </div>
      {/* View More Button for Individual News */}
      <Link to={`/news/${news.id}`} className="view-more-btn">View More</Link>
    </div>
  );
};

export default NewsCard;
