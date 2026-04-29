import { useState, useEffect } from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
    const [editScore, setEditScore] = useState(student.score);

    useEffect(() => {
        setEditScore(student.score);
    }, [student.score]);

    const isPass = student.score >= 40;

    const handleSave = () => {
        const parsedScore = parseInt(editScore, 10);
        // Validate before sending up
        if (!isNaN(parsedScore) && parsedScore >= 0 && parsedScore <= 100) {
        onUpdateScore(student.id, parsedScore);
        }
    };

    return (
        <div className={`table-row ${isPass ? 'row-pass' : 'row-fail'}`}>
        <div className="col name-col">{student.name}</div>
        <div className="col score-col highlight-score">{student.score}</div>
        
        <div className="col status-col">
            <div className={`status-badge ${isPass ? 'badge-pass' : 'badge-fail'}`}>
            <span className="dot"></span>
            {isPass ? 'PASS' : 'FAIL'}
            </div>
        </div>
        
        <div className="col update-col">
            <input 
            type="number" 
            className="update-input"
            value={editScore}
            onChange={(e) => setEditScore(e.target.value)}
            min="0"
            max="100"
            />
            <button onClick={handleSave} className="save-btn">SAVE</button>
        </div>
        </div>
    );
};

export default StudentRow;