import React, { useState } from "react";
import { TextField, Button, Box, Grid, IconButton, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Select, MenuItem } from "@mui/material";
import { postProject } from "@/utils/projectManager";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function CreateStory({ onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [dueDate, setDueDate] = useState(dayjs(Date.now()));
  const [state, setState] = useState("todo");
  const [points, setPoints] = useState(5);
  const created = dayjs(Date.now());
  const started = dayjs(Date.now());
  const finished = dayjs(Date.now());
  const assignedTo = 0;
  const epicId = 0;
  const ownerId = 0;

  const submitStory = (event) => {
    postStory(
      name,
      description,
      icon,
      epicId,
      ownerId,
      state,
      points,
      assignedTo,
      dueDate.format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      created.format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      started.format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      finished.format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
    onClose()
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>Nueva Historia</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, rellena la información de la nueva historia.
          </DialogContentText>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Nombre de la historia"
                  variant="outlined"
                  fullWidth
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <DatePicker label="Fecha de entrega" value={dueDate} onChange={(date) => setDueDate(date)} fullWidth />
              </Grid>
              <Grid item xs={6}>
                <Select
                  label="Selecciona un estado"
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                  fullWidth
                >
                  <MenuItem value="todo">todo</MenuItem>
                  <MenuItem value="running">running</MenuItem>
                  <MenuItem value="done">done</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Story Points"
                  type="number"
                  InputProps={{ inputProps: { min: 1, max: 10 } }}
                  variant="outlined"
                  fullWidth
                  onChange={(event) => setPoints(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descripcion de la historia"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <IconButton onClick={() => setIcon("🚀")}>🚀</IconButton>
              <IconButton onClick={() => setIcon("🔍")}>🔍</IconButton>
              <IconButton onClick={() => setIcon("📈")}>📈</IconButton>
              <IconButton onClick={() => setIcon("📝")}>📝</IconButton>
              <IconButton onClick={() => setIcon("🎯")}>🎯</IconButton>
            </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={submitStory}>Submit</Button>
          <Button variant="contained" onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}

export default CreateStory;
