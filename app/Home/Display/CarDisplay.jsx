import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { carsDataAtom, car2calculateAtom, car1calculateAtom } from "../../services/userData";
import { useAtom } from "jotai";
import { selectCarsAtom, selectCarsIdAtom } from "../../services/ui"

const textStyle = {
   display: 'flex',
  justifyContent:'center',
  marginTop: '16px',
  fontSize: '14px',
  color: '#000'
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
        <Select value = {selectCarsId[index]} onChange = {(e) => {
          setSelectCarsId(data => {
            const newData = [...data]
            newData[index] =  e.target.value
            return newData
          })
        }}>
          {cars.map((car) => (
            <MenuItem value={car.id} key={car.id} >
              {car.name}
            </MenuItem>
          ))}
        </Select>

      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent:'center'
      }}>
        € {carCalculate.per} / km
      </Box>
      <Box sx = {textStyle} >
      total: €{carCalculate.total}
      </Box>
      <Box sx = {textStyle} >
      Kosten: €{carCalculate.kosten}
      </Box>
      <Box sx = {textStyle} >
      OPEX: €{carCalculate.OPEX}
      </Box>
    
    </Box>
  );
};

export default CarDisplay;
