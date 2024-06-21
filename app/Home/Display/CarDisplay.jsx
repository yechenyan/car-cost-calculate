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
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';

const textStyle = {
  justifyContent:'center',
  marginTop: 4,

  width: '100px',
  whiteSpace: 'nowrap',
}

const spanTextStyle = {
  // width: 100,
  fontSize: '14px',
  color: '#676565',
  display: 'block',
}

const span2TextStyle = {
  fontSize: '20px',
  color: '#000',
  marginTop: 1
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
        marginTop: 3
      }}>
        {carCalculate.type === 'E-Auto' && <BatteryChargingFullIcon sx= {{fontSize:48}} />}
        {carCalculate.type === 'Benziner' && <EvStationIcon sx= {{fontSize:48}} />}
        {carCalculate.type === 'Hybrid' && <EarbudsBatteryIcon  sx= {{fontSize:48}}/>}
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent:'center',
        fontSize: 44,
        marginTop: 6,
        alignItems: 'flex-end',
        fontWeight: 500
      }}>
        €{carCalculate.per} 
        <Box sx={{
          fontSize: 14,
          lineHeight:'30px'
        }}>/ km</Box>
        
      </Box>

     
     
      <Box sx= {{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>         
        <Box sx = {textStyle} >
          <Box sx={spanTextStyle}>Gesamtkosten:</Box> 
          <Box  sx={span2TextStyle}> €{carCalculate.total}</Box>
        </Box>

        <Box sx = {textStyle} >
          <Box sx={spanTextStyle}>CAPEX:</Box> 
          <Box  sx={span2TextStyle}> €{carCalculate.kosten}</Box>
        </Box>

        <Box sx = {textStyle} >
          <Box sx={spanTextStyle}>Gesamt OPEX:</Box> 
          <Box  sx={span2TextStyle}> €{carCalculate.OPEX}</Box>
        </Box>
 
        <Box sx = {textStyle} >
          <span style={spanTextStyle}>Batterieverbrauch:</span>
          {carCalculate.batteryStatus * 100} %
        </Box>
      </Box>
    
    </Box>
  );
};

export default CarDisplay;
