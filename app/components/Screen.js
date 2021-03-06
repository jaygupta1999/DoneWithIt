import React from 'react'
import { StyleSheet, Platform, SafeAreaView, StatusBar, BackHandler } from 'react-native'

export default function Screen({children,style}) {
   return (
      <SafeAreaView style={[styles.screen,style]}>
         {children}
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   screen: {
      paddingTop: Platform.OS==='android'?StatusBar.currentHeight:0,
      flex:1
   }
})
