import React from 'react'

function TodoItem({task, deleteTask, toggleTask}) {
    function handleChange() {
        toggleTask(task.id);
    }
  return (
    <div class="todo-item">
        <input
            type='checkbox'
            checked = {task.completed}
            onChange={handleChange}
        />
        <p>{task.text}</p>
        <button onClick={()=> deleteTask(task.id)}>X</button>
    </div>
  )
}

export default TodoItem