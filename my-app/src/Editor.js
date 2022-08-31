import { useState } from "react";
import './App.css';
import React from 'react';
import "trix/dist/trix";
import './trix.css';



function editor() {
    const [text, setName] = useState("");


    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(document.getElementById('x').value)
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <div className="toolbar">
                <input type="submit" />
            </div>
            <div className="editor">
                <input id="x" 
                value={text} 
                type="hidden" 
                onChange={(e) => setName(e.target.value)}/>
                <trix-editor input="x"></trix-editor>
            </div>
        </form>
    )
}

export default editor;


