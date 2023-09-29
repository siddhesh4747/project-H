import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import ButtonIcon from '../../components/ButtonIcon'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeleteLeft, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function UploadResume() {
    return (
        <View className='pt-[46px] px-[14px]  bg-black flex-1'>
            <HeaderBack text={''} handler={() => navigation.goBack()} />

            

            <View className=' bg-[#222]  rounded-lg py-[8px] flex-row justify-between gap-[7px] w-full mx-auto mt-[20px]'>
                <Text className=' text-white/80 text-[16px] font-[600] '>My resume</Text>
                <TouchableOpacity onPress={() => ''} >
                    <FontAwesomeIcon icon={faTrash} size={24} color='red' />
                </TouchableOpacity>
            </View>
        </View>
    )
}