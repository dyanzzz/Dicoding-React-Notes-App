import React from "react";
import DeleteButton from "./button/DeleteButton";
import ArchiveButton from "./button/ArchiveButton";
import NoteItemBody from "./NoteItemBody";
import NoteItemImage from "./NoteItemImage";

function NoteItem({ title, body, archived, createdAt, id, onDelete, onArchive }) {
    const imgSrc = () => {
        if (archived) return "./images/back.png"
        return "./images/check.png"
    }

    return (
        <div className="note-item">
            <NoteItemImage archived={archived}/>
            <NoteItemBody title={title} body={body} createdAt={createdAt} />
            <ArchiveButton id={id} onArchive={onArchive} imgSrc={imgSrc()} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}

export default NoteItem