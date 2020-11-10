import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the weather today...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: "flex-end",
       paddingHorizontal: 30,
       paddingVertical: 150,
       backgroundColor: "#FDF6AA"
   },
    text: {
        color: "#2C2C2C",
        fontSize: 35
    }
});
