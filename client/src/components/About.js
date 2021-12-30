import React from 'react'
import { useContext } from 'react'  
import noteContext from '../context/NoteContext'
import { useEffect } from 'react'
export default function About() {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
    }, [])
    return (
        <div>
            <p>My name is {a.state.name} and i am a student of {a.state.Branch} branch</p>
        </div>
    )
}
