import { type ParamListBase, type RouteProp } from "@react-navigation/native";
import { type StackNavigationOptions, type StackNavigationProp } from "@react-navigation/stack";
import { type DrawerNavigationOptions } from "@react-navigation/drawer"
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";

export interface myProps {
   route: RouteProp<ParamListBase, string>;
   navigation: StackNavigationProp<ParamListBase, string, undefined>;
   theme: ReactNavigation.Theme;
}

export type RootStackParam = {
   Home: undefined;
   Product: { id: number; name: string };
   Products: undefined;
   Settings: undefined;
}


export type RootSideParam = {
   StackNavigator: undefined;
   Tabs: undefined;
   Profile: undefined;   
}

export type RootTabParam = {
   Tab1: undefined;
   Tab2: undefined;
   Tab3: undefined;
   MaterialTopTabs: undefined;
}

export type SettingsNavigation = StackNavigationOptions | ((props: myProps ) => StackNavigationOptions) | undefined;

export type SettingsSideNavigation = DrawerNavigationOptions | ((props: myProps ) => DrawerNavigationOptions) | undefined;

export type settingsTabNavigation = BottomTabNavigationOptions | ((props: myProps ) => BottomTabNavigationOptions) | undefined;

export type settingsMaterialTopTabNavigation = MaterialTopTabNavigationOptions | ((props: myProps ) => MaterialTopTabNavigationOptions) | undefined;