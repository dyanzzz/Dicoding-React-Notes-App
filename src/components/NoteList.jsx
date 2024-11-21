import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
    if (notes.length === 0) {
        return (
            <div className="note-list">
                <center><h2>Tidak ada catatan</h2></center>
            </div>
        )
    } else {
        return (
            <div className="note-list">
                {
                    notes.map((note) => (
                        <NoteItem
                            key={note.id} 
                            id={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...note} 
                        />
                    ))
                }
            </div>
        )
    }
}

export default NoteList;