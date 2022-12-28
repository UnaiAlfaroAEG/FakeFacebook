import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native';
import Header from "../components/Header";
import ToolBar from "../components/ToolBar";
import MainSeparator from "../components/MainSeparator";
import Users from "../components/Users";


const Home = () =>{
    return(
      <>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content">
        </StatusBar>
        <ScrollView>
          <Header></Header>
          <ToolBar></ToolBar>
          <MainSeparator></MainSeparator>
          <Users></Users>
          <MainSeparator></MainSeparator>

        </ScrollView>
      </>
    )
}

export default Home;