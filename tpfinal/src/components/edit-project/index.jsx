import React from "react";
import "./index.scss";
import { useState } from "react";
import { patchProject } from "@/utils/projectManager";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function EditProject({ project }) {
  const [newName, setName] = useState(project.name);
  const [newDescription, setDescription] = useState(project.description);
  const [newIcon, setIcon] = useState(project.icon);
  const [dueDate,setDueDate] = useState(dayjs(Date.now()));
  
  const handleClose = () => {
    onProjectUpdate(null);
  };

  const handlePatch = () => {
    const projectData = {
      name: newName,
      description: newDescription,
      icon: newIcon,
      dueDate: dueDate
    };

    const confirm = window.confirm("¿Estás seguro de que quieres actualizar el proyecto?");
    if (confirm) {
      patchProject(projectData);
      onProjectUpdate(projectData);
    }
  };
  //
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="edit-project-container">
        <form className="edit-project-form">
          <input
            className="text-field name"
            type="text"
            placeholder="Nombre del proyecto"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
          <textarea
            rows={10}
            className="text-field desc"
            type="text"
            placeholder="Descripcion del proyecto"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
          <div className="date-picker-container">
            <p>fecha de finalizacion:</p>
            <DatePicker value={dueDate} onChange={(date) => setDueDate(date)}/>
          </div>
          <div className="icon-selector">
            <p>selecciona un icono!</p>
            <button
              className="icon"
              type="Button"
              onClick={() => setIcon("🚀")}
            >
              🚀
            </button>
            <button
              className="icon"
              type="Button"
              onClick={() => setIcon("🔍")}
            >
              🔍
            </button>
            <button
              className="icon"
              type="Button"
              onClick={() => setIcon("📈")}
            >
              📈
            </button>
            <button
              className="icon"
              type="Button"
              onClick={() => setIcon("📝")}
            >
              📝
            </button>
            <button
              className="icon"
              type="Button"
              onClick={() => setIcon("🎯")}
            >
              🎯
            </button>
          </div>
          <div className="modal-buttons">
            <button className="edit-project-submit" onClick={handlePatch}>
              Update
            </button>
            <button className="close-modal" onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </LocalizationProvider>
  );
}

export default EditProject;