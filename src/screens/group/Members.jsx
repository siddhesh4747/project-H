import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import FontAwesomeIcon6 from 'react-native-vector-icons/FontAwesome6'
import FeatherIcon from 'react-native-vector-icons/Feather'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function Members({ navigation }) {
    return (
        <View className='pt-[40px] px-[14px]  bg-screen flex-1'>
            <HeaderBack text={'Gesture Control Bluetooth Speaker Arduino 45 members'} />
            
            <View className=' mt-[20px]'>
            <View className='flex-row justify-between mb-[10px] bg-button rounded-[8px] px-[13px] py-[9px] items-center'>
                    <View>
                    <Text className='text-[10px] font-epilogue400 text-white/80'>(admin)</Text>
                        <Text className='text-[16px] font-epilogue600 text-white/80'>Varad07 , AISSMS IOIT</Text>
                    </View>
                    <Text className='text-[13px] font-epilogue500 text-white/80'>stars</Text>
                </View>

            <View className='flex-row justify-between mb-[10px] bg-button rounded-[8px] px-[13px] py-[9px] items-center'>
                    <View className=''>
                        <Text className='text-[16px] font-epilogue600 text-white/80'>rohan5 , pict</Text>
                        <Text className='text-[13px] font-epilogue500 text-white/80'>stars</Text>
                    </View>
                    <TouchableOpacity className=' bg-[#181520] rounded-[8px] p-[12px]'>
                        <Text className='text-[#DB2424] text-[16px] font-epilogue600'>Remove</Text>
                    </TouchableOpacity>
                </View>
            <View className='flex-row justify-between mb-[10px] bg-button rounded-[8px] px-[13px] py-[9px] items-center'>
                    <View className=''>
                        <Text className='text-[16px] font-epilogue600 text-white/80'>rohan5 , pict</Text>
                        <Text className='text-[13px] font-epilogue500 text-white/80'>stars</Text>
                    </View>
                    <TouchableOpacity className=' bg-[#181520] rounded-[8px] p-[12px]'>
                        <Text className='text-[#DB2424] text-[16px] font-epilogue600'>Remove</Text>
                    </TouchableOpacity>
                </View>
            
            </View>


        </View>
    )
}