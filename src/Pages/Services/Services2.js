import { Box,Container,Typography,Grid } from '@mui/material';
import React from 'react';
import img17 from '../../assest/work/imge/img17.jpg'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Services2() {
  return (
<Box>
    <Box sx={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(${img17})`,height:"100vh",width:"100%",objectFit:"cover",backgroundSize:"cover"}}>
         <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                <Button variant="contained" sx={{height:"80px",width:"80px",backgroundColor:"#E2564D",borderRadius:"50%"}}>
                 <PlayArrowIcon sx={{height:"40px",width:"40px"}}/>
                </Button>
         </Box> 
      </Box>

    <Container>
              <Typography sx={{color:"red",paddingTop:"100px",fontSize:"14px",letterSpacing:"3px"}}>Our Process</Typography>
              <Typography sx={{paddingTop:"10px",fontSize:"32px",fontWeight:"600"}}>We Handle It All</Typography>
 
                

    <Grid item xs={12}  container  sx={{display:"flex",paddingTop:"60px",justifyContent:{md:"center",sm:"center"}}}>
       
            <Grid item xs={12} sm={8} md={6} lg={4}>
                   <Box sx={{"&:hover":{backgroundColor:"#F1F3F2"}}}>
                          <Typography sx={{paddingLeft:"45px",paddingTop:"30px",color:"#E2564D",fontSize:"14px",fontWeight:"600"}}>01 .</Typography>
                          <Typography sx={{paddingLeft:"45px",borderLeft:"2px solid red",marginTop:"5px",marginBottom:"10px",fontSize:"20px",fontWeight:"600"}}>Initial Inquiry</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Feugiat netus vitae dui, mi sed amet eu sem</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>pharetra senectus id blandit dictum urna est</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>morbi tempus, auctor sed egestas</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",paddingBottom:"30px",lineHeight:"26px",fontSize:"15px"}}>condimentum neque donec.</Typography>
                   </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
            <Box sx={{"&:hover":{backgroundColor:"#F1F3F2"}}}>
                          <Typography sx={{paddingLeft:"45px",paddingTop:"30px",color:"#E2564D",fontSize:"14px",fontWeight:"600"}}>02 .</Typography>
                          <Typography sx={{paddingLeft:"45px",borderLeft:"2px solid red",marginTop:"5px",marginBottom:"10px",fontSize:"20px",fontWeight:"600"}}>Pre-Production</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Nec ac enim purus arcu suspendisse tortor</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>nunc bibendum justo nibh varius ipsum lorem in</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>id diam faucibus posuere laoreet ultrices lacus</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",paddingBottom:"30px",lineHeight:"26px",fontSize:"15px"}}>nisi, cursus.</Typography>
                   </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
            <Box sx={{"&:hover":{backgroundColor:"#F1F3F2"}}}>
                          <Typography sx={{paddingLeft:"45px",paddingTop:"30px",color:"#E2564D",fontSize:"14px",fontWeight:"600"}}>03 .</Typography>
                          <Typography sx={{paddingLeft:"45px",borderLeft:"2px solid red",marginTop:"5px",marginBottom:"10px",fontSize:"20px",fontWeight:"600"}}>Walktrough</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Vitae cursus libero, nec venenatis, semper sit</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>morbi convallis ac, egestas turpis est ornare</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>vitae arcu velit senectus est sed eget vitae</Typography>
                          <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",paddingBottom:"30px",lineHeight:"26px",fontSize:"15px"}}>lectus amet.</Typography>
                   </Box>
            </Grid>
  
       </Grid>


       <Grid item xs={12}  container  sx={{display:"flex",paddingTop:"60px",justifyContent:{md:"center",sm:"center"}}}>
       
       <Grid item xs={12} sm={8} md={6} lg={4}>
              <Box sx={{"&:hover":{backgroundColor:"#F1F3F2"}}}>
                     <Typography sx={{paddingLeft:"45px",paddingTop:"30px",color:"#E2564D",fontSize:"14px",fontWeight:"600"}}>04 .</Typography>
                     <Typography sx={{paddingLeft:"45px",borderLeft:"2px solid red",marginTop:"5px",marginBottom:"10px",fontSize:"20px",fontWeight:"600"}}>Quote</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Feugiat netus vitae dui, mi sed amet eu sem</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>pharetra senectus id blandit dictum urna est</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>morbi tempus, auctor sed egestas</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",paddingBottom:"30px",lineHeight:"26px",fontSize:"15px"}}>condimentum neque donec.</Typography>
              </Box>
       </Grid>
       <Grid item xs={12} sm={8} md={6} lg={4}>
       <Box sx={{"&:hover":{backgroundColor:"#F1F3F2"}}}>
                     <Typography sx={{paddingLeft:"45px",paddingTop:"30px",color:"#E2564D",fontSize:"14px",fontWeight:"600"}}>05 .</Typography>
                     <Typography sx={{paddingLeft:"45px",borderLeft:"2px solid red",marginTop:"5px",marginBottom:"10px",fontSize:"20px",fontWeight:"600"}}>Production</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Nec ac enim purus arcu suspendisse tortor</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>nunc bibendum justo nibh varius ipsum lorem in</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>iid diam faucibus posuere laoreet ultrices lacus</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",paddingBottom:"30px",lineHeight:"26px",fontSize:"15px"}}>nisi, cursus.</Typography>
              </Box>
       </Grid>
       <Grid item xs={12} sm={8} md={6} lg={4}>
       <Box sx={{"&:hover":{backgroundColor:"#F1F3F2"}}}>
                     <Typography sx={{paddingLeft:"45px",paddingTop:"30px",color:"#E2564D",fontSize:"14px",fontWeight:"600"}}>06 .</Typography>
                     <Typography sx={{paddingLeft:"45px",borderLeft:"2px solid red",marginTop:"5px",marginBottom:"10px",fontSize:"20px",fontWeight:"600"}}>Deliver</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>Vitae cursus libero, nec venenatis, semper sit</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>morbi convallis ac, egestas turpis est ornare</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",lineHeight:"26px",fontSize:"15px"}}>vitae arcu velit senectus est sed eget vitae</Typography>
                     <Typography sx={{paddingLeft:"30px",color:"#1A1A1A",marginLeft:"15px",paddingBottom:"30px",lineHeight:"26px",fontSize:"15px"}}>lectus amet.</Typography>
              </Box>
       </Grid>

  </Grid>


       </Container>

</Box>
  );
}

export default Services2;
