import { patchEpic } from "@/utils/epicManager";
import React, { useState } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

function EpicEdit({ epic, handleClose, open }) {
    const [newName, setName] = useState(epic.name);
    const [newDescription, setDescription] = useState(epic.description);
    const [newIcon, setIcon] = useState(epic.icon);

    const handlePatch = () => {
        patchEpic(newName, newDescription, newIcon, epic.projectId, epic.id);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar Epica</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Por favor, edita los detalles de la épica a continuación.
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
                    rows={4}
                    value={newDescription}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
                <DialogContentText>
                    Selecciona un icono!
                </DialogContentText>
                <Button onClick={() => setIcon("🚀")}>🚀</Button>
                <Button onClick={() => setIcon("🔍")}>🔍</Button>
                <Button onClick={() => setIcon("📈")}>📈</Button>
                <Button onClick={() => setIcon("📝")}>📝</Button>
                <Button onClick={() => setIcon("🎯")}>🎯</Button>
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

export default EpicEdit;
