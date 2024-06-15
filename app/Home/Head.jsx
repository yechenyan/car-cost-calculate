import { Box } from "@mui/material";

const Head = () => {
  return (
    <Box sx={{ paddingTop: 10}}>
      <Box
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          textAlign: "center",
          color: "blue",
        }}
      >
        Autokosten Rechner
      </Box>
      <Box sx={{ color: "#A6A6A6", textAlign: "center", marginTop: 1, marginBottom: 8 }}>
        Welches Auto ist günstiger <br />auf die gesamte Lebensdauer gesehen?{" "}
      </Box>
    </Box>
  );
};

export default Head;
