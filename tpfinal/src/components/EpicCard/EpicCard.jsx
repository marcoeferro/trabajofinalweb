import React, { useState } from "react";
import './EpicCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEpic } from "@/utils/epicManager";
import ResponsiveDialog from "../ResponsiveDialog/ResponsiveDialog";
import { useParams, Link } from "react-router-dom";

const EpicCard = ({ epica }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    const { projectId } = useParams();
    if (!epica) {
        return (<Typography gutterBottom variant="h5" component="div">
            No se encontro epica
        </Typography>)
    } else {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                <Link to={`path="/my-projects/${projectId}/epics/${epica.id}"`}>
                                    {epica.name}
                                </Link>
                            </Typography>
                            {epica.icon && <Box component="div">{epica.icon}</Box>}
                            <DeleteIcon onClick={handleOpen} />
                        </Box>
                        <Divider />
                        {epica.description ?
                            <Typography variant="body2" color="text.secondary">
                                {epica.description}
                            </Typography> : "Esta epica no tiene descripcion"}
                    </CardContent>
                </CardActionArea>
                <ResponsiveDialog id={epica.id} action={deleteEpic} open={open} handleOpen={handleOpen} dialogTitle={"Esta Seguro que desea eliminar este Epica?"} dialogText={"Esta accion eliminara el epica de manera permanente"} />
            </Card>
        );
    }

};

export default EpicCard;
