import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Switch } from 'react-native-switch';

export default function Notification({ navigation }) {
    return (
        <View className='pt-[46px] px-[14px]  bg-black flex-1'>
            <HeaderBack text={'Notification'} handler={() => navigation.goBack()} />
     
     <View className='mt-[40px]'>
     <View className='flex-row justify-between items-center'>

        <Text className='text-[20px] text-white/80 font-[400]'>General notification </Text>
        <Switch
   value={false}
    onValueChange={(val) => console.log(val)}
    disabled={false}
    activeText={'On'}
    inActiveText={'Off'}
    circleSize={35}
    barHeight={35}
    circleBorderWidth={1}
    backgroundActive={'#2462DB'}
    backgroundInactive={'#3A3A3A'}
    circleActiveColor={'white'}
    circleInActiveColor={'white'}
     // custom component to render inside the Switch circle (Text, Image, etc.)
    // changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
    outerCircleStyle={{}} // style for outer animated circle
    renderActiveText={false}
    renderInActiveText={false}
    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
    switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
    switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
  />
     </View>
     
     </View>
        </View>
    )
}