import React, { useState } from "react";
import { TextField, Button, Box, Grid, IconButton, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from "@mui/material";
import { postProject } from "@/utils/projectManager";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function CreateProject({ onClose }) {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const [dueDate, setDueDate] = useState(dayjs(Date.now()));

  const handleNew = (event) => {
    event.preventDefault();
    postProject(name, description, icon, [], dueDate);
    onClose()
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>Nuevo Proyecto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, rellena la información del nuevo proyecto.
          </DialogContentText>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Nombre del proyecto"
                  variant="outlined"
                  fullWidth
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <DatePicker label="Fecha de finalizacion" value={dueDate} onChange={(date) => setDueDate(date)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descripcion del proyecto"
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
          <Button variant="contained" onClick={handleNew}>Submit</Button>
          <Button variant="contained" onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}

export default CreateProject;
