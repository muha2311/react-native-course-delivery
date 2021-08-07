import React from 'react';
import {Text, View,Image } from 'react-native';
import styles from './styles';
import logo2 from '../../../assets/logo2.png'
const RepoHeader = ({imgSrc,text,containerStyle,imgStyle,textStyle}) => {
    return (  
        <View style={[styles.container, containerStyle]}>
            <Image source={logo2}style={styles.image}></Image>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    );
}
export {RepoHeader};