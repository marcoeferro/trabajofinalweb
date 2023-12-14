import { React, useState } from "react";
import './ProjectCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import ResponsiveDialog from "../ResponsiveDialog/ResponsiveDialog";
import { deleteProject } from "@/utils/projectManager";

const ProjectCard = ({ project }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
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
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            <Link to={`/my-projects/${project.id}`}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.name}
                                </Typography>
                            </Link>
                            {project.icon && <Box component="div">{project.icon}</Box>}
                            <DeleteIcon onClick={handleOpen} />
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            {project.description ?
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography> : "Esta project no tiene descripcion"}
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                {project.state &&
                                    <Typography variant="body2" color="text.secondary">
                                        {project.state}
                                    </Typography>}
                                {project.dueDate &&
                                    <Typography variant="body2" color="text.secondary">
                                        {project.dueDate}
                                    </Typography>}
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
                <ResponsiveDialog id={project.id} action={deleteProject} open={open} handleOpen={handleOpen} dialogTitle={"Esta Seguro que desea eliminar este Proyecto?"} dialogText={"Esta accion eliminara el proyecto de manera permanente"} />
            </Card>
        );
    }

};

export default ProjectCard;
