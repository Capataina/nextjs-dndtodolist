"use client";

import React from 'react';
import { useState } from 'react';
import useNoteStore from './NoteStore';
import ToDoListItem from './ToDoListItem';

type ToDoListColumnProps = {
  title: string;
  tag: 'Planning' | 'Working' | 'Done';
  notes: Array<{ id: string; title: string; description: string; tag: string }>;
}

const ToDoListColumn: React.FC<ToDoListColumnProps> = ({ title, tag, notes }) => {
  const addNote = useNoteStore((state) => state.addNote);
  const [showAddButton, setShowAddButton] = useState(false);

  return (
    <div
      className="column"
      onMouseEnter={() => setShowAddButton(true)}
      onMouseLeave={() => setShowAddButton(false)}
    >
      <div className="header">
        <h2>{title}</h2>
        {showAddButton && (
          <button
            onClick={() =>
              addNote('New Note', 'Description here...', tag)
            }
            className="ml-2"
          >
            +
          </button>
        )}
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <ToDoListItem key={note.id} noteId={note.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoListColumn;
