import React from 'react'

import { useContext } from 'react'
import noteContext from '../context/NoteContext'
export default function NoteItem(props) {
    const {deleteNote} = useContext(noteContext)
    const {note} = props
    return (
        <div className='col-md-3 mx-3 my-2'>
            <div className="card" style={{width : "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i class="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                    <i class="fas fa-edit"></i>
                </div>
            </div>
        </div>
    )
}
