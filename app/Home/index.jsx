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
        background: "linear-gradient(66deg, #e6fbfe 0%, #edddfb 100%)",
        minHeight: '100vh',
        paddingBottom: 2,
        display: 'flex',
        flexWrap: 'wrap',

        // backgroundImage: "url('/car-cost-calculate/bg.png')",
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        // backgroundSize: 'cover',
      }}
    >
      <Box 
        sx= {{
          flex:1, 
          sx: {
            width: '100vw'
          }
        }}
      >
        <Head />
        <Display />
      </Box>
      <Box 
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
