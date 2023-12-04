import React, { useState } from "react";
import "./index.scss";

function CreateEpic() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="create-epic-container">
      <form>
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
        <button className="create-epic-submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateEpic;
