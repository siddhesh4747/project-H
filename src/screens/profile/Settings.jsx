import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

export default function Settings({ navigation }) {
    return (
        <View className='pt-[46px] px-[14px]  bg-black flex-1'>
            <HeaderBack text={'Settings'} handler={() => navigation.goBack()} />
            <TouchableOpacity onPress={()=>navigation.navigate('DeleteAccount')} className='  rounded-lg  flex-row  gap-x-[9px] w-full  mt-[40px]'>
                <FontAwesomeIcon icon={faBell} size={24} color='rgba(255, 255, 255, 0.8)' />
                <Text className=' text-white/80 text-[16px] font-[400] '>Notification</Text>
            </TouchableOpacity>
            <Text className='text-[20px] font-[700] text-white/80 mt-[38px]'>More options</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('')} className='  rounded-lg   w-full mx-auto mt-[10px]'>
                <Text className=' text-white/80 text-[20px] font-[400] '>Change my interests</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('FeedbackPage')} className='  rounded-lg   w-full mx-auto mt-[10px]'>
                <Text className=' text-white/80 text-[20px] font-[400] '>Share feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('DeleteAccount')} className='  rounded-lg   w-full mx-auto mt-[10px]'>
                <Text className=' text-white/80 text-[20px] font-[400] '>Terms of service</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('DeleteAccount')} className='  rounded-lg   w-full mx-auto mt-[10px]'>
                <Text className=' text-white/80 text-[20px] font-[400] '>Privacy policy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('SignoutPage')} className='  rounded-lg   w-full mx-auto mt-[10px]'>
                <Text className=' text-white/80 text-[20px] font-[400] '>Sign out</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('DeleteAccount')} className='  rounded-lg   w-full mx-auto mt-[10px]'>
                <Text className=' text-white/80 text-[20px] font-[400] '>Delete account</Text>
            </TouchableOpacity>
        </View>
    )
}