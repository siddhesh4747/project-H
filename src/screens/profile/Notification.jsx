import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HeaderBack from '../../components/HeaderBack'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Switch } from 'react-native-switch';
import SwitchButton from '../../components/SwitchButton'

export default function Notification({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
    };


    return (
        <View className='pt-[46px] px-[14px]  bg-black flex-1'>
            <HeaderBack text={'Notification'} handler={() => navigation.goBack()} />
     
     <View className='mt-[40px]'>
     <View className='flex-row justify-between items-center mt-[27px]'>
        <Text className='text-[20px] text-white/80 font-[400]'>General notification </Text>
        <SwitchButton/>
     </View>
     <View className='flex-row justify-between items-center mt-[27px]'>
        <Text className='text-[20px] text-white/80 font-[400]'>Applications notification  </Text>
        <SwitchButton/>
     </View>
     <View className='flex-row justify-between items-center mt-[27px]'>
        <Text className='text-[20px] text-white/80 font-[400]'>Groups notification </Text>
        <SwitchButton/>
     </View>
     
     </View>
        </View>
    )
}