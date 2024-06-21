'use client'
import { useAtom } from "jotai";

import { Box, Button } from "@mui/material";
import MyTextFiled from "../Components/MyTextField"

import { currentCarAtom , userDataAtom} from "../../services/userData";
import { currentEditIdCarAtom} from "../../services/ui";

import {getNumberInput, getTextInput} from "../utils/input.ts"

const Title = ({children}) => {
  return <Box sx = {{
    marginTop: 4,
    fontSize: '20px',
    fontWeight: 500,
  }}>{children}</Box>
}

const CarEdit = () => {
  const [car, setCar] = useAtom(currentCarAtom)
  const [_, setCurrentCarId] = useAtom(currentEditIdCarAtom)
  const [userData,setUserData ] = useAtom(userDataAtom)
  
  const handleDelete = () => {
    setUserData(data => {
      const newCars = data.cars.filter(item => item.id!== car.id)
      return {
       ...data,
        cars: newCars
      }
    })
  }
  return <Box sx= {{width: '100%'}}>
    <Box sx= {{justifyContent: 'space-between', display: 'flex'}}>
      <Box sx= {{
        fontSize: '20px',
        fontWeight: 500,
      }}>Edit Car</Box>
      <Button onClick = {() => {
        setCurrentCarId(null)
      }}
        sx= {{color: '#676565'}}
      >Close</Button>
    </Box>
    <MyTextFiled label = 'Name' {...getTextInput('name', setCar, car)} type = 'text'/>
    <MyTextFiled label = 'stromabdeckung in %' {...getNumberInput('stromabdeckung', setCar, car)}/>
    <MyTextFiled label = 'Stromverbrauch/100km in Km' {...getNumberInput('stromverbrauch', setCar, car)}/>
    <MyTextFiled label = 'Kraftstoffverbrauch/100km in KW/h' {...getNumberInput('kraftstoffverbrauch', setCar, car)}/>
    <MyTextFiled label = 'Ladeverluste in %' {...getNumberInput('ladeverluste', setCar, car)}/>

    <Title>Anschaffungskosten</Title>
    <MyTextFiled label = 'Fahrzeugpreis in  €' {...getNumberInput('fahrzeugpreis', setCar, car)}/>
    <MyTextFiled label = 'Steuern in €' {...getNumberInput('steuern', setCar, car)}/>
    <MyTextFiled label = 'KFZ-Zeichen in €' {...getNumberInput('KFZZeichen', setCar, car)}/>
    <MyTextFiled label = 'Subventionen in  €' {...getNumberInput('subventionen', setCar, car)}/>
    
    <Title>Unterhaltskosten</Title>
    <MyTextFiled label = 'Jährliche Wartungskosten in €/Jahr' {...getNumberInput('jährlicheWartungskosten', setCar, car)}/>
    <MyTextFiled label = 'Versicherungskosten in €/Jahr ' {...getNumberInput('versicherungskosten', setCar, car)}/>
    
    <Title>Batterieverluste</Title>
    <MyTextFiled label = 'Batteriekapazität in KW/h' {...getNumberInput('Batteriekapazität', setCar, car)}/>
    <MyTextFiled label = 'Batterieverluste' {...getNumberInput('Batterieverluste', setCar, car)}/>
    <MyTextFiled label = 'Batteriepreis in €' {...getNumberInput('Batteriepreis', setCar, car)}/>

    <Title>Abfallentsorgung</Title>
    <MyTextFiled label = 'Wiederverkaufswert in €' {...getNumberInput('wiederverkaufswert', setCar, car)}/>
    <MyTextFiled label = 'Laufleistung beim Wiederverkauf in €' {...getNumberInput('LaufleistungBeimWiederverkauf', setCar, car)}/>

    
    <Box sx= {{
      display: 'flex',
      justifyContent: "center"
    }}>
      <Button onClick= {handleDelete} sx= {{
        marginTop: 1,
        padding:1,
        color: '#676565'
      }}>Delete</Button>
    </Box>
  </Box>

}

export default CarEdit