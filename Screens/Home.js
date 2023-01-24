import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useLayoutEffect} from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../Constants/Colors'




const ListButton = ({ title, color, navigation, onDelete, name }) => {
    return (
        <TouchableOpacity onPress={() => {navigation.navigate("ProjectList",{title, color, name}) }} style={[styles.itemContainer, { backgroundColor: color }]} >
            <View>
                <Text style={styles.itemTitle} >{title}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name='options' size={24} color='green' />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <Ionicons name='trash' size={24} color='red' />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )

}

const renderAddListIcon = (addProject)=>{
    return(
        <TouchableOpacity onPress={()=>addProject({title:'Title', color:Colors.olive})} >
            <Text style={styles.icon} >+</Text>
        </TouchableOpacity>
    )
}

const projects = [{name:"humpy",  title: "Bank-Design Phase", color: Colors.green },
{name:"anvesh", title: "Mutual Fund Analysis", color: Colors.blue },
{name:"anvesh",  title: "Food App - Testing Phase", color: Colors.purple }]

const Home = ({navigation}) => {
    const [project, setProject] = useState(projects)


    const addProject = ()=>{
        setProject([...project, project])
    }

    const removeProject = (index) => {
        // project.splice(index, 1)
        // setProject([...project])
        let projectsCopy = [...project];
        projectsCopy.splice(index, 1);
        setProject(projectsCopy);
      };

    //   useLayoutEffect(()=>{
    //     navigation.setOpions({
    //         headerRight:()=><renderAddListIcon addProject={addProject} />
    //     })
    //   })
    return (
        <View style={styles.container}>
            <Text>Router app by Naveen(Senior software developer)</Text>
            {/* <ListButton title='Bank-Design Phase' />
            <ListButton title='Mutual Fund Analysis' />
            <ListButton title='Food App - Testing Phase' /> */}
            <FlatList data={project} renderItem={({item:{title,color, name}, index})=>{
                return(
                    <ListButton title={title} color={color} navigation={navigation} name={name} onDelete={()=>{removeProject(index)}}  />
                )
            }} />
        

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 5,
        backgroundColor: Colors.blue
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});