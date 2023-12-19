import { patchProject } from "@/utils/projectManager";
import React, { useState } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";

function ProjectEdit({ project, handleClose, open }) {
    const [newName, setName] = useState(project.name);
    const [newDescription, setDescription] = useState(project.description);
    const [newIcon, setIcon] = useState(project.icon);
    const [newMembers, setMembers] = useState(project.members);
    const [newDueDate, setDueDate] = useState(dayjs(project.dueDate,"DD/MM/YY"));
    dayjs.extend(customParseFormat)

    const handlePatch = () => {
        patchProject(newName, newDescription, newIcon, newMembers, newDueDate, project.id);
        handleClose()
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Editar Proyecto</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Por favor, edita los detalles del proyecto a continuación.
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="members"
                        label="Miembros"
                        id="members"
                        value={newMembers}
                        onChange={(event) => {
                            setMembers(event.target.value);
                        }}
                    />
                    <DemoContainer components={['DatePicker']}>

                        <DatePicker
                            label="Fecha de vencimiento"
                            value={newDueDate}
                            onChange={(newValue) => {
                                setDueDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </DemoContainer>
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
        </LocalizationProvider>

    );
}

export default ProjectEdit;
