import { Box } from "@mui/material";
import Head from "./Head";
import Display from "./Display";
import Cars from "./Cars";
import Demand from "./Demand"
import AddCar from "./AddCar"
import ConfigEdit from "./ConfigEdit";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box
      sx={{
        background: "#F9F8F8",
        minHeight: '100vh',
        paddingBottom: 2
      }}
    >
      <Head />
      <Display />
      <Demand />
      <Cars />
      <AddCar />
      <ConfigEdit />
      <Footer />
    </Box>
  );
};

export default Home;
