import React ,{useState} from 'react'
import { Grid, Typography ,Box} from "@mui/material"
import { styled } from '@mui/material/styles';
import backgroundimg from '../../asset/coffeeRoasted.png'
import bgpost from '../../asset/bgs/bgs2.jpg'
import bgpdct1 from '../../asset/imgProduct/6.webp'
import bgpdct2 from '../../asset/imgProduct/7.webp'
import ReviewCard from '../../components/ProductList/ReviewCard'
import Paper from '@mui/material/Paper';
import   './btns.css'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
const Item = styled(Paper)(({ theme }) => ({
   
    padding: theme.spacing(1),
    height:'100%',
    textAlign: 'center',
    backgroundImage:{backgroundimg},
    color: theme.palette.text.secondary,
    display: 'flex'
    , position: 'relative', transition: '0.2s'
    , overflow: 'cover'
  }));
export default function Post2(props) {
    const { children, value, index, title, desc, ssrc, prodctcount, ...other } = props;
    const [xp,setXp]=useState(0);
  const handleLeft=()=>{

    (xp===0)?setXp(-100*(5-1)): setXp(xp+100);
   
}
console.warn(xp);
const handleRight=()=>{
(xp===-100*(5-1))? setXp(0): setXp(xp-100);
    
}
    return (
   
           
            <Grid  container flexGrow="row-reverse" id="flxPost2" >
            <Grid item xs={6} id="flxp2" sx={{margin:'0',padding:'0'}}>
                 <div style={{margin:'0',padding:'0',backgroundSize:'cover',backgroundRepeat:'no-repeat',overflow:'hidden',maxHeight:'500px'}}>
                <img src={bgpost} 
                style={{margin:'0',padding:'0',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}/>   
                 </div>
            </Grid>

            <Grid item xs={6} id="flxp2">
            <div 
    style={{position:'relative',color:'white',justifyContent:'center',WebkitJustifyContent:'center',display:'flex',overflow:'hidden'}}
    >
            <Box sx={{ position:'relative',display:'flex',width:'300px',overflow: 'hidden'
                            }}>
  
                 

                        {/* <Box
                            sx={{
                                 display: 'flex'
                                , position: 'relative', transition: '0.2s'
                                , overflow: 'cover'
                            }}
                            // style={{ transform: `translate(${xp}%)` }}
                            > */}
                            <Box style={{ transform: `translate(${xp}%)` }}
                            sx={{ minWidth:'100%',display: 'flex' 
                            ,position:'relative', transition: '0.2s'
                          ,overflow: 'cover'}}> 
                            <ReviewCard sx={{width:'200'}} title={ 'aa'} desc={'nothing yet'} ssrc={bgpdct2} />
                            <ReviewCard sx={{width:'200'}} title={ 'bb'} desc={'nothing yet'} ssrc={bgpdct1} />
                            <ReviewCard sx={{width:'200'}} title={ 'cc'} desc={'nothing yet'} ssrc={bgpdct2} />
                            <ReviewCard sx={{width:'200'}} title={ 'dd'} desc={'nothing yet'} ssrc={bgpdct1} />
                            <ReviewCard sx={{width:'200'}} title={ 'ee'} desc={'nothing yet'} ssrc={bgpdct2} />
                          
                    
                         
                        {/* </Box> 8*/}

                 



            </Box>
            </Box>
                            <button className="Leftbtn2" onClick={handleLeft} >
                        <ArrowCircleLeftOutlinedIcon
                            sx={{ fontSize: 40, color: '#1976d2', "&:hover": { color: "Black", opacity: '.9' }, opacity: '.5' }} />
                    </button>
                    <button className="Rightbtn2" onClick={handleRight} >
                        <ArrowCircleRightOutlinedIcon
                            sx={{ fontSize: 40, color: '#1976d2', "&:hover": { color: "Black", opacity: '.9' }, opacity: '.5' }} />
                    </button> 
            </div>
            </Grid>
        </Grid>
    
    )
}


