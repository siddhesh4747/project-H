import { View, Text, TextInput } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import SelectDropdown from 'react-native-select-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDown, faArrowDown, faImage, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import SelectTag from '../../components/SelectTag'
import ButtonIcon from '../../components/ButtonIcon'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

export default function AddNewProjectForPeople() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  return (
    <View className='pt-[46px] pb-[10px] px-[14px]  bg-black flex-1 justify-between'>
      <View>
        <HeaderBack text={'Add new one'} handler={() => navigation.goBack()} />

        <SelectTag data={countries} text={'Add project category'} />
        <SelectTag data={countries} text={'Add project topic'} />
        <TextInput placeholder='Add project title' placeholderTextColor={'white'} className=' p-2 bg-[#222] mt-[12px] rounded-[8px] text-[16px]' />
        <TextInput placeholder='Add project description' multiline numberOfLines={5} placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
        textAlignVertical='top'
         className=' p-2 bg-[#222] mt-[12px] rounded-[8px] text-[16px]' />
        <View className=' flex-row justify-center gap-3 mt-[10px] '>
          <ButtonIcon text={'Add new one'} icon={faImage} />
          <ButtonIcon text={'Add new one'} icon={faPlusCircle} />
        </View>
        <View className=' flex-row justify-center gap-3 mt-[10px] '>
          <ButtonIcon text={'Add new one'} icon={faImage} />
          <ButtonIcon text={'Add new one'} icon={faPlusCircle} />
        </View>
        <TextInput placeholder='Add project Responsibilities : ' multiline numberOfLines={5} placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
        textAlignVertical='top'
         className=' p-2 bg-[#222] mt-[12px] rounded-[8px] text-[16px]' />
          <ButtonIcon text={'Add new one'} icon={faCheckCircle} />



      </View>
      <ButtonIcon text={'Add new project to platform'} />

    </View>
  )
}