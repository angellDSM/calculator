import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
    label: string,
    color?: string,
    dubleSize?: boolean,
    blackText?: boolean
    onPress: ()=> void,
    
}

export const CalculatorBotton = ({
    label,
    color = colors.darkGray,
    dubleSize = false,
    blackText = false,
    onPress


}:Props) => {

    return (
        <Pressable 
        onPress={()=> onPress()}
        style={({pressed})=>({
            ...styles.button,
            backgroundColor: color,
            width:(dubleSize) ? 150: 70,
           

            opacity: (pressed)? 0.8 : 1
        })}>
            <Text style={{
                ...styles.buttonText,
                color: (blackText)? 'black': 'white'
            }}>{label}</Text>
        </Pressable>
    );
};
