import React from 'react';
import { useState } from 'react';
import editorModel from '../models/editor';
import { TrixEditor } from "react-trix";
import "trix/dist/trix";
import "./editCard.css";

function EditCard({edit}) {
    const [toggle, setToggle] = React.useState(true);
    const [newEdit, setNewEdit] = useState("");
    const [newName, setNewName] = useState("");

    function toggleInput() {
        setToggle(false);
    }

    function handleTextEdit(html) {
        let textObject = {};
        textObject["text"] = html;
        setNewEdit({...newEdit, ...textObject});
        console.log("htmlObject", newEdit)
    }
    
    function handleNameEdit(event) {
        // Editing name
        let nameObject = {};
        nameObject[event.target.name] = event.target.value;
        setNewName({...newName, ...nameObject});
        console.log("object", newName)
    }

    async function updateEdit() {
        let objectId = {};
        objectId["_id"] = edit._id;
        let newObject = {...objectId, ...newName, ...newEdit};
        console.log("Newobject: ", newObject);
        await editorModel.editEdits(newObject);
        window.location.reload(false);
    }

    
    // function deleteEdit() {
    //     var result = window.confirm("Are you sure you want to delete this edit?");
    //     if(result) {
    //         let deleteId = {};
    //         deleteId["_id"] = edit._id;
    //         console.log(deleteId);
    //         editorModel.deleteEdit(deleteId);
    //     }
    // }


    return (
        <div className="card">
            {toggle ? ( <p className="name" onDoubleClick={toggleInput}>Namn: {edit.name}</p>):
            (<><label htmlFor="text">Namn: </label><input type="text" placeholder={edit.name} required="required" onChange={handleNameEdit} name="name"/></>)}
        <div>

            {toggle ? ( <p className="text" onDoubleClick={toggleInput} dangerouslySetInnerHTML={{ __html: edit.text }} /> ):
            (<><label htmlFor="text">Text: </label><TrixEditor input value={edit.text} required="required" onChange={handleTextEdit} name="text" /> </>)}
        </div>

            {/* <button className="button deleteButton" onClick={deleteEdit}>Radera</button> */}
            {toggle ? (<button className="button changeButton" onClick={toggleInput}>Ändra</button>):
            (<button className="button submitButton" onClick={updateEdit}>Spara</button>)}
        </div>
    );
}

export default EditCard;
