import { View, Text, StatusBar, TouchableOpacity, useWindowDimensions, Pressable, Image } from 'react-native'
import React from 'react'
import  FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome'
import  FeatherIcon  from 'react-native-vector-icons/Feather'
import HeaderBack from '../../components/HeaderBack'
import ButtonCustom2 from '../../components/ButtonCustom2'


export default function Projects2({ navigation }) {

  const { width } = useWindowDimensions()

  return (
    <View className='px-[12px] py-[30px] bg-screen flex-1' style={{ width: width }}>
      <StatusBar hidden />
      <View className='flex-row justify-between items-center'>

        <HeaderBack text={'Motion Controlled Pick & Place Obstacle Avoider Robotic Vehicle'} />
        <FontAwesomeIcon name={'bookmark-o'} color='rgba(255, 255, 255, 0.8)' size={24} />

      </View>

      <View className='mt-[10px]'>
        <Text className='text-[11px] text-white/80 font-epilogue400 leading-[14.74px]'>
          We have approached the era of robots being used in transport as well as military applications. Pick and place mechanisms are used in robotic vehicles for goods transport as well as military applications like bomb defusal. Robots are usually controlled through remotes with joysticks and a buttons. These remotes are not always comfortable to use and also have a strain on fingers after constant use. So here we use a motion controlled approach to tackle this issue. We propose a completely hand motion controller robotic vehicle using tilting motions which does not need a single button press. This allows us to control vehicle motion as well as the pick and place arm simultaneously.
        </Text>
        <View className='flex-row items-center gap-[5px]'>
          <Image source={{ uri: '' }} alt='' width={90} height={127} />
          <Image source={{ uri: '' }} alt='' width={90} height={127} />
        </View>
      </View>

      <View className='flex-row flex-wrap'>
        <ButtonCustom2 IconProvider={FeatherIcon} icon={'image'} iconColor={'#2462DB'} text={'Download all photos'} />
        <ButtonCustom2 IconProvider={FeatherIcon} icon={'arrow-down-circle'} iconColor={'#2462DB'} text={'Download pdf'} />
        <ButtonCustom2 IconProvider={FeatherIcon} icon={'x-octagon'} iconColor={'#DB2424'} text={'Issues (8)'} />
        <ButtonCustom2 IconProvider={FeatherIcon} icon={'user-check'} iconColor={'#DB6624'} text={'Admin info'} />
        <ButtonCustom2 IconProvider={FeatherIcon} icon={'share-2'} iconColor={'#34A853'} text={''} />
        <ButtonCustom2 IconProvider={FontAwesomeIcon} icon={'diamond'} iconColor={'#2462DB'} text={'Regard (56)'} />
       
      </View>

  










    </View>
  )
}