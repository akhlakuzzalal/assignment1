import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import love from '../../assets/images/love.png';
import media from '../../assets/images/Media.png';
import Text from '../component/text/text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function Details() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={{ height: '40%' }}>
        <Image style={{ width: '100%', height: '100%' }} source={media} />
      </View>
      <View style={styles.container}>
        <Text preset="h4">Boston Lettuce</Text>
        <View style={{ paddingVertical: spacing[5] }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
            }}
          >
            <Text preset="h4">1.10 </Text>
            <Text preset="h4" style={{ color: 'gray' }}>
              € / piece
            </Text>
          </View>
          <Text style={{ color: colors.secondary }}>~ 150 gr / piece</Text>
        </View>
        <Text preset="h5" style={{ marginBottom: spacing[4] }}>
          Spain
        </Text>
        <Text>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
        <View style={styles.btnContain}>
          <View style={styles.love}>
            <Image source={love} />
          </View>
          <View style={styles.cart}>
            <Text style={{ textAlign: 'center', color: colors.white }}>
              Add To Cart
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '65%',
    marginTop: -spacing[6],
    backgroundColor: colors.background,
    borderTopLeftRadius: spacing[6],
    borderTopRightRadius: spacing[6],
    paddingTop: spacing[4],
    paddingLeft: spacing[5],
  },
  btnContain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
  },
  love: {
    padding: spacing[3],
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: spacing[2],
  },
  cart: {
    backgroundColor: colors.secondary,
    width: '80%',
    marginHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: spacing[2],
  },
});
