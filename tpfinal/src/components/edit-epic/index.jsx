import { patchEpic } from "@/utils/epicManager";
import React, { useState } from "react";
import "./index.scss";

function EditEpic({ epic }) {
  const [newName, setName] = useState(epic.name);
  const [newDescription, setDescription] = useState(epic.description);
  const [newIcon, setIcon] = useState(epic.icon);

  const handlePatch = () => {
    patchEpic(newName, newDescription, newIcon, epic.projectId, epic.id);
  };
  return (
    <div className="background">
      <div className="bg-placeholder"></div>
      <div className="editor-container">
        <h1 className="title">Editar Epica</h1>
        <input
          className="text-edit name"
          type="text"
          placeholder={epic.name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <textarea
          className="text-edit description"
          placeholder={epic.description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <div className="edit-icon">
          <p>selecciona un icono!</p>
          <button className="icon" type="Button" onClick={() => setIcon("🚀")}>
            🚀
          </button>
          <button className="icon" type="Button" onClick={() => setIcon("🔍")}>
            🔍
          </button>
          <button className="icon" type="Button" onClick={() => setIcon("📈")}>
            📈
          </button>
          <button className="icon" type="Button" onClick={() => setIcon("📝")}>
            📝
          </button>
          <button className="icon" type="Button" onClick={() => setIcon("🎯")}>
            🎯
          </button>
        </div>
        <div className="buttons-container">
          <button type="button" className="back-button">
            Go Back
          </button>
          <button
            type="button"
            className="submit-button"
            onClick={handlePatch()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditEpic;
