import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendar, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'

export default function Bookmarks({ navigation }) {
    return (
        <View className='pt-[46px] px-[14px]  bg-black flex-1'>
            <HeaderBack text={'Add new project'} handler={() => navigation.goBack()} />

            <View className='bg-[#222] p-[10px] rounded-[8px] mt-10'>
                <Text className='text-[16px] font-[600] text-white/80'>
                    Motion Based Door Opener With Metal Detector
                </Text>
                <View className='flex-row gap-x-[30px] mt-[12px]'>

                    <View className='flex-row items-center gap-1'>
                        <FontAwesomeIcon icon={faUser} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-[400] text-white/70'>name</Text>
                    </View>
                    <View className='flex-row items-center gap-1'>
                        <FontAwesomeIcon icon={faCalendar} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-[400] text-white/70'>25-04-2023</Text>
                    </View>
                </View>
                <View className='flex-row gap-x-[30px] mt-[12px]'>

                    <View className='flex-row items-center gap-1'>
                        <FontAwesomeIcon icon={faSchool} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-[400] text-white/70'>AISSMS IOIT</Text>
                    </View>
                    <View className='flex-row items-center gap-1'>
                        <FontAwesomeIcon icon={faThumbsUp} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-[400] text-white/70'>345</Text>
                    </View>
                </View>

                <View className='flex-row  gap-[10px] mt-[13px]'>
                    <TouchableOpacity className='bg-[#5E24DB] rounded-[3px] px-[12px] py-[2px]'>
                        <Text className='text-[10px] font-[600] text-white w-fit'>E&TC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-[#DB6624] rounded-[3px] px-[12px] py-[2px]'>
                        <Text className='text-[10px] font-[600] text-white w-fit'>Robotic</Text>
                    </TouchableOpacity>
                  
                </View>

            </View>
        </View>
    )
}