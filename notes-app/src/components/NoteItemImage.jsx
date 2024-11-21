import React from 'react';

function NoteItemImage({ archived }) {
    const imgIsArchived = () => {
        if (archived) return './images/archived.png'
        return './images/draft.png'
    }

    return (
        <div className="note-item__image">
            <img src={imgIsArchived()} alt="note avatar"/>
        </div>
    )
    
}

export default NoteItemImage;