import React from 'react'
import { useState ,useContext } from 'react';
import noteContext from '../context/NoteContext';
export default function AddNote() {
    const context = useContext(noteContext);
    const [note, setNote] = useState({title:"",description:"",tag:""});
    const submitNote = () => {
        console.log(note)
        context.addNote(note);
    }
    return (
        <div className='my-3'>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Note title</label>
                <input type="text" value={note.title} onChange={(e)=>setNote({...note,title:e.target.value})} className="form-control" id="title" name="title" placeholder="Title" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Note Content</label>
                <textarea className="form-control" id="content" onChange={(e)=>setNote({...note,description:e.target.value})} name='description' rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Note tag</label>
                <textarea className="form-control" onChange={(e)=>setNote({...note,tag:e.target.value})} id="tag" name='tag' rows="3"></textarea>
            </div>
            <button onClick={submitNote} className='btn btn-primary'>Save</button>
        </div>
    )
}
