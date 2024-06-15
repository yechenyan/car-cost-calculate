import { Box } from "@mui/material";
import Head from "./Head";
import Display from "./Display";
import Cars from "./Cars";
import Demand from "./Demand"
import AddCar from "./AddCar"
import ConfigEdit from "./ConfigEdit";
import Footer from "./Footer";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from './theme'

const Home = () => {
  return (
    <ThemeProvider theme={theme}>

    <Box
      sx={{
        background: "#F9F8F8",
        minHeight: '100vh',
        width: '100vw',
        paddingBottom: 2,
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      <Box 
        md = {{
          width: '50%'
        }}
        sx= {{
          flex:1, 
        }}
      >
        <Head />
        <Display />
      </Box>
      <Box 
       md = {{
        width: '50%'
      }}
        sx= {{
          flex: 1, 
        }}>
      <Demand />
      
        <Cars />
        <AddCar />
        <ConfigEdit />
        <Footer />
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Home;
