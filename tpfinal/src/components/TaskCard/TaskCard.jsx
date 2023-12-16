import { React, useState } from "react";
import { Card, CardActionArea, CardContent, Box, Divider, Typography, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteTask } from "@/utils/taskManager";
import ResponsiveDialog from "../ResponsiveDialog/ResponsiveDialog";
import TaskEdit from "../TaskEdit/TaskEdit";
import { useParams, Link } from "react-router-dom";

const TaskCard = ({ task }) => {
    const { projectId, epicId, storieID } = useParams()
    const [openDelete, setOpenDelete] = useState(false)
    const handleOpenDelete = () => {
        setOpenDelete(!openDelete)
    }
    const [openEdit, setOpenEdit] = useState(false)
    const handleOpenEdit = () => {
        setOpenEdit(!openEdit)
    }

    if (!task) {
        return (<Typography gutterBottom variant="h5" component="div">
            No se encontro la task
        </Typography>)
    } else {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Grid container alignItems="center">
                            <Grid item xs={8}>
                                <Typography gutterBottom variant="h5" component="div" noWrap>
                                    {task.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <EditIcon onClick={handleOpenEdit} />
                                <DeleteIcon onClick={handleOpenDelete} />
                            </Grid>
                        </Grid>
                        <Divider />
                        {task.description ?
                            <Typography variant="body2" color="text.secondary" noWrap>
                                {task.description}
                            </Typography> : "Esta task no tiene descripcion"}
                    </CardContent>
                </CardActionArea>
                <TaskEdit handleClose={handleOpenEdit} open={openEdit} storieID={storieID} task={task} />
                <ResponsiveDialog id={task.id} action={deleteTask} open={openDelete} handleOpen={handleOpenDelete} dialogTitle={"Esta Seguro que desea eliminar esta Tarea?"} dialogText={"Esta accion eliminara el Tarea de manera permanente"} />
            </Card>
        );
    }

};

export default TaskCard;
