import React, {useState,useEffect} from 'react';
import Screen from './app/components/Screen'
import * as ImagePicker from 'expo-image-picker';
import { Button,Image } from 'react-native';
import ImageInput from './app/components/ImageInput';


export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async() => {    
    const result = await ImagePicker.requestCameraRollPermissionsAsync;
    if(!result.granted)
      alert("You need to enable permission to access Gallery")
  }
  useEffect(()=>{
    requestPermission();
  },[]);

  const selectImage = async ()=> {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled) {
        setImageUri(result.uri);
      }
      
    } catch (error) {
      console.log('Error reading an image',error);
    }
  }

  return <Screen>

    <ImageInput 
      imageUri={imageUri}
      onChangeImage={uri=>setImageUri(uri)}
    />
  </Screen>
}



// const categories = [
//   {
//     label:"Furniture", value:1
//   },
//   {
//     label:"Clothing", value:2
//   },
//   {
//     label:"Cameras", value:3
//   }
// ]


// export default function App() {
//   const [category,setCategory] = useState();
//   return (
//     <Screen>
//       <AppPicker 
//         selectedItem = {category}
//         onSelectItem={item=>setCategory(item)}
//         items={categories} 
//         icon="apps" 
//         placeholder="Category" />
//       <AppTextInput placeholder="Username" icon="email" />
//   </Screen>
//   ) 
// }