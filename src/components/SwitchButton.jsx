import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { Switch } from 'react-native-switch';


export default function SwitchButton() {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
    };


  return (
    <Switch
    value={isEnabled}
    onValueChange={toggleSwitch}
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
  )
}