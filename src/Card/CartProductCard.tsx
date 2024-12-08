import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonPadding, ThemeColor } from '../../common'

const CartProductCard = () => {
    return (
        <View style={styles.card}>
            <View style={{ height: 120 }}>
                <Image style={styles.image} source={require("../../assets/icons/model2.png")} />
            </View>
            <View style={[{ padding: CommonPadding, justifyContent: 'space-between' }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 5 }}>Pullover</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', marginRight: 7 }}>
                                <Text>Color: </Text>
                                <Text>Black</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>Size: </Text>
                                <Text>L</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require("../../assets/icons/menu.png")} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 20, color: ThemeColor, fontWeight: '600' }}>$51</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.40,
        shadowColor: 'rgba(150,150,150,0.6)',
        marginVertical: 10,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: '100%',
        objectFit: 'cover',
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: 'rgba(40,40,40,0.7)'
    }
})
export default CartProductCard
