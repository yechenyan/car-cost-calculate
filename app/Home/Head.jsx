import GitHubIcon from '@mui/icons-material/GitHub';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Link } from "@mui/material";

const Head = () => {
  const click = () => {
    window.open("https://github.com/yechenyan/car-cost-calculate");
  }

  return (
    <Box sx={{  }}>
      <Box sx= {{padding: 2}}>
      <Link onClick= {click} underline="none" sx= {{
      display: 'flex',
      alignItems: 'center',
      color: '#636363',
      cursor: 'pointer',
      fontSize: 14
    }}><GitHubIcon fontSize='16' sx= {{
      marginRight: 1
    }}/> Give me a star </Link>
      </Box>
      <Box
        sx={{
          fontSize: {
            xs: '3rem',
            md: '3.5rem'
          },
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1,
          letterSpacing: '-0.025em',
          marginTop: 10
        }}
       
      >
        Autokosten Rechner
      </Box>
      <Box
        sx={{
          fontSize: '1.125rem',
          lineHeight: '1.75 rem',
          color: "#A6A6A6",
          textAlign: "center",
          marginTop: 2,
         
        }}
      >
        Welches Auto ist günstiger auf die gesamte Lebensdauer gesehen?{" "}
      </Box>
      <Box sx= {{
        marginTop: 1,
        paddingLeft: 4,
        paddingRight: 4,
        marginBottom: 8,
      }}>
      {/* <Box sx= {{
        width: '100%',
        height: 24,
       
        background: 'linear-gradient(66deg, #edddfb 0%, #E1F0E3 100%)',
       
      }}>
        </Box> */}

      </Box>
    </Box>
  );
};

export default Head;
