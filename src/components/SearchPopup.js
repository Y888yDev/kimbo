import React from 'react'
import { Drawer,Dialog,Box, DialogContent, DialogTitle, DialogContentText, TextField, Grid, List, IconButton, useTheme, Input, Paper } from "@mui/material"
import Closeicon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../logo.svg'

export default function SearchPopup(props) {

    const theme = useTheme();
    const { openPopUp, setOpenPopUp,onClose} =props;
  
    console.log('openPopUp' ,openPopUp);



   

return(

        
        <Dialog open={ openPopUp}  sx={{zIndex: theme.zIndex.drawer + 2}} fullScreen onClose={onClose}  >
        <IconButton sx={{ top: "2px", right: "2px", position: "absolute" }} onClick={() => {setOpenPopUp(false)}}>
                <Closeicon sx={{ color: "black", fontSize: 40}} />
            </IconButton>
            <DialogTitle sx={{justifyContent:'center',justifyItems:'center', display:'flex'}} > 
                <img src={logo} width="auto" height="auto" />
             </DialogTitle>

          


            <DialogContent  >

                <DialogContentText>
                    
            </DialogContentText>

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Search "
                    type="text"
                    fullWidth
                    variant="standard"
                    icon={SearchIcon}
                ><SearchIcon /></TextField>

                



            </DialogContent>

        </Dialog>
      

    )
}

