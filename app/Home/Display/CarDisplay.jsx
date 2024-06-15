import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { carsDataAtom, car2calculateAtom, car1calculateAtom } from "../../services/userData";
import { useAtom } from "jotai";
import { selectCarsAtom, selectCarsIdAtom } from "../../services/ui"
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import EvStationIcon from '@mui/icons-material/EvStation';
import ExtensionIcon from '@mui/icons-material/Extension';

const textStyle = {
   display: 'flex',
  justifyContent:'center',
  marginTop: 4,
  fontSize: '16px',
  color: '#000',
  width: '100px'
}

const spanTextStyle = {
  // width: 100,
  color: '#676565'
}

const CarDisplay = ({ index }) => {

  const [cars] = useAtom(carsDataAtom);
  const [selectCarsId, setSelectCarsId] = useAtom(selectCarsIdAtom);

  const [car2calculate]  = useAtom(car2calculateAtom)
  const [car1calculate]  = useAtom(car1calculateAtom)

  const carCalculate = index === 0 ? car1calculate : car2calculate
  return (
    <Box sx= {{
      width: '50%',
    
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent:'center'
      }}>
        <Select 
        sx = {{
          width: 120, 
           marginBottom: 4
          }}
        
          value = {selectCarsId[index]} onChange = {(e) => {
          setSelectCarsId(data => {
            const newData = [...data]
            newData[index] =  e.target.value
            return newData
          })
        }}
        size='small'
        >
          {cars.map((car) => (
            <MenuItem value={car.id} key={car.id} >
              {car.name}
            </MenuItem>
          ))}
        </Select>

      </Box>
      <Box sx= {{
        display: 'flex',
        justifyContent: 'center',
        height: 10,
        alignItems: 'center',
      }}>
        {carCalculate.type === 'E-Auto' && <BatteryChargingFullIcon  fontSize="large"/>}
        {carCalculate.type === 'Benziner' && <EvStationIcon  fontSize="large"/>}
        {carCalculate.type === 'Hybrid' && <span>HYBRID</span>}
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent:'center',
        fontSize: 44,
        marginTop: 4,
        alignItems: 'flex-end'
      }}>
        €{carCalculate.per} 
        <Box sx={{
          fontSize: 16,
          lineHeight:'30px'
        }}>/ km</Box>
      </Box>
     
      <Box sx= {{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Box sx = {textStyle} >
        <span style={spanTextStyle}>Total&nbsp;</span> €{carCalculate.total}
        </Box>
        <Box sx = {textStyle} >
        <span style={spanTextStyle}>Kosten&nbsp;</span>
        €{carCalculate.kosten}
        </Box>
        <Box sx = {textStyle} >
        <span style={spanTextStyle}>OPEX&nbsp;</span>
        €{carCalculate.OPEX}
      </Box>
      </Box>
    
    </Box>
  );
};

export default CarDisplay;
