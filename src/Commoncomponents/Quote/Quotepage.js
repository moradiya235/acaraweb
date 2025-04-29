import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Poster from '../../Assets/home/Poster.jpeg'

function Quotepage() {
  return (
    <Box sx={{backgroundImage:`linear-gradient(rgba(48, 44, 44, 0.7),rgba(29, 65, 86, 0.7)),url(${Poster})`,width:"100%",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <Container maxWidth="md">
           <Box sx={{textAlign:"center",alignItems:"center",p:"90px"}}>
             <Box sx={{py:"5px",width:"100%"}}>
                <Typography sx={{color:"white",fontSize:{lg:"48px",xs:"30px"},fontWeight:"600",fontFamily:"Poppins, sans-serif"}}> Let's Make Your Event Memorable!</Typography>
             </Box>
             <Box sx={{py:"15px",width:"100%"}}>
                <Typography sx={{color:"white",fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
             </Box>
             <Box sx={{py:"15px"}}>
                <Button variant='outlined' sx={{ backgroundColor: "#ffff", color: "black", padding: "6px 20px",textTransform:"capitalize", borderRadius: "10px", "&:hover": { backgroundColor: "#DE463B", borderColor: "#fff",color:"#fff" }, transition: ".7s" }}>Book Now</Button>

             </Box>
           </Box>
        </Container>
    </Box>
   
   )
}



export default Quotepage