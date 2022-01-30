import React, { useEffect } from 'react'
import noteContext from '../context/NoteContext'
import NoteItem from './NoteItem'
import { useContext } from 'react'
export default function Notes() {
    const allnotes  = useContext(noteContext)
    useEffect(() => {
      allnotes.getUserAllNotes();
    }, []);
    
    return (
        <div className='row my-3'>
            <h2 className='my-3'>Your Notes</h2>
            {
                allnotes.note.map((e)=>{
                    return <NoteItem key={e.id} note={e}/>
                })
            }
        </div>
    )
}
