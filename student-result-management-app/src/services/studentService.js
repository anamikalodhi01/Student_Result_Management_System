const BASE_URL = 'http://localhost:3001/students';


export const getStudents = () => {
return fetch(BASE_URL).then(res => {
if (!res.ok) throw new Error('Failed to fetch students');
return res.json();
});
};


export const getStudent = (id) => {
return fetch(`${BASE_URL}/${id}`).then(res => {
if (!res.ok) throw new Error('Failed to fetch student');
return res.json();
});
};


export const addStudent = (student) => {
return fetch(BASE_URL, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(student)
}).then(res => {
if (!res.ok) throw new Error('Failed to add student');
return res.json();
});
};


export const updateStudent = (id, student) => {
return fetch(`${BASE_URL}/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(student)
}).then(res => {
if (!res.ok) throw new Error('Failed to update student');
return res.json();
});
};


export const deleteStudent = (id) => {
return fetch(`${BASE_URL}/${id}`, { method: 'DELETE' }).then(res => {
if (!res.ok) throw new Error('Failed to delete student');
return res.text();
});
};