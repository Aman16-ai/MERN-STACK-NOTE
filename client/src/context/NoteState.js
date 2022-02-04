import react from "react";
import noteContext from "./NoteContext";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const NoteState = (props) => {
    let host = 'http://localhost:5000/'
    const [note, setNote] = useState([])
    
    async function getUserAllNotes() {
        let url = `${host}api/notes/fetchallnotes`;
        const response = await fetch(url,{
            method:"GET",
            headers: {
                'Content-Type':'application/json',
                'auth-token' : localStorage.getItem("token")
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
                'auth-token' : localStorage.getItem("token")
            },
            body : JSON.stringify(postData)
        })
        let data = await response.json();
        console.log(data)
        setNote([...note,data]);
    }
    async function deleteNote(id) {
        console.log("Deleting a note with id : ",id)

        let url = `${host}api/notes/deleteNote/${id}`
        const response = await fetch(url,{
            method:'DELETE',
            headers : {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem("token")
            }
        })
        let data = await response.json();
        console.log(data)
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