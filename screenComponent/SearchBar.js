import React, { useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const { width } = Dimensions.get("window");
const searchBarWidth = width -10 ;

const SearchBarCom = ({onSearchHandler,onGoBack}) => {
    const [searchText,setSearchText] = useState("");

    const onPressHandler = () => {
        if(searchText){
            onSearchHandler(searchText);
        }
    }

  return (
    <View style={styles.container} >
        <Pressable style={styles.backBtn} onPress={onGoBack} >
            <Text style={{color:"#fff"}} > Back </Text>
        </Pressable>
        <TextInput style={styles.searchBar} onChangeText={(val) => setSearchText(val)}  />
        <Pressable style={styles.searchBtn} onPress={onPressHandler} >
            <Text style={{color:"#fff"}} > Search </Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection:"row",
    },
    searchBar:{
        fontSize:16,
        // width:searchBarWidth * 0.7,
        flex:1,
        fontFamily:"tangu",
        paddingHorizontal:10,
        paddingVertical:6,
        textAlign:"center",
        borderWidth:2,
        borderColor:"#43656455"
    },
    searchBtn:{
        width:searchBarWidth * 0.25,
        paddingHorizontal:10,
        backgroundColor:"#436564ff",
        justifyContent:"center",
        alignItems:"center",
        borderTopRightRadius:8,
        borderBottomRightRadius:8
    },
    backBtn:{
        width:searchBarWidth * 0.25,
        paddingHorizontal:10,
        backgroundColor:"#436564ff",
        justifyContent:"center",
        alignItems:"center",
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    }
})

export default React.memo(SearchBarCom)