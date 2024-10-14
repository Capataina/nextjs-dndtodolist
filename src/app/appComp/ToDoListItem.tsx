import React from 'react';
import { useDrag } from 'react-dnd';
import useNoteStore from './NoteStore';
import { ItemTypes } from './ItemTypes';

interface ToDoListItemProps {
  noteId: string;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ noteId }) => {
  const note = useNoteStore((state) =>
    state.notes.find((note) => note.id === noteId)
  );

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.NOTE,
    item: { id: noteId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  if (!note) return null;

  return (
    <div
      ref={drag}
      className={`card ${isDragging ? 'opacity-50' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="card-title">{note.title}</div>
      <div className="card-description">{note.description}</div>
    </div>
  );
};

export default ToDoListItem;
