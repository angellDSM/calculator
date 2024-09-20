import { StyleSheet } from "react-native";

export const colors ={
    orange:'#ff8000',
    darkGray: 'rgb(45, 45, 45)',
    lighGray: '#9B9B9B',

    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000'

}

export const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: colors.background,
    },

    calculatorContainer:{
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end'

    },

    mainResult:{
        color: colors.textPrimary,
        fontSize: 60,
        textAlign: 'right',
        marginBottom:10,
        fontWeight:'400'
    },

    subResult:{
        color: colors.textSecondary,
        fontSize: 40,
        textAlign:'right',
        fontWeight: '300'
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 7,
        padding: 5
    },

    button:{
        height: 70,
        width: 70,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 7
    },

    buttonText:{
        textAlign:'center',
        padding:10,
        fontSize: 25,
        color: 'white',
        fontWeight: '300'
    }


})