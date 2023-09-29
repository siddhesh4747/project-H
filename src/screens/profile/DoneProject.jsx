import { View, Text } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import ButtonIcon from '../../components/ButtonIcon'

export default function DoneProject({navigation}) {
  return (
    <View className='pt-[46px] px-[14px]  bg-black flex-1'>
    <HeaderBack text={'Siddhesh47 done  projects'} handler={()=>navigation.goBack()}/>

    <ButtonIcon text={'IOT Water Pollution Monitor RC Boat'}/>
    <ButtonIcon text={'Weather Imaging CubeSat with Telemetry Transmission'}/>
    <ButtonIcon text={'Solar Vacuum Cleaner & Floor Cleaner Robot'}/>
    </View>
  )
}