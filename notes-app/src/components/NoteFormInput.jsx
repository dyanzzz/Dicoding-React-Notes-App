import React from "react";

class NoteFormInput extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            title: '',
            body: '',
            archived: false
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onIsArchiveChangeEventHandler = this.onIsArchiveChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onIsArchiveChangeEventHandler(event) {
        this.setState(() => {
            return {
                archived: event.target.checked
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
                archived: false
            }
        })
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input 
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                    required/>
                <input
                    type="text"
                    placeholder="Body"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    required/>
                <div className="checkbox">
                    <input 
                        type="checkbox"
                        id="archived"
                        className="chechbox"
                        checked={this.state.archived}
                        onChange={this.onIsArchiveChangeEventHandler}
                        />
                    <label htmlFor="archived">isArchive</label>
                </div>
                
                <button type="submit">Tambah</button>
            </form>
        );
    };
};

export default NoteFormInput