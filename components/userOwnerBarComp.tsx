import { Image, StyleSheet, Text, View } from 'react-native'
import React, { use } from 'react'
import { Ionicons, AntDesign} from '@expo/vector-icons'
interface UserOwnerBarCompProps {

}
const UserOwnerBarComp = () => {
  return (
    <View  style={styles.container}>
<View style={styles.wrapImgtext}>
     <Image
        source={require('@/assets/images/dog.jpg')}
        style={styles.userImage}
      />
      <View style={styles.textcontainer}>
      <Text>userOwnderBarComp</Text>
      <Text>userOwnderBarComp</Text>
      </View>
</View>
<View style={styles.iconcontainer}>
  <View style={styles.wrapIcon}></View>
  <AntDesign name="bell" size={24} color="black" />
</View>
    </View>
  )
}

export default UserOwnerBarComp

const styles = StyleSheet.create({
    container:{
      display: 'flex',
      flexDirection: 'row',
       justifyContent: 'space-between',
   
    },
    iconcontainer:{
width: 50,  
height: 50,
backgroundColor: 'gray',
borderRadius: 100,
justifyContent: 'center',
alignItems: 'center',
    },
    wrapImgtext:{
       flexDirection: 'row',
    // justifyContent: 'space-between',
      gap: 15,
          alignItems: 'center',
    },
     textcontainer:{

    },
    userImage: {    
      width: 30,
      height: 30,
      borderRadius: 25,
    },
    wrapIcon:{

    },

})