import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonIcon({icon,IconProvider,text,handler}) {
  return (
    <TouchableOpacity onPress={handler} className=' bg-[#222]  rounded-lg py-[8px] flex-row justify-center gap-[7px] w-full mx-auto mt-[10px]'>
    <IconProvider name={icon} size={24} color='white' />
    <Text className=' text-white/80 text-[16px] font-epilogue600'>{text}</Text>
  </TouchableOpacity>
  )
}