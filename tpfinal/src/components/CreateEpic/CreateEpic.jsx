import React, { useState } from "react";
import { TextField, Button, Grid, IconButton, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from "@mui/material";
import { postEpic } from "@/utils/epicManager";

function CreateEpic({ onClose, projectId }) {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);

  const handleNew = (event) => {
    event.preventDefault();
    postEpic(name, description, icon, projectId);
    onClose()
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Nueva Epica</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, rellena la información de la nueva Epica.
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
              <IconButton onClick={() => setIcon("🚀")}>🚀</IconButton>
              <IconButton onClick={() => setIcon("🔍")}>🔍</IconButton>
              <IconButton onClick={() => setIcon("📈")}>📈</IconButton>
              <IconButton onClick={() => setIcon("📝")}>📝</IconButton>
              <IconButton onClick={() => setIcon("🎯")}>🎯</IconButton>
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
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleNew}>Submit</Button>
        <Button variant="contained" onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateEpic;

