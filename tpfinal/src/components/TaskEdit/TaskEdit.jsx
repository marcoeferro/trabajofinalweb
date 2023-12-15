import { patchTask } from "@/utils/taskManager";
import React, { useState } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

function TaskEdit({ task, storieID, handleClose, open }) {
    const [newName, setName] = useState(task.name);
    const [newDescription, setDescription] = useState(task.description);

    const handlePatch = () => {
        patchTask(newName, newDescription, storieID, task.createdDate, task.dueDate, task.id);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar Epica</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Por favor, edita los detalles de la Tarea a continuación.
                </DialogContentText>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nombre"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={newName}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="Descripción"
                    id="description"
                    multiline
                    rows={8}
                    value={newDescription}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handlePatch}>
                    Submit
                </Button>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default TaskEdit;
