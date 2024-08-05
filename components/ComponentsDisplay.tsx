import { View, Text } from 'react-native'
import React from 'react'
import CustomizedView from './CustomizedComponents/CustomizedView'
import CustomizedText from './CustomizedComponents/CustomizedText'
import CustomizedTestInput from './CustomizedComponents/CustomizedTestInput'
import CustomizedButton from './CustomizedComponents/CustomizedButton'

const ComponentsDisplay = () => {
  return (
    <CustomizedView customProps={"hello"}>

        <CustomizedText customProps={"world"}/>
        <CustomizedTestInput customProps={"PLease enter something"} style={{width:300,height:40,borderWidth:1,borderColor:"black",padding:10}}  placeholderTextColor={"grey"}/>
        <CustomizedButton title="click me" customProps='Click me'/>
    </CustomizedView>
  )
}

export default ComponentsDisplay