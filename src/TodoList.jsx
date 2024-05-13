import { useState } from "react"
import {v4 as uuidv4 } from "uuid"

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    function addnewValue(){
        setTodos([...todos, {task: newTodo, id: uuidv4(), isDone: false}]);
        setNewTodo("");
    }

    function updateValue(event){
        setNewTodo(event.target.value);
    }

    function deleteTodo(id){
        setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
    }

    function markDoneAll(){
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
            return {
                ...todo,
                // task: todo.task.toUpperCase()
                isDone: true
            }
        }));
    }

    function markDone(id){
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        // task: todo.task.toUpperCase()
                        isDone: true
                    }
                }else {
                    return todo;
                }
        }));
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
                    return <li key={todo.id}>
                        <span style={todo.isDone ? {textDecoration: "line-through"} : {}} >{todo.task}</span> &nbsp; &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        <button onClick={()=>markDone(todo.id)}>Done</button>
                        </li>
                })
            }
        </ul>
        <br/><br/>
        <button onClick={markDoneAll}>Done All</button>

        </div>
    )
}
