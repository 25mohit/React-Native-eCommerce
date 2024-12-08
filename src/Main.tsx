import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { cStyles, ThemeColor } from '../common'
import Home from './HomeScreenTab/Home'
import Shop from './HomeScreenTab/Shop'
import Bag from './HomeScreenTab/Bag'
import Favourite from './HomeScreenTab/Favourite'
import Profile from './HomeScreenTab/Profile'

const Main = () => {
    const [activeOption, setActiveOption] = useState(1)

    return (
        <View style={{ flex: 1 }}>
            {
                activeOption === 1 ? <Home /> : activeOption === 2 ? <Shop /> : activeOption === 3 ? <Bag onHome={true}/> : activeOption === 4 ? <Favourite /> : <Profile />
            }
            <View style={cStyles.bottomFooter}>
                <TouchableOpacity style={styles.icon} onPress={() => setActiveOption(1)}>
                    <Image style={[styles.footIcon, { tintColor: activeOption === 1 ? ThemeColor : 'rgba(140,140,140,0.6)' }]} source={require("../assets/icons/home.png")} />
                    <Text style={[{ fontSize: 13, color: activeOption === 1 ? ThemeColor : 'rgba(140,140,140,0.6)', fontWeight: '700' }]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => setActiveOption(2)}>
                    <Image style={[styles.footIcon, { tintColor: activeOption === 2 ? ThemeColor : 'rgba(140,140,140,0.6)' }]} source={require("../assets/icons/cart.png")} />
                    <Text style={[{ fontSize: 13, color: activeOption === 2 ? ThemeColor : 'rgba(140,140,140,0.6)', fontWeight: '700' }]}>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => setActiveOption(3)}>
                    <Image style={[styles.footIcon, { tintColor: activeOption === 3 ? ThemeColor : 'rgba(140,140,140,0.6)' }]} source={require("../assets/icons/bag.png")} />
                    <Text style={[{ fontSize: 13, color: activeOption === 3 ? ThemeColor : 'rgba(140,140,140,0.6)', fontWeight: '700' }]}>Bag</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => setActiveOption(4)}>
                    <Image style={[styles.footIcon, { tintColor: activeOption === 4 ? ThemeColor : 'rgba(140,140,140,0.6)' }]} source={require("../assets/icons/heart.png")} />
                    <Text style={[{ fontSize: 13, color: activeOption === 4 ? ThemeColor : 'rgba(140,140,140,0.6)', fontWeight: '700' }]}>Favourite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => setActiveOption(5)}>
                    <Image style={[styles.footIcon, { tintColor: activeOption === 5 ? ThemeColor : 'rgba(140,140,140,0.6)' }]} source={require("../assets/icons/user.png")} />
                    <Text style={[{ fontSize: 13, color: activeOption === 5 ? ThemeColor : 'rgba(140,140,140,0.6)', fontWeight: '700' }]}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    footer: {
        position: 'absolute',
        height: 75,
        backgroundColor: '#fff',
        bottom: 0,
        width: '100%',
        shadowOffset: { width: 0, height: -10 }, // Shadow position (x, y)
        shadowOpacity: 0.20,
        shadowColor: 'rgba(150,150,150,0.3)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    footIcon: {
        width: 24,
        height: 24,
        marginBottom: 3
    },
    icon: {
        width: '19%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        marginTop: 3
    }
})
export default Main
