import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors';
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
   {
      title:"My Listings",
      icon:{
         name:"format-list-bulleted",
         backgroundColor: colors.primary
      }
   },
   {
      title:"My Messages",
      icon:{
         name:"email",
         backgroundColor: colors.secondary
      }
   },
]

export default function AccountScreen() {
   return (
      <Screen style={styles.Screen}>
         <View style={StyleSheet.container}>
            <ListItem
               title="Jay Gupta"
               subTitle="jaygupta2099@gmail.com"
               image={require("../assets/mosh.jpg")}
            />
         </View>

         <View style={styles.container}>
           <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem = { ({item}) => 
            <ListItem
               title={item.title}
               IconComponent={
                  <Icon 
                     name={item.icon.name} 
                     backgroundColor={item.icon.backgroundColor} />
               } />
            }
            />
         </View>
         <ListItem 
            title="Log Out"
            IconComponent={
               <Icon name="logout" backgroundColor="#ffe66d"/>
            } />
      </Screen>
   )
}

const styles = StyleSheet.create({
   Screen: {
      backgroundColor:colors.light,
   },
   container: {
      marginVertical:20,
   },
   
})
