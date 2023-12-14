import { React } from "react";
import './TaskCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask } from "@/utils/taskManager";
import ResponsiveDialog from "../ResponsiveDialog/ResponsiveDialog";
const TaskCard = ({ task }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
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
                            <DeleteIcon onClick={handleOpen} />
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
                <ResponsiveDialog id={task.id} action={deleteTask} open={open} handleOpen={handleOpen} dialogTitle={"Esta Seguro que desea eliminar esta Tarea?"} dialogText={"Esta accion eliminara el Tarea de manera permanente"} />
            </Card>
        );
    }

};

export default TaskCard;
