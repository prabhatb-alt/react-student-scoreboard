import StudentRow from './StudentRow';
import './StudentTable.css';

const StudentTable = ({ students, onUpdateScore }) => {
    const totalStudents = students.length;
    const passedStudents = students.filter(s => s.score >= 40).length;
    const avgScore = totalStudents === 0 ? 0 : Math.round(students.reduce((acc, curr) => acc + curr.score, 0) / totalStudents);

    return (
        <section className="dashboard-section">
        <div className="stats-grid">
            <div className="stat-card">
            <span className="stat-label">TOTAL</span>
            <span className="stat-value">{totalStudents}</span>
            </div>
            <div className="stat-card">
            <span className="stat-label">PASSED</span>
            <span className="stat-value">{passedStudents}</span>
            </div>
            <div className="stat-card">
            <span className="stat-label">AVG SCORE</span>
            <span className="stat-value">{avgScore}</span>
            </div>
        </div>

        <div className="table-container">
            <div className="table-header">
            <div className="col">NAME</div>
            <div className="col">SCORE</div>
            <div className="col">STATUS</div>
            <div className="col">UPDATE</div>
            </div>
            
            <div className="table-body">
            {students.map((student) => (
                <StudentRow 
                key={student.id} 
                student={student} 
                onUpdateScore={onUpdateScore} 
                />
            ))}
            </div>
        </div>
        </section>
    );
};

export default StudentTable;