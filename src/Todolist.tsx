import React from "react";
import {FilterType} from "./App";

type PropsType = {
    title: string
    tasks: Array<inArray>
    removeTasks:(idTask:number)=>void
    filterTasks:(name:FilterType)=>void
}

type inArray = {
    id:number,
    title:string,
    isDone:boolean
}

export const Todolist = (props:PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((item,i)=>{
                    return (
                        <li key={i}><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span>
                        <button onClick={()=>props.removeTasks(item.id)}>x</button></li>
                    )
                })}

            </ul>
            <div>
                <button onClick={()=>props.filterTasks("All")}>All</button>
                <button onClick={()=>props.filterTasks("Active")}>Active</button>
                <button onClick={()=>props.filterTasks("Completed")}>Completed</button>
            </div>
        </div>
    )
}