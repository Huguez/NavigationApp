import { StyleSheet } from "react-native";

export const globalColor = {
   primary:   "#7037eb",
   secondary: "#f72585",
   tertiary:  "#3a0ca3",
   success:   "#4cc9f0",
   warning:   "#fca311",
   danger:    "#e71d36",
   dark:      "#22223b",

   background: "#fff"
}

export const globalStyles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      backgroundColor: globalColor.background,
   },
   btn: {
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: "100%",
      alignItems: 'center',
   },
   primary: {
      backgroundColor: globalColor.primary,
   },
   secondary: {
      backgroundColor: globalColor.secondary,
   },
   tertiary: {
      backgroundColor: globalColor.tertiary,
   },
   btnText: {
      color: globalColor.background,
      fontSize: 18,
   }

})