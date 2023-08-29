import React from 'react';

function TodoList({ todos, removeTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => removeTodo(todo.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
