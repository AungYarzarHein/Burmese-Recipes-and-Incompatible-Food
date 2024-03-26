import React from 'react'
import { StyleSheet, View } from 'react-native'
import MainRoute from './routes/MainRoute'

const App = () => {
  return (
    <View style={styles.container} >
        <MainRoute />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App