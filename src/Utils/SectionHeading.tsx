import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonPadding, cStyles } from '../../common'

interface SectionInterface{
    heading: string,
    subHeading: string
}

const SectionHeading:React.FC<SectionInterface> = ({ heading, subHeading}) => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={cStyles.heading}>{heading}</Text>
        <Text style={{fontSize: 13, color: 'rgba(40,40,40,0.6)', marginTop: 3}}>{subHeading}</Text>
      </View>
      <TouchableOpacity>
        <Text style={{fontSize: 13, color: 'rgba(20,20,20,0.7)', marginTop: 3}}>View all</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 27,
        padding: CommonPadding,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'space-between',
        marginBottom: 11
    }
})
export default SectionHeading