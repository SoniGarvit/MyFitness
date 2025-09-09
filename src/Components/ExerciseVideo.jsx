import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const ExerciseVideo = ({ exerciseVideos, name }) => {
    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p={'20px'}>
            <Typography variant='h3' mb={'33px'}>watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent={'flex-start'} flexWrap={'wrap'} alignItems={'center'}
                sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
            >
                {exerciseVideos?.slice(0, 5).map((item, index) => {

                    return <a key={index} href={`hhtps://www.youtube.com/watch?v=${item.video.videoId}`}
                        target='_blank'
                        rel='noreferrer'
                        className='exercise-video'
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>

                            <Typography variant='h5' color='#000'>{item.video.title}</Typography>
                            <Typography variant='h6' color='#000'>{item.video.channelName}</Typography>
                        </Box>
                    </a>
                })}

            </Stack>
        </Box>
    )
}

export default ExerciseVideo