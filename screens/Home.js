import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native';
import Header from "../components/Header";


const Home = () =>{
    return(
        <>
    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content">
    </StatusBar>
    <ScrollView>
      <Header></Header>
    </ScrollView>
    </>
    )
}

export default Home;