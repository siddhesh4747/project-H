import { View, Text, StatusBar, TouchableOpacity, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear, faL, faLink, faLinkSimple, faNoteSticky, faPaperclip, faPersonMilitaryToPerson, faPlus, } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../../components/ButtonIcon'
import { faBookmark, faNewspaper, faPlusSquare } from '@fortawesome/free-regular-svg-icons'


export default function ProfilePage({navigation}) {

  const { width } = useWindowDimensions()

  return (
    <View className='px-[12px] py-[30px]' style={{ width: width }}>
      <StatusBar hidden />
      <Text className='text-white font-[700] text-[32px]'>Profile</Text>

      <View className='mx-[5px] mt-[7px] '>
        <View className='bg-[#222] rounded-lg px-[13px] py-[7px]  '>
          <View className=' flex-row justify-between items-center'>
            <Text className='text-white/80 font-[600] text-[16px]'>Siddhesh47</Text>
            <FontAwesomeIcon icon={faLink} color='white' size={20} />
          </View>
          <Text className='text-white/80 font-[600] text-[10px]'>Aissms ioit</Text>
          <View className=' flex-row justify-center gap-[35px]'>
            <Pressable onPress={()=>''} className=' items-center gap-[7px]'>
              <FontAwesomeIcon icon={faNoteSticky} size={24} color='#2462DB' />
              <Text className='text-white/80 font-[400] text-[10px]'>Project Done</Text>
              <Text className='text-white/80 font-[600] text-[16px]'>36</Text>

            </Pressable>
            <Pressable onPress={()=>''} className=' items-center gap-[7px]'>
              <FontAwesomeIcon icon={faNoteSticky} size={24} color='#2462DB' />
              <Text className='text-white/80 font-[400] text-[10px]'>Project Done</Text>
              <Text className='text-white/80 font-[600] text-[16px]'>6</Text>

            </Pressable>
            <Pressable onPress={()=>''} className=' items-center gap-[7px]'>
              <FontAwesomeIcon icon={faNoteSticky} size={24} color='#2462DB' />
              <Text className='text-white/80 font-[400] text-[10px]'>Project Done</Text>
              <Text className='text-white/80 font-[600] text-[16px]'>3</Text>
            </Pressable>
          </View>

        </View>

        <View className='mt-[15px] '>
          <ButtonIcon text={'Upload resume'} icon={faPaperclip} handler={()=>navigation.navigate('UploadResume')}/>
          <ButtonIcon text={'add new project'} icon={faPlusSquare} />
          <ButtonIcon text={'Contact people for project'} icon={faPersonMilitaryToPerson} />
        </View>
        <View>

          <TouchableOpacity className='  rounded-lg  flex-row  gap-[9px] w-full mx-auto mt-[10px]'>
            <FontAwesomeIcon icon={faNewspaper} size={24} color='rgba(255, 255, 255, 0.8)' />
            <Text className=' text-white/80 text-[16px] font-[400] '>Own papers and journal</Text>
          </TouchableOpacity>
          <TouchableOpacity className='  rounded-lg  flex-row  gap-[9px] w-full mx-auto mt-[10px]'>
            <FontAwesomeIcon icon={faBookmark} size={24} color='rgba(255, 255, 255, 0.8)' />
            <Text className=' text-white/80 text-[16px] font-[400] '>Bookmark</Text>
          </TouchableOpacity>
          <TouchableOpacity className='  rounded-lg  flex-row  gap-[9px] w-full mx-auto mt-[10px]'>
            <FontAwesomeIcon icon={faGear} size={24} color='rgba(255, 255, 255, 0.8)' />
            <Text className=' text-white/80 text-[16px] font-[400] '>Settings</Text>
          </TouchableOpacity>

        </View>


      </View>













    </View>
  )
}