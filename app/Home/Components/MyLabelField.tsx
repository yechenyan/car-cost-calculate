import { Box } from "@mui/material";


const MyLabelField = ({label, children}) => {
  return (<Box sx= {{
    display: 'flex',
    alignItems: 'center',
    paddingTop: 4
  }}>
    <Box sx= {{
      paddingRight: 1,
      marginRight: 1,
      width: 10,
      flexBasis: '150px',
      color: '#676565',
      fontSize: 14
    }}>{label}</Box>
    <Box sx= {{
      flexGrow: 1}}>{children}</Box>
  </Box>)
}

export default MyLabelField