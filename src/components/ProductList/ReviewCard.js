import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import Button from '@mui/material/Button';
import { Container } from '@mui/material';
export default function ReviewCard(props) {
 
 

  return (

        
    <Card   elevation={3} sx={{ minWidth: 300 ,color:'black'}}>
      <CardHeader
        sx={{justifyContent:'center',display: 'flex'}}
       title={props.title}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
      
        image={props.ssrc} 
        // alt="Paella dish"
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like. */}
         {props.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <Button width='auto' variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
        Add to ShoppingCart
      </Button>
      </CardActions>
     
    </Card>
   
  );
}
