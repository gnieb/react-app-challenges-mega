import { useState } from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
    
    const [todos, setTodos] = useState(["resend letter to Jori", "study AWS Lambda", "write some unit tests"]);


    const displayList = todos.map((t,i) => {
        <ToDoItem key={i} td={t} />
    })

    return (
        <div>
            {displayList}
        </div>
    )
};
