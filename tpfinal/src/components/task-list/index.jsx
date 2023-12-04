import React, { useEffect, useState } from "react";
import "./index.scss";
import Item from './item/index.jsx'
import UserInfo from "./user-info/index.jsx";
import NavBar from "./nav-bar/index.jsx";
import { getTasks } from "@/utils/taskManager.js";

function TaskList() {

  const[tasks,setTasks] = useState([]);

  useEffect(() =>
  {
    getTasks()
      .then((data) => (setTasks(data)));
  },[])

  const listMap = () => {
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
        {listMap()}
      </div>
    </div>
  );
}

export default TaskList;
