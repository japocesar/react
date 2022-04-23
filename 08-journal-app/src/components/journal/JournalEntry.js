import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg)'
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-header">
                    A new day
                </p>
                <p className="journal__entry-content">
                    Laborum ad magna ad aliqua duis exercitation.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
