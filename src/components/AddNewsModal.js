import React, { useState } from 'react';

const AddNewsModal = ({ addNews, closeModal }) => {
  const [newNews, setNewNews] = useState({
    title: '',
    description: '',
    datye: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNews({ ...newNews, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNews.title && newNews.description && newNews.date && newNews.image) {
      addNews(newNews);
      setNewNews({ title: '', description: '', date: '', image: '' });
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New News</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={newNews.title} onChange={handleChange} required />
          </label>
          <label>
            Description:
            <textarea name="description" value={newNews.description} onChange={handleChange} required />
          </label>
          <label>
            Date:
            <input type="text" name="date" value={newNews.date} onChange={handleChange} required />
          </label>
          <label>
            Image:
            <input type="text" name="image" value={newNews.image} onChange={handleChange} required />
          </label>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Add News</button>
            <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewsModal;
