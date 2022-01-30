import react from "react";
import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
    let host = 'http://localhost:5000/'
    
    const [note, setNote] = useState([])
    async function getUserAllNotes() {
        let url = `${host}api/notes/fetchallnotes`;
        const response = await fetch(url,{
            method:"GET",
            headers: {
                'Content-Type':'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhZTJjNjU2NGEwM2IwZTlhNmU2YzhjIn0sImlhdCI6MTYzODg4NDE0M30.ot6A7t_73A1AkV387Dl7DSoJ3BCqd1mxwKeky879KoE'
            }
        });
        const data = await response.json();
        console.log(data)
        setNote(data)
       
    }
    async function addNote(noteitem) {
        let url = `${host}api/notes/addNote`
        const postData = {
            title : noteitem.title,
            description : noteitem.description,
            tag : noteitem.tag
        }
        const response = await fetch(url,{
            method:"POST",
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhZTJjNjU2NGEwM2IwZTlhNmU2YzhjIn0sImlhdCI6MTYzODg4NDE0M30.ot6A7t_73A1AkV387Dl7DSoJ3BCqd1mxwKeky879KoE'
            },
            body : JSON.stringify(postData)
        })
        let data = await response.json();
        console.log(data)
        setNote([...note,data]);
    }
    function deleteNote(id) {
        console.log("Deleting a note with id : ",id)
        let updatenotes  = note.filter(e => e._id !== id);
        console.log("updateNotes",updatenotes)
        setNote(updatenotes)
    }
    return (
        <noteContext.Provider value={{ note, addNote,deleteNote,getUserAllNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState