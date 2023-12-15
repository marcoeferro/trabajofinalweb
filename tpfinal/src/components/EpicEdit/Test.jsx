import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import React from "react";

function EditDialog({ open, handleClose, fields, handlePatch }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Por favor, edita los detalles a continuación.
                </DialogContentText>
                {Object.entries(fields).map(([field, setField]) => (
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id={field}
                        label={field}
                        name={field}
                        autoComplete={field}
                        autoFocus
                        onChange={(event) => {
                            setField(event.target.value);
                        }}
                    />
                ))}
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

export default EditDialog;
