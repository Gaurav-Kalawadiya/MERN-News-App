// src/components/IndividualNews.js

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const IndividualNews = ({ newsList, editNews, deleteNews }) => {
    const { id } = useParams(); // Extract the ID from URL
    const navigate = useNavigate();

    const [editModal, setEditModal] = useState(false); // State to handle edit modal visibility
    const [editData, setEditData] = useState({
        title: '',
        description: '',
        image: ''
    });

    // Find the news item based on the ID
    const newsItem = newsList.find((news) => news.id === id);

    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    // Function to handle editing news
    const editNewsHandler = () => {
        editNews(id, editData); // Call the parent's editNews function
        alert('News Updated');
        navigate('/');
    };

   // Function to delete news
   const deleteNewsHandler = () => {
    deleteNews(id); // Call the parent's deleteNews function
    alert('News Deleted');
    navigate('/'); // Navigate back to the news list after deletion
};

    if (!newsItem) {
        return <div>News not found</div>;
    }

    return (
        <div className="individual-news">
            <img src={newsItem.image} alt={newsItem.title} className="news-card-img" />
            <h2>{newsItem.title}</h2>
            {/* <p>{newsItem.description}</p> */}
            <p>{newsItem.extraDescription}</p>
            <span>{newsItem.date}</span>
<br/>
            {/* Edit and Delete buttons */}
            <div className="news-card-buttons">
                <button className="edit-button" onClick={() => setEditModal(true)}>
                    <i className="fas fa-edit"></i> Edit
                </button>
                <button className="delete-button" onClick={deleteNewsHandler}>
                    <i className="fas fa-trash"></i> Delete
                </button>
            </div>

            {/* Edit Modal */}
            {editModal && (
                <div className="edit-modal">
                    <div className="modal-content">
                        <h3>Edit News</h3>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={editData.title}
                            onChange={handleChange}
                        />
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={editData.description}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            value={editData.image}
                            onChange={handleChange}
                        />
                        <div className="modal-buttons">
                            <button onClick={editNewsHandler}>Save</button>
                            <button onClick={() => setEditModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IndividualNews;
