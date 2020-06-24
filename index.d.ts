interface IProps {
  style?: StyleProp<ViewStyle>;
  dotsContainerStyle?: StyleProp<ViewStyle>;
  dotActiveColor?: string;
  dotInactiveColor?: string;
  slideCount?: number;
  dots?: boolean;
  renderSlides: JSX.Element;
  height?: string;
  autoSlide?: boolean;
  slideInterval?: number;
  slideCount?: number;
}

declare module 'react-native-view-slider' {
  export default class ViewSlider extends React.Component<IProps> {}
}
