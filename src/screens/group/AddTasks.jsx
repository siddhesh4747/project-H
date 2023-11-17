import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import FontAwesomeIcon6 from 'react-native-vector-icons/FontAwesome6'
import FeatherIcon from 'react-native-vector-icons/Feather'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function AddTasks({ navigation }) {
    return (
        <View className='pt-[40px] px-[14px]  bg-screen flex-1'>
            <HeaderBack text={'Gesture Control Bluetooth Speaker Arduino project tasks '} />
            <View className='mt-[23px] justify-between flex-1 mb-[10px]'>

              


                <TouchableOpacity className=' bg-button rounded-[8px] px-[13px] py-[9px] '>
                    <Text className='text-[16px] font-epilogue600 text-white/80'>Add tasks title here</Text>
                </TouchableOpacity>
                <TouchableOpacity className=' bg-button rounded-[8px] px-[13px] py-[9px] mt-[10px]'>
                    <Text className='text-[16px] font-epilogue600 text-white/80 mx-auto'>Add task</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}