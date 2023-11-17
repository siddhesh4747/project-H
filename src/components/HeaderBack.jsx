import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import  FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export default function HeaderBack({ text,size, handler }) {

    const { width } = useWindowDimensions()
    return (
        <View className='flex-row items-center gap-[20px]' style={{width:.85*width}}>
            <TouchableOpacity onPress={handler}>
                <FontAwesomeIcon name={'arrow-left'} size={24} color='white' />
            </TouchableOpacity>
            <Text style={{fontSize:size?size:20}} className='font-epilogue700 text-white/80'>{text}</Text>
        </View>

    )
}