import React from 'react'
import { Link } from 'react-router-dom'
import { colors, Stack } from '@mui/material'

import Logo from "../assets/images/Logo.png"

const style = {
    textDecoration: "none",
    color: "#3A1212",

}

const Navbar = () => {
    return (
        <Stack direction="row"
            justifyContent="space-around"
            sx={{ gap: { sm: "122px", xs: "40px" },mt:{sm:"32px",xs:"20px"},justifyContent:"none" }} px='20px'>
            <Link to="/">
                <img src={Logo} alt="Logo" style={{ ...style, wwidth: "40px", height: "40px", margin: "0 20px" }} /></Link>
            <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
                <Link style={{ ...style, borderBottom: "3px solid #FF2625" }} to="/">Home</Link>
                <a style={style} href="#exercise">Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar