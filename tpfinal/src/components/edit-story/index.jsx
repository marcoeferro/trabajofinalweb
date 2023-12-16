import "./index.scss";
import { React, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { patchStory } from "@/utils/storyManager";

function EditStory(story) {
  const [newName, setName] = useState(story.name);
  const [newDescription, setDescription] = useState(story.description);
  const [newIcon, setIcon] = useState(story.icon);
  const [dueDate, setDueDate] = useState(dayjs(Date.now()));
  const [newState, setState] = useState(story.state);
  const [newPoints, setPoints] = useState(story.points);
  const created = dayjs(Date.now());
  const started = dayjs(Date.now());
  const finished = dayjs(Date.now());
  const assignedTo = 0;
  const epicId = 0;
  const ownerId = 0;

  const patchStory = () => {
    event.preventDefault();
    patchStory(
      newName,
      newDescription,
      newIcon,
      epicId,
      ownerId,
      newState,
      newPoints,
      assignedTo,
      dueDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      created.format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      started.format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      finished.format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="edit-story-container">
        <form className="story-form">
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
          <div className="date-picker-container">
            <DatePicker label="fecha de entrega" value={dueDate} onChange={(date) => setDueDate(date)}/>
            <div className="points-container">
              <label>Story Points</label>
              <input
                type="number"
                min="1" max="10"
                placeholder="entre 1 y 10"
                onChange={(event) => setPoints(event.target.value)}
              ></input>
            </div>
          </div>
          <div className="select-container">
            <label className="select-label">Selecciona un estado</label>
            <select
              name="state"
              id="state"
              className="state"
              onChange={(event) => setState(event.target.value)}
            >
              <option value="todo">todo</option>
              <option value="running">running</option>
              <option value="done">done</option>
            </select>
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

          <button 
            className="edit-story-submit"
            onClick={(event) => patchStory(event)}
          >Update</button>
        </form>
      </div>
    </LocalizationProvider>
  );
}

export default EditStory;