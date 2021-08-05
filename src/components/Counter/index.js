import React, { useState } from 'react';
import { Text,View,Pressable } from 'react-native';
import styles from './styles';
function Counter(){
    const [counter,setcounter]=useState(0);
    const handleIncrement=()=>{setcounter((val)=>val+1)};
    const handleDecrement=()=>{setcounter((val)=>val-1)};
    return(
        <View style={styles.container}>
            <Pressable onPress={handleIncrement}>
                <Text style={styles.sign}>
                +
                </Text>
            </Pressable>
            <Text style={styles.signCounter}>
                {counter}
            </Text>
            <Pressable onPress={handleDecrement}>
            <Text style={styles.sign}>
                -
                </Text>
            </Pressable>
        </View>
    )
}

export {Counter}