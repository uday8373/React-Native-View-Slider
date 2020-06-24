declare module 'react-native-view-slider' {
  export default class ViewSlider extends React.Component<{
    style?: StyleProp<ViewStyle>,
    dotsContainerStyle?: StyleProp<ViewStyle>,
    dotActiveColor?: string,
    dotInactiveColor?: string,
    dots?: boolean,
    renderSlides: JSX.Element, 
    height?: string, 
    autoSlide?: boolean, 
    slideInterval?: number, 
    slideCount?: number
  }> {}
}
