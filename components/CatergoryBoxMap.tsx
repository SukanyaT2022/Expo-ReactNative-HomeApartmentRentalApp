import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
interface CatergoryBoxMapProps {
  title?: string;
  icon?: React.ReactNode;
}
const CatergoryBoxMap = ({ title, icon }: CatergoryBoxMapProps) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default CatergoryBoxMap

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        gap: 8,
    },
    title:{
        fontSize: 16,
        fontWeight: "500",
    }
})