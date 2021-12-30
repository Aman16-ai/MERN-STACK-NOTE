import react from "react";
import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
    const s1 = {
        "name" : "Aman saxena",
        "Branch" : "AI & ML"
    }

    const [state, setstate] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setstate({
                "name" : "Shubham hapsi",
                "Branch" : "mechanical"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState