import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
// import Animated, { FadeInLeft } from 'react-native-reanimated';



const IncomItem = ({obj}) => {
  return (
   <View style={styles.itemContainer} >
    <Text style={styles.text} >   {obj.FoodA} + {obj.FoodB}  =  {obj.Description}  </Text>
   </View>
  )
}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:"#76b5aa99",
        padding:15,
        elevation:0.5,
        borderRadius:6
    },
    text:{
        fontFamily:"sakar",
        fontSize:18,
        color:"#333"
    }
})

export default React.memo(IncomItem)