import { View, Text, TouchableOpacity, TextInput, Button, ToastAndroid } from 'react-native'
import React from 'react'
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup';
import { registerUser } from '../../services/authServices';

export default function Signup({ navigation }) {
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Too Short!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    collegeName: Yup.string()
      .min(5, 'Too Short!')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(50, 'Too Long!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/,
        'Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 special character')
      .required('Password is required'),
    confPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Confirm Passwords should match password')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('working-',values)
    registerUser(values).then(res => {
      console.log(res.data)
      if(res.data.status){
        ToastAndroid.show('user registered',ToastAndroid.TOP)
        navigation.navigate('Signin')
      }

    })
      .catch(err => {
        console.log(err)
        console.log(err.message)
      })
  };

  return (
    <View className=' bg-screen flex-1 px-3 '>

      <Text className=' text-white text-4xl mt-10 font-epilogue700'>Sign up</Text>

      <Formik
        initialValues={{ username: '', email: '', collegeName: '', password: '', confPassword: '' }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View className=' flex-col justify-between  flex-1'>
            <View className=' mt-6'>
              <TextInput
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder='Enter your user name'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                className=' bg-button  rounded-lg  text-lg px-4 py-2 font-[600] text-white/80'
              />
              {errors.username && touched.username ? <Text className='text-red-400'>{errors.username}</Text> : null}


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
                onChangeText={handleChange('collegeName')}
                onBlur={handleBlur('collegeName')}
                value={values.collegeName}
                placeholder='Enter your college name'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                className=' bg-button mt-4 rounded-lg  text-lg px-4 py-2 font-[600] text-white/80'

              />
              {errors.collegeName && touched.collegeName ? <Text className='text-red-400'>{errors.collegeName}</Text> : null}

              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='Enter Password'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                className=' bg-button mt-4 rounded-lg  text-lg px-4 py-2 font-[600] text-white/80'

              />
              <TextInput
                onChangeText={handleChange('confPassword')}
                onBlur={handleBlur('confPassword')}
                value={values.confPassword}
                placeholder='Confirm  Password'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                className=' bg-button mt-4 rounded-lg  text-lg px-4 py-2 font-[600] text-white/80'

              />
              {errors.confPassword && touched.confPassword ? <Text className='text-red-400'>{errors.confPassword}</Text> : null}
            </View>
            <View className=' mb-5'>

              <TouchableOpacity className=' bg-button  rounded-lg p-2' onPress={handleSubmit}>
                <Text className=' text-[#2462DB] text-4xl font-epilogue600 mx-auto'>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity className='mt-2'>
                <Text className=' font-epilogue400 text-white/80 text-lg text-center '>Already have an account </Text>
              </TouchableOpacity>



            </View>
          </View>
        )}
      </Formik>




    </View>
  )
}