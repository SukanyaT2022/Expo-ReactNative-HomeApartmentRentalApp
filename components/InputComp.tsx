import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

interface InputCompProps {
iconprops?: React.ReactNode;
textprops?: string;
}
const InputComp = ({iconprops, textprops}: InputCompProps) => {
  return (
    <View style={styles.container}>
        {iconprops}
        <Text>{textprops}</Text>
    </View>
  )
}

export default InputComp

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        padding: 10,
       backgroundColor: colors.lightgray,
        borderRadius: 8,
     
    }
})