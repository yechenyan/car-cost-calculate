'use client'
import { Box } from "@mui/material";
import {useAtom} from 'jotai'
import { carsDataAtom , userDataAtom} from "../../services/userData";

let lastId = 100
const AddCar = () => {
  const [userData, setUserData] = useAtom(userDataAtom)

  const addCar = () => {
    lastId = lastId + 1
    const car = {
      name: 'car' + lastId,
      id: lastId,
      stromabdeckung: 0.5,
      stromverbrauch: 20,
      kraftstoffverbrauch: 8,
      ladeverluste: 0.1,

      fahrzeugpreis: 30000,
      steuern: 3000,
      KFZZeichen: 3000,
      subventionen: -500,

      jährlicheWartungskosten: 100,
      versicherungskosten: 100,

      wiederverkaufswert: 10000,
    }

    setUserData(data => ({
      ...data,
      cars: [
        ...data.cars,
        car
      ]
    }))
  }

  return <Box sx= {{
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 3,
    paddingBottom: 1
  }}>
    <Box onClick = {addCar}>Add Car</Box>
  </Box>
}

export default AddCar