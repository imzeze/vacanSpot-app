import {ImageList} from '@/components/organisms';
import {COLORS} from '@/constants/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Favorite = () => {
  return (
    <View style={styles.Container}>
      <ImageList />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.painBeige,
  },
});