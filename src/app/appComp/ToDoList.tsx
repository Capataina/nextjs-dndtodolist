import React from 'react';
import { useDrop } from 'react-dnd';
import useNoteStore from './NoteStore';
import ToDoListColumn from './ToDoListColumn';

const ToDoList: React.FC = () => {
  const notes = useNoteStore((state) => state.notes);
  const updateNoteTag = useNoteStore((state) => state.updateNoteTag);

  const createDropHandler = (newTag: 'Planning' | 'Working' | 'Done') => {
    const [, drop] = useDrop(() => ({
      accept: 'note',
      drop: (item: { id: string }) => {
        updateNoteTag(item.id, newTag);
      },
    }));
    return drop;
  };

  const planningDropRef = createDropHandler('Planning');
  const workingDropRef = createDropHandler('Working');
  const doneDropRef = createDropHandler('Done');

  return (
    <div className="todo-list-container">
      <div ref={planningDropRef} className="column">
        <ToDoListColumn
          title="Planning"
          tag="Planning"
          notes={notes.filter((note) => note.tag === 'Planning')}
        />
      </div>
      <div ref={workingDropRef} className="column">
        <ToDoListColumn
          title="Working"
          tag="Working"
          notes={notes.filter((note) => note.tag === 'Working')}
        />
      </div>
      <div ref={doneDropRef} className="column">
        <ToDoListColumn
          title="Done"
          tag="Done"
          notes={notes.filter((note) => note.tag === 'Done')}
        />
      </div>
    </div>
  );
};

export default ToDoList;
