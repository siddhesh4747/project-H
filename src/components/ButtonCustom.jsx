import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function ButtonCustom({icon,text,handler,iconColor}) {
  return (
    <TouchableOpacity onPress={handler} className=' bg-[#222]  rounded-lg py-[8px] flex-row justify-center gap-[7px] mx-auto mt-[10px] px-[10px]'>
    <FontAwesomeIcon icon={icon} size={24} color={iconColor?iconColor:'rgba(255, 255, 255, 0.8)'} />
    <Text className=' text-white/80 text-[16px] font-epilogue600 '>{text}</Text>
  </TouchableOpacity>
  )
}