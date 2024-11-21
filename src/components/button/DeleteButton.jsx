import React from "react";

function DeleteButton({ id, onDelete }) {
    return (
        <button className="note-item__delete" onClick={() => onDelete(id)}>
            <img src="./images/trash.png" alt="delete"/>
        </button>
    )
}

export default DeleteButton;