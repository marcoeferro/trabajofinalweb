import React from "react";
import './index.scss'

function Item(taskProperties) {
  return (
    <div className="item">
      <p className="task-name">{taskProperties.name}</p>
      <div className="column">
        <p>Creado</p>
        <p>{taskProperties.created}</p>
      </div>
      <div className="column">
        <p>DeadLine</p>
        <p>{taskProperties.deadline}</p>
      </div>
    </div>
  );
}

export default Item;
