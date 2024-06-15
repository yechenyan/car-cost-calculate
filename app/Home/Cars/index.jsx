'use client'
import { Box } from "@mui/material";
import CarEdit from './CarEdit'
import {useAtom} from 'jotai'
import { carsDataAtom , userDataAtom} from "../../services/userData";
import CarItem from './CarItem'


const Cars = () => {
  const [cars] = useAtom(carsDataAtom)
  return <Box sx= {{
    paddingLeft: 2,
    paddingRight: 2,
  }}>
    {
      cars.map((car)=> <CarItem car = {car} />)
    }
  </Box>
}

export default Cars