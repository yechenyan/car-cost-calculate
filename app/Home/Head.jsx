import { Box } from "@mui/material";

const Head = () => {
  return (
    <Box sx={{ paddingTop: 10 }}>
      <Box
        sx={{
          fontSize: "36px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Autokosten /Rechner
      </Box>
      <Box
        sx={{
          color: "#A6A6A6",
          textAlign: "center",
          marginTop: 1,
          marginBottom: 8,
        }}
      >
        Welches Auto ist günstiger auf die gesamte Lebensdauer gesehen?{" "}
      </Box>
    </Box>
  );
};

export default Head;
