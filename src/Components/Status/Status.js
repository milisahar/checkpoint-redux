import React from 'react'

const Status = ({ setDone, setUndone }) => {
    return (
        <div>
            <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                onChange={(e) => setDone(e.target.checked)}
            />
            { }
            <label for="vehicle1" style={{ fontSize: "30px", color: "purple" }}> Done</label>
            <input style={{ marginLeft: "20px" }}
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                onChange={(e) => setUndone(e.target.checked)}
            />
            <label for="vehicle1" style={{ fontSize: "30px", color: "purple" }}> unDone</label>
        </div>
    )
}

export default Status
