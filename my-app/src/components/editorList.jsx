import EditCard from '../components/editCard';
import React from 'react';

import "./editList.css";

function EditorList({edit}) {
    const editItems = edit.map((edit, index) => {
        return <EditCard edit={edit} key={index} />;
    });

    return (
        <div className="list">
            {editItems}
        </div>
    );
}

export default EditorList;
