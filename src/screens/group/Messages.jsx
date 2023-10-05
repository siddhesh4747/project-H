import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import FontAwesomeIcon6 from 'react-native-vector-icons/FontAwesome6'
import FeatherIcon from 'react-native-vector-icons/Feather'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function Messages({ navigation }) {
    return (
        <View className='pt-[40px] px-[14px]  bg-screen flex-1'>
            <HeaderBack text={'Messages'} />
            
            <View className='justify-between flex-1 mb-[10px]'>
            <View className=''>


             </View>
             <View className=''>


             <TextInput multiline  
      placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
      placeholder='hello everyone  ..!'
      className=' bg-button rounded-[8px] mt-[10px] placeholder:text-[16px] placeholder:font-epilogue400'>
      </TextInput>
             <TextInput multiline  
      placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
      placeholder='Type your message... '
      className=' bg-button rounded-[8px] mt-[10px] placeholder:text-[16px] placeholder:font-epilogue400'>
      </TextInput>
</View>
            
            </View>


        </View>
    )
}