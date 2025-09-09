import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, Typography, TextField } from '@mui/material'
import { exerciseOptions, fetchData } from '../utility/fetchData'
import HorizontleScrollBar from './HorizontleScrollBar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {


    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])


    useEffect(() => {

        const fetchExerciseData = async () => {

            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            setBodyParts([...bodyPartsData])
        }

        fetchExerciseData();

    }, [])

    const URL = `https://exercisedb.p.rapidapi.com/exercises/name/${search}`;

    const handleClick = async () => {

        if (search) {
            const exerciseData = await fetchData(URL, exerciseOptions)
            const searchedExercises = exerciseData.filter((exer) =>{ return exer.name.toLowerCase().includes(search)
                || exer.target.toLowerCase().includes(search)
                || exer.equipment.toLowerCase().includes(search)
                || exer.bodypart.toLowerCase().includes(search)})

            setSearch('')
            setExercises(searchedExercises)
        }


    }

    return (
        <Stack alignItems={'center'} mt={'37px'}
            justifyContent={'center'} p={'20px'}>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb={'50px'} textAlign={'center'} >
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position={'relative'} mb={'72px'}>
                <TextField
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                        width: { lg: '1170px', xs: '350px' },
                        backgroundColor: "#fff"
                    }}
                    height='76px' value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} placeholder='Search Exercises'
                    type='text' />
                <Button className='search-btn'
                    onClick={handleClick}
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#FFF',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px', position: 'absolute', right: '0',
                    }}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontleScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
            </Box>
        </Stack>
    )
}

export default SearchExercises