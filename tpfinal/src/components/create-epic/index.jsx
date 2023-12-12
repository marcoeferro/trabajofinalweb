import React, { useState } from "react";
import "./index.scss";
import { postEpic } from "@/utils/epicManager";

function CreateEpic({projectId}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon,setIcon] = useState("");

  const submitEpic = (event) =>{
    event.preventDefault();
    console.log(projectId)
    postEpic(name,description,icon,projectId);
  }

  return (
    <div className="create-epic-container">
      <form className="create-epic-form">
        <input
          className="text-field name"
          type="text"
          placeholder="Nombre de la Epica"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <textarea
          rows={10}
          className="text-field desc"
          type="text"
          placeholder="Descripcion de la Epica"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
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
        <button className="create-epic-submit"
        onClick={(event) => submitEpic(event)}
        >Submit</button>
      </form>
    </div>
  );
}

export default CreateEpic;
