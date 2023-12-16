import { React, useState } from "react";
import { Card, CardActionArea, CardContent, Box, Divider, Typography, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import ResponsiveDialog from "../ResponsiveDialog/ResponsiveDialog";
import { deleteProject } from "@/utils/projectManager";
import ProjectEdit from "../ProjectEdit/ProjectEdit";

const ProjectCard = ({ project }) => {
    const [openDelete, setOpenDelete] = useState(false)
    const handleOpenDelete = () => {
        setOpenDelete(!openDelete)
    }
    const [openEdit, setOpenEdit] = useState(false)
    const handleOpenEdit = () => {
        setOpenEdit(!openEdit)
    }

    if (!project) {
        return (<Typography gutterBottom variant="h5" component="div">
            No se encontro project
        </Typography>)
    } else {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Grid container alignItems="center">
                            <Grid item xs={8}>
                                <Link to={`/my-projects/${project.id}`}>
                                    <Typography gutterBottom variant="h5" component="div" noWrap>
                                        {project.name}
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <EditIcon onClick={handleOpenEdit} />
                                <DeleteIcon onClick={handleOpenDelete} />
                            </Grid>
                        </Grid>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            {project.description ?
                                <Typography variant="body2" color="text.secondary" noWrap>
                                    {project.description}
                                </Typography> : "Esta project no tiene descripcion"}
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                {project.state &&
                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {project.state}
                                    </Typography>}
                                {project.dueDate &&
                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {project.dueDate}
                                    </Typography>}
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
                <ProjectEdit project={project} handleClose={handleOpenEdit} open={openEdit} />
                <ResponsiveDialog id={project.id} action={deleteProject} open={openDelete} handleOpen={handleOpenDelete} dialogTitle={"Esta Seguro que desea eliminar este Proyecto?"} dialogText={"Esta accion eliminara el proyecto de manera permanente"} />
            </Card>
        );
    }

};

export default ProjectCard;
