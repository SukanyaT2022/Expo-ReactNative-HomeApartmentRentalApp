import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface FilterCompProps {
iconprops?: React.ReactNode;
}
const FilterComp = ({iconprops}: FilterCompProps) => {
  return (
    <View style={styles.container}>
        {iconprops}
    </View>
  )
}

export default FilterComp

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
},

})