import React,{useState} from 'react'
import { useMediaQuery, useTheme } from "@mui/material";
import   './Slider.css'
import {imgList} from './SliderBgList'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Slider = () => {
    // style={{backgroundImage: `url(${imgList[0].img})`}}
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
    const [sliderarr, setSliderarr] = useState(imgList)
    const [xp,setXp]=useState(0);
    const handleLeft=()=>{
        (xp===0)?setXp(-100*(sliderarr.length-1)): setXp(xp+100);
    }
    const handleRight=()=>{
    (xp===-100*(sliderarr.length-1))?setXp(0): setXp(xp-100);
        
    }

    return (
        <div className="carousel">
            
            {sliderarr.map((itm,index)=>{
                    return(
                     
                    <div key={index} className="carouselContent" style={{transform: `translate(${xp}%)`}}>
                            
                                <img id="imgsstyles" src={itm.img} />
                                <h1 id="h2style">{itm.title}</h1>
                               <p id="pstyle">{itm.producedesc}</p>
                    </div>
                    
                    )

                                 }
                )}
             <button id="Leftbtn"  onClick={handleLeft}><ArrowCircleLeftOutlinedIcon sx={{fontSize:40,color:'white',"&:hover":{color:"Black"}}}/></button>
             <button id="Rightbtn"onClick={handleRight}><ArrowCircleRightOutlinedIcon sx={{fontSize:40,color:'white',"&:hover":{color:"Black"}}}/></button>
             
             </div>
    )
}

export default Slider
