import { React } from "react";
import './TaskCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask } from "@/utils/taskManager";
const TaskCard = ({ task }) => {
    const handleClose = (id) => {
        deleteTask(id)
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
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {task.name}
                            </Typography>
                            {task.icon && <Box component="div">{task.icon}</Box>}
                            <DeleteIcon onClick={() => { handleClose(task.id) }} />
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            {task.description ?
                                <Typography variant="body2" color="text.secondary">
                                    {task.description}
                                </Typography> : "Esta task no tiene descripcion"}
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>

                                {task.dueDate &&
                                    <Typography variant="body2" color="text.secondary">
                                        {task.dueDate}
                                    </Typography>}
                                {task.createdDate &&
                                    <Typography variant="body2" color="text.secondary">
                                        {task.createdDate}
                                    </Typography>}
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

};

export default TaskCard;
