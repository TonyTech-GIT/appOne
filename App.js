import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';

import { Header, Hero, Footer } from './sections'

export default function App() {
  const colorScheme = useColorScheme();
  const defaultColor = colorScheme === 'dark' ? 'dark' : 'light';

  return (
    <SafeAreaView style={[styles.container, { defaultColor }]}>
      <Header />
      <Hero />
      <Footer />

      <StatusBar style="auto" animated={true} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 16

  },
});
