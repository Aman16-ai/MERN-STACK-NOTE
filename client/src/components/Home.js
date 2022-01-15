import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

export default function Home() {
    return (
        <div className='container'>
            <h2 className='my-3'>Cloud-NoteBook</h2>
            <AddNote/>
            <Notes/>
        </div>
    )
}
