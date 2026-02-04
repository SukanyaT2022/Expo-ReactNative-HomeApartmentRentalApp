import { StyleSheet, Text, View } from 'react-native'
import React, { use } from 'react'
import { Image } from 'expo-image'

const UserOwnerBarComp = () => {
  return (
    <View  style={styles.container}>
     <Image
        source={require('../assets/images/dog.jpg')}
        style={styles.userImage}
      />
      <View style={styles.textcontainer}>
      <Text>userOwnderBarComp</Text>
      <Text>userOwnderBarComp</Text>
      </View>
    </View>
  )
}

export default UserOwnerBarComp

const styles = StyleSheet.create({
    container:{
      display: 'flex',
      flexDirection: 'row',
    },
     textcontainer:{

    },
    userImage: {    
      width: 50,
      height: 50,
      borderRadius: 25,
    },
})