import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import UserForm from '../HOC/UserForm'
import { cStyles } from '../../common'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'

const Login = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <UserForm heading='Login'>
            <View style={cStyles.inputField}>
                <TextInput style={cStyles.filed} placeholder='Email' />
            </View>
            <View style={cStyles.inputField}>
                <TextInput style={cStyles.filed} placeholder='Password' />
            </View>
            <View style={{ alignSelf: 'flex-end', marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.popTo('Signup')}>
                    <Text>Want to Register?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={cStyles.button}>
                <Text style={cStyles.btnTxt}>LOGIN</Text>
            </TouchableOpacity>
        </UserForm >
    )
}

export default Login