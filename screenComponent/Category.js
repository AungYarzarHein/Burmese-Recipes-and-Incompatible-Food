import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'

const categoryList = [ "မူးဝေ","ဝမ်းလျှော","အော့အန်","ရင်ကျပ်","အကြောတက်","ဝမ်းကိုက်နာ","ရင်ပူ","အဆိပ်သင့်","သေ" ]


const Btn = ({active,item,setActive}) => {
    
    const onPressHandler = () => {
        setActive(item);
    }
    return(
        <Pressable style={[styles.btn,{backgroundColor:(active == item) ? "#436564ff" : "#76b5aa99"}]} onPress={onPressHandler} >
         <Text style={[styles.btnText,{color:(active == item) ? "#fff" : "#333"}]} > {item} </Text>
       </Pressable>
    )
}

const Category = ({onCategoryHandler}) => {
    const [active,setActive] = useState("");// for active button
    // console.log("Category Component rendered and Active item is ",active);
    
    useEffect(()=>{
        if(active) {onCategoryHandler(active);}
    },[active])

  return (
    <Animated.View style={styles.container} entering={FadeInRight.duration(500).delay(300)}  >
   
    <FlatList 
    data={categoryList}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{gap:3,paddingHorizontal:5,paddingVertical:3}}
    renderItem={({item}) => {
        return(
           <Btn key={item} active={active} setActive={setActive} item={item} />
        )
    }}
     />
        
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        gap:5,
        marginHorizontal:5,
    },
    btn:{
        paddingHorizontal:10,
        backgroundColor:"#76b5aa99",
        borderRadius:10,
        borderWidth:2,
        borderColor:"#ffffff55"
    },
    btnText:{
        fontFamily:"tangu",
        fontSize:16,
        paddingVertical:6,
        color:"#333"
    }
})

export default Category