import { React } from "react";
import './UserStorieCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteStory } from "@/utils/storyManager";
import ResponsiveDialog from "../ResponsiveDialog/ResponsiveDialog";
import { Link, useParams } from "react-router-dom";
import UserStorieEdit from "../UserStorieEdit/UserStorieEdit";

const UserStorieCard = ({ storie }) => {
    const [openDelete, setOpenDelete] = useState(false)
    const handleOpenDelete = () => {
        setOpenDelete(!openDelete)
    }
    const [openEdit, setOpenEdit] = useState(false)
    const handleCloseEdit = () => {
        setOpenEdit(!openEdit)
    }
    const { projectId, epicId } = useParams();
    if (!storie) {
        return (<Typography gutterBottom variant="h5" component="div">
            No se encontro la storie
        </Typography>)
    } else {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                <Link to={`/my-projects/${projectId}/epics/${epicId}/${storie.id}`}>
                                    {storie.name}
                                </Link>
                            </Typography>
                            {storie.icon && <Box component="div">{storie.icon}</Box>}
                            <EditIcon onClick={handleOpenEdit} />
                            <DeleteIcon onClick={handleOpenDelete} />
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            {storie.description ?
                                <Typography variant="body2" color="text.secondary">
                                    {storie.description}
                                </Typography> : "Esta storie no tiene descripcion"}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>

                                    {storie.due &&
                                        <Typography variant="body2" color="text.secondary">
                                            {storie.due}
                                        </Typography>}
                                    {storie.points &&
                                        <Typography variant="body2" color="text.secondary">
                                            {storie.points}
                                        </Typography>}
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                    {storie.created &&
                                        <Typography variant="body2" color="text.secondary">
                                            {storie.created}
                                        </Typography>}
                                    {storie.started &&
                                        <Typography variant="body2" color="text.secondary">
                                            {storie.started}
                                        </Typography>}
                                    {storie.finished &&
                                        <Typography variant="body2" color="text.secondary">
                                            {storie.finished}
                                        </Typography>}
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
                <UserStorieEdit epicId={epicId} storie={storie} open={open} handleClose={handleCloseEdit} />
                <ResponsiveDialog id={storie.id} action={deleteStory} open={openDelete} handleOpen={handleOpenDelete} dialogTitle={"Esta Seguro que desea eliminar esta Historia?"} dialogText={"Esta accion eliminara el Historia de manera permanente"} />
            </Card >
        );
    }

};

export default UserStorieCard;
