import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { CommonPadding, cStyles } from '../../common'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'

const Profile = () => {
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
      <TouchableOpacity style={{ marginBottom: 15 }} onPress={() => navigation.goBack()}>
        <Image style={styles.backIcon} source={require("../../assets/icons/back.png")} />
      </TouchableOpacity>
      <View style={{ padding: CommonPadding }}>
        <Text style={[cStyles.heading, { marginBottom: 15 }]}>My Profile</Text>

        <ScrollView style={{height:'100%'}}>
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Image style={[styles.profile, { marginRight: 10 }]} source={require("../../assets/icons/user2.png")} />
            <View>
              <Text style={{ fontSize: 23 }}>Mohit Agarwal</Text>
              <Text style={{ fontSize: 16, color: 'rgba(40,40,40,0.7)', marginTop: 4 }}>mohit@gmail.com</Text>
            </View>
          </View>

          <TouchableOpacity style={[{ paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: 'rgba(210,210,210,0.2)', borderBottomWidth: 1 }]}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 5, color: 'rgba(20,20,20,0.9)' }}>My orders</Text>
              <Text style={{ fontSize: 14, color: 'rgba(80,80,80,0.8)' }}>Already have 12 orders.</Text>
            </View>
            <Image style={styles.icon} source={require("../../assets/icons/next.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={[{ paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: 'rgba(210,210,210,0.2)', borderBottomWidth: 1 }]}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 5, color: 'rgba(20,20,20,0.9)' }}>Sipping addresses</Text>
              <Text style={{ fontSize: 14, color: 'rgba(80,80,80,0.8)' }}>3 addresses</Text>
            </View>
            <Image style={styles.icon} source={require("../../assets/icons/next.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={[{ paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: 'rgba(210,210,210,0.2)', borderBottomWidth: 1 }]}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 5, color: 'rgba(20,20,20,0.9)' }}>Payment methods</Text>
              <Text style={{ fontSize: 14, color: 'rgba(80,80,80,0.8)' }}>3 addresses</Text>
            </View>
            <Image style={styles.icon} source={require("../../assets/icons/next.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={[{ paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: 'rgba(210,210,210,0.2)', borderBottomWidth: 1 }]}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 5, color: 'rgba(20,20,20,0.9)' }}>Promocodes</Text>
              <Text style={{ fontSize: 14, color: 'rgba(80,80,80,0.8)' }}>3 addresses</Text>
            </View>
            <Image style={styles.icon} source={require("../../assets/icons/next.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={[{ paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: 'rgba(210,210,210,0.2)', borderBottomWidth: 1 }]}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 5, color: 'rgba(20,20,20,0.9)' }}>My reviews</Text>
              <Text style={{ fontSize: 14, color: 'rgba(80,80,80,0.8)' }}>3 addresses</Text>
            </View>
            <Image style={styles.icon} source={require("../../assets/icons/next.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={[{ paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: 'rgba(210,210,210,0.2)', borderBottomWidth: 1 }]}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 5, color: 'rgba(20,20,20,0.9)' }}>Settings</Text>
              <Text style={{ fontSize: 14, color: 'rgba(80,80,80,0.8)' }}>3 addresses</Text>
            </View>
            <Image style={styles.icon} source={require("../../assets/icons/next.png")} />
          </TouchableOpacity>
          <View style={styles.break}></View>
        </ScrollView>

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
  profile: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    borderRadius: '50%'
  },
  icon: {
    width: 15,
    height: 15
  },
  break: {
    height: 130,
    width: '100%',
  }
})

export default Profile