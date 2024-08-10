import { Box,Typography,Grid, Container } from '@mui/material';
import React from 'react';
import img1 from '../../assest/work/imge/img1.jpg'
import img11 from '../../assest/work/imge/img11.jpg'
import img12 from '../../assest/work/imge/img12.jpg'
import img13 from '../../assest/work/imge/img13.jpg'
import img14 from '../../assest/work/imge/img14.jpg'
import img15 from '../../assest/work/imge/img15.jpg'
import img16 from '../../assest/work/imge/img16.jpg'

function Services1() {
  return (
    <Box>
    <Box sx={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${img1})`,height:"100vh",width:"100%",objectFit:"cover",backgroundSize:"cover"}}>
         <Box>
             <Typography variant='h3' sx={{color:"white",paddingTop:"660px",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}>
                 our Works 
             </Typography>
         </Box> 
      </Box>
     
      <Box >
           <Typography sx={{color:"red",fontSize:"12px",paddingTop:"100px",letterSpacing:"2px",display:"flex",justifyContent:"center"}}>OUR SERVICES</Typography>
           <Typography variant='h4' sx={{display:"flex",justifyContent:"center",fontWeight:"600",paddingTop:"10px"}}>Corporate Event Management</Typography>
           <Typography sx={{color:"#5F656C",fontSize:"14px",display:"flex",justifyContent:"center",paddingTop:"30px"}}>Orci, gravida at dolor penatibus praesent. Id ac nunc nunc elementum vitae nunc cursus. Nunc cras facilisis</Typography>
           <Typography sx={{color:"#5F656C",fontSize:"14px",display:"flex",justifyContent:"center",paddingTop:"10px"}}>fermentum elementum, suspendisse augue dolor.</Typography>
      </Box>
<Container>
      <Grid item xs={12}  container  sx={{display:"flex",paddingTop:"100px",justifyContent:{md:"center",sm:"center"}}}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                   <Box>
                         <img src={img11} alt="" style={{width:"100%"}}/>
                         <Typography sx={{borderLeft:"2px solid red",paddingLeft:"15px",marginTop:"15px",marginBottom:"5px",fontSize:"18px",fontWeight:"600"}}>Full-Service Production</Typography>
                          <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Tempor sit dictum volutpat tortor. Mauris eleifend</Typography>
                          <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>commodo mi pharetra aliquam sed. Commodo</Typography>
                          <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>odio quis neque.</Typography>
                   </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Box >
                   <img src={img12} alt="" style={{width:"100%"}}/>
                   <Typography sx={{borderLeft:"2px solid red",paddingLeft:"15px",marginTop:"15px",marginBottom:"5px",fontSize:"18px",fontWeight:"600"}}>Event Management</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Donec lectus maecenas odio pretium erat. Sed</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>netus sit amet, fames fermentum. Sed in nulla a</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>nisl leo.</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
            <Box >
                   <img src={img13} alt="" style={{width:"100%"}}/>
                   <Typography sx={{borderLeft:"2px solid red",paddingLeft:"15px",marginTop:"15px",marginBottom:"5px",fontSize:"18px",fontWeight:"600"}}>Food and Beverages</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Habitant mauris, est massa dignissim nulla et</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>porttitor erat mauris sed platea morbi tortor</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>dignissim cursus.</Typography>
            </Box>
            </Grid>
       </Grid>


       <Grid item xs={12}  container  sx={{display:"flex",paddingTop:"100px",justifyContent:{md:"center",sm:"center"}}}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                   <Box>
                         <img src={img14} alt="" style={{width:"100%"}}/>
                         <Typography sx={{borderLeft:"2px solid red",paddingLeft:"15px",marginTop:"15px",marginBottom:"5px",fontSize:"18px",fontWeight:"600"}}>Live Entertainment</Typography>
                          <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Amet elementum sed et lectus feugiat sagittis,</Typography>
                          <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>quam nunc eget nec mauris a habitant ut</Typography>
                          <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>pellentesque.</Typography>
                   </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Box >
                   <img src={img15} alt="" style={{width:"100%"}}/>
                   <Typography sx={{borderLeft:"2px solid red",paddingLeft:"15px",marginTop:"15px",marginBottom:"5px",fontSize:"18px",fontWeight:"600"}}>Destination Management</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Auctor vitae cras sem sagittis, sit arcu, libero</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>consectetur scelerisque tristique ut donec et</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>ipsum quis.</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
            <Box >
                   <img src={img16} alt="" style={{width:"100%"}}/>
                   <Typography sx={{borderLeft:"2px solid red",paddingLeft:"15px",marginTop:"15px",marginBottom:"5px",fontSize:"18px",fontWeight:"600"}}>Company Picnic</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Maecenas lectus sit pellentesque egestas et sit at</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>pellentesque nunc malesuada cursus iaculis</Typography>
                   <Typography sx={{color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>feugiat ac justo.</Typography>
            </Box>
            </Grid>
       </Grid>

</Container>

       

    </Box>

  );
}

export default Services1;
