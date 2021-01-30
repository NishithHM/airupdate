import React from 'react';
import {View, Text, Linking, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Over the Air Update</Text>
      <Text style={styles.subHeading}>References</Text>
      <Text
        style={styles.content}
        onPress={() =>
          Linking.openURL(
            'https://docs.microsoft.com/en-us/appcenter/distribution/codepush/rn-get-started',
          )
        }>
        React Native Codepush
      </Text>
      <Text
        style={styles.content}
        onPress={() =>
          Linking.openURL(
            'https://medium.com/cybermonkey/mastering-over-the-air-updates-in-react-native-with-codepush-part-1-faf241a7f84b',
          )
        }>
        Mastering Codepush
      </Text>
      <Text
        style={styles.content}
        onPress={() =>
          Linking.openURL('https://github.com/NishithHM/airupdate')
        }>
        Get this code here
      </Text>
      <View>
        <Text style={styles.subHeading}>Are you looking out ?</Text>
        <Text
          style={styles.content}
          onPress={() =>
            Linking.openURL('mailto:nishith.hm@betterplace.co.in')
          }>
          For references mail to {'\n'}
          nishith.hm@betterplace.co.in
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignContent: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subHeading: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 25,
  },
  content: {
    fontSize: 20,
    textDecorationColor: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Home;
