import React from 'react'
import { Box ,Typography,Stack } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercises = ({equipmentExercises,targetMuscleExercises}) => {
 
  return (
    <Box
    sx={{mt:{lg:'100px',xs:'0'}}}
    >
      <Typography
      variant='h3'
      mb={5}
      >
        Similar  {targetMuscleExercises[0]&&<span style={{fontweight:'bold',color:"#ff2625" ,textTransform:"capitalize"}}>{targetMuscleExercises[0].target}</span>} Exercises
      </Typography>

      <Stack
      direction='row'
      sx={{p:'2',position:'relative'}}
      >
        {targetMuscleExercises.length?
        <HorizontalScrollbar data={targetMuscleExercises}/>
        :<Loader/>}
      </Stack>

      <Typography
      variant='h3'
      mb={5}
      >
        Similar {equipmentExercises[0]&&<span style={{fontweight:'bold',color:"#ff2625" ,textTransform:"capitalize"}}>{equipmentExercises[0].equipment}</span>} Exercises
      </Typography>

      <Stack
      direction='row'
      sx={{p:'2',position:'relative'}}
      >
        {equipmentExercises.length?
        <HorizontalScrollbar data={equipmentExercises}/>
        :<Loader/>}
      </Stack>

    </Box>
  )
}

export default SimilarExercises