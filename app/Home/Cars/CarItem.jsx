import { currentCarAtom , userDataAtom} from "../../services/userData";
import { currentEditIdCarAtom, selectCarsAtom} from "../../services/ui";
import CarEdit from './CarEdit'
import {useAtom} from 'jotai'
import { Box, Button } from "@mui/material";
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
      paddingTop: 1,
      paddingBottom: 1,
      
      color: '#000'
    }}>{car.name}</Box>
    <Button onClick = {() => {setCurrentEditIdCar(car.id)}} sx= {{
      fontSize: '16px',
      color: '#676565'
    }}>Edit</Button>
  </Box>



}

export default CarItem