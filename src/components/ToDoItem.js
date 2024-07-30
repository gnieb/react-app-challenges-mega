

export const ToDoItem = ({td, handleRemove}) => {

    const handleDelete = () => {
        handleRemove(td)
    }


    return(

        <div className="flex font-extrabold ">
            
            <div className="px-2">~ {td.todo.toUpperCase()}</div>
            <div className="px-2 border-2 border-orange-800 rounded-full" 
            onClick={handleDelete}
            >REMOVE</div>

        </div>

    )
}