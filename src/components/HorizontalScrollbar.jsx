import React from 'react'
import { useContext } from 'react'
import { Box,Typography } from '@mui/material'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu'
import LeftArrowIcon from "../assets/icons/left-arrow.png"
import RightArrowIcon from "../assets/icons/right-arrow.png"
const HorizontalScrollbar = (props) => {
 
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
     
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
   
    return (
      <Typography onClick={() => {scrollNext() }} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

    
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      
      {
            props.data.map((item)=>(
            <Box
            key={item.id||item}
            itemId={item.id||item}
            title={item.id||item}
            m='0 40px' 
            >
               {props.isBodyParts? <BodyPart item={item} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart}/>:<ExerciseCard exercise={item}/>}
            </Box>
            ))
        }
      
    </ScrollMenu>
  )
}

export default HorizontalScrollbar