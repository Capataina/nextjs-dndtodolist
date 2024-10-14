import React from 'react';
import ToDoListItem from './ToDoListItem';

type ToDoListColumnProps = {
    title: string;
    //tag: 'Planning' | 'Working' | 'Done';
    notes: Array<{ id: string; title: string; description: string; tag: string }>;
}

const ToDoListColumn: React.FC<ToDoListColumnProps> = ({title, notes}) => {
    return (
        <div className="column">
            <h1 className="font-bold mb-4 text-center text-3xl">{title}</h1>
            {notes.map((note) => (
                <ToDoListItem key={note.id} noteId={note.id}/>
            ))}
        </div>
    );
};

export default ToDoListColumn;
