import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fakeStories from "../data/fakeStories";
import Avatar from "./Avatar";
import * as Animations from '../animations/storyAnimations';
import Animated from "react-native-reanimated";


const Container = styled.View`
    width:100%;
    height: 230px;
    flex-direction:row;
    align-items:center;
    background:#FFFFFF;
`;

const UserCard = styled.View`
    width:110px;
    height:200px;
    margin-right:10px;
    position:relative;
`;

const UserCardStory = styled.Image`
    width:100%;
    height:200px;
    border-radius:10px;
`;

const UserCardPlus = styled.View`
    width:30px;
    height:30px;
    border-radius:15px;
    background: #3a86e9;
    align-items: center;
    justify-content:center;
    position:absolute;
    top: 115px;
    left:40px;
`;

const UserCardFooter = styled.View`
    position:absolute;
    width: 100%;
    height: 35%;
    top: 130px;
    left:0px;
    background: ${(props => props.profile ? '#FFFFFF' : 'rgba(255,255,255,0)')};
`;

const Text = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin: 0 10px;
    padding-top:${(props => props.profile ? '155px' : '45px')};
    text-align:center;
    color: ${(props => props.profile ? '#000000' : '#FFFFFF')};
`;

const UserOnCard = styled.View`
    position:absolute;
    top:8px;
    left:8px;
    background: #FFFFFF;
    border-radius: 20px;
    width: 40px;
    height:40px;
    align-items:center;
    justify-content:center;
`;

const FakeCard = styled.View`
    width: 110px;
    height: 200px;
    margin-left:10px;
    background:#FFFFFF;
`;

const PersonalCard = styled.View`
    width:110px;
    height: 200px;
    margin-right:10px;
    position:absolute;
    background: #FFFFFF;
    border-radius: 10px;
    z-index:10;
    border: 1px solid #DDDDDD;
`;

const PersonalCardStory = styled.View`
    width: 100%;
    height: 130px;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: absolute;
    top: 0px;
    left: 0px;
`;

const PersonalCardIcon = styled.View`
    width: 34px;
    height: 34px;
    border-radius: 17px;
    background: #3a86e9;
    border-width: 3px;
    border-color: #FFFFFF;
    align-items: center;
    position: absolute;
    top: 115px;
    left: 40px;
`;


const Story = () =>{
    return(
        <Container>
            <PersonalCard as={Animated.View} style={{
                top: Animations.cardTop,
                left: Animations.cardLeft,
                height: Animations.cardHeight,
                borderRadius: Animations.cardRadius,
                borderBottomLeftRadius: Animations.cardLeftRadius,
                borderTopLeftRadius: Animations.cardLeftRadius
            }}>
                <PersonalCardStory as={Animated.Image}
                    source={require('../assets/story.jpg')}
                    style={{
                        top: Animations.ImageTop,
                        left: Animations.ImageLeft,
                        width: Animations.ImageWidth,
                        height: Animations.ImageHeight,
                        marginRight: Animations.ImageMargin,
                        marginTop: Animations.ImageMargin,
                        borderRadius: Animations.ImageRadius,
                        borderBottomLeftRadius: Animations.ImageBottomRadius,
                        borderBottomRightRadius: Animations.ImageBottomRadius
                    }}
                />
                <Text as={Animated.Text}
                    profile={true}
                    style={{
                        opacity: Animations.textOpacity,
                        scale: Animations.textScale
                    }}
                    >Crear una historia</Text>
                <PersonalCardIcon as={Animated.View} style={{
                    transform: [{scale: Animations.IconScale}],
                    top: Animations.IconTop,
                    left: Animations.IconLeft
                }}>
                    <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF"></MaterialCommunityIcons>
                </PersonalCardIcon>
            </PersonalCard>
            <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{paddingLeft:10, flexDirection: 'row'}}
                scrollEventThrottle={5}
                onScroll={Animated.event([
                    {
                        nativeEvent: {contentOffset: {x: Animations.scroll_x}}
                    }
                ])}
                >
                    <FakeCard/>
                    {fakeStories.map((story,i) =>{
                        return(
                            <UserCard key={i.toString()}>
                                <UserCardStory source={story.source}/>
                                <UserCardFooter profile={false}>
                                    <Text profile={false}>{story.name}</Text>
                                </UserCardFooter>
                                <UserOnCard>
                                    <Avatar 
                                        source={story.user} 
                                        story={true} 
                                        checked={story.checked}/>
                                </UserOnCard>
                            </UserCard>
                        )
                    })}
            </Animated.ScrollView>
        </Container>
    )
}

export default Story;


