// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
function App() {

  return (
    <>
    <h1>Material UI Demo</h1>
     <Button variant="contained"  startIcon={<DeleteIcon />}>Delete</Button>
     <Button variant="contained" color='success' size='small'>Click me2!</Button>
     
    </>
  )
}

export default App
