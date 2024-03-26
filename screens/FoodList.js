import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import data from "../utils/BurmeseRecipes.json";
import FoodItem from '../screenComponent/FoodItem';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';

const { width } = Dimensions.get("window");
const AnimatedBtn = Animated.createAnimatedComponent(Pressable);

const FoodList = ({navigation}) => {
    const [renderList,setRenderList] = useState([]);
    const [loading,setLoading] = useState(true);

    const onGoBack = () => { navigation.goBack() }

    const getMoreItem = () => {
        const startIndex = renderList.length;
        const endIndex = startIndex + 10 ;
        const addData = data.slice(startIndex,endIndex);
        setRenderList([...renderList,...addData]);
        // console.log(startIndex,endIndex);
        // console.log([renderList,renderList.slice(startIndex,endIndex)]);
    }

   

    useEffect(() => {
        setTimeout(() => { 
            setRenderList(data.slice(0,10));
            setLoading(false);
         } ,300)
    },[])
    

    if(loading){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f2f2f2"}} >
                <ActivityIndicator size={22} color="#333" />
            </View>
        )
    }


    return (
        <View style={styles.container} >
        <View style={styles.headerContainer} >
      <AnimatedBtn style={styles.btn} entering={FadeInLeft} onPress={onGoBack} >
        <Text style={styles.btnText} >Back</Text>
      </AnimatedBtn>
      <Text style={{fontFamily:"tangu",color:"#333",verticalAlign:"middle",fontSize:16}} >ဟင်းအမျိုးမျိုးချက်နည်း </Text> 
      <AnimatedBtn style={styles.btn} entering={FadeInRight} onPress={onGoBack} >
        <Text style={styles.btnText}  >Back</Text>
      </AnimatedBtn>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          initialNumToRender={10} 
          data={renderList}
          renderItem={({item,index}) => {
            return (
                <FoodItem item={item} navigation={navigation} key={item.Guid} index={index} />
            )
          }}
          contentContainerStyle={{paddingHorizontal:4,paddingBottom:50,gap:5}}
          style={styles.flatlist}
          onEndReached={getMoreItem}
          onEndReachedThreshold={0.05}
          scrollEventThrottle={5}
          ListFooterComponent={() => {
            if(renderList.length < 59){
                return(<ActivityIndicator size={22} color={"#333"} style={{paddingTop:20}} />)
            }
               
          }}
         />
        </View>
      )
    }
    
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#f2f2f2",
        },
        flatlist:{
            // flex:1
        },
        headerContainer:{
            width:width,
            // height:width/4,
            // backgroundColor:"red",
            flexDirection:"row",
            justifyContent:"space-between",
            padding:5
        },
        btn:{
            width:80,
            height:36,
            backgroundColor:"#436564ff",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:10,
            borderWidth:3,
            borderColor:"#76b5aa44"
        },
        btnText:{
            color:"#fff"
        }
    })

export default FoodList