import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, Pressable, Dimensions, ImageBackground, Image } from 'react-native';
import bg from "../utils/images/back.jpg";
import think from "../utils/images/think.jpg";
import headache from "../utils/images/headache.jpg";
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';

const { width , height } = Dimensions.get("window");
const itemHeight = (height - width)/2.5 -20;
const AnimatedBtn = Animated.createAnimatedComponent(Pressable);

const Home = ({navigation}) => {

  const onFoodList = () => navigation.navigate("foodlist");
  const onIncomFood = () => navigation.navigate("incomfood");
  
  return (
    <SafeAreaView style={styles.container} >
     <ImageBackground source={bg} style={{width,height:width,justifyContent:"flex-end"}} >
      <View style={{flexDirection:"column",backgroundColor:"#00000066"}} >
      <Text style={{fontFamily:"tangu",fontSize:26,color:"#fff",textAlign:"center",paddingVertical:10}} > မင်္ဂလာပါရှင့် </Text>
      <Text style={{fontFamily:"sakar",fontSize:16,color:"#fff",textAlign:"center",paddingHorizontal:10,paddingBottom:10,lineHeight:26}} > အိမ်ရှင်မတွေအတွက်ဟင်းအမျိုးမျိုးချက်နည်းနှင့်တွဲဖက်မစားသင့်သောအစားအစာများကိုဖော်ပြပေးပါမယ်ရှင့် </Text>
      </View>
     </ImageBackground>
     <View style={[styles.card,{marginTop:10}]}  >
      <Animated.Image source={think} style={styles.cardImage} entering={FadeInLeft.delay(300)} />
      <AnimatedBtn style={styles.btn} entering={FadeInRight.delay(300)} onPress={onFoodList} >
        <Text style={styles.btnText} > ဟင်းအမျိုးမျိုးချက်နည်း</Text>
        
      </AnimatedBtn>
     </View>

     <View style={styles.card}  >
      <Animated.Image source={headache} style={styles.cardImage} entering={FadeInLeft.delay(300)} />
      <AnimatedBtn style={styles.btn} entering={FadeInRight.delay(300)} onPress={onIncomFood} >
        <Text style={styles.btnText} > တွဲဖက်မစားသင့်သောအစားအစာများ </Text>
      </AnimatedBtn>
     </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#edd1aaff"
    },
    card:{
      width:width,
      height:itemHeight,
      // backgroundColor:"#76b5aaff",
      backgroundColor:"#edd1aaff",
      padding:10,
      flexDirection:"row",
      
    },
    cardImage:{
      width:itemHeight-20,
      height:itemHeight-20,
      borderTopLeftRadius:8,
      borderBottomLeftRadius:8
      // borderRadius:4
    },
    btn:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#76b5aa99",
      paddingHorizontal:10,
      borderTopRightRadius:8,
      borderBottomRightRadius:8
    },
    btnText:{
      fontFamily:"tangu",
      color:"#000",
      fontSize:20
    }
})

export default Home