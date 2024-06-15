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
        fontSize: '28px',
        fontWeight: 500,
        paddingTop: 2,
        
      }}> What are your car usage habits?</Box>
    
      <MyLabelField label = 'Jahr'>
        <Slider 
          min = {0}
          max = {50}
          {...getSlideInput('jahr',setDemandData, demandData)}
           />
      </MyLabelField>

      <MyLabelField label = 'Km pro Woche in Km'>
        <Slider 
          min = {0}
          max = {1000}
          step = {10}
          {...getSlideInput('kmProWoche',setDemandData, demandData)}
           />
      </MyLabelField>

      <MyLabelField label = 'Stromabdeckung Haushalt in %'>
        <Slider 
          min = {0}
          step={0.01}
          max = {1}
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
         
          padding: 1
        }}
        onClick = {() => {setIsDemandMore(value => !value)}}

        > {
          !isDemandMore ? 'show more' : 'show less'
        }</Button>
      </Box>
      </Box>
      
  
    </Box>
  )
}

export default Demand