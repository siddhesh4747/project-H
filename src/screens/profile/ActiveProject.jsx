import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../../components/ButtonIcon'
import HeaderBack from '../../components/HeaderBack'
import { useNavigation } from '@react-navigation/native'

export default function ActiveProject({navigation}) {

  return (
    <View className='pt-[46px] px-[14px]  bg-black flex-1'>
    <HeaderBack text={'Siddhesh47 active projects'} handler={()=>navigation.goBack()}/>

    <ButtonIcon text={'Human Speed Detection'}/>
    <ButtonIcon text={'Path Planner Robot for Indoor Positioning using RF Ranging'}/>
    </View>
  )
}