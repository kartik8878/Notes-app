import React from 'react';
import {Link} from "react-router-dom";

function NoteItem({note}) {
    return (
        <Link to={`/edit-note/${note.id}`} className="note">
            <h4>
                {note.title.length > 40 ? (note.title.substring(0,40)) +'...' : note.title}
            </h4>
            <p>
                {note.date}
            </p>
        </Link>
    );
}

export default NoteItem;