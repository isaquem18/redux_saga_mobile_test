import { View, useWindowDimensions, Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { IStore } from '../../store';
import { ICart } from '../../store/cart/types';
import JSON from '../../util/json';

import {
  Container,
  ProductsList,
  Header,
  Product,
  ImageProduct,
  DetailsBox,
  Name,
  Price
} from './styles';

export function Carrinho() {
  const cartList = useSelector<IStore, ICart>(state => state.Cart);
  

  const { width, height } = useWindowDimensions();

  return (
    <Container>
      <Header />
      <ProductsList 
        data={cartList.items}
        keyExtractor={(item) => item?.product?.id?.toString()}
        renderItem={({item, index}) => {

          const {product} = item;

          const formattedPrice = Number(product?.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });

          return (
            <Product>
              <ImageProduct source={{ uri: product.image }} />
              <DetailsBox>
                <Name>{product.title}</Name>
                <Price>{formattedPrice}</Price>
              </DetailsBox>
              <View style={{ backgroundColor: 'red', width: 25, height: 25, borderRadius: 35, position: 'absolute', alignItems: 'center', justifyContent: 'center', bottom: 8, left: 80 }}>
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700' }}>{item.quantity}</Text>
              </View>
            </Product>
          )
        }}
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
};
