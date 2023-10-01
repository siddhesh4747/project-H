import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function ButtonIcon({icon,text,handler}) {
  return (
    <TouchableOpacity onPress={handler} className=' bg-[#222]  rounded-lg py-[8px] flex-row justify-center gap-[7px] w-full mx-auto mt-[10px]'>
    <FontAwesomeIcon icon={icon} size={24} color='white' />
    <Text className=' text-white/80 text-[16px] font-[600] '>{text}</Text>
  </TouchableOpacity>
  )
}