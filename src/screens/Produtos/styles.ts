import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import { IProduct } from '../../components/Product';


export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  background-color: #5381a0;
  position: absolute;
  top: 0;
  z-index: 10;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 14px;
  padding-right: 14px;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ProductsList = (styled.FlatList.attrs({
    contentContainerStyle: {
      paddingVertical: 160,
    },
    showsVerticalScrollIndicator: false
  })`
    flex: 1;
  ` as unknown) as typeof FlatList;