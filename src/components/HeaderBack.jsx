import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import  FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function HeaderBack({ text, handler }) {

    const { width } = useWindowDimensions()
    return (
        <View className='flex-row items-center gap-[20px]' style={{width:.8*width}}>
            <TouchableOpacity onPress={handler}>
                <FontAwesomeIcon name={'arrow-left'} size={24} color='white' />
            </TouchableOpacity>
            <Text className=' text-[20px] font-epilogue700 text-white/80'>{text}</Text>
        </View>

    )
}