import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import FavoriteItemsScreen from "./src/screens/FavoriteItemsScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import CartScreen from "./src/screens/CartScreen";

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStack() {
  return (
    <StackActions.Navigator>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
    </StackActions.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ tarBarLabel: "Home" }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteItemsScreen}
          options={{ tarBarLabel: "Favorite" }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{ tarBarLabel: "Cart" }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{ tarBarLabel: "Orders" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
