import React from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to={`updateNote/${note._id}`} ><i class="fas fa-edit"></i></Link>
                   <i onClick={(e) => deleteNote(note._id)} class="fas fa-trash-alt mx-2"></i>
                </div>
            </div>
        </div>
    )
}
