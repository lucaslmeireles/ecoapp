import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as Google from 'expo-google-app-auth'
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext({})
const config = {
    androidClientId: '286138916909-pse3qpct3ivpgacvdqbguhpovdlp11me.apps.googleusercontent.com',
    scopes:['profile', 'email'],
    permissions: ['public_profile', 'email', 'gender', 'location']
}
export const AuthProvider = ({children}) => {

  const signInWithGoogle = async () => {
    await Google.logInAsync(config).then(
        async (loginResult) => {
            if(loginResult.type == 'success'){
                const {idToken, accessToken} = loginResult
                const credential = GoogleAuthProvider.credential(idToken, accessToken)
                await signInWithCredential(auth, credential)
            }
            return Promise.reject();
        }
    )
  }  
  return (
    <AuthContext.Provider value={
       { user: null,
        signInWithGoogle
        }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext)
}
