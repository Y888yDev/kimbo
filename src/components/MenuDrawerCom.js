import React, { useState ,useEffect} from 'react'
import {
  Drawer, List, ListItemButton, useMediaQuery,
  ListItemText, IconButton, Box, Dialog, useTheme, Paper, Grid, Typography
} from "@mui/material"


import MenuIcon from '@mui/icons-material/Menu';
import Searchicon from '@mui/icons-material/Search';
import Closeicon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ListItem from './ListItem';
import SearchPanel from "./SearchPopup";
import logo from '../logo.svg'

const MenuDrawerCom = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  
const [ListViewWidth,setListViewWidth]=useState(450)
  // const theme = useTheme();
  const isMatch = useMediaQuery(props.theme.breakpoints.down('sm'))
  useEffect(() => {   Widthcontroller(); });
  const Widthcontroller= ()=>{ 
    if(isMatch){
      setListViewWidth(window.outerWidth);
     
    }else{
      setListViewWidth(600);
    }
  
   }
  console.log("Drawer " + isMatch,ListViewWidth)
  return (
    <React.Fragment>
  
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>

        <List sx={{ fontSize: 1, width: ListViewWidth, marginTop: "90px" }}>

          <ListItem titles={props.items}/>
          <Paper variant="outlined" square />
          
        </List>

        <Box sx={{ justifyContent: 'space-around', background: 'black', display: 'flex', position: 'fixed', bottom: 0, width: ListViewWidth,paddingTop:'5px' }}>

          <Box >
            <Typography sx={{ color: 'white', cursor: 'pointer' }}>ACCOUNT</Typography>

          </Box>
          <Box  >
            <Typography sx={{ color: 'white', cursor: 'pointer' }}>ACCOUNT</Typography>

          </Box>

        </Box>
      </Drawer>

      <Grid container direction="row" justifyContent="space-between" alignItems="center">

        <Grid item sx={{ alignItems: "center" }}>
          < IconButton sx={{ color: "black", marginleft: "1px" }} onClick={() => setOpenDrawer(!openDrawer)} >
            {openDrawer ? <Closeicon sx={{ fontSize: 25, color: "red" }} />
              : <MenuIcon sx={{ fontSize: 25 }} />}
          </IconButton>

          <IconButton onClick={() => setOpenPopUp(!openPopUp)}><Searchicon sx={{ color: "black", fontSize: 25, alignSelf: "right" }} />

          </IconButton>
        </Grid>

        <Grid item  >
          <img src={logo} width="auto" height="auto" />
        </Grid>

        <Grid item sx={{ right: "2px", top: "2px", alignItems: "right" }}>


          <IconButton >{isMatch ? <></> : <PersonOutlineIcon sx={{ color: "black", fontSize: 25, "&:hover": { color: "red" } }} />}</IconButton>
          <IconButton ><FavoriteBorderIcon sx={{ color: "black", fontSize: 25, "&:hover": { color: "red" } }} /></IconButton>
          <IconButton ><ShoppingCartCheckoutIcon sx={{ color: "black", fontSize: 25, "&:hover": { color: "red" } }} /></IconButton>
        </Grid>


      </Grid>




      <SearchPanel openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />

    </React.Fragment>
  )
}

export default MenuDrawerCom
