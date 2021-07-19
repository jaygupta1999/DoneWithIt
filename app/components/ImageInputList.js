import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ImageInputList({imageUris=[],onRemoveImage,onaddImage}) {
   return (
      <View style={styles.container}>
         {imageUris.map(uri=> <ImageInput imageUri={uri} onChangeImage={} />)}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flexDirection:'row'
   }
})
