import { Box } from "@mui/material"
import { useState } from "react"
import React from 'react'
import HeroBanner from "../Components/HeroBanner"
import Exercises from "../Components/Exercises"
import SearchExercises from "../Components/SearchExercises"

const Home = () => {

    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')


    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
        </Box>

    )
}

export default Home