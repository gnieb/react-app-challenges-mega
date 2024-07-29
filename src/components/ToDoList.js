import { useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { ToDoAdd } from "./ToDoAdd";

export const ToDoList = () => {
    
    const [todos, setTodos] = useState(["resend letter to Jori", "study AWS Lambda", "write some unit tests"]);


    const displayList = todos.map((t,i) => {
        return (
        <ToDoItem key={i} td={t} />
        
    )
    })

    return (
        <div>
            <ToDoAdd todos={todos} setTodos={setTodos} />
            {displayList}
        </div>
    )
};
