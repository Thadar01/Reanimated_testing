import { View, Text, ButtonProps, Button } from 'react-native'
import React from 'react'

interface TCustomizedButton extends ButtonProps{
    customProps:string
}
const CustomizedButton = ({customProps,...Props}:TCustomizedButton) => {
  return (
  <Button {...Props}/>
  )
}

export default CustomizedButton