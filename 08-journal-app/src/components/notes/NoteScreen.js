import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes_textarea"
                ></textarea>

                <div className="notes_image">
                    <img
                        src="https://static.dw.com/image/36806449_303.jpg"
                        alt="Budapest"
                    />
                </div>
            </div>

        </div>
    )
}
