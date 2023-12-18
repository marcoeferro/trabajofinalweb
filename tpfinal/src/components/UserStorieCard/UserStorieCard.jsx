import { React, useEffect, useState } from "react";
import { Card, CardActionArea, CardContent, Divider, Typography, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteStory } from "@/utils/storyManager";
import ResponsiveDialog from "../ResponsiveDialog/ResponsiveDialog";
import { Link } from "react-router-dom";
import UserStorieEdit from "../UserStorieEdit/UserStorieEdit";
import { getEpics } from "@/utils/epicManager";

const UserStorieCard = ({ storie }) => {
    const [epic, setEpic] = useState(null)

    useEffect(() => {
        getEpics().then((data) => {
            const epica = data.find(a => a.id === storie.epicId)
            setEpic(epica)
        })
    }, [storie])
    const [openDelete, setOpenDelete] = useState(false)
    const handleOpenDelete = () => {
        setOpenDelete(!openDelete)
    }
    const [openEdit, setOpenEdit] = useState(false)
    const handleCloseEdit = () => {
        setOpenEdit(!openEdit)
    }

    if (!storie) {
        return (<Typography gutterBottom variant="h5" component="div">
            No se encontro la storie
        </Typography>)
    } else if (storie) {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Grid container alignItems="center">
                            <Grid item xs={8}>
                                <Typography gutterBottom variant="h5" component="div" noWrap>
                                    {epic ? <Link to={`/my-projects/${epic.projectId}/${storie.epicId}/${storie.id}`}>
                                        {storie.name}
                                    </Link> : storie.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <EditIcon onClick={handleCloseEdit} />
                                <DeleteIcon onClick={handleOpenDelete} />
                            </Grid>
                        </Grid>
                        <Divider />
                        {storie.description ?
                            <Typography variant="body2" color="text.secondary" noWrap>
                                {storie.description}
                            </Typography> : "Esta storie no tiene descripcion"}
                    </CardContent>
                </CardActionArea>
                <UserStorieEdit epicId={storie.epicId} story={storie} open={openEdit} handleClose={handleCloseEdit} />
                <ResponsiveDialog id={storie.id} action={deleteStory} open={openDelete} handleOpen={handleOpenDelete} dialogTitle={"Esta Seguro que desea eliminar esta Tarea?"} dialogText={"Esta accion eliminara el Tarea de manera permanente"} />
            </Card>
        );
    }

};

export default UserStorieCard;
