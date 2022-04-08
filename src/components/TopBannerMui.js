import React from 'react'
import { Box, Container,Typography } from "@mui/material";
const TopBannerMui = () => {
    return (
        <Box sx={{ bgcolor:"black"}}>
        <Container sx={{justifyContent:'center',justifyItems:'center', display:'flex',cursor:'grab'}}>
            <Typography sx={{ color:"white",align:"Center",fontSize:15,fontWeight: 400,fontFamily:"Inter"}}>Welcome to milano</Typography>
        </Container>
        </Box> 
    )
}

export default TopBannerMui
