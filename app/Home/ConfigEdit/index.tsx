'use client'
import { Box, TextField } from "@mui/material";
import {useAtom} from 'jotai'
import { carsDataAtom , userDataAtom} from "../../services/userData";
import { useState } from "react";

const ConfigEdit = () => {
  const [userData, setUserData] = useAtom(userDataAtom)
  const [show, setShow] = useState(false)
  
  const handleChange = (e)=> {
    try {
      setUserData(JSON.parse(e.target.value))
    } catch (err) {

    }
  }

  if (!show) {
    return <Box onClick = {() => setShow(true)} sx = {{
      textAlign: 'center',
      color: '#676565',
      fontSize: '16px',
      marginTop: 2

    }}>Edit Config</Box>
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
    <Box onClick = {() => setShow(false)}>ok</Box>
  </Box>
}

export default ConfigEdit