import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import useNoteStore from "@/app/appComp/NoteStore";

const ToDoListItem = ({noteId}: { noteId: string }) => {
    const note = useNoteStore((state) =>
        state.notes.find((note) => note.id === noteId)
    );
    
    return (


        <Card className="card">
            <CardHeader>
                <CardTitle className="card-title">{note?.title}</CardTitle>
            </CardHeader>
            <CardContent className="card-description">{note?.description}</CardContent>
        </Card>

    )
}

export default ToDoListItem;
