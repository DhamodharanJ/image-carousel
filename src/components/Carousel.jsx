import React,{useState} from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {images} from '../data/CarouselData'
import '../components/Carousel.css'
console.log(images)

function Carousel() {
    const[ind,setInd]= useState(0);

    // console.log(ind)
    function left(){
        if(ind!=0){
        setInd(ind-1)
        }else{
            setInd(ind+images.length-1)
        }
    }
    function right(){
        if(ind!=images.length-1){
        setInd(ind+1)
        }else{
            setInd(ind-(images.length-1))
        }
    }
    console.log(ind)
  return (
    <div>
        {
        <div className="container">
       <div className="leftarrow" onClick={left}> <ArrowBackIosIcon  /></div>
       <div className="rightarrow" onClick={right}><ArrowForwardIosIcon /></div> 
<h1>{images[ind].title}</h1>
      <img src={images[ind].img}></img>
      <h3>{images[ind].subtitle}</h3>
        
</div>
}
    </div>
  )
}

export default Carousel
