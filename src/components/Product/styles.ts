import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  height: 130px;
  overflow: hidden;
  flex-direction: row;
  padding: ${RFPercentage(2.5)}px ${RFPercentage(1)}px;
  background-color: #fff;
`;

export const ImageProduct = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 30%;
`;

export const DetailsBox = styled.View`
  width: 50%;
  flex: 1;
  padding: 0 10px 10px 30px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2
})`
  font-family: ${({theme}) => theme.fonts.ubuntu700};
  font-size: ${RFValue(12)}px;
`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.ubuntu700};
  color: #55a372;
  font-size: ${RFValue(18)}px;
  position: absolute;
  bottom: 5px; 
  right: 10px;
`;

export const CartBox = styled(Animated.View)`
  position: absolute;
  width: 100px;
  height: 130px;
  right: 0;
  align-items: center;
  justify-content: center;
`;

interface CartProps {
  disable: boolean;
}

export const Cart = styled(Animated.View)<CartProps>`
  background-color: ${({disable}) => disable ? '#00000010' : 'red'};
  width: 60px;
  height: 60px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const SoldOut = styled.Text`
  color: red;
  position: absolute;
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.ubuntu700};
  right: 30px;
  bottom: 40px;

`;