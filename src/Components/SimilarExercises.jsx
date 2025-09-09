import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import HorizontleScrollBar from './HorizontleScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {

    
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant='h3' mb={5}>Exercises that target the same muscle group

            </Typography>
            <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
                {targetMuscleExercises?.length ? <HorizontleScrollBar data={targetMuscleExercises} /> : <Loader />}
            </Stack>
            <Typography variant='h3' mb={5}>Exercises that target the equuipment

            </Typography>
            <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
                {equipmentExercises?.length ? <HorizontleScrollBar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises