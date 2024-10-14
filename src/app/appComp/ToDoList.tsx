import React from 'react';
import ToDoListColumn from './ToDoListColumn';

const ToDoList = () => {
    return (
        <div className="todo-list-container">
            <div className="todo-list">
                <ToDoListColumn title="Planning"/>
                <ToDoListColumn title="Working"/>
                <ToDoListColumn title="Done"/>
            </div>
        </div>
    );
};

export default ToDoList;
