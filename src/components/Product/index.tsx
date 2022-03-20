import { memo, useEffect, useRef, useState  } from 'react';
import {
  Container,
  ImageProduct,
  DetailsBox,
  Name,
  Price,
  CartBox,
  Cart,
  SoldOut
} from './styles';

import { PanGestureHandler } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useWindowDimensions, Text, Pressable } from 'react-native';
import { useSharedValue, useAnimatedStyle, interpolate, Extrapolate, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { AddProductToCartRequest } from '../../store/cart/actions';
import { IStore } from '../../store';
import { ICart } from '../../store/cart/types';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string; 
  image: string;
  rating: {
    rate: number;
    count: number;
  }
};

interface Props {
  product: IProduct;
  handleAddToCart: (product: any) => void;
  index: number;
}

function ProductComponent({
  product
}: Props) {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IStore, boolean>(state => {
    return state.Cart.failedStockCheck.find(item => item === product.id) ? true : false;
  });

  const { width } = useWindowDimensions();

  const Xposition = useSharedValue(0);
  const XPositionAnimatedValue = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: Xposition.value }],
    }
  });

  const cartAnimated = useAnimatedStyle(() => {
    const useIntepolate = interpolate(Xposition.value, 
      [0, -(width / 3)],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale: useIntepolate }],
      opacity: useIntepolate
    }
  }); 

  
  const formattedPrice = Number(product.price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });




  const handleGesture = useAnimatedGestureHandler({
    onStart: (event, ctx: any) => {
      ctx.translateX = Xposition.value;
    },
    onActive: (event, ctx: any) => {
      if (ctx.translateX === 0) {
        return event.velocityX < 0 ? Xposition.value = ctx.translateX + event.translationX : null;
      } 

      if (event.velocityX < 0) {
        Xposition.value = ctx.translateX + event.translationX;
      }



    
    },
    onEnd: (event, ctx: any) => {
      if (event.velocityX > 0) {
        Xposition.value = withSpring(0);
      } else {
        Xposition.value = withSpring(-(width / 3));
      }
    }
  })

  function handleScroll() {

  }

  return (
    <>
      <PanGestureHandler onGestureEvent={handleGesture} minDist={30}>
        <Container style={XPositionAnimatedValue}>
          <ImageProduct source={{ uri: product?.image }} />
          <DetailsBox>
            <Name>{product.title}</Name>
            {!hasFailedStockCheck && <Price>{formattedPrice}</Price>}
          </DetailsBox>
        
        </Container>
  
      </PanGestureHandler>
      <CartBox style={cartAnimated}>
        <Pressable onPress={() => hasFailedStockCheck ? {} : dispatch(AddProductToCartRequest(product))}><Cart disable={hasFailedStockCheck}><FontAwesome name="cart-plus" size={20} color="#fff" /></Cart></Pressable>
      </CartBox>
      {hasFailedStockCheck && <SoldOut>ESGOTADO!</SoldOut>}
    </>
  )
};

export const Product = memo(ProductComponent);
