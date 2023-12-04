import './index.scss';
import {React, useState } from "react";

function CreateStory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="create-story-container">
      <form>
        <input
          className="text-field name"
          type="text"
          placeholder="Nombre de la historia"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <textarea
          rows={10}
          className="text-field desc"
          type="text"
          placeholder="Descripcion de la historia"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
        <button className="create-story-submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateStory;
