import { View, Text, TextProps } from 'react-native'
import React, { Children } from 'react'

interface TCustomizedText extends TextProps{
    customProps:string
}
const CustomizedText = ({customProps,...props}:TCustomizedText) => {
  return (
    
      <Text {...props}>{customProps}</Text>
    
  )
}

export default CustomizedText