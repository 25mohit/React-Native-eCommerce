import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProductInterface } from '../../interface/product'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'

interface ProdInterface{
    data: ProductInterface
}
const ProductCard:React.FC<ProdInterface> = ({ data }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const img = data.im === 1 ? require('../../assets/icons/model1.png') : require('../../assets/icons/photo.png')
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail')}>
        <View>
            <Image style={styles.img} source={img}/>
            <Text style={styles.offerLabel}>-20%</Text>
        </View>
        <View>
            <Text style={{fontSize: 13, color: 'rgba(40,40,40,0.7)', marginTop: 10}}>{data.seller}</Text>
            <Text style={{fontSize: 18, fontWeight: '600', marginVertical:5}}>{data.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontWeight: '500', color: 'rgba(40,40,40,0.6)', textDecorationLine: 'line-through'}}>${data.price} </Text>
                <Text style={{color: '#DB3022', fontWeight: '700'}}>${data.offerPrice}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card:{
        width: 170,
        // height: 300,
        marginRight: 14
    },
    img:{
        width:"100%",
        height:200,
        objectFit: 'cover',
        borderRadius: 15,
    },
    offerLabel: {
        backgroundColor: '#DB3022',
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
        paddingVertical: 4,
        paddingHorizontal: 2,
        borderRadius: 10,
        width: 45,
        textAlign: 'center',
        position:'absolute',
        top: 10,
        left: 10
    }
})
export default ProductCard