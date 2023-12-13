import { React, useState, useEffect } from "react";
import './ProjectCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProject } from "@/utils/projectManager";
const ProjectCard = ({ projects }) => {
    const [Project, setProject] = useState(null);
    const handleClose = (id) => {
        deleteProject(id)
    }
    useEffect(() => {
        if (projects) {
            const firstNonNullProject = projects.find(project => project !== null);
            setProject(firstNonNullProject);
        }
    }, [projects]);

    if (!Project) {
        return (<Typography gutterBottom variant="h5" component="div">
            No se encontro Project
        </Typography>)
    } else {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {Project.name}
                            </Typography>
                            {Project.icon && <Box component="div">{Project.icon}</Box>}
                            <DeleteIcon onClick={() => { handleClose(Project.id) }} />
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            {Project.description ?
                                <Typography variant="body2" color="text.secondary">
                                    {Project.description}
                                </Typography> : "Esta Project no tiene descripcion"}
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                {Project.state &&
                                    <Typography variant="body2" color="text.secondary">
                                        {Project.state}
                                    </Typography>}
                                {Project.dueDate &&
                                    <Typography variant="body2" color="text.secondary">
                                        {Project.dueDate}
                                    </Typography>}
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

};

export default ProjectCard;
