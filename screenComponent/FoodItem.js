import React from 'react'
import { Dimensions, Image, StyleSheet, View , Text, Pressable } from 'react-native';
import food from "../utils/images/ChickenPinsein.jpg";
import { allImages } from '../utils/images/allImages';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';


const { width } = Dimensions.get("window") ;
const itemWidth = (width-20)/2 ;
const imageWidth = itemWidth * 0.8 ;

const FoodItem = ({item,navigation,index}) => {
     const delay = (index * 10) + 100 ;
     const entering = index%2 == 0 ? FadeInLeft.duration(500).delay(delay) :  FadeInRight.duration(500).delay(delay) ;
     const onPressHandler = () => {
        navigation.navigate("fooddetails",item)
     }
    return (
        <Animated.View style={styles.container} entering={entering}  >
        <Pressable onPress={onPressHandler} >
        <Image source={allImages[item.imageText]} style={{width:itemWidth-10,height:itemWidth-10,objectFit:"cover",borderRadius:7}}  />
        </Pressable>
         <Text style={styles.text} > {item.Name.trim().split(" ").join("")} </Text>
        </Animated.View>
      )
    }
    
    
    const styles = StyleSheet.create({
        container:{
            backgroundColor:"#76b5aa99",
            width:itemWidth,
            alignItems:"center",
            paddingTop:5,
            gap:5,
            marginHorizontal:3,
            borderRadius:10
            // elevation:0.5,
            // borderRadius:6,
            // borderWidth:2,
            // borderColor:"#ffffff55"
        },
        text:{
            fontFamily:"tangu",
            fontSize:14,
            color:"#333",
            paddingVertical:10,
            paddingHorizontal:5
        }
    })

export default React.memo(FoodItem)