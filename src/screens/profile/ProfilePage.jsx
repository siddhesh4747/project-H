import { View, Text, StatusBar, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faL, faLinkSimple, faNoteSticky, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { Svg } from 'react-native-svg'


export default function ProfilePage() {

  const{width}=useWindowDimensions()

  return (
    <View className='px-[12px] py-[30px]' style={{width:width}}>
      <StatusBar hidden />
      <Text className='text-white font-[700] text-[32px]'>Profile</Text>
      
      <View className='bg-[#222] rounded-lg px-[13px] py-[7px] mt-[7px] mx-[5px]'>
        <View className=' flex-row justify-between items-center'>
          <Text className='text-white/80 font-[600] text-[16px]'>Siddhesh47</Text>
          {/* <FontAwesomeIcon icon={faLinkSimple} color='white' size={20} /> */}
        </View>
        <Text className='text-white/80 font-[600] text-[10px]'>Aissms ioit</Text>
        <View className=' flex-row justify-center gap-[35px]'>
          <View className=' items-center gap-[7px]'>
            <FontAwesomeIcon icon={faNoteSticky} size={24} color='#2462DB' />
            <Text className='text-white/80 font-[400] text-[10px]'>Project Done</Text>
            <Text className='text-white/80 font-[600] text-[16px]'>36</Text>

          </View>
          <View className=' items-center gap-[7px]'>
            <FontAwesomeIcon icon={faNoteSticky} size={24} color='#2462DB' />
            <Text className='text-white/80 font-[400] text-[10px]'>Project Done</Text>
            <Text className='text-white/80 font-[600] text-[16px]'>6</Text>

          </View>
          <View className=' items-center gap-[7px]'>
            <FontAwesomeIcon icon={faNoteSticky} size={24} color='#2462DB' />
            <Text className='text-white/80 font-[400] text-[10px]'>Project Done</Text>
            <Text className='text-white/80 font-[600] text-[16px]'>3</Text>

          </View>
        </View>

      </View>

     


  
  
      <TouchableOpacity className=' bg-[#222]  rounded-lg p-[10px]  flex-row justify-center gap-[7px] mt-4 '>
 
    <FontAwesomeIcon icon={faPaperclip} size={24} color='white' />
        <Text className=' text-white/80 text-[16px] font-[600] '>Upload resume</Text>
  
      </TouchableOpacity>
      <TouchableOpacity  className='mt-[5px]'>
    <View className=' bg-[#222]  rounded-lg p-[10px]  flex-row justify-center gap-[7px] '>
    <FontAwesomeIcon icon={faPaperclip} size={24} color='white' />
        <Text className=' text-white/80 text-[16px] font-[600] '>Upload resume</Text>
    </View>
      </TouchableOpacity>
      



    </View>
  )
}