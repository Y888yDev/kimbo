import React from 'react'
import { ListItemButton,ListItemText,Typography} from '@mui/material';
const ListItem = (props) => {
    return (<>
    {props.titles.map(title=>{
        return <ListItemButton key={title} >
        <ListItemText>
          <Typography sx={{ fontSize: 20, fontWeight: 200 }}>{title}</Typography>
        </ListItemText>

      </ListItemButton>
    })}
        
          </>
    )
}

export default ListItem
