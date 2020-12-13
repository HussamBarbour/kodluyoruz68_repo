import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

// {
//   id: 1,
//   title: 'General Mobile GM 20',
//   imgURL:
//     'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
//   price: '₺1.810,21',
//   inStock: true,
// },

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.imgURL}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    elevation: 20,
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  title: {
    marginVertical: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  footer: {
    flex: 1,
  },
  stock: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export {ProductCard};
