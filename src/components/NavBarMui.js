import React, { useState } from 'react'
import { useMediaQuery, useTheme, Grid } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuDrawerCom from './MenuDrawerCom';

import logolg from '../logolg.svg'
import Searchicon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './NavBarDropDown.css';
import TopBannerMui from "./TopBannerMui";
import SearchPanel from "./SearchPopup";

function NavBarMui(props) {
    const theme = useTheme();
    const [iv, setIv] = useState(0);
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
    const [items, setItems] = useState(['Coffe', 'Beyond Coffe', 'Company', 'Special Offers']);
    console.log(isMatch);


    //open search popup
    const [openPopUp, setOpenPopUp] = useState(false); console.log('openPopUp nav', openPopUp);
    return (

        <AppBar sx={{ background: "white", zIndex: theme.zIndex.drawer + 1 }}>
            < TopBannerMui fontSize="50px" />
            <Toolbar>

                {
                    isMatch ?
                        (<>

                            <MenuDrawerCom theme={theme} items={items} />
                        </>
                        )
                        :
                        (<>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="baseline"
                            >
                                <Grid xs={2} item  >
                                    <img src={logolg} sx={{ justifyContent: 'left', justifyItems: 'left', display: 'flex' }} width="auto" height="auto" />
                                </Grid>
                                <Grid item xs={8}>

                                    <Tabs aria-label="secondary tabs example" value={iv} onChange={(e, value) => setIv(value)} >
                                        {items.map(item => {
                                            return (<Tab key={item} sx={{ fontWeight: 400, fontText: "black", fontFamily: "Inter", fontSize: 20 }} label={item} />)
                                        })}

                                        
                                    </Tabs>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={() => { setOpenPopUp(!openPopUp); }}>

                                        <Searchicon sx={{ color: "black", fontSize: 20, alignSelf: "right", "&:hover": { color: "red" } }} /> </IconButton >
                                    <IconButton ><PersonOutlineIcon sx={{ color: "black", fontSize: 20, alignSelf: "right", "&:hover": { color: "red" } }} /></IconButton>
                                    <IconButton ><FavoriteBorderIcon sx={{ color: "black", fontSize: 20, alignSelf: "right", "&:hover": { color: "red" } }} /></IconButton>
                                    <IconButton ><ShoppingCartCheckoutIcon sx={{ color: "black", fontSize: 20, alignSelf: "right", "&:hover": { color: "red" } }} /></IconButton>
                                </Grid>


                            </Grid>
                            <SearchPanel setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} onClose={() => { setOpenPopUp(!openPopUp); }} ></SearchPanel>
                        </>
                        )
                }


            </Toolbar>

        </AppBar>

    )
}


export default NavBarMui
