import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const listings = [
   {
      id:1,
      title:"Red jacket for sale",
      price:100,
      image: require('../assets/jacket.jpg')
   },
   {
      id:2,
      title:"Couch for sale",
      price:1000,
      image: require('../assets/jacket.jpg')
   },
   {
      id:3,
      title:"jacket for sale",
      price:300,
      image: require('../assets/jacket.jpg')
   }
]

export default function ListingsScreen() {
   return (
      <Screen style={styles.screen}>
         <FlatList
            data={listings}
            keyExtractor={listing=>listing.id.toString()}
            renderItem ={ ({item}) => 
               <Card 
                  title={item.title}
                  subTitle={"$" + item.price}
                  image={item.image} 
               />
            }   
         />
      </Screen>
   )
}

const styles = StyleSheet.create({
   screen:{
      padding:20,
      backgroundColor:colors.light
   }
})
