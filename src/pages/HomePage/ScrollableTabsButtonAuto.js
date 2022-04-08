import React,{useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import {Box,Typography,useMediaQuery, useTheme}from '@mui/material';
import   './btns.css'
import ReviewCard from '../../components/ProductList/ReviewCard'
import Img1 from '../../components/ProductList/imgProduct/1.webp'
import Img2 from '../../components/ProductList/imgProduct/2.webp'
import Img3 from '../../components/ProductList/imgProduct/3.webp'
import Img4 from '../../components/ProductList/imgProduct/4.webp'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function TabPanel(props) {
  
  const { children, value, index,title,desc,ssrc,prodctcount, ...other } = props;
  const [xp,setXp]=useState(0);
  const handleLeft=()=>{

    (xp===0)?setXp(-100*(prodctcount-1)): setXp(xp+100);
   
}
console.warn(xp);
const handleRight=()=>{
(xp===-100*(prodctcount-1))? setXp(0): setXp(xp-100);
    
}
  return (
    <div 
    style={{position:'relative',color:'white',justifyContent:'center',WebkitJustifyContent:'center',display:'flex',overflow:'hidden'}}
    >
    <Box

    
    sx={{position:'relative',display:'flex',width:'300px',overflow: 'hidden'}}
     
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >  
      {value === index && (
      
        <Box 
        sx={{ minWidth:'100%',display: 'flex' 
        ,position:'relative', transition: '0.2s'
      ,overflow: 'cover'}}
        style={{transform: `translate(${xp}%)`}}>

          <ReviewCard title={title+'fist'} desc={desc} ssrc={ssrc}/>
          <ReviewCard title={title+'2'} desc={desc} ssrc={ssrc}/>
          <ReviewCard title={title+'3'} desc={desc} ssrc={ssrc}/>
          <ReviewCard title={title+' 4'} desc={desc} ssrc={ssrc}/>
          <ReviewCard title={title+' 5'} desc={desc} ssrc={ssrc}/>
          <ReviewCard title={title+' 6'} desc={desc} ssrc={ssrc}/>
          <ReviewCard title={title+' 7'} desc={desc} ssrc={ssrc}/>
          <ReviewCard title={title+' 8'} desc={desc} ssrc={ssrc}/>
          <ReviewCard title={title+' 9'} desc={desc} ssrc={ssrc}/>
          <ReviewCard title={title+'10'} desc={desc} ssrc={ssrc}/>

          <ReviewCard title={title+'last'} desc={desc} ssrc={ssrc}/>
         
        </Box>
        
      )}
       <button className="Leftbtn2"  onClick={handleLeft}>
         <ArrowCircleLeftOutlinedIcon 
         sx={{fontSize:40,color:'#1976d2',"&:hover":{color:"Black",opacity:'.9'},opacity:'.5'}}/>
         </button>
      <button className="Rightbtn2"onClick={handleRight}>
        <ArrowCircleRightOutlinedIcon 
        sx={{fontSize:40,color:'#1976d2',"&:hover":{color:"Black",opacity:'.9'},opacity:'.5'}}/>
        </button>
             
    </Box></div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);




  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
      <Tabs
       sx={{ justifyContent:'center',justifyItems:'center',color:'white',background:'black',display:'flex'}}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile={true}
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item 1" sx={{ color:'white', "&:hover": {
                   color: "gray"
        }
    ,width:300}} {...a11yProps(value)} />  
        <Tab label="Item 2" sx={{ color:'white', "&:hover": {
                   color: "gray"
        }
    ,width:300}} {...a11yProps(value)} />  
        <Tab label="Item 3" sx={{ color:'white', "&:hover": {
                   color: "gray"
        }
    ,width:300}} {...a11yProps(value)} />  
        <Tab label="Item 4" sx={{ color:'white', "&:hover": {
                   color: "gray"
        }
    ,width:300}} {...a11yProps(value)} />  
        

      </Tabs>
      <TabPanel  value={value} 
      index={0}
      title={"Product 1"}
      desc={" Fine Coffe"}
      ssrc={Img1}
      prodctcount={11}
      >
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}title={"Product 2"} desc={" good Coffe"}
       ssrc={Img2}
       prodctcount={10}>
        Item 2
      </TabPanel>
      <TabPanel value={value} index={2}title={"Product 3"} desc={" very good Coffe"}
       ssrc={Img3}
       prodctcount={5}>
        Item 3
      </TabPanel>
      <TabPanel value={value} index={3}title={"Product 4"} desc={" super Coffe"}
       ssrc={Img4}
       prodctcount={3}>
        Item 4
      </TabPanel>
 
    </Box>
  );
}

