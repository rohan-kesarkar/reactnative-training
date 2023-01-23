import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../Constants/Colors'

export default ({route}) => {
    const {title, name} = route.params
    return (
        <View style={styles.container}>
            <Text>Project List</Text>
            <Text>{title}</Text>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    icon: {
        padding: 5,
        fontSize: 32,
        color: "white",
    }
});