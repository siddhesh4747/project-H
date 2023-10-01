import { View, Text, TouchableOpacity, StatusBar, useWindowDimensions,TextInput } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faCalendar, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons'
import { faFilter, faFilterCircleDollar, faMagnifyingGlass, faSchool } from '@fortawesome/free-solid-svg-icons'

export default function ApplyPage({ navigation }) {

  const { width } = useWindowDimensions()


    return (
        <View className='px-[12px] py-[30px] bg-black flex-1' style={{ width: width }}>
        <StatusBar hidden />
        <View className='flex-row justify-between items-center'>

        <Text className='text-white font-[700] text-[32px]'>Apply</Text>
        <FontAwesomeIcon icon={faBell} size={24} color='rgba(255, 255, 255, 0.7)' />

        </View>
        <View className='flex-row items-center justify-between w-full mt-[10px]'>
        <View className='flex-row items-center rounded-[8px]  px-[10px] gap-1 justify-between bg-[#222]'>

        <FontAwesomeIcon icon={faMagnifyingGlass} size={24} color='rgba(255, 255, 255, 0.7)' />
        <TextInput placeholder='search project, topic, id'
            placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
            className=' placeholder:text-[16px] placeholder:font-[400] '
        />
        </View>
        <FontAwesomeIcon icon={faFilter} size={24} color='rgba(255, 255, 255, 0.7)' />

        </View>

            <View className='bg-[#222] p-[10px] rounded-[8px] mt-[10px]'>
                <Text className='text-[16px] font-[600] text-white/80'>
                Gesture Control Bluetooth Speaker Arduino
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
                   
                    <TouchableOpacity className='bg-[#DB6624] rounded-[3px] px-[12px] py-[2px]'>
                        <Text className='text-[10px] font-[600] text-white w-fit'>E&TC</Text>
                    </TouchableOpacity>
                  
                </View>

            </View>
        </View>
    )
}