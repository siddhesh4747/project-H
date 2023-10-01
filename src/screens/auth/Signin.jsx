import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup';

export default function Signin() {



  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log('running')
    console.log(values.email);
  };

  return (
    <View className=' bg-black flex-1 px-[12px] justify-between'>
      <View>
        <Text className=' text-white text-[32px] mt-[40px] font-[700]'>Sign in</Text>
        <TouchableOpacity className=' bg-[#222] my-[24px] rounded-md p-[8px] '>
          <Text className=' text-white/80 text-[16px] font-[600]'>google button</Text>
        </TouchableOpacity>
        <Text className='font-[400] text-white/80'>Or With</Text>

        <Formik
          initialValues={{ email: '',name:'',password:'' }}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder='Enter your user name'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                className=' bg-[#222] mt-[24px] rounded-md p-[8px] text-[16px] px-[18px] py-[12px] font-[600] text-white'
              />
              {errors.name && touched.name ? <Text className='text-red-400'>{errors.name}</Text> : null}

              <Text className=' text-white/80 text-[16px] mx-auto font-[400] my-[7px]'>Or</Text>

              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Enter your gmail'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                className=' bg-[#222]  rounded-md p-[8px] text-[16px] px-[18px] py-[12px] font-[600] text-white'
              />
              {errors.email && touched.email ? <Text className='text-red-400'>{errors.email}</Text> : null}

              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='Enter Password'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                className=' bg-[#222] mt-[13px] rounded-md p-[8px] text-[16px] px-[18px] py-[12px] font-[600] text-white'
              />
              {errors.password && touched.password ? <Text className='text-red-400'>{errors.password}</Text> : null}
            </View>
          )}
        </Formik>
      </View>

      <View className=' my-[31px]'>

        <TouchableOpacity className=' bg-[#222]  rounded-md p-[8px]' onPress={handleSubmit}>
          <Text className=' text-[#2462DB] text-[32px] font-[600] mx-auto'>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity className='mt-[9px]'>
          <Text className='font-[400] text-white/80 text-[16px] text-center '>Create an account </Text>
        </TouchableOpacity>



      </View>

    </View>
  )
}