import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import Dots from './dots';

const { width } = Dimensions.get('window');

export default class ViewSlider extends React.Component {
  constructor() {
    super();

    this.slidesCount = 0;
  }

  state = {
    activeDot: 1,
    autoSlide: false,
  };

  static getDerivedStateFromProps(prevState, nextProp) {
    return (autoSlide = nextProp.autoSlide);
  }

  componentDidMount() {
    if (this.props.hasOwnProperty('renderSlides') 
      && this.props.renderSlides.hasOwnProperty('props') 
      && this.props.renderSlides.props.hasOwnProperty('children')) this.slidesCount = Object.keys(this.props.renderSlides.props.children).length;

    if (this.props.autoSlide == true && this.scroll.scrollTo) {
      this.startAutoSlide();
    }

    if (this.props.hasOwnProperty('step')) {
      this.setStep(this.props.step);
    }

    if (this.props.hasOwnProperty('slidesCount')) {
      this.props.slidesCount(this.slidesCount);
    }
  }

  startAutoSlide = () => {
    const interval = this.props.slideInterval;
    if (interval < 1000) {
      console.warn('slideInterval time must be at least 1000 milisecond.');
    } else {
      const count = this.slidesCount;
      let step = 1;
      setInterval(() => {
        this.setStep(step + 1);

        if (count === step + 1) {
          step = 0;
        } else {
          step++;
        }
      }, interval);
    }
  };

  setStep = (step = 1) => {
    const scrollToX = (this.slidesCount * width) - ((this.slidesCount - (step - 1)) * width);
    
    setTimeout(() => {
      this.scroll.scrollTo({ x: scrollToX });
      this.setState({ activeDot: step });
    }, 50);
  }

  onScrollCb = () => {
    if (this.props.hasOwnProperty('onScroll')) this.props.onScroll(this.state.activeDot);
  }

  onScroll = (event) => {
    const scrollPositionX = event.nativeEvent.contentOffset.x;
    const offset = 100;

    if (this.slidesCount > 0) {
      for (let iter of new Array(this.slidesCount).fill(null).keys()) {
        const index = iter + 1;
        
        if (scrollPositionX >= (width * iter) - offset && scrollPositionX <= (width * index) - offset) {
          this.setState({ activeDot: index }, this.onScrollCb);
          break;
        }
      }
    }
  };

  render() {
    const {
      dots,
      dotActiveColor,
      dotInactiveColor,
      dotsContainerStyle,
    } = this.props;
    const { activeDot } = this.state;

    return (
      <View style={[{ width, height: this.props.height }, this.props.style]}>
        <ScrollView
          contentContainerStyle={{}}
          horizontal={true}
          pagingEnabled={true}
          ref={(node) => (this.scroll = node)}
          scrollEventThrottle={70}
          onScroll={(s) => this.onScroll(s)}
          showsHorizontalScrollIndicator={false}
        >
          {this.props.renderSlides}
        </ScrollView>
        {dots && (
          <Dots
            activeColor={dotActiveColor}
            inactiveColor={dotInactiveColor}
            count={slidesCount}
            activeDot={activeDot}
            containerStyle={dotsContainerStyle}
          />
        )}
      </View>
    );
  }
}
