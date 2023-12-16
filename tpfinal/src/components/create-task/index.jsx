import React, { useState } from "react";
import { useEffect } from "react";
import { postTask } from "@/utils/taskManager";

function CreateTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [storyId, setStoryId] = useState("");
  const [createdDate, setCreatedDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = () => {
    const taskData = {
      name,
      description,
      storyId,
      createdDate,
      dueDate
    };

    postTask(taskData);
  };

  return (
    <div className="create-task-container">
        <form className="create-task-form">
            <h2>Crear tarea</h2>
            <input
                className="text-field name"
                type="text"
                placeholder="Nombre de la tarea"
                value={name}
                onChange={(event) => setName(event.target.value)}
            ></input>
            <textarea
                className="text-field desc"
                type="text"
                placeholder="Descripción de la tarea"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            ></textarea>
            <input
                className="text-field"
                type="date"
                value={createdDate}
                onChange={(event) => setCreatedDate(event.target.value)}
            ></input>
            <input
                className="text-field"
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
            ></input>
            <button className="create-task-submit" onClick={handleSubmit}>
                Crear tarea
            </button>            
        </form>

    </div>
  );
}

export default CreateTask;
