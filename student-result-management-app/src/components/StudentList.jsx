import React from 'react';


export default function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
return (
<div>
<div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<h2>Students</h2>
<div className="actions">
<button onClick={onLoad}>Load Students</button>
<button onClick={onAdd}>Add Student</button>
</div>
</div>


<table className="table">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Section</th>
<th>Marks</th>
<th>Grade</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{students && students.length > 0 ? (
students.map(s => (
<tr key={s.id}>
<td>{s.id}</td>
<td>{s.name}</td>
<td>{s.section}</td>
<td>{s.marks}</td>
<td>{s.grade}</td>
<td>
<div className="actions">
<button onClick={() => onView(s)}>View</button>
<button onClick={() => onEdit(s)}>Edit</button>
<button onClick={() => onDelete(s.id)}>Delete</button>
</div>
</td>
</tr>
))
) : (
<tr>
<td colSpan="6" style={{textAlign:'center'}}>No students loaded. Click "Load Students".</td>
</tr>
)}
</tbody>
</table>
</div>
);
}