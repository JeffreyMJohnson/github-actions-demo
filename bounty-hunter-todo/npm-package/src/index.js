import React, { useState } from 'react';

const TodoList = ({ initialTodos = [] }) => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        foo<ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(index)}
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
