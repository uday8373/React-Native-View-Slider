import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

declare module 'react-native-view-slider' {
  export default class ViewSlider extends React.Component<{
    onScroll?: function,
    height?: string, 
    style?: StyleProp<ViewStyle>,
    step?: number,
    dotsContainerStyle?: StyleProp<ViewStyle>,
    dotActiveColor?: string,
    dotInactiveColor?: string,
    dots?: boolean,
    autoSlide?: boolean, 
    slideInterval?: number,
    slideCount?: function,
    renderSlides: JSX.Element, 
  }> {}
}
