import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import UserOwnerBarComp from '@/components/userOwnerBarComp';



export default function HomeScreen() {
  return (
   <View style={styles.container}>
<UserOwnerBarComp />

   </View>
  
  );
}

const styles = StyleSheet.create({
 container:{
padding: 40,
    },
});
