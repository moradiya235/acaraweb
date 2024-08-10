import { Box,Typography } from '@mui/material';
import React from 'react';
import img1 from '../../assest/work/imge/img1.jpg'

function Work1() {
  return (
    <Box>
         <Box sx={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${img1})`,height:"100vh",width:"100%",objectFit:"cover",backgroundSize:"cover"}}>
              <Box>
                  <Typography variant='h3' sx={{color:"white",paddingTop:"660px",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      our Works 
                  </Typography>
              </Box>
               
         </Box>

  
</Box>

  );
}

export default Work1;
