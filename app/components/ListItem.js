import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { View, StyleSheet, Image, TouchableHighlight,TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'


function ListItem({ title, subTitle, image, onPress,renderRightActions,IconComponent}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress} >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} />
        </View>
      </TouchableHighlight>
    </Swipeable>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flexDirection: "row",
    padding: 15,
    backgroundColor:colors.white,
  },
  detailsContainer: {
    flex:1,
    marginLeft:10,
    justifyContent:"center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
