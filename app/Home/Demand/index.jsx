'use client'
import { Box, Slider, Button } from "@mui/material";
import {cardStyle} from "../style"
import { useAtom } from "jotai";
import {isDemandMoreAtom} from "../../services/ui"
import { carsDataAtom , userDataAtom, demandAtom} from "../../services/userData";
import {getSlideInput} from "../utils/input"
import MyLabelField from "../Components/MyLabelField"
import DemandDetail from './DemandDetail'
const Demand = () => {

  const [demandData, setDemandData ] = useAtom(demandAtom)
  const [isDemandMore, setIsDemandMore] = useAtom(isDemandMoreAtom)
  
  return (
    <Box sx= {{
      marginTop: 4,
      paddingLeft: 2,
      paddingRight: 2,
    }}>
    <Box sx= {cardStyle}> 
      <Box sx={{
        fontSize: '20px',
        fontWeight: 500,
        paddingTop: 1,
      }}>Wie nutzen Sie Ihr Auto?</Box>
    
      <MyLabelField label = 'Nutzdauer in Jahren'>
        <Slider 
          min = {0}
          max = {50}
          marks ={[{value:0, label:'0'}, {value:50, label: '50'}]}
          {...getSlideInput('jahr',setDemandData, demandData)}
           />
      </MyLabelField>

      <MyLabelField label = 'km pro Woche'>
        <Slider 
          min = {0}
          max = {1000}
          step = {10}
          marks ={[{value:0, label:'0'}, {value:1000, label: '1000'}]}
          {...getSlideInput('kmProWoche',setDemandData, demandData)}
           />
      </MyLabelField>

      <MyLabelField label = 'Stromabdeckung Haushalt in %'>
        <Slider 
          min = {0}
          step={1}
          max = {100}
          marks ={[{value:0, label:'0'}, {value:100, label: '100'}]}
          {...getSlideInput('stromabdeckungHaushalt',setDemandData, demandData)}
           />
      </MyLabelField>
      {isDemandMore&& <DemandDetail />}
      <Box sx= {{
        marginTop: 2,
        display: 'flex',
        justifyContent: "center"
      }}>
        <Button sx= {{
          color: '#676565',
          padding: 1
        }}
        onClick = {() => {setIsDemandMore(value => !value)}}

        > {
          !isDemandMore ? 'NÄHERE ANGABEN' : 'WENIGER ANSEHEN'
        }</Button>
      </Box>
      </Box>
      
  
    </Box>
  )
}

export default Demand