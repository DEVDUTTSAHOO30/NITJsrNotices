import React from 'react'
import {Typography} from "@mui/material"

export const People = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Typography variant='h4'>People</Typography>
        <br></br>
        
        <Typography variant='h5'>Prof Sanjay</Typography>
        <Typography variant='h6'>
        Dean<br></br>
        Research and Consultancy<br></br>
        Professor, Department of Mechanical Engineering<br></br>
        Contact: 0657-237-4014,+91-9430738551<br></br>
        Email: dean.rc@nitjsr.ac.in<br></br>
        </Typography>

        <br></br>
        <br></br>
        <Typography variant='h5'>Dr Vishesh Ranjan Kar</Typography>
        <Typography variant='h6'>
        Associate Dean<br></br>
        Research and Consultancy<br></br>
        Professor, Department of Mechanical Engineering<br></br>
        Contact:+91-9439569975<br></br>
        Email: vishesh.me@nitjsr.ac.in<br></br>
        </Typography>
        <br></br>
    </div>
  )
}
