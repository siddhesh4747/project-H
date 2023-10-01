import { View, Text, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import SelectDropdown from 'react-native-select-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDown, faArrowDown, faImage, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import SelectTag from '../../components/SelectTag'
import ButtonIcon from '../../components/ButtonIcon'

export default function MessagePage({navigation}) {
  
  return (
    <View className='pt-[46px] pb-[10px] px-[14px]  bg-black flex-1 justify-between'>
      <View>
      <HeaderBack text={'message'} handler={() => navigation.goBack()} />

    <View className='flex-row justify-between mt-[30px]'>
      <Text className='text-[16px] text-white/80 font-[600]'>yashraj67</Text>
      <FontAwesomeIcon icon={faPlusCircle} size={24} color='#4285F4'/>
    </View>

      </View>
      <TextInput multiline  
      placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
      placeholder='Type your message... '
      className='bg-[#222] rounded-[8px]  placeholder:text-[16px] px-[13px]'>
      </TextInput>

    </View>
  )
}