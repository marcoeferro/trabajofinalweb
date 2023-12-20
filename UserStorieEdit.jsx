import { patchStory } from "@/utils/storyManager";
import React, { useState } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

function UserStorieEdit({ epicId, story, handleClose, open }) {
    const [newName, setName] = useState(story.name);
    const [newDescription, setDescription] = useState(story.description);
    const [newIcon, setIcon] = useState(story.icon);
    const [newOwner, setOwner] = useState(story.owner || '');
    const [newState, setState] = useState(story.state);
    const [newPoints, setPoints] = useState(story.points);
    const [newAssignedTo, setAssignedTo] = useState(story.assignedTo);
    const [newDueDate, setDueDate] = useState(dayjs(Date(story.due)));

    const handlePatch = () => {
        patchStory(newName, newDescription, newIcon, epicId, newOwner, newState, newPoints, newAssignedTo, newDueDate, story.created, story.started, story.finished, story.id);
        handleClose()
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Editar Historia</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Por favor, edita los detalles de la historia a continuación.
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
                        name="Icon"
                        label="Icono"
                        id="Icon"
                        value={newIcon}
                        onChange={(event) => {
                            setIcon(event.target.value);
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="owner"
                        label="Propietario"
                        id="owner"
                        value={newOwner}
                        onChange={(event) => {
                            setOwner(event.target.value);
                        }}
                        type="number"
                    />
                    <FormControl fullWidth variant="outlined" margin="normal">
                        <InputLabel id="state-label">Estado</InputLabel>
                        <Select
                            labelId="state-label"
                            id="state"
                            value={newState}
                            onChange={(event) => {
                                setState(event.target.value);
                            }}
                            label="Estado"
                        >
                            <MenuItem value={"todo"}>Todo</MenuItem>
                            <MenuItem value={"in progress"}>In Progress</MenuItem>
                            <MenuItem value={"done"}>Done</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="points"
                        label="Puntos"
                        id="points"
                        value={newPoints}
                        onChange={(event) => {
                            setPoints(event.target.value);
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="assignedTo"
                        label="Asignado a"
                        id="assignedTo"
                        value={newAssignedTo}
                        onChange={(event) => {
                            setAssignedTo(event.target.value);
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

export default UserStorieEdit;
