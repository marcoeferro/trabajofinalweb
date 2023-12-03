import React, { useEffect, useState } from "react";
import "./index.scss";
import Item from './item/index.jsx'
import UserInfo from "./user-info/index.jsx";
import NavBar from "./nav-bar/index.jsx";
import getTasks from "../../../../utils/taskManager.js";

function TaskList() {

  const[tasks,setTasks] = useState([]);

  useEffect(() =>
  {
    getTasks()
      .then((data) => (setTasks(data)));
  },[])


  const list = [
    {
      name: "task 1",
      created: "tbd",
      deadline: "tbd",
      id: 1,
    },
    {
      name: "task 2",
      created: "tbd",
      deadline: "tbd",
      id: 2,
    },
    {
      name: "task 3",
      created: "tbd",
      deadline: "tbd",
      id: 3,
    },
    {
      name: "task 4",
      created: "tbd",
      deadline: "tbd",
      id: 4,
    },
    {
      name: "task 5",
      created: "tbd",
      deadline: "tbd",
      id: 5,
    },
    {
      name: "mi tarea",
      created: "01/01/01",
      deadline: "01/01/01",
      id: 6,
    },
  ];
  const handleList = () => {
    return tasks.map(
      (task) =>{
        return(
          <Item
            key={task.id}
            id={task.id}
            name={task.name}
            created={task.created}
            deadline={task.deadline}
          />
        )
      }
    )
  }

  return (
    <div className="task-list-container">
      <NavBar/>
      <UserInfo/>
      <div className="list">
        {handleList()}
      </div>
    </div>
  );
}

export default TaskList;
