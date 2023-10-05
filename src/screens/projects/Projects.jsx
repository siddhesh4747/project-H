import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FatherIcon from 'react-native-vector-icons/Feather'


export default function Projects({ navigation }) {
    return (
        <View className='pt-[46px] px-[14px]  bg-screen flex-1'>
            <View className='flex-row justify-between items-center'>

                <Text className='text-white font-epilogue700 text-[32px]'>Projects</Text>
                <FatherIcon name={'bell'} size={24} color='rgba(255, 255, 255, 0.7)' />

            </View>

            <View className='flex-row items-center justify-between w-full mt-[10px]'>
                <View className='flex-row items-center rounded-[8px]  px-[10px] gap-1 justify-between bg-[#222]'>

                    <EntypoIcon name={'magnifying-glass'} size={24} color='rgba(255, 255, 255, 0.7)' />
                    <TextInput placeholder='search project, topic, id'
                        placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                        className=' placeholder:text-[16px] placeholder:font-epilogue400 '
                    />
                </View>
                <FatherIcon name={'filter'} size={24} color='rgba(255, 255, 255, 0.7)' />

            </View>

            <View className='bg-[#222] p-[10px] rounded-[8px] mt-10'>
                <Text  className='text-[16px]  text-white/80 font-epilogue600' >
                Motion Controlled Pick & Place Obstacle Avoider Robotic Vehicle
                </Text>
                <View className='flex-row gap-x-[30px] mt-[12px] '>

                    <View className='flex-row items-center gap-1 min-w-[80px]'>
                        <FontAwesomeIcon name={'user-o'} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-epilogue400 text-white/70'>name</Text>
                    </View>
                    <View className='flex-row items-center gap-1 min-w-[80px]'>
                        <FontAwesomeIcon name={'calendar-o'} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-epilogue400 text-white/70'>25-04-2023</Text>
                    </View>
                </View>
                <View className='flex-row gap-x-[30px] mt-[13px]'>

                    <View className='flex-row items-center gap-1 min-w-[80px]'>
                        <FontAwesomeIcon name={'building-o'} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-epilogue400 text-white/70'>AISSMS IOIT</Text>
                    </View>
                    <View className='flex-row items-center gap-1 min-w-[80px]'>
                        <FatherIcon name={'thumbs-up'} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-epilogue400 text-white/70'>345</Text>
                    </View>
                </View>

                <View className='flex-row  gap-[10px] mt-[13px]'>
                    <TouchableOpacity className='bg-[#5E24DB] rounded-[3px] px-[12px] py-[2px]'>
                        <Text className='text-[10px] font-epilogue600 text-white w-fit'>E&TC</Text>
                    </TouchableOpacity>
               

                </View>

            </View>
            <View className='bg-[#222] p-[10px] rounded-[8px] mt-[10px]'>
                <Text  className='text-[16px]  text-white/80 font-epilogue600' >
                Motion Controlled Pick & Place Obstacle Avoider Robotic Vehicle
                </Text>
                <View className='flex-row gap-x-[30px] mt-[12px] '>

                    <View className='flex-row items-center gap-1 min-w-[80px]'>
                        <FontAwesomeIcon name={'user-o'} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-epilogue400 text-white/70'>name</Text>
                    </View>
                    <View className='flex-row items-center gap-1 min-w-[80px]'>
                        <FontAwesomeIcon name={'calendar-o'} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-epilogue400 text-white/70'>25-04-2023</Text>
                    </View>
                </View>
                <View className='flex-row gap-x-[30px] mt-[13px]'>

                    <View className='flex-row items-center gap-1 min-w-[80px]'>
                        <FontAwesomeIcon name={'building-o'} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-epilogue400 text-white/70'>AISSMS IOIT</Text>
                    </View>
                    <View className='flex-row items-center gap-1 min-w-[80px]'>
                        <FatherIcon name={'thumbs-up'} size={15} color='rgba(255, 255, 255, 0.7)' />
                        <Text className='text-[10px] font-epilogue400 text-white/70'>345</Text>
                    </View>
                </View>

                <View className='flex-row  gap-[10px] mt-[13px]'>
                  
                    <TouchableOpacity className='bg-[#DB2424] rounded-[3px] px-[12px] py-[2px]'>
                        <Text className='text-[10px] font-epilogue600 text-white w-fit'>Robotic</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}