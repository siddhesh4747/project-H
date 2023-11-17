import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import FontAwesomeIcon6 from 'react-native-vector-icons/FontAwesome6'
import FeatherIcon from 'react-native-vector-icons/Feather'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function Issues({ navigation }) {
    return (
        <View className='pt-[40px] px-[14px]  bg-screen flex-1'>
            <HeaderBack text={'Issues'} />
            <View className='mt-[23px] '>

              

<ButtonCustom2 iconColor={'#DB242F'} IconProvider={FeatherIcon} icon={'plus-square'} text={'Add issues'}/>
             <View className=' bg-button p-[12px] mt-[10px]'>
                <Text className='text-white/80 text-[16px] font-epilogue600'>remotes are not always comfortable to use and also have a strain on fingers after constant use</Text>
                <FeatherIcon name='edit-3' size={20} color='rgba(255, 255, 255, 0.8)'/>
             </View>
            </View>


        </View>
    )
}