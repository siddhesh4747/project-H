import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FatherIcon from 'react-native-vector-icons/Feather'


export default function Group({ navigation }) {
    return (
        <View className='pt-[40px] px-[14px]  bg-screen flex-1'>
            <View className='flex-row justify-between items-center'>

                <Text className='text-white font-epilogue700 text-[32px]'>Group</Text>
                <FatherIcon name={'bell'} size={24} color='rgba(255, 255, 255, 0.7)' />
            </View>
            <View className='mt-[32px] '>

            <TouchableOpacity className=' bg-button rounded-[8px] px-[13px] py-[9px] '>
                <Text className='text-[16px] font-epilogue600 text-white/80'>Gesture Control Bluetooth Speaker Arduino</Text>
            </TouchableOpacity>
            <TouchableOpacity className=' bg-button rounded-[8px] px-[13px] py-[9px] mt-[10px]'>
                <Text className='text-[16px] font-epilogue600 text-white/80'>Varad07 message you</Text>
            </TouchableOpacity>
            </View>
         
           
        </View>
    )
}