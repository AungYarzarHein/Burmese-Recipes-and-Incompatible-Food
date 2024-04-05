import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Pressable, StyleSheet , Text, View } from 'react-native';
import data from "../utils/IncompatibleFood.json";
import IncomItem from '../screenComponent/IncomItem';
import Animated, { FadeIn, FadeInDown, ZoomIn } from 'react-native-reanimated';
import Category from '../screenComponent/Category';
import SearchBarCom from '../screenComponent/SearchBar';

const { width } = Dimensions.get("window");

const IncompatibleFood = ({navigation}) => {
    // const temData = data.Tbl_IncompatibleFood.slice(0,20);
    // console.log(temData.filter(item => item.FoodA.includes("ဝက်သား") || item.FoodB.includes("ဝက်သား") ));
    const [renderListData,setRenderListData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [show,setShow] = useState(true) // for list footer 


    useEffect(() => { 
        let isMounted = true ;
      setTimeout(() => {   setLoading(false);  },200)
      if(isMounted){ setRenderListData(data.Tbl_IncompatibleFood); }

      return () => isMounted = false ;
     } ,[])

   

     const onCategoryHandler = useCallback((name) => {
        // console.log("I am rendre")
        //  setLoading(true);
         const filterData = data.Tbl_IncompatibleFood.filter(item => item.Description.trim() == name) ;
        //  console.log(filterData);
         setRenderListData(filterData);
        //  setLoading(false);
     })

     const onSearchHandler = useCallback((text)=>{
        const searchedData = data.Tbl_IncompatibleFood.filter(item => {
            return item.FoodA.includes(text) || item.FoodB.includes(text) ;
        });
        
        setRenderListData(searchedData);
     })

     const onGoBack = () => { navigation.goBack() }


     if(loading){
        return(
            <View style={{flex:1,backgroundColor:"#f2f2f2",justifyContent:"center",alignItems:"center"}} >
                <ActivityIndicator size={22} color={"#333"} />
            </View>
        )
     }

  return (
   <View style={styles.container} >
    <Animated.View style={styles.headerCom} entering={FadeInDown.duration(300).delay(100)} >
        <SearchBarCom onSearchHandler={onSearchHandler} onGoBack={onGoBack} />
    </Animated.View>

    <Category onCategoryHandler={onCategoryHandler} />

     <Animated.FlatList
     showsVerticalScrollIndicator={false}
     data={renderListData}
     contentContainerStyle={{gap:5,paddingHorizontal:5,paddingBottom:30}}
     renderItem={({item,index}) => <IncomItem key={`${item.FoodA}${item.FoodB}`} obj={item} />  }
     entering={FadeInDown.duration(500).delay(300)}
      />
      
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f2f2f2"
    },
    headerCom:{
        backgroundColor:"#76b5aa99",
        justifyContent:"flex-end"
    }
})

export default IncompatibleFood