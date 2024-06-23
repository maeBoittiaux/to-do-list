import React, { useState } from 'react';
import './Paper.css';

const Paper = () => {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState('');

    const handleInputChange = (e) => {
        setCurrentTodo(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && currentTodo.trim()) {
            setTodos([...todos, currentTodo]);
            setCurrentTodo('');
        }
    };

    return (
        <div className="paper">
            <h1 className="title">To-Do List</h1>
            <div className="hole top-hole"></div>
            <div className="hole bottom-hole"></div>
            <div className="todos">
                {todos.map((todo, index) => (
                    <div key={index} className="todo">{todo}</div>
                ))}
                <input
                    type="text"
                    value={currentTodo}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="todo-input"
                    autoFocus
                />
            </div>
        </div>
    );
};

export default Paper;
