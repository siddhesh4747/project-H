import { View, Text, TouchableOpacity, TextInput, Button, ToastAndroid } from 'react-native'
import React from 'react'
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup';
import { loginUser, registerUser } from '../../services/authServices';
import ButtonCustom2 from '../../components/ButtonCustom2';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export default function Signin({ navigation }) {
  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(50, 'Too Long!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/,
        'Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 special character')
      .required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('working-',values)
    loginUser(values).then(res => {
      console.log(res.data)
      if(res.data.status){
        ToastAndroid.show('login success',ToastAndroid.TOP)
        navigation.navigate('Projects')
      }else{
        ToastAndroid.show(res.data.msg,ToastAndroid.BOTTOM)

      }
    })
    .catch(err => {
        console.log(err)
        console.log(err.message)
      })
  };

  return (
    <View className=' bg-screen flex-1 px-3 '>

      <Text className=' text-white text-4xl mt-10 font-epilogue700'>Sign in</Text>

      <Formik
        initialValues={{  email: '', password: '',  }}
        onSubmit={handleSubmit}
        validationSchema={SigninSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View className=' flex-col justify-between  flex-1'>
            <View className=' mt-6'>

            <ButtonCustom2 IconProvider={FontAwesomeIcon} icon={'google'} text={'Google'} width={'full'}/>
          
          <Text className='text-white/80 font-epilogue400 text-lg mt-5'>Or With</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Enter your gmail'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                className=' bg-button mt-4 rounded-lg  text-lg px-4 py-2 font-[600] text-white/80'

              />
              {errors.email && touched.email ? <Text className='text-red-400'>{errors.email}</Text> : null}

          
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='Enter Password'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                className=' bg-button mt-4 rounded-lg  text-lg px-4 py-2 font-[600] text-white/80'

              />
        
            </View>
            <View className=' mb-5'>

              <TouchableOpacity className=' bg-button  rounded-lg p-2' onPress={handleSubmit}>
                <Text className=' text-[#2462DB] text-4xl font-epilogue600 mx-auto'>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity className='mt-2' onPress={()=>navigation.navigate('Signup')}>
                <Text className=' font-epilogue400 text-white/80 text-lg text-center '>Create an acccount</Text>
              </TouchableOpacity>



            </View>
          </View>
        )}
      </Formik>




    </View>
  )
}