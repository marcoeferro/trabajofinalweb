import React, { useState } from "react";
import { TextField, Button, Box, Grid, IconButton, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Select, MenuItem } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { postTask } from "@/utils/taskManager";

function CreateTask({ onClose, storieId }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState(dayjs(Date.now()));
    const createdDate = dayjs(Date.now())

    const submitStory = (event) => {
        postTask(
            name,
            description,
            storieId,
            createdDate,
            dueDate)
        onClose()
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Dialog open={true} onClose={onClose}>
                <DialogTitle>Nueva Tarea</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Por favor, rellena la información de la nueva tarea.
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

export default CreateTask;
