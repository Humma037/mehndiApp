import React, { useRef, useEffect, useState } from 'react';
import { View, Image, StyleSheet, Animated, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width - 15; // Adjusted for better responsiveness
const imageSpacing = -20; // Adjusted for better responsiveness
const dotSize = 10;

const Carousel = ({ data }) => {
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({ x: nextIndex * (imageWidth + imageSpacing), animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, data.length, scrollX]);

  const onIndexChanged = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffset / (imageWidth + imageSpacing));
    setCurrentIndex(index);
  };

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentIndex ? '#E8A644' : '#e4e4e4' },
            ]}
            onPress={() => {
              setCurrentIndex(index);
              scrollViewRef.current?.scrollTo({ x: index * (imageWidth + imageSpacing), animated: true });
            }}
          />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onIndexChanged}
      >
        {data.map((item, index) => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.image} style={[styles.image, { borderRadius: item.borderRadius }]} />
          </View>
        ))}
      </ScrollView>
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: width * 0.90, // Set width to 80% of the screen width
    height: width * 0.5, // Adjusted for better responsiveness
    overflow: 'hidden',
    // padding:1
  },
  image: {
    width: '100%', // Adjusted for better responsiveness
    height: '80%', // Adjusted for better responsiveness
    resizeMode: 'cover',
    // borderRadius: 5
  },
  paginationContainer: {
    position: 'absolute',
    bottom: '5%', // Adjusted for better positioning
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize / 2,
    marginHorizontal: 4,
  },
});

export default Carousel;
