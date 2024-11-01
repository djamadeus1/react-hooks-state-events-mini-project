import React from 'react';
import Task from './Task'; 

function TaskList({ tasks, onDeleteTask }) {
    return (
        <div className="tasks">
            {tasks.map((task, index) => (
                <Task
                    key={task.id || index} 
                    id={task.id}
                    category={task.category}
                    text={task.text}
                    onDeleteTask={onDeleteTask} 
                />
            ))}
        </div>
    );
}

export default TaskList;
