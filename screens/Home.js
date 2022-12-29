import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native';
import Header from "../components/Header";
import ToolBar from "../components/ToolBar";
import MainSeparator from "../components/MainSeparator";
import Users from "../components/Users";
import Story from "../components/Story";
import Post from "../components/Post";

const Home = () =>{
    return(
      <>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content">
        </StatusBar>
        <ScrollView>
          <Header/>
          <ToolBar/>
          <MainSeparator/>
          <Users></Users>
          <MainSeparator/>
          <Story/>
          <MainSeparator/>
          <Post/>
        </ScrollView>
      </>
    )
}

export default Home;