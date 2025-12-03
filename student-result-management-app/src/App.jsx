import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import * as studentService from './services/studentService';

export default function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState('list');   // list | add | edit | details
  const [selected, setSelected] = useState(null);

  // Load all students
  const loadStudents = () => {
    studentService.getStudents()
      .then(data => setStudents(data))
      .catch(err => alert('Error loading students: ' + err.message));
  };

  const handleAddClick = () => {
    setSelected(null);
    setMode('add');
  };

  const handleAddSubmit = (formData) => {
    studentService.addStudent(formData)
      .then(() => {
        alert('Student added successfully. Click Load Students to refresh.');
        setMode('list');
      })
      .catch(err => alert('Error adding student: ' + err.message));
  };

  const handleEdit = (student) => {
    setSelected(student);
    setMode('edit');
  };

  const handleUpdateSubmit = (formData) => {
    if (!selected || !selected.id) {
      return alert('No student selected for edit');
    }

    studentService.updateStudent(selected.id, formData)
      .then(() => {
        alert('Student updated successfully. Click Load Students to refresh.');
        setMode('list');
        setSelected(null);
      })
      .catch(err => alert('Error updating student: ' + err.message));
  };

  const handleDelete = (id) => {
    if (!window.confirm('Delete this student?')) return;

    studentService.deleteStudent(id)
      .then(() => {
        alert('Student deleted. Click Load Students to refresh.');
      })
      .catch(err => alert('Error deleting student: ' + err.message));
  };

  const handleView = (student) => {
    setSelected(student);
    setMode('details');
  };

  const cancelForm = () => {
    setMode('list');
    setSelected(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Student Result App</h1>
        <small>All data stored in JSON Server (db.json)</small>
      </div>

      {/* LIST PAGE */}
      {mode === 'list' && (
        <StudentList
          students={students}
          onLoad={loadStudents}
          onAdd={handleAddClick}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      )}

      {/* ADD PAGE */}
      {mode === 'add' && (
        <StudentForm
          mode="add"
          onSubmit={handleAddSubmit}
          onCancel={cancelForm}
        />
      )}

      {/* EDIT PAGE */}
      {mode === 'edit' && (
        <StudentForm
          mode="edit"
          initial={selected}
          onSubmit={handleUpdateSubmit}
          onCancel={cancelForm}
        />
      )}

      {/* DETAILS PAGE */}
      {mode === 'details' && selected && (
        <StudentDetails
          student={selected}
          onBack={cancelForm}
        />
      )}
    </div>
  );
}
