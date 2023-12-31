import { View, Text } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export default function SelectTag({data,handler,text}) {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  return (
    <SelectDropdown
	data={data}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
    renderDropdownIcon={()=>(
        <FontAwesomeIcon icon={faAngleDown} size={24} color='white'/>
    )}
    defaultButtonText={`${text}`}
    buttonTextStyle={{
        color:'white',
        textAlign:'left',
        fontSize:16
    }}
    buttonStyle={{
        backgroundColor:'#222',
        width:'auto',
        borderRadius:8,
        marginTop:20,
        
    }}
/>
  )
}