import React from 'react'
import { Box, Container,Typography } from "@mui/material";
const Footer = () => {
    return (
        <Box 
        sx={{ bgcolor:"black" ,buttom:0, paddingTop:'20px',paddingButtom:'20px',
        display:'flex',position:'absolute',width:'100%',overflow:'cover'}}
        >
        <Container 
        sx={{justifyContent:'center',justifyItems:'center', display:'flex',cursor:'grab',paddingButtom:'20px'}}>
            <Typography
             sx={{ color:"white",align:"Center",fontSize:15,fontWeight: 400,fontFamily:"Inter"}}
             >CopyRight. Milano20</Typography>
        </Container>
        </Box> 
    )
}

export default Footer
