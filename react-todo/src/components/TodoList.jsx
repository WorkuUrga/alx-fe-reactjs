import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem';

function TodoList() {
    const [tasks, setTasks] = useState([{
        id: 1,
        text: 'task 1',
        completed: true
    },
    {
        id: 2,
        text: 'task 2',
        completed: false
    },
    {
        id: 3,
        text: 'task 3',
        completed: false
    }
    ]);

    const [text, setText] = useState('')
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }
        setTasks([...tasks, newTask])
        setText('')
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    function toggleTask(id) {
        setTasks(tasks.map(task => {
            if(task.id === id) {
                return {...task, completed: !task.completed};
            }else
            return task;
        }));
    }
  return (
    <div>
        {tasks.map(task=>(
            <TodoItem
                key = {task.id}
                task = {task}
                deleteTask = {deleteTask}
                toggleTask = {toggleTask}
            />
        ))}
        <input
            value = {text}
            onChange = {e => setText(e.target.value)}
        />
        <button onClick={()=> addTask(text)}>Add</button>
    </div>
  )
}

export default TodoList