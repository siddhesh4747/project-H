import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../../components/ButtonIcon'

export default function AddNewProject() {
  return (
    <View className='pt-[46px] px-[14px]  bg-black flex-1'>
    <HeaderBack text={'Add new project'} handler={() => navigation.goBack()} />

    <ButtonIcon text={'Add new one'} icon={faPlusCircle}/>

    <View className=' bg-[#222]  rounded-lg p-[8px] flex-row justify-between gap-[7px] w-full mx-auto mt-[20px] items-center '>
        <Text className=' w-1/2 text-white/80 text-[16px] font-[600] '>Gesture Control Bluetooth Speaker Arduino</Text>
        <TouchableOpacity onPress={() => ''} >
            <FontAwesomeIcon icon={faTrash} size={24} color='red' />
        </TouchableOpacity>
    </View>
</View>
  )
}