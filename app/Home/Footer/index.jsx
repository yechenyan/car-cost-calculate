import { Box } from "@mui/material";


const Footer = () => {
  return <Box sx= {{
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: '12px',
    color: '#636363'
  }}> 
    <a href= 'https://github.com/yechenyan/car-cost-calculate'>Github</a>
    <Box>Chenyan.Ye@Student.HTW-Berlin.de</Box>
    <Box>Anjiali@Student.HTW-Berlin.de</Box>
    <Box>2024</Box>
  </Box>
}

export default Footer