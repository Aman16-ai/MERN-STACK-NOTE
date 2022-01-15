import react from "react";
import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
    // const s1 = {
    //     "name" : "Aman saxena",
    //     "Branch" : "AI & ML"
    // }

    // const [state, setstate] = useState(s1)
    // const update = () => {
    //     setTimeout(() => {
    //         setstate({
    //             "name" : "Shubham hapsi",
    //             "Branch" : "mechanical"
    //         })
    //     }, 1000);
    // }
    const intialNotes =
        [
            {
                "_id": "61b9919239ccd86b067cd905",
                "user": "61ae2c6564a03b0e9a6e6c8c",
                "title": "note3",
                "description": "this is my third note",
                "tag": "personal",
                "date": "2021-12-15T06:56:18.893Z",
                "__v": 0
            },
            {
                "_id": "61b991b9c3ad3e7e90eafd16",
                "user": "61ae2c6564a03b0e9a6e6c8c",
                "title": "note4",
                "description": "I love to code",
                "tag": "personal",
                "date": "2021-12-15T06:56:57.054Z",
                "__v": 0
            }
        ]
    const [note, setNote] = useState(intialNotes)
    function addNote(noteitem) {
        setNote([...note,noteitem]);
    }
    return (
        <noteContext.Provider value={{ note, addNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState