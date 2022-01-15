import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export  type FilterType='All' | 'Completed' | 'Active';

function App() {

    const [tasks, setTask]= useState([
        {id:1, title:'HTML&CSS', isDone:false},
        {id:2, title:'JS', isDone:true},
        {id:3, title:'React', isDone:false},
    ]);

     const removeTasks=(idTask:number)=>{
        setTask(tasks.filter(f=>f.id!==idTask))
    }
    const [filterName, setFilter]=useState<FilterType>('All');
     let filteredT=tasks;
     if (filterName==="Completed"){
         filteredT=tasks.filter(f=>f.isDone)
     }
    if (filterName==="Active"){
        filteredT=tasks.filter(f=>!f.isDone)
    }
    const filterTasks=(name:FilterType)=>{
        setFilter(name)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={filteredT}
                removeTasks={removeTasks}
                filterTasks={filterTasks}
            />

        </div>
    );
}

export default App;
