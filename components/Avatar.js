import React from "react";

import styled from "styled-components/native";

const Container = styled.View`
    width:40px;
    height:40px;
    position:relative;
`;

const ProfileImage = styled.Image`
    width:40px;
    height:40px;
    border-radius:20px;
`;

const Avatar = ({source}) =>{
    return(
        <Container>
            <ProfileImage source={require('../assets/12.jpg')} />
        </Container>
    )
}

export default Avatar;