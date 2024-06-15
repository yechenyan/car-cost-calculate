'use client'
import Link from 'next/link'
import {Box} from '@mui/material'
 
export default function NotFound() {
  return (
    <Box sx= {{padding: 4}}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Please click: Return Home</Link>
    </Box>
  )
}