import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from "@react-navigation/stack"
import { HomeScreen, ProductScreen, ProductsScreen, SettingsScreen } from "../screens"
import { ParamListBase, RouteProp } from "@react-navigation/native";

const Stack = createStackNavigator()

interface myProps {
   route: RouteProp<ParamListBase, string>;
   navigation: StackNavigationProp<ParamListBase, string, undefined>;
   theme: ReactNavigation.Theme;
}

type SettingsNavigation = StackNavigationOptions | ((props: myProps ) => StackNavigationOptions) | undefined;

export const StackNavigator = () => {

   const settings: SettingsNavigation = {
      headerShown: true,
      headerStyle: {
         elevation: 0,
         shadowColor: 'transparent'
      }
   }

   return (
      <Stack.Navigator screenOptions={settings} initialRouteName="Home">
         <Stack.Screen name="Home" component={ HomeScreen } />
         <Stack.Screen name="Products" component={ ProductsScreen } />
         <Stack.Screen name="Product" component={ ProductScreen } />
         <Stack.Screen name="Settings" component={ SettingsScreen } />
      </Stack.Navigator>
   )
}
