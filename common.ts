import { StyleSheet } from "react-native"

export const ThemeColor = '#DB3022'
export const CommonPadding = 15

export const cStyles = StyleSheet.create({
    inputField: {
        shadowOffset: { width: 0, height: 0 }, // Shadow position (x, y)
        shadowOpacity: 0.40, 
        shadowColor: 'rgba(150,150,150,0.6)',
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'center',
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 7
    },
    filed: {
        width: '95%', 
        height: '100%'
    },
    button: {
        backgroundColor: ThemeColor,
        borderRadius: 25,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    btnTxt: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600'
    },
    heading:{
        fontSize: 30,
        fontWeight: '700'
    },
    bottomFooter:{
        position: 'absolute',
        height: 70,
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
    }
})