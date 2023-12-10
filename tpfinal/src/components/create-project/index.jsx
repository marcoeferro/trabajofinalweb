import React from "react";
import "./index.scss";
import { useState } from "react";
import { postProject } from "@/utils/projectManager";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function CreateProject({ onClose }) {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const [dueDate,setDueDate] = useState(dayjs(Date.now()));

  const handleNew = (event) => {
    event.preventDefault();
    
    postProject(name, description, icon, [] ,dueDate);
  };
  //
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="create-project-container">
        <form className="create-project-form">
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
            <button className="create-project-submit" onClick={handleNew}>
              Submit
            </button>
            <button className="close-modal" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </LocalizationProvider>
  );
}

export default CreateProject;
