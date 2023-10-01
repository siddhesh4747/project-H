import { View, Text, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import SelectDropdown from 'react-native-select-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDown, faArrowDown, faImage, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import SelectTag from '../../components/SelectTag'
import ButtonIcon from '../../components/ButtonIcon'

export default function ViewOnWeb({navigation}) {
  
  return (
    <View className='pt-[46px] pb-[10px] px-[14px]  bg-black flex-1 justify-between'>
      <View>
      <HeaderBack text={''} handler={() => navigation.goBack()} />

      <Text>View on web page </Text>

      </View>
      

    </View>
  )
}