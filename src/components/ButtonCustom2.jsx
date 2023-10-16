import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function ButtonCustom2({icon,IconProvider,text,handler,iconColor,width,justifyCenter}) {
  return (
    <TouchableOpacity onPress={handler} style={{width:width==='full'?'100%':'',justifyContent:justifyCenter?'center':''}} className=' bg-button  rounded-lg py-[8px] flex-row  gap-[7px]  mx-auto mt-[10px] px-[10px]'>
    <IconProvider name={icon} size={24} color={iconColor?iconColor:'rgba(255, 255, 255, 0.8)'} />
    <Text className=' text-white/80 text-[16px] font-epilogue600 '>{text}</Text>
  </TouchableOpacity>
  )
}