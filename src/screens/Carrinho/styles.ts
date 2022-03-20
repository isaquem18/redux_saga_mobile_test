import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ProductsList = (styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: 130,
  },
  showsVerticalScrollIndicator: false
})`
  flex: 1;
` as unknown) as typeof FlatList;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  background-color: #5381a0;
  position: absolute;
  top: 0;
  z-index: 10;
`;


export const Product = styled.View`
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