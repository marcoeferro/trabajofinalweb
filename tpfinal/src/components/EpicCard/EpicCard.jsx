import React from "react";
import './EpicCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEpic } from "@/utils/epicManager";

const EpicCard = ({ epica }) => {
    const handleClose = (id) => {
        deleteEpic(id)
    }
    if (!epica) {
        return (<Typography gutterBottom variant="h5" component="div">
            No se encontro epica
        </Typography>)
    } else {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {epica.name}
                            </Typography>
                            {epica.icon && <Box component="div">{epica.icon}</Box>}
                            <DeleteIcon onClick={() => { handleClose(epica.id) }} />
                        </Box>
                        <Divider />
                        {epica.description ?
                            <Typography variant="body2" color="text.secondary">
                                {epica.description}
                            </Typography> : "Esta epica no tiene descripcion"}
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

};

export default EpicCard;
