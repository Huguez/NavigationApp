import { useNavigation, useRoute } from "@react-navigation/native";
import { type NavigationProp, type RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native"
import { type RootStackParam } from "../../routes";
import { useEffect } from "react";

const ProductScreen = () => {
   const navigation = useNavigation<NavigationProp<RootStackParam>>()
   const { id, name } = useRoute<RouteProp<RootStackParam, 'Product'>>().params

   if ( !id ) {
      navigation.goBack();
      return null   
   }

   useEffect( () => {
      navigation.setOptions({
         title: name,
      })
   }, [] )

   return (
      <View>
         <Text style={{ marginTop: 25, fontWeight: '600', textAlign: 'center', fontSize: 25 }}> { name }</Text>
      </View>
   )
}

export default ProductScreen;