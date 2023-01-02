import React from "react";
import { View,Text,StyleSheet,ScrollView,TouchableOpacity,FlatList,ImageBackground,Image} from "react-native";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fakeRecommend from '../data/fakeRecommend';
import fakeBeforeThat from '../data/fakeBeforeThat';

const Notifications = () =>{
    data=[{
        id:0,
        image:require("../assets/0.jpg"),
        shared:"Natalia Avila",
        whoshared:"Aitor Sevilla",
        date:"Just now",
        isSeen:false
    },
    {
        id:1,
        image:require("../assets/1.jpg"),
        shared:"Juan Sanchez",
        whoshared:"Lide Monzón",
        date:"10 mins ago",
        isSeen:true
    }
]



    return(
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Notifications</Text>
                <TouchableOpacity style={styles.btnSearch}>
                    <MaterialCommunityIcons name='magnify' size={26} color='black'></MaterialCommunityIcons>
                </TouchableOpacity>
            </View>
            <Text style={styles.notiTitle}>New</Text>
            
            {data.map((item)=>{return(
                <TouchableOpacity key={item.id} style={{ ...styles.containerNotification, backgroundColor: item.isSeen ? '#fff' : '#edf2fa' }}>
                    <ImageBackground imageStyle={{borderRadius: 64}} style={styles.avatar} source={item.image}>
                        <View style={{...styles.notificationIcon, backgroundColor:"#3578e5"}}>
                            <MaterialCommunityIcons style={{zIndex:1, color:"white"}} name="message-text-outline" size={12} color='#747476'/>
                        </View>
                    </ImageBackground>
                   <View style={styles.contentWrapper}>
                        <Text style={styles.pureTxt}>
                            <Text style={styles.hightlightTxt}>{item.shared}</Text> has posted a publication by <Text style={styles.hightlightTxt}>{item.whoshared}</Text>.
                        </Text>
                        <Text style={{ color: '#333' }}>
                            {item.date}
                        </Text>
                   </View>
                   <TouchableOpacity style={styles.btnOptions}>
                   <MaterialCommunityIcons style={{color:"black"}} name="dots-horizontal" size={25} color='#747476'/>
                   </TouchableOpacity>
                </TouchableOpacity>
            )})}
            <View style={styles.VerticalFriendsContainer}>
                <View>
                    <Text style={styles.VerticalFriendsTitle}>People you may know</Text>
                </View>
                {fakeRecommend.map((item)=>{return(
                    <TouchableOpacity key={item.id} style={styles.VerticalFriendItemContainer}>
                        <Image style={styles.VerticalFriendItemAvatar} source={{uri: item.image}}/>
                        <View style={styles.VerticalFriendItemRecommendInfo}>
                            <Text style={styles.VerticalFriendItemName}>{item.name}</Text>
                            <Text style={styles.VerticalFriendItemMutualCount}>{item.mutualFriends} mutual friends</Text>
                            <View style={styles.VerticalFriendItemBtnActionsWrapper}>
                                <TouchableOpacity style={styles.VerticalFriendItemBtnAddFriend}>
                                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>Add Friend</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.VerticalFriendItemBtnHide}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: 16 }}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )})}
                <TouchableOpacity style={styles.VerticalBtnViewAll}>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>View all recommends</Text>
                </TouchableOpacity>
            </View>
            {fakeBeforeThat.map((item)=>{return(
                <TouchableOpacity key={item.id} style={{ ...styles.containerNotification, backgroundColor: item.isSeen ? '#fff' : '#edf2fa' }}>
                    <ImageBackground imageStyle={{borderRadius: 64}} style={styles.avatar} source={{uri:item.image}}>
                        <View style={{...styles.notificationIcon, backgroundColor:"#3578e5"}}>
                            <MaterialCommunityIcons style={{zIndex:1, color:"white"}} name="message-text-outline" size={12} color='#747476'/>
                        </View>
                    </ImageBackground>
                   <View style={styles.contentWrapper}>
                        <Text style={styles.pureTxt}>
                            <Text style={styles.hightlightTxt}>{item.name}</Text> react your post"
                        </Text>
                        <Text style={{ color: '#333' }}>
                            {item.date}
                        </Text>
                   </View>
                   <TouchableOpacity style={styles.btnOptions}>
                   <MaterialCommunityIcons style={{color:"black"}} name="dots-horizontal" size={25} color='#747476'/>
                   </TouchableOpacity>
                </TouchableOpacity>
            )})}
        </ScrollView>
    )
}

export default Notifications;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1
    },
    containerNotification: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    titleWrapper: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center',
        marginHorizontal: 20
    },
    btnSearch: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 40
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    notiTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        marginHorizontal: 20
    },
    notification:{
        width:"100%",
        height:70,
        backgroundColor:"red"
    },
    avatar: {
        height: 64,
        width: 64,
        position: 'relative',
        borderRadius: 64,
        borderColor: "#ddd",
        borderWidth: 0.5,
    },
    notificationIcon: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        height: 25,
        width: 25,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentWrapper: {
        paddingHorizontal: 10,
        width: "75%"
    },
    hightlightTxt: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    pureTxt: {
        fontSize: 16,
    },
    btnOptions: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignContent: 'center'
    },
    VerticalFriendsContainer:{
        marginVertical: 10,
        paddingVertical: 10,
        borderTopWidth: 0.5,
        borderTopColor: "#ddd",
        borderBottomWidth: 0.5,
        borderBottomColor: "#ddd",
        marginHorizontal: 20
    },
    VerticalFriendsTitle:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    VerticalBtnViewAll:{
        width: '100%',
        height: 36,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    VerticalFriendItemContainer:{
        marginVertical: 10,
        flexDirection: 'row'
    },
    VerticalFriendItemAvatar:{
        width: 64,
        height: 64,
        borderRadius: 64,
        borderColor: "#333",
        borderWidth: 0.3
    },
    VerticalFriendItemRecommendInfo:{
        width: "75%",
        paddingLeft: 10
    },
    VerticalFriendItemName:{
        fontSize: 16,
        fontWeight: '500'
    },
    VerticalFriendItemMutualCount:{
        fontSize: 14,
        color: '#333',
        marginVertical: 5
    },
    VerticalFriendItemBtnActionsWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    VerticalFriendItemBtnAddFriend:{
        width: '48.5%',
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#318bfb',
        borderRadius: 5
    },
    VerticalFriendItemBtnHide:{
        width: '48.5%',
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#ddd'
    }
})