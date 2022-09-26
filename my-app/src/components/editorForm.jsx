import { useState } from "react";
import React from 'react';
import editorModel from '../models/editor';
import "trix/dist/trix";
import { TrixEditor } from "react-trix";


function Editor({submitFunction}) {

    const [newEdit, setNewEdit] = useState("");
    const [newName, setNewName] = useState("");

    function changeHandler(html) {
        let textObject = {};
        textObject["text"] = html;
        setNewEdit({...newEdit, ...textObject});
        console.log("objeact", newEdit)
    }

    function changeNameHandler(event) {
        let nameObject = {};
        nameObject[event.target.name] = event.target.value;
        setNewName({...newName, ...nameObject});
        console.log("object", newName)
    }

    async function saveEdit() {
        // Merge Objects and send to function
        const newObject = {...newName, ...newEdit};
        await editorModel.saveEdit(newObject);
        submitFunction();
    }

    return (
        <form>
            <div className="toolbar">
                <button class="button submitButton" onClick={saveEdit}>Spara</button>
            </div>
            <div className="editor">
                <label for="text">Namn: </label>
                <input type="text" onChange={changeNameHandler} name="name"></input>
                <TrixEditor input onChange={changeHandler} />
            </div>
        </form>
    )
}

export default Editor;
