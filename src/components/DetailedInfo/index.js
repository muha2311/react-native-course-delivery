import React from 'react';
import { View,Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';


function DetailedInfo({number,text,textStyle,numberStyle,iconName,iconColor}){
     return(
    <View style={styles.container}>
        <Ionicons name={iconName} size={28} color={iconColor}></Ionicons>
        <Text style={[styles.txt,textStyle]}>{text}</Text>
        <Text style={[styles.num,numberStyle]}>{number}</Text>
    </View>
     )
    
}

export default DetailedInfo;