import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { fetchData, exerciseOptions, youtubeOptions } from '../utility/fetchData'
import Details from '../Components/Details'
import ExerciseVideo from '../Components/ExerciseVideo'
import SimilarExercises from '../Components/SimilarExercises'
import Loader from '../Components/Loader'



const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  // const [gifUrl, setGifUrl] = useState('')

  const { id } = useParams()



  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
        const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

        const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
        setExerciseDetail(exerciseDetailData)


        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
        setExerciseVideos(exerciseVideosData.contents)


        const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
        setTargetMuscleExercises(targetMuscleExercisesData)

        const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
        setEquipmentExercises(equipmentExercisesData)

        // const getGifUrl = await fetchData(`${exerciseDBUrl}/image?resolution=180&exerciseId=${id}`,exerciseOptions)
        // setGifUrl(getGifUrl)

      } catch (error) {
        console.error(error, "could not fetch data");

      }


    }


    fetchExerciseData();

  }, [id])

  if (!exerciseVideos.length) {
    return <Loader/>
  }
 
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} id={id} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail