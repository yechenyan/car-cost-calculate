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
  

  return <Box>
      <MyTextFiled label = 'Benzinpreis' {...getNumberInput('benzinpreis', setDemandData, demandData)}/>
      <MyTextFiled label = 'Ölpreisentwicklung' {...getNumberInput('ölpreisentwicklung', setDemandData, demandData)}/>
      <MyTextFiled label = 'Stromkosten Haushalt' {...getNumberInput('stromkostenHaushalt', setDemandData, demandData)}/>
      <MyTextFiled label = 'Stromkostenentwicklung Haushalt' {...getNumberInput('stromkostenHaushaltWicklung', setDemandData, demandData)}/>
      <MyTextFiled label = 'Strommarktpreise' {...getNumberInput('strommarktpreise', setDemandData, demandData)}/>
      <MyTextFiled label = 'Stromkostenentwicklung Markt' {...getNumberInput('strommarktpreiseWicklung', setDemandData, demandData)}/>
  </Box>
}

export default DemandDetail