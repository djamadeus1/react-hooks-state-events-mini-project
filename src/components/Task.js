import React from 'react';

const Task = ({ id, category, text, onDeleteTask }) => (
    <div className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={() => onDeleteTask(id)}>X</button>
    </div>
);


export default Task;
