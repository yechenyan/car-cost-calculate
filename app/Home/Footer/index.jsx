

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
    <Link href= 'https://github.com/yechenyan/car-cost-calculate' underline="none" sx= {{
      display: 'flex',
      alignItems: 'center',
      color: '#636363'
    }}> Give me a star <GitHubIcon fontSize='12' sx= {{
      marginLeft: 1
    }}/></Link>
    <Box sx= {{marginTop: 3}}>Chenyan.Ye@Student.HTW-Berlin.de</Box>
    <Box sx= {{marginTop: 1}}>Anjiali@Student.HTW-Berlin.de</Box>
    <Box sx= {{marginTop: 1}}>2024</Box>
  </Box>
}

export default Footer