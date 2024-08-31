import React from 'react'
import {styled} from "@mui/material"

export const Image=styled('img')(({theme})=>{
    return(
        {   width:'90%',
            [theme.breakpoints.up('sm')]:{
                width:'80%'
            },
            [theme.breakpoints.up('md')]:{
                width:'70%'
            },
            [theme.breakpoints.up('lg')]:{
                width:'65%'
            }
        }
    )
})