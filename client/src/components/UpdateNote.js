import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import noteContext from '../context/NoteContext';
export default function UpdateNote() {
  const context = useContext(noteContext);
  const [note, setNote] = useState({});
  const history = useHistory()
  const params = useParams();
  async function getNoteById(note_id) {
    let url = `http://localhost:5000/api/notes/getNoteById/${note_id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      }
    })
    const data = await response.json();
    console.log(data)
    setNote(data.note)
  }
  async function getNote(note_id) {
    let note = await context.getNoteById(note_id);
    console.log(note);
    setNote(note)
  }

  function handleUpdate() {
    console.log(note)
    context.updateNote(params.id,note)
    history.push("/")
  }
  useEffect(() => {

    getNoteById(params.id)
  }, []);

  return (
    <div className="container my-2">
      <div className='my-3'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Note title</label>
          <input type="text" value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} className="form-control" id="title" name="title" placeholder="Title" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Note Content</label>
          <textarea className="form-control" value={note.description} id="content" onChange={(e) => setNote({ ...note, description: e.target.value })} name='description' rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Note tag</label>
          <textarea className="form-control" value={note.tag} onChange={(e) => setNote({ ...note, tag: e.target.value })} id="tag" name='tag' rows="3"></textarea>
        </div>
        <button onClick={handleUpdate} className='btn btn-primary'>Update</button>
      </div>
    </div>
  );
}
