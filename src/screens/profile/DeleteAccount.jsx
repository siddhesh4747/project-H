import { View, Text, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import SelectDropdown from 'react-native-select-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDown, faArrowDown, faImage, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import SelectTag from '../../components/SelectTag'
import ButtonIcon from '../../components/ButtonIcon'

export default function DeleteAccount({navigation}) {
  
  return (
    <View className='pt-[46px] pb-[10px] px-[14px]  bg-black flex-1 justify-between'>
      <View>
      <HeaderBack text={'Delete Account'} handler={() => navigation.goBack()} />

      <TextInput multiline numberOfLines={5} 
      placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
      placeholder='please Share your valuable reason'
      textAlignVertical='top'
      className='bg-[#222] rounded-[8px] mt-[10px] placeholder:text-[16px] '>
      
      </TextInput>

      </View>
      <ButtonIcon text={'Delete Account'} />

    </View>
  )
}