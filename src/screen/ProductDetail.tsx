import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { CommonPadding, cStyles } from '../../common'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'

const ProductDetail = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const imageList = [
    require("../../assets/icons/model2.png"),
    require("../../assets/icons/photo3.png"),
    require("../../assets/icons/photo.png"),
  ]
  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', height: 50, justifyContent: 'space-between', paddingHorizontal: CommonPadding}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.backIcon} source={require("../../assets/icons/back.png")}/>
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Short Dress</Text>
        <TouchableOpacity>
            <Image style={styles.backIcon} source={require("../../assets/icons/share.png")}/>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList horizontal data={imageList} renderItem={({item, index}) => {
          return (
            <Image style={styles.image} source={item}/>
          )
        }}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: CommonPadding}}>
          <View>
            <Text style={cStyles.heading}>H&M</Text>
            <Text style={{marginVertical: 5 ,color: 'rgba(40,40,40,0.7)'}}>Short black dress</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{width: 15, height: 15, marginRight: 5}} source={require("../../assets/icons/star.png")}/>
              <Image style={{width: 15, height: 15, marginRight: 5}} source={require("../../assets/icons/star.png")}/>
              <Image style={{width: 15, height: 15, marginRight: 5}} source={require("../../assets/icons/star.png")}/>
              <Image style={{width: 15, height: 15, marginRight: 5}} source={require("../../assets/icons/star.png")}/>
              <Image style={{width: 15, height: 15, marginRight: 5}} source={require("../../assets/icons/star.png")}/>
              <Text style={{color: 'rgba(40,40,40,0.7)'}}>(10)</Text>
            </View>
          </View>
          <Text style={[cStyles.heading, {fontSize: 23}]}>
            $19.99
          </Text>
        </View>
        <View style={{padding: CommonPadding}}>
          <Text style={{fontSize: 15, lineHeight: 25}}>Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Bag')} style={cStyles.button}>
              <Text style={cStyles.btnTxt}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backIcon: {
      width: 15,
      height: 15,
  },
  image: {
    height: 400,
    width: 225,
    marginRight: 5
  }
  
})

export default ProductDetail