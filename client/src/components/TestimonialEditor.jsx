import React, { useState } from 'react';
import './TestimonialEditor.css';

const TestimonialEditor = ({ testimonial, onSave, onCancel }) => {
  const [form, setForm] = useState({ ...testimonial });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="editor-overlay">
      <form className="editor-form" onSubmit={handleSubmit}>
        <h3>Edit Testimonial</h3>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
        <textarea name="text" value={form.text} onChange={handleChange} placeholder="Testimonial" />
        <input
          type="number"
          name="stars"
          value={form.stars}
          onChange={handleChange}
          min="1"
          max="5"
          placeholder="Stars (1-5)"
        />
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" className="cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestimonialEditor;
