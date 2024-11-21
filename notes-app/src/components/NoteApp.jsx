import React from "react";
import { getData } from "../utils/data.js"
import NoteList from "./NoteList.jsx";
import NoteFormInput from "./NoteFormInput.jsx";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
            note: {}
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddNoteHandler  = this.onAddNoteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }

    onArchiveHandler(id) {
        const editArchive = this.state.notes.find(note => note.id === id)
        const updateNote = {
            id: editArchive.id,
            title: editArchive.title,
            body: editArchive.body,
            archived: !editArchive.archived,
            createdAt: editArchive.createdAt
        }
        const removeNoteSelected = this.state.notes.filter(note => note.id !== id)
        removeNoteSelected.push(updateNote)
        removeNoteSelected.sort(function(a, b) { 
            return a.id - b.id  ||  a.name.localeCompare(b.name);
        });
          
        this.setState(() => { 
            return {
                notes: removeNoteSelected
            }
        })
    }
    
    onAddNoteHandler({ title, body, archived }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived,
                        createdAt: new Date().toLocaleString()
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="note-app">
                <h1>Notes App</h1>
                <h2>Add Note</h2>
                <NoteFormInput
                    addNote={this.onAddNoteHandler}
                    setNote={this.state.note}
                />

                <h2>List Notes</h2>

                <NoteList 
                    notes={this.state.notes} 
                    onDelete={this.onDeleteHandler} 
                    onArchive={this.onArchiveHandler}
                />
            </div>
        )
    }
}

export default NoteApp;