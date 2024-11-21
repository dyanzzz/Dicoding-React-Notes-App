import React from 'react';

function NoteItemBody({ title, body, createdAt }) {
    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__child">{body}</p>
            <p className="note-item__child">{createdAt}</p>
        </div>
    )
}

export default NoteItemBody;