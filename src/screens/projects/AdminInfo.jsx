import { View, Text, StatusBar, TouchableOpacity, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import  FeatherIcon from 'react-native-vector-icons/Feather'
import  FontAwesomeI from 'react-native-vector-icons/FontAwesome5'
import {  faPaperclip, faPersonMilitaryToPerson, } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../../components/ButtonIcon'
import {  faPlusSquare, } from '@fortawesome/free-regular-svg-icons'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function AdminInfo({navigation}) {

  const { width } = useWindowDimensions()

  return (
    <View className='px-[12px] py-[30px] bg-screen flex-1' style={{ width: width }}>
      <StatusBar hidden />
      <Text className='text-white font-[700] text-[32px]'>Profile</Text>

      <View className='mx-[5px] mt-[7px] '>
        <View className='bg-[#222] rounded-lg px-[13px] py-[7px]'>
          <View className=' flex-row justify-between items-center'>
            <Text className='text-white/80 font-[600] text-[16px]'>Siddhesh47</Text>
            <FeatherIcon name='link-2' size={20} color={'white'}/>
          </View>
          <Text className='text-white/80 font-[600] text-[10px]'>Aissms ioit</Text>
          <View className=' flex-row justify-center gap-[35px]'>
            <Pressable onPress={()=>navigation.navigate('DoneProject')} className=' items-center gap-[7px]'>
            <FeatherIcon name='check-circle' size={24} color={'#2462DB'}/>

              <Text className='text-white/80 font-[400] text-[10px]'>Project Done</Text>
              <Text className='text-white/80 font-[600] text-[16px]'>36</Text>

            </Pressable>
            <Pressable onPress={()=>navigation.navigate('ActiveProject')} className=' items-center gap-[7px]'>
              <FontAwesomeI name='business-time' size={24} color='#2462DB' />
              <Text className='text-white/80 font-[400] text-[10px]'>Active Project</Text>
              <Text className='text-white/80 font-[600] text-[16px]'>6</Text>

            </Pressable>
            <Pressable onPress={()=>navigation.navigate('')} className=' items-center gap-[7px]'>
            <FontAwesomeI name='gem' size={24} color='#2462DB' />

              <Text className='text-white/80 font-[400] text-[10px]'>Regards</Text>
              <Text className='text-white/80 font-[600] text-[16px]'>3</Text>
            </Pressable>
          </View>

        </View>

        <View className='mt-[15px] '>
  
          <ButtonCustom2 IconProvider={FontAwesomeI} icon={'paper-plane'} iconColor={'#DB5B24'} text={'Message to admin'} handler={()=>navigation.navigate('AddNewProject')}/>
        </View>
        <View>

          <TouchableOpacity onPress={()=>navigation.navigate('OurPaperJournal')} className='  rounded-lg  flex-row  gap-[9px] w-full mx-auto mt-[10px]'>
            <FontAwesomeI name='book' size={24} color='rgba(255, 255, 255, 0.8)' />
            <Text className=' text-white/80 text-[16px] font-epilogue400'>papers and journal</Text>
          </TouchableOpacity>
        

        </View>


      </View>













    </View>
  )
}