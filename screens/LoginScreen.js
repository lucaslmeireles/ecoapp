import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as AuthSession from 'expo-auth-session';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/loginReducer';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [userData, setuserData] = useState({})
  const dispatch = useDispatch()
  async function handleGoogleSingIn(){
    try {
      const CLIENT_ID = "286138916909-um4d78fr8umntd0nq6rgclpku4eu5m4n.apps.googleusercontent.com"
      const REDIRECT_URI ='https://auth.expo.io/@lluciomeireles/Eco'
      const SCOPE = encodeURI("profile email")
      const RESPONSE_TYPE = "token"

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const {type, params} = await AuthSession.startAsync({authUrl});
      console.log(type, params)

      if(type === 'success'){
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
        const user = await response.json()
        console.log(user)
        dispatch(loginUser(user))
        navigation.navigate('ProfilePage')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View className='justify-center align-middle items-center' style={{flex:1}}>
      <Text>LoginScreen</Text>
      <Button title='login' onPress={handleGoogleSingIn}/>
    </View>
  )
}