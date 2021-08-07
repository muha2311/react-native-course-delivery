import React from 'react';
import { View ,Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import styles from './styles';
const InfoContainer = ({text,iconName,iconSize,iconColor}) => {
    return ( 
        <View style={styles.container}>
            <Ionicons name={iconName} size={iconSize} color={iconColor}></Ionicons>
            <Text style={styles.text}>{text}</Text>
        </View>
     );
}
 
export {InfoContainer};