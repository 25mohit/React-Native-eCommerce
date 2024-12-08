import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'
import { cStyles } from '../../common'

const OrderPlaced = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.card}>
            <Image style={{ height: '100%', width: '100%' }} source={require("../../assets/icons/celebration.png")} />
            <View style={styles.container}>
                <Text style={[cStyles.heading]}>Success!</Text>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 18 }}>Your order will be delivered soon.</Text>
                    <Text style={{ fontSize: 18 }}>Thank you for choosing our app!</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={cStyles.button}>
                    <Text style={cStyles.btnTxt}>CONTINUE SHOPPING</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: '100%',
        width: '100%'
    },
    container: {
        position: 'absolute',
        top: '20%',
        alignSelf: 'center',
        alignItems: 'center'
    }
})

export default OrderPlaced