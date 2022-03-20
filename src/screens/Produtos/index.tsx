
import { useEffect, useMemo, useState } from 'react';
import { View, useWindowDimensions, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


import api from '../../api';
import { IProduct } from '../../components/Product';
import { Product } from '../../components/Product';
import {
  Container,
  ProductsList,
  Header,
  HeaderTitle
} from './styles';
import { useSelector } from 'react-redux';
import { IStore } from '../../store';
import { ICart } from '../../store/cart/types';

export function Produtos() {
  const [productsList, setProductsList] = useState<IProduct[]>([] as IProduct[]);
  const Cart = useSelector<IStore, ICart>(state => state.Cart);

  const numberOfProductsIntoTheCart: number = useMemo(() => Cart.items.reduce((acumulator, item) => acumulator += item.quantity, 0), [Cart, productsList]);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    (async () => {
      const response = await api({
        url: '/products',
        method: 'GET'
      });

      setProductsList(response?.data);      

    })()
  }, []);



  function handleAddToCart() {

  }
  
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <FontAwesome name="shopping-cart" size={20} color="#fff" />
          {numberOfProductsIntoTheCart}
        </HeaderTitle>
      </Header>
      <ProductsList 
        data={productsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => (

            <Product 
              product={item} 
              handleAddToCart={handleAddToCart}
              index={index}
            />
     
        )}
        ListEmptyComponent={() => (
            <View style={{ flex: 1, minHeight: height}}></View>
        )}  
        ItemSeparatorComponent={() => (
          <View style={{
            height: 1,
            width,
            backgroundColor: '#dbdbdb'
           }}></View>
        )}
      />
    </Container>
  )
}