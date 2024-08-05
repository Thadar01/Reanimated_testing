import { View, Text, ViewProps, ButtonProps, PressableProps } from 'react-native'
import React, { Children } from 'react'

interface TCustomizedView extends ViewProps{
    customProps:string
}
const CustomizedView = ({customProps,...props}:TCustomizedView) => {
  return (
    <View {...props} >
     
    </View>
  )
}

export default CustomizedView