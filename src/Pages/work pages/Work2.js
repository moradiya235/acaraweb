import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import img2 from '../../assest/work/imge/img2.jpg'
import img3 from '../../assest/work/imge/img3.jpeg'
import img4 from '../../assest/work/imge/img4.jpg'

function Work2() {
  return (
    <Container>
    <Grid container item sm={12} sx={{paddingTop:"90px"}}>
       <Grid item sx={12} sm={6} md={4} lg={4}>
    
              <Typography variant='h6' sx={{color:"red", fontSize:"12px",display:"flex", justifyContent:{lg:"start",xs:"center",sm:"end",md:"center"},letterSpacing:"2px"}}>FULL-SERVICE PRODUCTION</Typography>
              <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"10px", justifyContent:{lg:"start",xs:"center",sm:"end",md:"center"}}}>Eroforce Global</Typography>
              <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"5px", justifyContent:{lg:"start",xs:"center",sm:"end",md:"center"}}}>product Launch</Typography>
         
       </Grid>
        
    </Grid>
        
          {/* <img src={img2} alt='' style={{height:"100%",width:"100%", marginTop:"50px"}}></img> */}
          <Box sx={{backgroundImage:`url(${img2})`,height:"60vh",width:"100%",backgroundSize:"cover",marginTop:"50px",width:{lg:"100%",xs:"100%",sm:"100%",md:"100%"},display:"flex", justifyContent:"end",alignItems:"self-end"}}>
              
              <Box sx={{height:"400px",width:"400px",backgroundColor:"white"}}>
                     <Box>
                   <img src={img3} alt='' style={{display:"flex",justifyContent:"center",height:"50px",marginTop:"30px",marginLeft:"30px",width:"50px"}}/>
                         <Typography sx={{marginLeft:"40px",color:"#5F6575",fontSize:"16px",display:"flex",justifyContent:"start",fontWeight:"500",fontFamily:"italic"}}>Risus fermentum ipsum suspendisse</Typography>
                         <Typography sx={{marginLeft:"40px",color:"#5F6575",fontSize:"16px",display:"flex",justifyContent:"start",fontWeight:"500",fontFamily:"italic"}}>dictumst quis orci dignissim eget odio</Typography>
                         <Typography sx={{marginLeft:"40px",color:"#5F6575",fontSize:"16px",display:"flex",justifyContent:"start",fontWeight:"500",fontFamily:"italic"}}>pellentesque et risus eu nisi massa sem sed</Typography>
                         <Typography sx={{marginLeft:"40px",color:"#5F6575",fontSize:"16px",display:"flex",justifyContent:"start",fontWeight:"500",fontFamily:"italic"}}>non fusce at habitant dignissim vel aliquam</Typography>
                         <Typography sx={{marginLeft:"40px",color:"#5F6575",fontSize:"16px",display:"flex",justifyContent:"start",fontWeight:"500",fontFamily:"italic"}}>fames ornare aliquam.</Typography>   
                     </Box>
                      <Box sx={{display:"flex" , justifyContent:"start"}}>
                            <Box>
                            <img src={img4} alt='' style={{height:"50px",width:"50px",borderRadius:"50%",display:"flex",justifyContent:"start",marginLeft:"40px", marginTop:"30px"}}/> 
                            </Box>
                             <Box>
                                  <Typography sx={{marginTop:"30px",marginLeft:"15px",fontSize:"15px",fontWeight:"600",letterSpacing:"3px",color:"#5F6575"}}>John Peterson</Typography>
                                  <Typography sx={{marginLeft:"15px",fontSize:"13px",display:"flex",justifyContent:"start",color:"#5F6575"}}>CEO of Eroforce</Typography>
                             </Box>
                      </Box>
              </Box>
               

           </Box>
       
</Container>
  );
}

export default Work2;
