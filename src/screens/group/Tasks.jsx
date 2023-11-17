import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import FontAwesomeIcon6 from 'react-native-vector-icons/FontAwesome6'
import FeatherIcon from 'react-native-vector-icons/Feather'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function Tasks({ navigation }) {
    return (
        <View className='pt-[40px] px-[14px]  bg-screen flex-1'>
            <HeaderBack text={'Gesture Control Bluetooth Speaker Arduino project tasks '} />
            <View className='mt-[23px] '>

                <View className='flex-row justify-between mb-[10px]'>
                    <TouchableOpacity className=' bg-button rounded-[8px] p-[7px]  flex-row items-center'>
                        <FontAwesomeIcon6 name='list-check' size={24} color='#4285F4' />
                        <Text className='text-[13px] font-epilogue500 text-white/80'>Tasks (17)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className=' bg-button rounded-[8px] p-[7px]  flex-row items-center'>
                        <FeatherIcon name='plus-circle' size={24} color='#4285F4' />
                    </TouchableOpacity>
                </View>


                <TouchableOpacity className=' bg-button rounded-[8px] px-[13px] py-[9px] '>
                    <Text className='text-[16px] font-epilogue600 text-white/80'>Gesture Control Bluetooth Speaker Arduino task done by roahn5</Text>
                </TouchableOpacity>
                <TouchableOpacity className=' bg-button rounded-[8px] px-[13px] py-[9px] mt-[10px]'>
                    <Text className='text-[16px] font-epilogue600 text-white/80'>Gesture Control Bluetooth Speaker Arduino task done by roahn5</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}