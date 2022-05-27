import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import img from '../../assets/images/DD.png';
import img2 from '../../assets/images/Vector.png';
import Text from '../component/text/text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={{ height: '35%' }}>
        <View style={styles.image}>
          <Image source={img} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imgContainer}>
          <View style={styles.img2}>
            <Image source={img2} />
          </View>
        </View>
        <View style={styles.headingStyle}>
          <Text preset="h2">Non-Contact</Text>
          <Text preset="h2">Delevaries</Text>
        </View>
        <Text style={{ textAlign: 'center' }}>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>
        <View style={styles.buttonContain}>
          <Pressable
            onPress={() => navigation.navigate('Details')}
            style={styles.button}
          >
            <Text style={{ textAlign: 'center' }}>Order Now</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContain}>
          <Pressable>
            <Text style={{ textAlign: 'center' }}>Dismiss</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    height: '65%',
    backgroundColor: colors.background,
    marginHorizontal: spacing[1],
    borderTopLeftRadius: spacing[6],
    borderTopRightRadius: spacing[6],
  },
  image: {
    backgroundColor: colors.parot,
    padding: spacing[2],
    width: spacing[10],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginLeft: spacing[9],
    marginTop: spacing[10],
  },
  img2: {
    backgroundColor: colors.white,
    padding: spacing[4],
    height: 104,
    width: 104,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 51,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing[14],
  },
  headingStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    borderRadius: spacing[2],
    backgroundColor: colors.secondary,
    paddingVertical: spacing[2],
  },
  buttonContain: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing[5],
    marginTop: spacing[4],
  },
});
