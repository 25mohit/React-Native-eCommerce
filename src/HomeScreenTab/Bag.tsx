import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { CommonPadding, cStyles } from '../../common'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'
import CartProductCard from '../Card/CartProductCard'

interface BagInterface {
  onHome: boolean
}

const Bag: React.FC<BagInterface> = ({ onHome }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <TouchableOpacity style={{ marginBottom: 15 }} onPress={() => navigation.goBack()}>
        <Image style={styles.backIcon} source={require("../../assets/icons/back.png")} />
      </TouchableOpacity>
      <View style={{ padding: CommonPadding }}>
        <Text style={[cStyles.heading, { marginBottom: 15 }]}>My Bag</Text>
        <ScrollView style={{ height: '100%' }}>
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
            <Text style={{ fontSize: 16, color: 'rgba(40,40,40,0.6)' }}>Total amount :</Text>
            <Text style={{ fontSize: 22, fontWeight: '700' }}>$124</Text>
          </View>
        </ScrollView>
      </View>
      <View style={[cStyles.bottomFooter, { height: onHome ? 150 : 90, paddingHorizontal: CommonPadding }]}>
        <TouchableOpacity onPress={() => navigation.navigate("OrderPlaced")} style={cStyles.button}>
          <Text style={cStyles.btnTxt}>CHECK OUT</Text>
        </TouchableOpacity>
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
})
export default Bag