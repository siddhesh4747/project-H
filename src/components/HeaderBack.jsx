import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function HeaderBack({ text, handler }) {
    return (
        <View className='flex-row items-center gap-[20px]'>
            <TouchableOpacity onPress={handler}>
                <FontAwesomeIcon icon={faArrowLeft} size={24} color='white' />
            </TouchableOpacity>
            <Text className=' text-[20px] font-[700] text-white/80'>{text}</Text>
        </View>

    )
}