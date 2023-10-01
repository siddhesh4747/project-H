import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

export default function Interest() {
    const [setselected, setSetselected] = useState([])
    const data=['Civil Realated Projects','Btech projects','Mtech projects','Mechanical Related Projects','CS & IT Related Projects','noting']

    const {width}=useWindowDimensions()
  return (
    <View className=' bg-black flex-1 px-[12px] justify-between ' >
    <View className=''>
<View className=' flex-row gap-1 items-center'>

      <Text className=' font-[600] text-[16px] text-white/80 mt-[20px]'>skip</Text>
      <FontAwesomeIcon icon={ faGreaterThan }  color='white' size={10}/>
</View>
      <Text className=' text-white text-[32px] mt-[10px] font-[700]'>Choose your
Interests</Text>
<View className=' flex-row gap-3 flex-wrap mt-[10px]' style={{width:width}}>

{data.map((item,index)=>(
    <View key={index} className='p-[12px] rounded-[8px] bg-[#222] mt-[10px] '>

    <Text  className='text-white text-[16px] '>{item}</Text>
    </View>
))}
</View>
    </View>

    
    <View className=' my-[31px]'>

<TouchableOpacity className=' bg-[#222]  rounded-md p-[8px]'>
  <Text className=' text-[#2462DB] text-[32px] font-[600] mx-auto'>Done</Text>
</TouchableOpacity>




</View>


    </View>
  )
}