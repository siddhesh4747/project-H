import { View, Text, useWindowDimensions, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import ButtonCustom from '../../components/ButtonCustom'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import HeaderBack from '../../components/HeaderBack'

export default function FilterPage() {
  const { width } = useWindowDimensions()
  return (
    <View className='px-[12px] py-[30px] bg-black flex-1' style={{ width: width }}>
      <StatusBar hidden />
      <HeaderBack text={'Filter'}/>
      <View className='mt-[22px]'>
      <Text className='text-[16px] font-[600] text-white/80'>Department</Text>
      <ScrollView horizontal className='mt-[10px]'>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <FontAwesomeIcon icon={faPlusCircle} size={24} color='#4285F4'/>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
      </ScrollView>
      </View>
      <View className='mt-[22px]'>
      <Text className='text-[16px] font-[600] text-white/80'>Department</Text>
      <ScrollView horizontal className='mt-[10px]'>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <FontAwesomeIcon icon={faPlusCircle} size={24} color='#4285F4'/>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
      </ScrollView>
      </View>
      <View className='mt-[22px]'>
      <Text className='text-[16px] font-[600] text-white/80'>Department</Text>
      <ScrollView horizontal className='mt-[10px]'>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <FontAwesomeIcon icon={faPlusCircle} size={24} color='#4285F4'/>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
      </ScrollView>
      </View>
      <View className='mt-[22px]'>
      <Text className='text-[16px] font-[600] text-white/80'>Department</Text>
      <ScrollView horizontal className='mt-[10px]'>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <FontAwesomeIcon icon={faPlusCircle} size={24} color='#4285F4'/>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
      </ScrollView>
      </View>
      <View className='mt-[22px]'>
      <Text className='text-[16px] font-[600] text-white/80'>Department</Text>
      <ScrollView horizontal className='mt-[10px]'>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <FontAwesomeIcon icon={faPlusCircle} size={24} color='#4285F4'/>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
     <View className='bg-[#222] p-[10px] rounded-[8px] mr-[10px]'>
     <Text className='text-[16px] text-white/80 font-[600] '>IT</Text>
     </View>
      </ScrollView>
      </View>
    </View>
  )
}