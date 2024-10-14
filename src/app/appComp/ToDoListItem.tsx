import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ToDoListItem = ({ cardTitle, cardContent }: { cardTitle: String, cardContent: any }) => {
  return (

    <Card className="card">
      <CardHeader>
        <CardTitle className="card-title">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="card-description">{cardContent}</CardContent>
    </Card>

  )
}

export default ToDoListItem;
