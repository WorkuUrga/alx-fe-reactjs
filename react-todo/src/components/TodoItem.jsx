import React from 'react';

function TodoItem({ task, deleteTask, toggleTask }) {
    function handleChange() {
        toggleTask(task.id);
    }

    return (
        <div className="todo-item">
            <input
                type='checkbox'
                checked={task.completed}
                onChange={handleChange}
                aria-label={task.text}  
            />
            <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </p>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
    );
}

export default TodoItem;
