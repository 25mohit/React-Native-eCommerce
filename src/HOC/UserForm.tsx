import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { CommonPadding, cStyles } from '../../common';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interface/Types';

type UserFormProps = PropsWithChildren<{
    heading: string;
}>

const UserForm:React.FC<UserFormProps> = props => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.nav} onPress={() => navigation.goBack()}>
            <Image style={styles.backIcon} source={require("../../assets/icons/back.png")}/>
        </TouchableOpacity>
        <View style={{padding: CommonPadding}}>
            <Text style={cStyles.heading}>{props.heading}</Text>
            <View style={{marginTop: '40%'}}>
                {props.children}
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    backIcon: {
        width: 15,
        height: 15,
        marginLeft: CommonPadding
    },
    nav: {
        height: 35,
        justifyContent:'center'
    }
    
})
export default UserForm