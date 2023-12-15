import React, { useEffect, useState } from "react";
import './EpicCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteEpic } from "@/utils/epicManager";
import ResponsiveDialog from "../ResponsiveDialog/ResponsiveDialog";
import { useParams, Link } from "react-router-dom";
import EpicEdit from "../EpicEdit/EpicEdit";

const EpicCard = ({ epica }) => {
    const [openDelete, setOpenDelete] = useState(false)
    const handleOpenDelete = () => {
        setOpenDelete(!openDelete)
    }
    const [openEdit, setOpenEdit] = useState(false)
    const handleOpenEdit = () => {
        setOpenEdit(!openEdit)
    }
    const { projectId } = useParams();


    if (!epica) {
        return (<Typography gutterBottom variant="h5" component="div">
            No se encontro epica
        </Typography>)
    } else {
        return (
            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                <Link to={`/my-projects/${projectId}/epics/${epica.id}`}>
                                    {epica.name}
                                </Link>
                            </Typography>
                            {epica.icon && <Box component="div">{epica.icon}</Box>}
                            <EditIcon onClick={handleOpenEdit} />
                            <DeleteIcon onClick={handleOpenDelete} />
                        </Box>
                        <Divider />
                        {epica.description ?
                            <Typography variant="body2" color="text.secondary">
                                {epica.description}
                            </Typography> : "Esta epica no tiene descripcion"}
                    </CardContent>
                </CardActionArea>
                <ResponsiveDialog id={epica.id} action={deleteEpic} open={openDelete} handleOpen={handleOpenDelete} dialogTitle={"Esta Seguro que desea eliminar este Epica?"} dialogText={"Esta accion eliminara el epica de manera permanente"} />
                <EpicEdit epic={epica} open={openEdit} handleClose={handleOpenEdit} />
            </Card>
        );
    }

};

export default EpicCard;
