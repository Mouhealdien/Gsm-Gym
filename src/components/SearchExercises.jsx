import React, { useState } from 'react'
import { useEffect } from 'react'
import { Box,Button,Stack,Typography,TextField } from '@mui/material'
import { fetchData,exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = (props) => {
    const [search,setSearch]=useState('');
    const [bodyParts,setBodyParts]=useState([]);

    
    
    useEffect(()=>{
        
        const fetchExercisesData=async ()=>{
            const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
           setBodyParts(['all',...bodyPartsData])
            
        }
        fetchExercisesData();
    },[])

    const handleSearch= async ()=>{
        if(search){
            const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
           
            const searchedExercises=exercisesData.filter(
                (exercise)=>exercise.name.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
            ||exercise.equipment.toLowerCase().includes(search)
            ||exercise.bodyPart.toLowerCase().includes(search)

            )
            setSearch('')
           props.setExercises(searchedExercises)
           
        }
    }
  return (
    <Stack
    alignItems="center"
    mt="37px"
    justifyContent="center"
    p="20px"
    >
        <Typography
        fontWeight="bold"
        sx={{ fontSize:{lg:'44px',xs:'30px'}}}
        mb="50px"
        textAlign="center"
        >
            Awsome Exercises you <br /> Should Know
        </Typography>

       <Box
       position="relative"
       >
            <TextField
            
            sx={{
                input:{
                    fontWeight:"700px",
                     border:"none",
                     borderRadius:"4px"
                    },
                width:{lg:'900px',xs:'350px'},
                backgroundColor:"#fff",
                borderRadius:"40px",
                borderColor:"#FF2625",
                

            }}
            height="76px"
            label="Search Exercises"
            value={search}
            onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
            type="text"
            >

            </TextField>

            <Button
            className='search-btn'
            variant='contined'
            sx={{
                backgroundColor:"#FF2625",
                padding:"15px 30px",
                color:"#fff",
                textTransform:"none",
                width:{lg:"175px",xs:'80px'},
                fontSize:{lg:"20px",xs:'14px'},
                height:'56px',
                position:"absolute",
                right:0
            }}
            onClick={handleSearch}
            >
                    Serach
            </Button>
        </Box>

        <Box
        sx={{position:'relative',width:"100%",p:'20px'}}
        >
            <HorizontalScrollbar  data={bodyParts} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart} isBodyParts/>
        </Box>
    </Stack>
  )
}

export default SearchExercises