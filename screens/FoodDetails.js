import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { allImages } from '../utils/images/allImages';
import Animated, { FadeInLeft, FadeInUp } from 'react-native-reanimated';

const { width } = Dimensions.get("window") ;


const FoodDetails = ({route,navigation}) => {
  const { Name , imageText , Ingredients , CookingInstructions } = route.params ;
  const [loading,setLoading] = useState(true);


  const onGoBack = () => {
    navigation.goBack();
  }

  const onSave = () => {
    Alert.alert("Sorry","Not available right now",[{text:"Okay"}],{cancelable:true});
  }

  useEffect(() => { 
    setTimeout(() => { setLoading(false) } ,200)
   } ,[])

   if(loading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f3f3f3"}} >
        <ActivityIndicator size={22} color={"#333"} />
      </View>
    )
   }

  return (
    <View style={styles.container} >
    

    <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}} >
<Animated.Image source={allImages[imageText]} style={{width,height:width*0.8}} entering={FadeInUp.duration(300)} />
<Animated.Text style={styles.name} entering={FadeInLeft.delay(300)} > {Name.trim().split(" ").join("")} </Animated.Text>
<Animated.Text style={{fontSize:18,fontFamily:"tangu",color:"#000",paddingHorizontal:10,paddingTop:20}} entering={FadeInLeft.delay(200)} > ပါဝင်ပစ္စည်းများ </Animated.Text>
<Animated.Text style={styles.ingredients} entering={FadeInLeft.delay(300)} > {Ingredients} </Animated.Text>
<Animated.Text style={{fontSize:18,fontFamily:"tangu",color:"#000",paddingHorizontal:10}} entering={FadeInLeft.delay(300)} > ချက်ပြုတ်နည်း </Animated.Text>
<Animated.Text style={styles.ingredients} entering={FadeInLeft.delay(400)} > {CookingInstructions} </Animated.Text>
    </ScrollView>


    <Pressable style={[styles.btn,{left:5}]} onPress={onGoBack} >
      <Text style={styles.btnText} > Back </Text>
    </Pressable>
    <Pressable style={[styles.btn,{right:5}]} onPress={onSave} >
      <Text style={styles.btnText} > Save </Text>
    </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f3f3f3",
        position:"relative"
    },
    name:{
      fontFamily:"tangu",
      fontSize:20,
      color:"#fff",
      textAlign:"center",
      paddingVertical:15,
      backgroundColor:"#436564ff",
      verticalAlign:"middle"
    },
    ingredients:{
      fontFamily:"sakar",
      fontSize:16,
      color:"#333",
      lineHeight:26,
      padding:20,
      // backgroundColor:"#ffffff55",
      marginHorizontal:5,
    },
    btnContainer:{
      position:"absolute",
      // flex:0.2,
      width:width,
      // height:100,
      flexDirection:"row",
      justifyContent:"space-between",
      padding:5,
      backgroundColor:"red"
    },
    btn:{
      position:"absolute",
      width:80,
      height:36,
      backgroundColor:"#436564ff",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      borderWidth:3,
      borderColor:"#76b5aa44",
      top:5
    },
    btnText:{
      color:"#fff",
      // fontSize:16,
      fontFamily:"tangu"
    }
})

export default FoodDetails