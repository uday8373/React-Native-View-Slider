#react-native-view-slider
A robust simple lightweight library for sliding views/images/anything in react-native applications.

- Support
  -> This module will support both expo managed application and bare react native applications.

# Install the library

    npm i react-native-view-slider

# Import

    import ViewSlider from 'react-native-view-slider'

# Using in application

    import React from 'react';
    import {
    StyleSheet,
    View,
    Text,
    Dimensions
    } from 'react-native';
    import ViewSlider from 'react-native-view-slider'

    const { width, height } = Dimensions.get('window');

    function App() {
      return (
        <>
          <ViewSlider
              renderSlides = {
              <>
                  <View style={styles.viewBox}><Text>ONE</Text></View>
                  <View style={styles.viewBox}><Text>TWO</Text></View>
                  <View style={styles.viewBox}><Text>THREE</Text></View>
                  <View style={styles.viewBox}><Text>FOUR</Text></View>
              </>
          }
          style={styles.slider}
          height = {200}
          slideCount = {4}
          dots = {true}
          dotsContainerStyle = {style.dotContainer} 
          dotActiveColor = 'red'
          dotInactiveColor = 'gray'
          />
        </>
      );
    };

    const styles = StyleSheet.create({
      viewBox: {
          paddingHorizontal: 20,
          justifyContent: 'center',
          width: width,
          padding: 10,
          alignItems: 'center',
          height: 150
      },
      slider: {
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'pink'
      },
      dotContainer: {
        backgroundColor: 'transparent'
      }
    });

    export default App;


# Props

* renderSlides : Views/sliders content 
* style : slider container style[ Full customize your slider container with style prop ]
* height : Your slider height
* slideCount : Number of slides you are giving [Required]
* dots : default false [If you want the slider dots to be shown set it to true]
* dotActiveColor : active dot color
* dotInactiveColor : Inactive dot color 
* dotsContainerStyle