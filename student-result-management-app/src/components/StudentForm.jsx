import React, { useState } from 'react';


export default function StudentForm({ initialData = {}, onSubmit, onCancel }) {
const [name, setName] = useState(initialData.name || '');
const [section, setSection] = useState(initialData.section || '');
const [marks, setMarks] = useState(initialData.marks ?? '');
const [grade, setGrade] = useState(initialData.grade || '');


const handleSubmit = (e) => {
e.preventDefault();
const payload = { name: name.trim(), section: section.trim(), marks: Number(marks), grade: grade.trim() };
onSubmit(payload);
};


return (
<div>
<h2>{initialData.id ? 'Edit Student' : 'Add Student'}</h2>
<form onSubmit={handleSubmit}>
<div className="form-row">
<label>Name</label>
<input type="text" value={name} onChange={e => setName(e.target.value)} required />
</div>


<div className="form-row">
<label>Section</label>
<input type="text" value={section} onChange={e => setSection(e.target.value)} required />
</div>


<div className="form-row">
<label>Marks</label>
<input type="number" value={marks} onChange={e => setMarks(e.target.value)} required />
</div>


<div className="form-row">
<label>Grade</label>
<input type="text" value={grade} onChange={e => setGrade(e.target.value)} required />
</div>


<div className="actions">
<button type="submit">Save</button>
<button type="button" onClick={onCancel}>Cancel</button>
</div>
</form>
</div>
);
}