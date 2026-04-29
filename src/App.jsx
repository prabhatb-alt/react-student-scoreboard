import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aman', score: 78 },
    { id: 2, name: 'Riya', score: 45 },
    { id: 3, name: 'Karan', score: 90 },
    { id: 4, name: 'Neha', score: 32 }
  ]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
  };

  const handleUpdateScore = (id, newScore) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, score: newScore } : student
    ));
  };

  return (
    <div className="app-container">
      <Header />
      <AddStudentForm onAdd={handleAddStudent} />
      <StudentTable students={students} onUpdateScore={handleUpdateScore} />

      <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>
        <a href="https://github.com/prabhatb-alt/react-student-scoreboard" target="_blank" rel="noreferrer" style={{color: 'var(--accent-green)', textDecoration: 'none'}}>GITHUB</a>
      </div>
    </div>
  );
}

export default App;