
import { DndProvider } from "react-dnd";
import ToDoList from "./appComp/ToDoList";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <ToDoList />
      </DndProvider>
    </>

  )
}

