// src/components/AddStudentForm.jsx
import { useState } from 'react';
import './AddStudentForm.css';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!name.trim() || !score.trim()) return;
    onAdd({ 
      name: name.trim(), 
      score: parseInt(score)
    });
    setName('');
    setScore('');
  };

  return (
    <section className="form-section">
      <div className="section-header">
        <span className="dot"></span>
        <h2>REGISTER STUDENT</h2>
        <span className="sub-text">NEW ENTRY</span>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Student name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          required
        />
        <input 
          type="number" 
          placeholder="Score (0-100)" 
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="form-input"
          min="0"
          max="100"
          required
        />
        <button type="submit" className="submit-btn">+ ADD</button>
      </form>
    </section>
  );
};

export default AddStudentForm;