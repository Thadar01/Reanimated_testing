import { View, Text, TextInputProps, TextInput } from 'react-native'
import React from 'react'


interface TCustomizedTextInput extends TextInputProps{
    customProps:string
}
const CustomizedTestInput = ({customProps,...props}:TCustomizedTextInput) => {
  return (
   <TextInput {...props} placeholder={customProps}/>
  )
}

export default CustomizedTestInput