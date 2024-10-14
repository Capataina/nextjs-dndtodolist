import React from 'react';
import ToDoListColumn from './ToDoListColumn';
import useNoteStore from "@/app/appComp/NoteStore";

const ToDoList = () => {
    const notes = useNoteStore((state) => state.notes)

    return (
        <div className="todo-list-container">
            <div className="todo-list">
                <ToDoListColumn title="Planning" notes={notes.filter(note => note.tag === "Planning")}/>
                <ToDoListColumn title="Working" notes={notes.filter(note => note.tag === "Working")}/>
                <ToDoListColumn title="Done" notes={notes.filter(note => note.tag === "Done")}/>
            </div>
        </div>
    );
};

export default ToDoList;
