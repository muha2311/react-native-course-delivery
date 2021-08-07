import React from 'react';
import { Pressable,View,Text,Image } from 'react-native';
import { limitTextLength } from "../../utils";
import styles from './styles';
import { InfoContainer } from '../InfoContainer';
const RepoCard = ({imageSrc,title,description,numIssues,numStars,providerName,numberOfLines}) => {
    return (  
        <Pressable style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={{uri:imageSrc}} style={styles.image}></Image>
                    <View style={styles.text}>
                        <Text style={styles.title}>{limitTextLength(25, title)}</Text>
                        <Text  style={styles.desc} numberOfLines={numberOfLines}>{limitTextLength(38, description)}</Text>
                    </View>
            </View>
            <View style={styles.info}>
            <InfoContainer text={numStars} iconName={"star"} iconColor={"orange"} iconSize={16}/>
            <InfoContainer text={numIssues} iconName={"alert"} iconColor={"red"} iconSize={16}/>
            <InfoContainer text={providerName} iconName={"logo-github"} iconSize={16}/>
            </View>
        </Pressable>
    );
}
 
export {RepoCard};