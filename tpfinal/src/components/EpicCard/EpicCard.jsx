import React from "react";
import './EpicCard.scss'
import { Card, CardActionArea, CardContent, Box, Divider, Typography } from "@mui/material";

const EpicCard = ({ Epica }) => {
    if (!Epica) {
        return (<Typography gutterBottom variant="h5" component="div">
            No se encontro Epica
        </Typography>)
    } else {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {Epica.name}
                            </Typography>
                            {Epica.icon && <Box component="div">{Epica.icon}</Box>}
                        </Box>
                        <Divider />
                        {Epica.description ?
                            <Typography variant="body2" color="text.secondary">
                                {Epica.description}
                            </Typography> : "Esta epica no tiene descripcion"}
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

};

export default EpicCard;
