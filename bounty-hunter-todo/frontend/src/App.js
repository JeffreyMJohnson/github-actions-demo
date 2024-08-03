import React from 'react';
import TodoList from '@jeffreymjohnson/todo-list-control';

const App = () => {
    const initialTodos = [
        { text: 'Capture space pirate', completed: false },
        { text: 'Collect bounty', completed: false },
    ];

    return (
        <div>
            <h1>Bounty Hunter To-Do List</h1>
            <TodoList initialTodos={initialTodos} />
        </div>
    );
};

export default App;