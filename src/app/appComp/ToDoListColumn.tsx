import React from 'react';
import ToDoListItem from './ToDoListItem';

interface ToDoListColumnProps {
  title: string;
}

const ToDoListColumn: React.FC<ToDoListColumnProps> = ({ title }) => {
  return (
    <div className="column">
      <h1 className="font-bold mb-4 text-center">{title}</h1>
      {/* Render your ToDoListItems here */}
      <ToDoListItem cardTitle="Example Task 1" cardContent="Description for task 1" />
      <ToDoListItem cardTitle="Example Task 2" cardContent="Description for task 2" />
    </div>
  );
};

export default ToDoListColumn;
