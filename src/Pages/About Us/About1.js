import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import AboutImg from '../../Assets/About/About1.jpeg'
import Header from '../../Commoncomponents/Header/Header'

function About1() {
    return (
             
                // <Box
                //     sx={{
                //         height: '75vh',
                //         backgroundImage:`url(${AboutImg})`,
                //         backgroundSize: 'cover',
                //         backgroundPosition: 'center',
                //         display: 'flex',
                //         justifyContent: 'center',
                //         alignItems: 'center',
                //         color: '#fff',
                //         textAlign: 'center',
                //         position: 'relative',
                //         backgroundRepeat:"no-repeat",
                //     }}
                // >
                

                //     <Box
                //         sx={{
                //             position: 'absolute',
                //             top: 0,
                //             left: 0,
                //             right: 0,
                //             bottom: 0,
                //             backgroundColor: 'rgba(0, 0, 0, 0.5)', // optional overlay
                //             zIndex: 1,
                //         }}
                //     />
                //     <Typography
                //         variant="h2"
                //         component="h1"
                //         sx={{ zIndex: 2, position: 'relative',fontSize:"40px",fontWeight:"600",fontFamily:"Poppins, sans-serif"}}
                //     >
                //         About Us
                //     </Typography>
                // </Box>

                <Box sx={{backgroundImage:`linear-gradient(rgba(48, 44, 44, 0.7),rgba(60, 57, 39, 0.7)),url(${AboutImg})`,width:"100%",backgroundPosition:"center",
                backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                  <Header />
                    <Container maxWidth="lg">
                        <Box padding={"250px 0 150px 0"}>
                            <Typography sx={{fontSize:"48px",fontWeight:"600",color:"white",fontFamily:"poppins,sans-serif"}}>About Us</Typography>
                        </Box>
                    </Container>
                </Box>
    
    )
}

export default About1