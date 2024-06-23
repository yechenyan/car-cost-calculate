'use client'
import { Box, Slider } from "@mui/material";
import {demandDatadStyle} from "../style"
import { useAtom } from "jotai";
import {isDemandMoreAtom} from "../../services/ui"
import { demandDatasDataAtom , userDataAtom, demandAtom} from "../../services/userData";
import {getSlideInput} from "../utils/input"
import MyLabelField from "../Components/MyLabelField"

import MyTextFiled from "../Components/MyTextField"
import {getNumberInput, getTextInput} from "../utils/input.ts"


const DemandDetail = () => {
  const [demandData, setDemandData ] = useAtom(demandAtom)
  

  return <Box sx= {{marginTop: 2}}>
       <MyTextFiled label = 'Zinsrate in %' {...getNumberInput('zinsrate', setDemandData, demandData)}/>
      <MyTextFiled label = 'Benzinpreis in €' {...getNumberInput('benzinpreis', setDemandData, demandData)}/>
      <MyTextFiled label = 'Ölpreisentwicklung in %' {...getNumberInput('ölpreisentwicklung', setDemandData, demandData)}/>
      <MyTextFiled label = 'Stromkosten Haushalt in €' {...getNumberInput('stromkostenHaushalt', setDemandData, demandData)}/>
      <MyTextFiled label = 'Stromkostenentwicklung Haushalt in %' {...getNumberInput('stromkostenHaushaltWicklung', setDemandData, demandData)}/>
      <MyTextFiled label = 'Strommarktpreise in €' {...getNumberInput('strommarktpreise', setDemandData, demandData)}/>
      <MyTextFiled label = 'Stromkostenentwicklung Markt in %' {...getNumberInput('strommarktpreiseWicklung', setDemandData, demandData)}/>
  </Box>
}

export default DemandDetail