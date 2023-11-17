import { View, Text, StatusBar, TouchableOpacity, useWindowDimensions, Pressable, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear, faL, faLink, faLinkSimple, faMoneyBill, faNoteSticky, faPaperclip, faPersonMilitaryToPerson, faPlus, faShare, faShareNodes, faUserCheck, } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../../components/ButtonIcon'
import { faArrowAltCircleDown, faArrowAltCircleUp, faBookmark, faImage, faMessage, faNewspaper, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import HeaderBack from '../../components/HeaderBack'
import ButtonCustom from '../../components/ButtonCustom'


export default function ApplyPage2({ navigation }) {

  const { width } = useWindowDimensions()

  return (
    <View className='px-[12px] py-[30px] bg-black flex-1' style={{ width: width }}>
      <StatusBar hidden />
      <View className='flex-row  items-center'>

        <HeaderBack text={'Gesture Control Bluetooth Speaker Arduino'} />
        <FontAwesomeIcon icon={faBookmark} color='rgba(255, 255, 255, 0.8)' size={24} />

      </View>


      <View className='flex-row justify-center gap-[10px] items-center mt-[10px]'>
        <View className='flex-row items-center gap-1'>
          <FontAwesomeIcon icon={faPaperclip} color='#4285F4' size={15} />
          <Text className='text-[11px] text-white/80 font-[500]'>Application (182) </Text>
        </View>
        <View className='flex-row items-center gap-1'>
          <FontAwesomeIcon icon={faArrowAltCircleUp} color='#DBD424' size={15} />
          <Text className='text-[11px] text-white/80 font-[500]'>Application (182) </Text>
        </View>
      </View>

      <View className='mt-[10px]'>
        <Text className='text-[11px] text-white/80 font-[400] leading-[14.74px]'>
          We have approached the era of robots being used in transport as well as military applications. Pick and place mechanisms are used in robotic vehicles for goods transport as well as military applications like bomb defusal. Robots are usually controlled through remotes with joysticks and a buttons. These remotes are not always comfortable to use and also have a strain on fingers after constant use. So here we use a motion controlled approach to tackle this issue. We propose a completely hand motion controller robotic vehicle using tilting motions which does not need a single button press. This allows us to control vehicle motion as well as the pick and place arm simultaneously.
        </Text>
        <View className='flex-row items-center gap-[5px]'>
          <Image source={{ uri: '' }} alt='' width={90} height={127} />
          <Image source={{ uri: '' }} alt='' width={90} height={127} />
        </View>
      </View>

      <View className='flex-row flex-wrap'>
        <ButtonCustom icon={faImage} iconColor={'#2462DB'} text={'Download all photos'} />
        <ButtonCustom icon={faArrowAltCircleDown} iconColor={'#2462DB'} text={'Download pdf'} />
        <ButtonCustom icon={faUserCheck} iconColor={'#DB6624'} text={'Admin info'} />
        <ButtonCustom icon={faShareNodes} iconColor={'#DB24C9'} text={''} />
        <ButtonCustom icon={faMoneyBill} iconColor={'#DB6624'} text={'Stipend : 3000 ₹'} />
      </View>

      <Text className='text-[16px] text-white/80 font-[600]  mt-[14px]'>Responsibilities :</Text>
      <Text className='text-[11px] text-white/80 font-[400] leading-[14.74px]'>
        1. Work on web development using Angular 12 as per the client requirements
        2. Assist with integrating Angular frontend code with backend Node.js code
        3. Work to understand the client requirements and write Angular front-end code
        4. Develop the front-end
        5. Maintain and improve the website
        6. Work on determining the structure and design of web pages
      </Text>










    </View>
  )
}