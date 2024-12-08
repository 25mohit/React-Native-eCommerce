import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import UserForm from '../HOC/UserForm'
import { cStyles } from '../../common'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'

const Signup = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <UserForm heading='Sign up'>
            <View style={cStyles.inputField}>
                <TextInput style={cStyles.filed} placeholder='Name' />
            </View>
            <View style={cStyles.inputField}>
                <TextInput style={cStyles.filed} placeholder='Email' />
            </View>
            <View style={cStyles.inputField}>
                <TextInput style={cStyles.filed} placeholder='Password' />
            </View>
            <View style={{ alignSelf: 'flex-end', marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text>Already have an account?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={cStyles.button}>
                <Text style={cStyles.btnTxt}>SIGN UP</Text>
            </TouchableOpacity>
        </UserForm>
    )
}

export default Signup