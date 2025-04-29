import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import home7 from '../../Assets/home/home7.jpeg'
import home8 from '../../Assets/home/home8.jpeg'
import home9 from '../../Assets/home/home9.jpeg'
import home10 from '../../Assets/home/home10.jpeg'
import { Opacity } from '@mui/icons-material'

function Home4() {
  
    return (
        <Box padding={5}>
            <Container maxWidth="lg">
                <Box>
                    <Box sx={{display:"flex",justifyContent:{lg:"start",sm:"start",xs:"center"}}} py={2}>
                        <Typography sx={{ fontSize: "12px", fontFamily: "Poppins, sans-serif", color: "#de463b", fontWeight: "600", letterSpacing: "2px" }}>PORTFOLIO</Typography>
                    </Box>
                    <Box sx={{display:{lg:"flex",sm:"flex",xs:"block"} ,justifyContent:{lg:"space-between",sm:"space-between",xs:"center"}}}>
                        <Typography sx={{ fontSize: "32px", fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>Featured Works</Typography>
                        <Button variant='outlined' sx={{ marginBottom: "10px",borderColor:"#000", backgroundColor: "#ffff", color: "black", padding: "7px 15px", borderRadius: "10px", "&:hover": { backgroundColor: "#000", borderColor: "#fff",color:"#fff" }, transition: ".7s" }}>View All Service</Button>
                        
                    </Box>
                </Box>
                <Box py={5}>
                    <Grid container spacing={0} xs={12}>
                      <Grid item xs={12} sm={6}>
                        <Box>
                            <img src={home7} width={"100%"} style={{cursor:"pointer"}}/>
                            <Box sx={{pt:"8px"}}>
                            <Typography sx={{textAlign:"start",py:"5px",px:"10px",fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #de463b",height:"40px"}}>Hexatron Factory Open Day</Typography>
                            </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <Box >
                            <img src={home8} width={"100%"}/>
                            <Box sx={{pt:"8px"}}>
                            <Typography sx={{textAlign:"start",py:"5px",px:"10px",fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #de463b",height:"40px"}}>Eroforce Global Product Launch</Typography>
                            </Box>
                          </Box>
                      </Grid>
                     
                    </Grid>
                    <Grid container spacing={0} xs={12} py={5}>
                      <Grid item xs={12} sm={6}>
                        <Box>
                            <img src={home9} width={"100%"}/>
                            <Box  sx={{pt:"8px"}}>
                            <Typography sx={{textAlign:"start",py:"5px",px:"10px",fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #de463b",height:"40px"}}>APA Classic Company Picnic</Typography>
                            </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <Box>
                            <img src={home10} width={"100%"}/>
                            <Box  sx={{pt:"8px"}}>
                            <Typography sx={{textAlign:"start",py:"5px",px:"10px",fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #de463b",height:"40px"}}>Delican Energy Press Event</Typography>
                            </Box>
                          </Box>
                      </Grid>
                     
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Home4