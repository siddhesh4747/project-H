import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import FontAwesomeIcon6 from 'react-native-vector-icons/FontAwesome6'
import FeatherIcon from 'react-native-vector-icons/Feather'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function Comments({ navigation }) {
    return (
        <View className='pt-[40px] px-[14px]  bg-screen flex-1'>
            <HeaderBack text={'comments'} />
            <Text className='text-white/80 text-[16px] font-epilogue600 my-[20px] '>
            remotes are not always comfortable to use and also have a strain on fingers after constant use
            </Text>
            <View className='justify-between flex-1 mb-[10px]'>
            <View className=''>

            <View className=' bg-button p-[12px] mt-[10px] rounded-[8px]'>
                <Text className='text-white/80 text-[16px] font-epilogue600'>Varad07</Text>
                <Text className='text-white/80 text-[14px] font-epilogue400'>remotes are not always comfortable to use and also have a strain on fingers after constant use</Text>
             </View>
            <View className=' bg-button p-[12px] mt-[10px] rounded-[8px]'>
                <Text className='text-white/80 text-[16px] font-epilogue600'>Rohan78</Text>
                <Text className='text-white/80 text-[14px] font-epilogue400'>The robotic vehicle is run by an STM342 controller that operates 4 x DC motors using Motor drivers to achieve movement.</Text>
            </View>

             </View>

             <TextInput multiline  
      placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
      placeholder='Add your comment'
      className=' bg-button rounded-[8px] mt-[10px] placeholder:text-[16px] placeholder:font-epilogue400'>
      </TextInput>
            
            </View>


        </View>
    )
}