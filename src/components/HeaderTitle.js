import React from 'react'
import { useRoute } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

export default  HeaderTitle = React.memo(() => {
    const route = useRoute();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/baseImage.png')}
          style={{ width: 150, height: 30, resizeMode: 'contain' }}
        />
        <Text >{route.name === 'Home' ? 'news.ai' : route.name}</Text>
      </View>
    );
  });