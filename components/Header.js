import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
    return (
      <Container>
        <Text>facebook</Text>
        <Row>
          <Buttom>
            <MaterialCommunityIcons name='magnify' size={26} color='black'></MaterialCommunityIcons>
          </Buttom>
          <Buttom>
            <MaterialCommunityIcons name='facebook-messenger' size={26} color='black'></MaterialCommunityIcons>
          </Buttom>
        </Row>
      </Container>
    );
  }
  export default Header;

const Container =styled.View`
width:100%;
heigth:58px;
padding: 0 11px;
align-items:center;
flex-direction:row;
justify-content:space-between;
background-color:white
`;

const Text = styled.Text`
color: #3a86e9;
font-size:25px;
font-weight: bold;
letter-spacing: -0.3px;
`

const Row =styled.View`
flex-direction:row;
`
const Buttom = styled.TouchableOpacity`
width:42px;
height:42px;
border-radius:21px;
margin-left: 16px;
background: #EEEEEE;
align-items: center;
justify-content: center;
`
