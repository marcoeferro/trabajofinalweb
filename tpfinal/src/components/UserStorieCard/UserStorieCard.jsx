import { React } from "react";
import './UserStorieCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteStory } from "@/utils/storyManager";

const UserStorieCard = ({ storie }) => {
    const handleClose = (id) => {
        deleteStory(id)
    }
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
                                {storie.name}
                            </Typography>
                            {storie.icon && <Box component="div">{storie.icon}</Box>}
                            <DeleteIcon onClick={() => { handleClose(storie.id) }} />
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
            </Card >
        );
    }

};

export default UserStorieCard;
