import { useState } from "react"

export default function TodoList(){
    let [todos, setTodos] = useState(["Sample task"]);
    let [newTodo, setNewTodo] = useState("");

    function addnewValue(){
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    function updateValue(event){
        setNewTodo(event.target.value);
    }
    return (
        <div>
        <h2>Todo List</h2>
        <input placeholder="Add a task" value={newTodo} onChange={(updateValue)}></input>
        <button onClick={addnewValue}>Add a task</button>
        <br/><br/>
        <h4>Todo List</h4>
        <hr/>
        <ul>
            {
                todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
        </div>
    )
}