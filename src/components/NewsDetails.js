import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState({});

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await fetch(`https://your-api-url.com/news/${id}`);
        const data = await response.json();
        setNewsItem(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewsItem();
  }, [id]);

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.description}</p>
      <p>{newsItem.fullExplanation}</p>
    </div>
  );
};

export default NewsDetails;