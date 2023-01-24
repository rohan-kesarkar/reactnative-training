import React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import useFetch from './useFetch'




export default ()=>{
    const url = 'https://jsonplaceholder.typicode.com/users'


    const {loading, error, data=[]} = useFetch(url)

    if(error) return <View> <Text>error</Text> </View>
    if(loading) return <View><ActivityIndicator/></View>

    return(
        <View style={styles.container} >
   <View>
    <Text>User for this Projects</Text>
    {/* <Text>-----------------</Text> */}
   </View>
   <FlatList data={data} renderItem={({item:{id, email}, index})=>{
    return(
        <View>
            <Text> {id} - {email} </Text>
        </View>
    )
   }} />
        </View>
    )

}



const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: "yellow"
    }
})