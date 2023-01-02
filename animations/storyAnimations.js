import Animated from "react-native-reanimated";
export const scroll_x = new Animated.Value(0);

export const cardTop= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [15,80],
    extrapolate: 'clamp',
})

export const cardLeft= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [10,-50],
    extrapolate: 'clamp',
})

export const cardHeight= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [200,50],
    extrapolate: 'clamp',
})

export const cardMargin= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [0,4],
    extrapolate: 'clamp',
})

export const cardRadius= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [10,40],
    extrapolate: 'clamp',
})

export const cardLeftRadius= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [10,0],
    extrapolate: 'clamp',
})

export const textOpacity= scroll_x.interpolate({
    inputRange: [0,10],
    outputRange: [1,0],
    extrapolate: 'clamp',
})

export const textScale= scroll_x.interpolate({
    inputRange: [0,10],
    outputRange: [1,0],
    extrapolate: 'clamp',
})

export const IconScale= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [1,0.5],
    extrapolate: 'clamp',
})

export const IconTop= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [115,15],
    extrapolate: 'clamp',
})

export const IconLeft= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [40,80],
    extrapolate: 'clamp',
})

export const ImageTop= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [0,0],
    extrapolate: 'clamp',
})

export const ImageLeft= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [0,60],
    extrapolate: 'clamp',
})

export const ImageWidth= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [110,40],
    extrapolate: 'clamp',
})

export const ImageHeight= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [130,40],
    extrapolate: 'clamp',
})

export const ImageMargin= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [0,6],
    extrapolate: 'clamp',
})

export const ImageRadius= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [10,40],
    extrapolate: 'clamp',
})

export const ImageBottomRadius= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [0,40],
    extrapolate: 'clamp',
})

export const scrollLeft= scroll_x.interpolate({
    inputRange: [0,100],
    outputRange: [120,0],
    extrapolate: 'clamp',
})