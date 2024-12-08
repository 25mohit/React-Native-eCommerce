import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { CommonPadding, cStyles } from '../../common'
import SectionHeading from '../Utils/SectionHeading'
import { ProductsList } from '../../MocData/Products'
import ProductCard from '../Card/ProductCard'

const Home = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={styles.hero}>
                <Image style={styles.heroImage} source={require("../../assets/icons/homeHero.png")} />
                <View style={styles.heroContent}>
                    <Text style={styles.heroHeading}>Fashion</Text>
                    <Text style={styles.heroHeading}>Sale</Text>
                    <TouchableOpacity style={[cStyles.button, { width: 200 }]}>
                        <Text style={cStyles.btnTxt}>Check</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[{ backgroundColor: '#fff' }]}>
                <SectionHeading heading="New" subHeading="You've never seen it before"/>
            </View>

            <FlatList showsHorizontalScrollIndicator={false} style={{paddingHorizontal: CommonPadding, backgroundColor: '#fff'}} horizontal data={ProductsList.slice(0,10)} renderItem={({item, index}) => {
                return(
                    <ProductCard data={item}/>
                )
            }}/>

            <View style={[{ backgroundColor: '#fff' }]}>
                <SectionHeading heading="Sale" subHeading="Super summer sale"/>
            </View>

            <FlatList showsHorizontalScrollIndicator={false} style={{paddingHorizontal: CommonPadding, backgroundColor: '#fff'}} horizontal data={ProductsList.slice(0,10)} renderItem={({item, index}) => {
                return(
                    <ProductCard data={item}/>
                )
            }}/>

            <View style={[{ backgroundColor: '#fff' }]}>
                <SectionHeading heading="Most sold" subHeading="Hot selling products"/>
            </View>

            <FlatList showsHorizontalScrollIndicator={false} style={{paddingHorizontal: CommonPadding, backgroundColor: '#fff', paddingBottom: 13}} horizontal data={ProductsList.slice(0,10)} renderItem={({item, index}) => {
                return(
                    <ProductCard data={item}/>
                )
            }}/>

            <View style={{height: 75}}></View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    hero: {
        // flex: 1,
        height: 550
    },
    heroContent: {
        position: 'absolute',
        bottom: CommonPadding,
        left: CommonPadding,
    },
    heroHeading: {
        fontSize: 50,
        fontWeight: '800',
        color: '#fff'
    },
    heroImage: {
        width: '100%',
        height: '100%'
    },
})

export default Home