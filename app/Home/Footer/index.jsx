

import GitHubIcon from '@mui/icons-material/GitHub';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Link } from "@mui/material";


const Footer = () => {

 

  return <Box sx= {{
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: '16px',
    color: '#636363',
    marginTop: 4

  }}> 
   
    <Box sx= {{marginTop: 3}}>Chenyan.Ye@Student.HTW-Berlin.de</Box>
    <Box sx= {{marginTop: 1}}>Anjali.Parami@Student.HTW-Berlin.de</Box>
    <Box sx= {{marginTop: 3}}>@2024</Box>
  </Box>
}

export default Footer