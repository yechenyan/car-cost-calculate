'use client'
import { useAtom } from "jotai";

import { Box } from "@mui/material";
import MyTextFiled from "../Components/MyTextField"

import { currentCarAtom , userDataAtom} from "../../services/userData";
import { currentEditIdCarAtom} from "../../services/ui";

import {getNumberInput, getTextInput} from "../utils/input.ts"

const Title = ({children}) => {
  return <Box sx = {{
    marginTop: 2
  }}>{children}</Box>
}

const CarEdit = () => {
  const [car, setCar] = useAtom(currentCarAtom)
  const [_, setCurrentCarId] = useAtom(currentEditIdCarAtom)
  const handleDelete = () => {

  }
  return <Box sx= {{width: '100%'}}>
    <Box sx= {{justifyContent: 'space-between', display: 'flex'}}>
      <Box sx= {{
        fontSize: '28px'
      }}>Edit Car</Box>
      <Box onClick = {() => {
        setCurrentCarId(null)
      }}
        sx= {{color: '#676565'}}
      >Close</Box>
    </Box>
    <MyTextFiled label = 'Stromabdeckung' {...getTextInput('name', setCar, car)} type = 'text'/>
    <MyTextFiled label = 'Stromverbrauch/100km' {...getNumberInput('stromabdeckung', setCar, car)}/>
    <MyTextFiled label = 'Kraftstoffverbrauch/100km' {...getNumberInput('kraftstoffverbrauch', setCar, car)}/>
    <MyTextFiled label = 'Ladeverluste' {...getNumberInput('ladeverluste', setCar, car)}/>

    <Title>Anschaffungskosten</Title>
    <MyTextFiled label = 'Fahrzeugpreis' {...getNumberInput('fahrzeugpreis', setCar, car)}/>
    <MyTextFiled label = 'Steuern' {...getNumberInput('steuern', setCar, car)}/>
    <MyTextFiled label = 'KFZ-Zeichen' {...getNumberInput('KFZZeichen', setCar, car)}/>
    <MyTextFiled label = 'Subventionen' {...getNumberInput('subventionen', setCar, car)}/>
    
    <Title>Unterhaltskosten</Title>
    <MyTextFiled label = 'Jährliche Wartungskosten Ø' {...getNumberInput('jährlicheWartungskosten', setCar, car)}/>
    <MyTextFiled label = 'Versicherungskosten Ø ' {...getNumberInput('versicherungskosten', setCar, car)}/>
    
    {/* <Title>Batterieverluste</Title>
    <MyTextFiled label = 'Batteriekapazität' {...getNumberInput('name', setCar, car)}/>
    <MyTextFiled label = 'Batterieverluste' {...getNumberInput('name', setCar, car)}/>
     */}
    <Title>Abfallentsorgung</Title>
    <MyTextFiled label = 'Wiederverkaufswert' {...getNumberInput('wiederverkaufswert', setCar, car)}/>
    <Box onClick= {handleDelete} >Delete</Box>
  </Box>

}

export default CarEdit