import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import FontAwesomeIcon6 from 'react-native-vector-icons/FontAwesome6'
import FeatherIcon from 'react-native-vector-icons/Feather'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function AddIssues({ navigation }) {
    return (
        <View className='pt-[40px] px-[14px]  bg-screen flex-1'>
            <HeaderBack text={'Issues'} />
            <View className='mt-[23px] '>
            <TextInput multiline numberOfLines={5} 
      placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
      placeholder='Add issue '
      textAlignVertical='top'
      className='bg-[#222] rounded-[8px] mt-[10px] placeholder:text-[16px] placeholder:font-epilogue600'>
      </TextInput>
            </View>


        </View>
    )
}