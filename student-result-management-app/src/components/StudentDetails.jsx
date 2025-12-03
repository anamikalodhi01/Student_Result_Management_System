import React from 'react';


export default function StudentDetails({ student, onBack }) {
if (!student) return <div>No student selected.</div>;


return (
<div>
<h2>Student Details</h2>
<p><strong>ID:</strong> {student.id}</p>
<p><strong>Name:</strong> {student.name}</p>
<p><strong>Section:</strong> {student.section}</p>
<p><strong>Marks:</strong> {student.marks}</p>
<p><strong>Grade:</strong> {student.grade}</p>
<div className="actions">
<button onClick={onBack}>Back</button>
</div>
</div>
);
}