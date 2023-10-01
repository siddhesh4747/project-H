import { View, Text, StatusBar, TouchableOpacity, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear, faL, faLink, faLinkSimple, faNoteSticky, faPaperclip, faPersonMilitaryToPerson, faPlus, } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../../components/ButtonIcon'
import { faBookmark, faMessage, faNewspaper, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import HeaderBack from '../../components/HeaderBack'


export default function AdminInfo({navigation}) {

  const { width } = useWindowDimensions()

  return (
    <View className='px-[12px] py-[30px] bg-black flex-1' style={{ width: width }}>
      <StatusBar hidden />
      <HeaderBack text={'Admin info'}/>

      <View className='mx-[5px] mt-[7px] '>
        <View className='bg-[#222] rounded-lg px-[13px] py-[7px]  '>
          <View className=' flex-row justify-between items-center'>
            <Text className='text-white/80 font-[600] text-[16px]'>yashraj67</Text>
            <FontAwesomeIcon icon={faLink} color='white' size={20} />
          </View>
          <Text className='text-white/80 font-[600] text-[10px]'>Aissms ioit</Text>
          <View className=' flex-row justify-center gap-[35px]'>
            <Pressable onPress={()=>navigation.navigate('DoneProject')} className=' items-center gap-[7px]'>
              <FontAwesomeIcon icon={faNoteSticky} size={24} color='#2462DB' />
              <Text className='text-white/80 font-[400] text-[10px]'>Project Done</Text>
              <Text className='text-white/80 font-[600] text-[16px]'>46</Text>

            </Pressable>
            <Pressable onPress={()=>navigation.navigate('ActiveProject')} className=' items-center gap-[7px]'>
              <FontAwesomeIcon icon={faNoteSticky} size={24} color='#2462DB' />
              <Text className='text-white/80 font-[400] text-[10px]'>Active Project</Text>
              <Text className='text-white/80 font-[600] text-[16px]'>6</Text>

            </Pressable>
            <Pressable onPress={()=>navigation.navigate('')} className=' items-center gap-[7px]'>
              <FontAwesomeIcon icon={faNoteSticky} size={24} color='#2462DB' />
              <Text className='text-white/80 font-[400] text-[10px]'>Regards</Text>
              <Text className='text-white/80 font-[600] text-[16px]'>323</Text>
            </Pressable>
          </View>

        </View>

        <View className='mt-[15px] '>
          <ButtonIcon text={'Message to admin'} icon={faMessage} handler={()=>navigation.navigate('UploadResume')}/>
        </View>
        <View>

          <TouchableOpacity onPress={()=>navigation.navigate('OurPaperJournal')} className='  rounded-lg  flex-row  gap-[9px] w-full mx-auto mt-[10px]'>
            <FontAwesomeIcon icon={faNewspaper} size={24} color='rgba(255, 255, 255, 0.8)' />
            <Text className=' text-white/80 text-[16px] font-[400] '>Papers and journal</Text>
          </TouchableOpacity>
       

        </View>


      </View>













    </View>
  )
}