import React from 'react'
import {View,Text, ScrollView, Dimensions} from 'react-native'
import Dots from './dots'

const { width, height } = Dimensions.get('window');

export default class ViewSlider extends React.Component {
  
  state = {
    activeDot: 1,
    autoSlide: false
  }

  static getDerivedStateFromProps (prevState, nextProp) {
    return autoSlide = nextProp.autoSlide
  }

  componentDidMount() {
    if(this.props.autoSlide == true && this.scroll.scrollTo) {
      this.startAutoSlide()
    }
  }

  startAutoSlide = () => {
      const interval = this.props.slideInterval
      if(interval < 1000) {
        console.warn('slideInterval time must be at least 1000 milisecond.')
      } else {
      const count = this.props.slideCount
      let step = 1
      setInterval(() => {
        if (this.scroll) {
          this.scroll.scrollTo({x:width * step})
        }
        
        this.setState({activeDot: step + 1})
        if(count == step+1) {
          step = 0
        } else {  
          step++
        }   
      }, interval)
    }
  }

  onScroll = (event) => {
    // const scrollPositionX = event.nativeEvent.contentOffset.x

    // if(scrollPositionX >= 0 && scrollPositionX <= (width - 50)) {
    //   this.setState({activeDot: 1})
    // } else if(scrollPositionX >= width && scrollPositionX <= ((width * 2) - 10)) {
    //   this.setState({activeDot: 2})
    // } else if(scrollPositionX >= (width * 2) && scrollPositionX <= ((width * 3) - 10)) {
    //   this.setState({activeDot: 3})
    // } else if(scrollPositionX >= (width * 3) && scrollPositionX <= ((width * 4) - 10)) {
    //   this.setState({activeDot: 4})
    // } else if(scrollPositionX >= (width * 4) && scrollPositionX <= ((width * 5) - 10)) {
    //   this.setState({activeDot: 5})
    // } else if(scrollPositionX >= (width * 5) && scrollPositionX <= ((width * 6) - 10)) {
    //   this.setState({activeDot: 6})
    // } else if(scrollPositionX >= (width * 6) && scrollPositionX <= ((width * 7) - 10)) {
    //   this.setState({activeDot: 7})
    // } else if(scrollPositionX >= (width * 7) && scrollPositionX <= ((width * 8) - 10)) {
    //   this.setState({activeDot: 8})
    // } else if(scrollPositionX >= (width * 8) && scrollPositionX <= ((width * 9) - 10)) {
    //   this.setState({activeDot: 9})
    // } else if(scrollPositionX >= (width * 9) && scrollPositionX <= ((width * 10) - 10)) {
    //   this.setState({activeDot: 10})
    // } else if(scrollPositionX >= (width * 10) && scrollPositionX <= ((width * 11) - 10)) {
    //   this.setState({activeDot: 11})
    // } else if(scrollPositionX >= (width * 11) && scrollPositionX <= ((width * 12) - 10)) {
    //   this.setState({activeDot: 12})
    // } else if(scrollPositionX >= (width * 12) && scrollPositionX <= ((width * 13) - 10)) {
    //   this.setState({activeDot: 13})
    // } else if(scrollPositionX >= (width * 13) && scrollPositionX <= ((width * 14) - 10)) {
    //   this.setState({activeDot: 14})
    // } else if(scrollPositionX >= (width * 14) && scrollPositionX <= ((width * 15) - 10)) {
    //   this.setState({activeDot: 15})
    // } else if(scrollPositionX >= (width * 15) && scrollPositionX <= ((width * 16) - 10)) {
    //   this.setState({activeDot: 16})
    // } else if(scrollPositionX >= (width * 16) && scrollPositionX <= ((width * 17) - 10)) {
    //   this.setState({activeDot: 17})
    // } else if(scrollPositionX >= (width * 17) && scrollPositionX <= ((width * 18) - 10)) {
    //   this.setState({activeDot: 18})
    // } else if(scrollPositionX >= (width * 18) && scrollPositionX <= ((width * 19) - 10)) {
    //   this.setState({activeDot: 19})
    // } else if(scrollPositionX >= (width * 19) && scrollPositionX <= ((width * 20) - 10)) {
    //   this.setState({activeDot: 20})
    // } 

    // console.log("X", event.nativeEvent.contentOffset.x);
    // //console.log("Y", event.nativeEvent.contentOffset.y);
    //  console.log("WIDTH", width);

    const scrollPositionX = event.nativeEvent.contentOffset.x
    const offset = 100

    if(scrollPositionX >= 0 && scrollPositionX <= parseInt(width - offset)) {
      this.setState({activeDot: 1})
    } else if(scrollPositionX >= (width - offset) && scrollPositionX <= ((width * 2) - offset)) {
      this.setState({activeDot: 2})
    } else if(scrollPositionX >= ((width * 2) - offset) && scrollPositionX <= (width * 3) - offset) {
      this.setState({activeDot: 3})
    } else if(scrollPositionX >= ((width * 3) - offset) && scrollPositionX <= (width * 4) - offset) {
      this.setState({activeDot: 4})
    } else if(scrollPositionX >= ((width * 4) - offset) && scrollPositionX <= (width * 5) - offset) {
      this.setState({activeDot: 5})
    } else if(scrollPositionX >= ((width * 5) - offset) && scrollPositionX <= (width * 6) - offset) {
      this.setState({activeDot: 6})
    } else if(scrollPositionX >= ((width * 6) - offset) && scrollPositionX <= (width * 7) - offset) {
      this.setState({activeDot: 7})
    } else if(scrollPositionX >= ((width * 7) - offset) && scrollPositionX <= (width * 8) - offset) {
      this.setState({activeDot: 8})
    } else if(scrollPositionX >= ((width * 8) - offset) && scrollPositionX <= (width * 9) - offset) {
      this.setState({activeDot: 9})
    } else if(scrollPositionX >= ((width * 9) - offset) && scrollPositionX <= (width * 10) - offset) {
      this.setState({activeDot: 10})
    } else if(scrollPositionX >= ((width * 10) - offset) && scrollPositionX <= (width * 11) - offset) {
      this.setState({activeDot: 11})
    } else if(scrollPositionX >= ((width * 11) - offset) && scrollPositionX <= (width * 12) - offset) {
      this.setState({activeDot: 12})
    } else if(scrollPositionX >= ((width * 12) - offset) && scrollPositionX <= (width * 13) - offset) {
      this.setState({activeDot: 13})
    } else if(scrollPositionX >= ((width * 13) - offset) && scrollPositionX <= (width * 14) - offset) {
      this.setState({activeDot: 14})
    } else if(scrollPositionX >= ((width * 14) - offset) && scrollPositionX <= (width * 15) - offset) {
      this.setState({activeDot: 15})
    } else if(scrollPositionX >= ((width * 15) - offset) && scrollPositionX <= (width * 16) - offset) {
      this.setState({activeDot: 16})
    } else if(scrollPositionX >= ((width * 16) - offset) && scrollPositionX <= (width * 17) - offset) {
      this.setState({activeDot: 17})
    } else if(scrollPositionX >= ((width * 17) - offset) && scrollPositionX <= (width * 18) - offset) {
      this.setState({activeDot: 18})
    } else if(scrollPositionX >= ((width * 18) - offset) && scrollPositionX <= (width * 19) - offset) {
      this.setState({activeDot: 19})
    } else if(scrollPositionX >= ((width * 19) - offset) && scrollPositionX <= (width * 20) - offset) {
      this.setState({activeDot: 20})
    }
     
  }

  render(){
    const {dots, dotActiveColor, dotInactiveColor, slideCount, dotsContainerStyle} = this.props
    const {activeDot} = this.state
    return(
      <View style={[{width, height: this.props.height}, this.props.style]}>
        <ScrollView 
          contentContainerStyle={{}}
          horizontal={true}
          pagingEnabled={true}
          ref={(node)=> this.scroll = node}
          scrollEventThrottle = {70}
          onScroll={(s) => this.onScroll(s)}
          showsHorizontalScrollIndicator={false}>
            {this.props.renderSlides}
        </ScrollView>
        {dots && <Dots activeColor={dotActiveColor} inactiveColor={dotInactiveColor} count={slideCount} activeDot={activeDot} containerStyle={dotsContainerStyle}/>}
      </View>
    )
  }
}
