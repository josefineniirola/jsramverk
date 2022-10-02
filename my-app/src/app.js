import './App.css';
import "trix/dist/trix";
import './trix.css';


import { useState, useEffect } from 'react';
import React from 'react';

import editorModel from './models/editor';

import EditorForm from "./components/editorForm";
import EditorList from "./components/editorList";



function App() {
    const [edit, setNewEdit] = useState([]);

    async function fetchEdits() {
      const allEdits = await editorModel.getAllEdits();
  
      setNewEdit(allEdits);
      console.log("App.js Alledits: ", allEdits);
    }
  
    useEffect(() => {
      (async () => {
        await fetchEdits();
      })();
    }, []);
  
    return (
        <div className="App">
            <header className="header">
                <h1>The notebook</h1>
            </header>
            <main className="main">
                <EditorList submitFunction={fetchEdits} edit={edit} />
                <EditorForm submitFunction={fetchEdits} />
            </main>    
      </div>
    );
}

export default App;
