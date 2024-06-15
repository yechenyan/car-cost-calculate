import { currentCarAtom , userDataAtom} from "../../services/userData";
import { currentEditIdCarAtom, selectCarsAtom} from "../../services/ui";
import CarEdit from './CarEdit'
import {useAtom} from 'jotai'
import { Box } from "@mui/material";
import {cardStyle} from "../style"


const CarItem = ({car}) => {
  const [currentCar] = useAtom(currentCarAtom)
  const [_, setCurrentEditIdCar] = useAtom(currentEditIdCarAtom)

  if (car.id === currentCar?.id) {
    return <Box sx = {{...cardStyle, display: 'flex', justifyContent: 'space-between'}}>
      <CarEdit />
    </Box>
  }


  return <Box sx = {{...cardStyle, display: 'flex', justifyContent: 'space-between'}}>
    <Box sx= {{
      fontSize: '28px'
    }}>{car.name}</Box>
    <Box onClick = {() => {setCurrentEditIdCar(car.id)}} sx= {{
      fontSize: '16px',
      color: '#676565'
    }}>Edit</Box>
  </Box>



}

export default CarItem