import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './index.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const [students, setStudents] = useState([
    { id: 1, name: 'Prabhat Bhatia', score: 95 },
    { id: 2, name: 'Charles Oliviera', score: 75 },
    { id: 3, name: 'Max Verstappen', score: 33 }
  ]);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode'); 
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
  };

  const handleUpdateScore = (id, newScore) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, score: newScore } : student
    ));
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="app-container">
      <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <AddStudentForm onAdd={handleAddStudent} />
      <StudentTable students={students} onUpdateScore={handleUpdateScore} />

      <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>
        <a href="https://github.com/prabhatb-alt/react-student-scoreboard" target="_blank" rel="noreferrer" style={{color: 'var(--accent-green)', textDecoration: 'none'}}>GITHUB</a>
      </div>
    </div>
  );
}

export default App;