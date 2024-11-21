import React from "react";

function ArchiveButton({ id, onArchive, imgSrc}) {
    return (
        <button className="note-item__archive" onClick={() => onArchive(id)}>
            <img src={imgSrc} alt="note"/>
        </button>
    )
}

export default ArchiveButton;