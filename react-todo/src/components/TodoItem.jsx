// src/TodoItem.js
import React from 'react';

function TodoItem({ task, deleteTask, toggleTask }) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
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
