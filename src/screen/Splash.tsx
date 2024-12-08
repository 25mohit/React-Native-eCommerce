import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ThemeColor } from '../../common'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'

const Splash = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Signup')
        },2000)
    },[])

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>eCommerce Store</Text>
      <Image style={{tintColor: '#fff'}} source={require("../../assets/icons/cart.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: ThemeColor,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: '#fff',
        fontSize: 30, 
        fontWeight: '800',
        fontStyle: 'italic',
        marginVertical: 10
    }
})
export default Splash