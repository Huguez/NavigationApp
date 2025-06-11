import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Tab1Screen, Tab2Screen, Tab3Screen } from "../screens"
import { RootTabParam } from "../types"
import { settingsTabNavigation } from "../types/navigationTypes"
import { globalColor } from "../theme"
import { Text } from "react-native"

const Tab = createBottomTabNavigator<RootTabParam>()

export const TabNavigation = () => {

   const settings: settingsTabNavigation = {
      headerShown: true,
      sceneStyle: {
         backgroundColor: globalColor.background,
      },
      headerStyle: {
         elevation: 0,
      },
      tabBarLabelStyle: {
         marginBottom: 5,
      },
      tabBarStyle: {
         elevation: 0,
         borderWidth: 0,
         borderColor: 'transparent'
      }
   }
   
   return (
      <Tab.Navigator screenOptions={ settings }>
         <Tab.Screen 
            name="Tab1" 
            options={{ tabBarIcon: ({color}) => (<Text style={{color}}>1</Text>),  title: "thing 1" }} 
            component={ Tab1Screen } 
         />
         <Tab.Screen 
            name="Tab2" 
            options={{ tabBarIcon: ({color}) => (<Text style={{color}}>2</Text>),  title: "thing 2" }} 
            component={ Tab2Screen } 
         />
         <Tab.Screen 
            name="Tab3" 
            options={{ tabBarIcon: ({color}) => (<Text style={{color}}>3</Text>),  title: "thing 3" }} 
            component={ Tab3Screen } 
         />
      </Tab.Navigator>
   )
}