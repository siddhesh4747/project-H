import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import  FontAwesomeIcon6  from 'react-native-vector-icons/FontAwesome6'
import  FeatherIcon  from 'react-native-vector-icons/Feather'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function Group2({ navigation }) {
    return (
        <View className='pt-[40px] px-[14px]  bg-screen flex-1'>
         <HeaderBack text={'Gesture Control Bluetooth Speaker Arduino group'}/>
            <View className='mt-[32px] '>

            <View className='flex-row flex-wrap'>
        <ButtonCustom2 IconProvider={FontAwesomeIcon6} icon={'list-check'} iconColor={'#4285F4'} text={'Tasks (17)'} />
        <ButtonCustom2 IconProvider={FeatherIcon} icon={'x-octagon'} iconColor={'#DB2424'} text={'Issues (8)'} />
        <ButtonCustom2 IconProvider={FontAwesomeIcon6} icon={'group-arrows-rotate'} iconColor={'#34A853'} text={'Group chat'} />
        <ButtonCustom2 IconProvider={FontAwesomeIcon6} icon={'users'} iconColor={'#4285F4'} text={'Group members'} />
        
       
      </View>

      <Text className='text-white/80 text-[16px] mt-[20px] mb-[10px] ml-[20px] font-epilogue600'>Last update</Text>
      <TouchableOpacity className=' bg-button rounded-[8px] px-[13px] py-[9px] '>
                <Text className='text-[16px] font-epilogue600 text-white/80'>Gesture Control Bluetooth Speaker Arduino task done by roahn5</Text>
            </TouchableOpacity>
            </View>
         
           
        </View>
    )
}