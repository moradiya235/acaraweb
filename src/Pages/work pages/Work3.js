import React from 'react';
import {Box, Container, Grid, Typography,} from '@mui/material';
import img4 from '../../assest/work/imge/img4.jpg'
import img5 from '../../assest/work/imge/img5.jpg'
import img6 from '../../assest/work/imge/img6.jpg'
import img7 from '../../assest/work/imge/img7.jpg'
import img8 from '../../assest/work/imge/img8.jpg'
import img9 from '../../assest/work/imge/img9.jpg'
import img10 from '../../assest/work/imge/img10.jpg'


function Work3() {
  return (
    <Container >

<Grid item xs={12}  container spacing={15} sx={{display:"flex",paddingTop:"100px",justifyContent:{md:"center",sm:"center"}}}>
            <Grid item xs={12} sm={8} md={6} lg={7}>
                 <img src={img5} alt="" style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={5}>
            <Box>
               <Typography  sx={{color:"red", fontSize:"14px",display:"flex",letterSpacing:"2px"}}>Full-service Production</Typography>
               <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"10px"}}>Eroforce Global</Typography>
               <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"10px"}}>Opening Ceremony</Typography>

               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"30px",color:"#5F6575"}}>Nisi, fusce dictum arcu id fames amet magna sed iaculis</Typography>
               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"10px",color:"#5F6575"}}>lectus neque habitant in porta tincidunt scelerisque sit</Typography>
               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"10px",color:"#5F6575"}}>nulla scelerisque arcu neque massa quam.</Typography>

              <Box sx={{ borderLeft: '1px solid red'}}>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"30px",color:"#5F6575",fontWeight:"500",fontFamily:"italic"}}>"Neque leo molestie tellus velit sapien eu ac</Typography>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"5px",color:"#5F6575" ,fontWeight:"500",fontFamily:"italic"}}>"scelerisque hendrerit placerat purus in diam</Typography>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"5px",color:"#5F6575" ,fontWeight:"500",fontFamily:"italic"}}>ultrices orci cursus lacus aliquet eget ullamcorper</Typography>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"5px",color:"#5F6575" ,fontWeight:"500",fontFamily:"italic"}}>interdum leo tortor aenean mattis."</Typography>
              </Box> 

                   <Box  sx={{display:"flex"}}>
                          <Box>
                                <img src={img6} alt='' style={{height:"50px",width:"50px",marginTop:"30px",borderRadius:"50%"}}/>
                          </Box>
                          <Box>
                               <Typography sx={{marginTop:"30px",marginLeft:"10px",fontSize:"15px",fontWeight:"600",letterSpacing:"3px",color:"#5F6575"}}>Mary Kate</Typography>
                               <Typography sx={{marginLeft:"30px",fontSize:"13px",display:"flex",justifyContent:"start",color:"#5F6575"}}>Director of Hexatron</Typography>
                           </Box>
                   </Box>
          </Box>
            </Grid>
       </Grid>



       <Grid item xs={12}  container spacing={15} sx={{display:"flex",paddingTop:"100px",justifyContent:{md:"center",sm:"center"}}}>
            <Grid item xs={12} sm={8} md={6} lg={7}>
                 <img src={img7} alt="" style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={5}>
            <Box>
               <Typography  sx={{color:"red", fontSize:"14px",display:"flex",letterSpacing:"2px"}}>Food & Beverages</Typography>
               <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"10px"}}>APA Classic Company</Typography>
               <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"10px"}}>Picnic</Typography>

               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"30px",color:"#5F6575"}}>Varius amet vitae mi commodo lacus aliquam nunc duis</Typography>
               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"10px",color:"#5F6575"}}>congue sodales pulvinar diam consequat, nibh cras sed</Typography>
               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"10px",color:"#5F6575"}}>tristique nam ullamcorper ullamcorper nibh.</Typography>

              <Box sx={{ borderLeft: '1px solid red'}}>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"30px",color:"#5F6575",fontWeight:"500",fontFamily:"italic"}}>"Sit placerat blandit sociis amet cras platea</Typography>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"5px",color:"#5F6575" ,fontWeight:"500",fontFamily:"italic"}}>scelerisque hendrerit placerat purus in diam</Typography>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"5px",color:"#5F6575" ,fontWeight:"500",fontFamily:"italic"}}>donec aliquet mattis velit amet, dolor netus</Typography>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"5px",color:"#5F6575" ,fontWeight:"500",fontFamily:"italic"}}>dignissim lectus nibh massa sed amet."</Typography>
              </Box> 

                   <Box  sx={{display:"flex"}}>
                          <Box>
                                <img src={img8} alt='' style={{height:"50px",width:"50px",marginTop:"30px",borderRadius:"50%"}}/>
                          </Box>
                          <Box>
                               <Typography sx={{marginTop:"30px",marginLeft:"30px",fontSize:"15px",fontWeight:"600",letterSpacing:"3px",color:"#5F6575"}}>Anna Grace</Typography>
                               <Typography sx={{marginLeft:"30px",fontSize:"13px",display:"flex",justifyContent:"start",color:"#5F6575"}}>Director of APA</Typography>
                           </Box>
                   </Box>
          </Box>
            </Grid>
       </Grid>


   
   <Grid item xs={12}  container spacing={15} sx={{display:"flex",paddingTop:"100px",justifyContent:{md:"center",sm:"center"}}}>
            <Grid item xs={12} sm={8} md={6} lg={7}>
                 <img src={img10} alt="" style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={5}>
            <Box>
               <Typography  sx={{color:"red", fontSize:"14px",display:"flex",letterSpacing:"2px"}}>Event Management</Typography>
               <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"10px"}}>Delican Energy Press</Typography>
               <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"10px"}}>Event</Typography>

               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"30px",color:"#5F6575"}}>Nibh risus viverra suspendisse consectetur lobortis nec</Typography>
               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"10px",color:"#5F6575"}}>vitae platea vitae vitae tortor id aliquam luctus urna, mus</Typography>
               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"10px",color:"#5F6575"}}>facilisi duis dictum risus massa.</Typography>

              <Box sx={{ borderLeft: '1px solid red'}}>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"30px",color:"#5F6575",fontWeight:"500",fontFamily:"italic"}}>"Nunc velit purus sollicitudin posuere in arcu</Typography>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"5px",color:"#5F6575" ,fontWeight:"500",fontFamily:"italic"}}>etiam mi mollis aliquam sem risus nibh tortor</Typography>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"5px",color:"#5F6575" ,fontWeight:"500",fontFamily:"italic"}}>scelerisque in convallis ut lectus arcu quam</Typography>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"5px",color:"#5F6575" ,fontWeight:"500",fontFamily:"italic"}}>praesent vitae."</Typography>
              </Box> 

                   <Box  sx={{display:"flex"}}>
                          <Box>
                                <img src={img9} alt='' style={{height:"50px",width:"50px",marginTop:"30px",borderRadius:"50%"}}/>
                          </Box>
                          <Box>
                          <Typography sx={{marginTop:"30px",fontSize:"15px",fontWeight:"600",letterSpacing:"2px",color:"#5F6575"}}>Billy Joe</Typography>
                          <Typography sx={{marginLeft:"30px",fontSize:"13px",display:"flex",color:"#5F6575"}}>Manager of Delican Energy</Typography>
                           </Box>
                   </Box>
          </Box>
            </Grid>
       </Grid>
</Container>




  );
}

export default Work3;
