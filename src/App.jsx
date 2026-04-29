import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Prabhat', score: 95 },
    { id: 2, name: 'Ramesh', score: 69 },
    { id: 3, name: 'Max Verstappen', score: 33 },
  ]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, {...newStudent, id: Date.now()}]);
  };
  return (
    <div className = "App">
      <Header />
      <AddStudentForm onAddStudent={handleAddStudent} />
    </div>
  );
}

export default App;