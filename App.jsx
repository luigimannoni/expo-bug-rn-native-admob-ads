import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import NativeAdView from 'react-native-admob-native-ads';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const nativeAdViewRef = useRef();

  useEffect(() => {
    nativeAdViewRef.current?.loadAd();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>

        <NativeAdView
          ref={nativeAdViewRef}
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          enableTestMode
          mediaAspectRatio="landscape"
          requestNonPersonalizedAdsOnly
        >
          <View />
        </NativeAdView>

      </SafeAreaView>
    </View>
  );
}
