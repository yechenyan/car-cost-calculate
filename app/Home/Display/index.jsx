"use client"
import { Box } from "@mui/material";
import CarDisplay from "./CarDisplay";

const Display = () => {
  return (
    <Box  sx={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <CarDisplay index={0} />
      <CarDisplay index={1} />
    </Box>
  );
};

export default Display;
