import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import ButtonIcon from '../../components/ButtonIcon'
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome'
import { faDeleteLeft, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function UploadResume() {
    return (
        <View className='pt-[46px] px-[14px]  bg-black flex-1'>
            <HeaderBack text={''} handler={() => navigation.goBack()} />

            

            <View className=' bg-[#222]  rounded-lg py-[8px] flex-row justify-between gap-[7px] w-full mx-auto mt-[20px]'>
                <Text className=' text-white/80 text-[16px] font-[600] '>My resume</Text>
                <TouchableOpacity onPress={() => ''} >
                    <FontAwesomeIcon name={'trash-o'} size={24} color='red' />
                </TouchableOpacity>
            </View>
        </View>
    )
}