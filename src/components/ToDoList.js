import { useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { ToDoAdd } from "./ToDoAdd";

export const ToDoList = () => {
    
    const [todos, setTodos] = useState([
        {
            id: 1,
            todo: "resend letter to Jori",

        },
        {
            id: 2,
            todo: "study AWS Lambda"
        }, 
        {
            
            id:3,
            todo: "write some unit tests"
        }
    ]);



    const handleRemove = (td) => {
        const withoutRemovedTodo = todos.filter((t) => t.id !== td.id)
        console.log(withoutRemovedTodo)

        setTodos(withoutRemovedTodo)

    }

    const displayList = todos.map((t,i) => {
            return (
            <ToDoItem key={i} td={t} handleRemove={handleRemove} />
            
        )
        })


    return (
        <div>
            <ToDoAdd todos={todos} setTodos={setTodos} />
            {displayList}
        </div>
    )
};
