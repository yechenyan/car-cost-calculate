import { Box } from "@mui/material";

const Head = () => {
  return (
    <Box sx={{ paddingTop: "56px" }}>
      <Box
        sx={{
          fontSize: "20px",
          fontWeigth: 700,
          textAlign: "center",
        }}
      >
        Autokosten-Rechner
      </Box>
      <Box sx={{ color: "#A6A6A6", textAlign: "center", marginTop: "24px" }}>
        Welches Auto ist günstiger auf die gesamte Lebensdauer gesehen?{" "}
      </Box>
    </Box>
  );
};

export default Head;
