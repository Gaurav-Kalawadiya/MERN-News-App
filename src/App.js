// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsCard from './components/NewsCard';
import IndividualNews from './components/IndividualNews';
import AddNewsModal from './components/AddNewsModal';
// import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import ms from './img/ms.jpeg';
import po from './img/po.jpeg';
import vo from './img/vo.jpg';
import er from './img/er.jpeg';

function App() {
  const [newsList, setNewsList] = useState([
    { id: '1', title: 'Microsoft Launches New AI Powered Office', description: 'Microsoft unveiled new AI features for its office,suite enhancing productivity with tools that assists users generating content and analyzing data.', extraDescription: 'New AI assistant that helps office users create document and more. Copilot will be available across microsoft 365 apps and services.', date: '15/10/2024', image: ms },
    { id: '2', title: 'NFL Expands Playoff format for 2024 season.', description: 'The new format includes a third wild-card team form each conference to go with the four division winners(North,South,East and West).', extraDescription: 'Teams will compete the wild-card round, the divisional round and the conference championship game before advancing to the super bowl during the NFL Playoffs.', date: '16/10/2024', image: po },
    { id: '3', title: 'Houses Passes Bill to Protect Voting Rights.', description: 'The U.S.House of Representation has passed a significant bill aimed at safeguarding voting rights, which includes measures to expand access to ballot and improve elections.', extraDescription: 'The legislation is part of ongoing efforts to address concerns about voter suppression and ensure fair elections.', date: '17/10/2024', image: vo },
    { id: '4', title: 'Breakthrough in Fusion Energy Research.', description: 'European scientists say they have made a major breakthrough in their quest to develop practical nuclear fusion - the energy process that powers the stars.', extraDescription: 'The UK based JET laborartry has smashed its own world record for the amount of energy it can extract by squeezing together two forms of hydrogen.', date: '18/10/2024', image: er },
  ]);
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  const addNewsHandler = (newNews) => {
    setNewsList([...newsList, newNews]); // Function to add new news
    setShowModal(false); // Close the modal after adding news
  };

  const editNewsHandler = (id, updatedData) => {
    const updatedNewsList = newsList.map((news) =>
      news.id === id ? { ...news, ...updatedData } : news
    );
    setNewsList(updatedNewsList); // Update the state with the new news list
  };

  const deleteNewsHandler = (id) => {
    const updatedNewsList = newsList.filter((news) => news.id !== id);
    setNewsList(updatedNewsList); // Update the state with the filtered news list
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar with Add Icon */}
        <nav className="navbar">
          <h1>Gaurav News App</h1>
          <Link to="#" className="add-icon" onClick={() => setShowModal(true)}>
            <i className="fas fa-plus"></i>
          </Link>
        </nav>

        {showModal && <AddNewsModal addNews={addNewsHandler} closeModal={() => setShowModal(false)} />}
        
        <Routes>
          <Route path="/" element={
            <div className="news-list">
              {newsList.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          } />
          <Route path="/news/:id" element={<IndividualNews newsList={newsList} editNews={editNewsHandler} deleteNews={deleteNewsHandler} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
