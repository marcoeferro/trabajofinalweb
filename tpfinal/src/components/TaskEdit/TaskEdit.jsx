import { patchTask } from "@/utils/taskManager";
import React, { useEffect, useState } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import dayjs from "dayjs";

function TaskEdit({ task, storieID, handleClose, open }) {
    const [newName, setName] = useState(task.name);
    const [newDescription, setDescription] = useState(task.description);
    const [dueDate, setDueDate] = useState(dayjs(Date(task.dueDate)))
    const [cretedDate, setCreatedDate] = useState(dayjs(Date(task.cretedDate)))

    const handlePatch = () => {
        patchTask(
            newName,
            newDescription,
            storieID,
            dueDate,
            cretedDate,
            task.id
        );
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar Tarea</DialogTitle>
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
