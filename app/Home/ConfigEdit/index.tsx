'use client'
import { Box, TextField, Button } from "@mui/material";
import {useAtom} from 'jotai'
import { carsDataAtom , userDataAtom, defaultUserData} from "../../services/userData";
import { useState } from "react";
import { selectCarsIdAtom} from "../../services/ui";


const ConfigEdit = () => {
  const [userData, setUserData] = useAtom(userDataAtom)
  const [carsId, setCarsId] = useAtom(selectCarsIdAtom)
  const [show, setShow] = useState(false)
  
  const handleChange = (e)=> {
    try {
      setUserData(JSON.parse(e.target.value))
    } catch (err) {

    }
  }

  const restData = () => {
    setUserData(defaultUserData)
    setCarsId([0,1])
  }

  if (!show) {
    return <Box onClick = {() => setShow(true)} sx = {{
      textAlign: 'center',
      marginTop: 1

    }}><Button size='small'>Edit Config</Button></Box>
  }
  return <Box sx= {{padding: 2}}>
     <TextField
      fullWidth
        label="Config"
        multiline
        rows={16}
        value = {JSON.stringify(userData)}
        onChange = {handleChange}
    />
    <Button onClick = {() => setShow(false)} sx= {{
      marginTop:1,
      width: '50%'
    }}>ok</Button>
    <Button onClick = {restData}>reset data</Button>
  </Box>
}

export default ConfigEdit