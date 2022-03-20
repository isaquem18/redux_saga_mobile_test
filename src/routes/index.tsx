import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components'; 
import { Feather, FontAwesome } from '@expo/vector-icons';

import { Produtos } from '../screens/Produtos';
import { Carrinho } from '../screens/Carrinho';


const {
  Navigator,
  Screen
} = createBottomTabNavigator();

export function Routes() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarLabelStyle: {
        fontFamily: theme.fonts.ubuntu400,
        paddingBottom: 4
      }
    }}>
      <Screen name="produtos" component={Produtos} options={{
        tabBarLabel: 'Produtos',
        tabBarIcon: ({color, size}) => (
          <FontAwesome name="th-list" size={size} color={color} />
        )
      }}/>
      <Screen name="carrinho" component={Carrinho} options={{
        tabBarLabel: 'Carrinho',
        tabBarIcon: ({color, size}) => (
          <Feather name="shopping-cart" size={size} color={color} />
        )
      }}/>
    </Navigator>
  )
}

