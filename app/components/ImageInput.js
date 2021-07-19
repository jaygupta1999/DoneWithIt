import React from 'react'
import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors'

export default function ImageInput({imageUri,onChangeImage}) {

   useEffect(()=> {
      requestPermission();
   },[])

   const requestPermission = async() => {    
      const result = await ImagePicker.requestCameraRollPermissionsAsync;
      if(!result.granted)
        alert("You need to enable permission to access Gallery")
    }

   const handlePress = ()=> {
      if(!imageUri) selectImage();
      else Alert.alert('Delete','Are you sure you want t delete this image?',[
         {text:'Yes', onPress:()=> onChangeImage(null)},
         {text:'No'}
      ])
   }

   const selectImage = async ()=> {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.Images,
           quality:0.5
        });

        if(!result.cancelled) onChangeImage(result.uri);
        
      } catch (error) {
        console.log('Error reading an image',error);
      }
    }

   return (
      <TouchableWithoutFeedback onPress={handlePress} >
         <view style={StyleSheet.container}>

         </view>
      </TouchableWithoutFeedback>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: colors.light,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height:100,
      width:100
   }
})
